<?php
/*
Plugin Name: Promise Plugin
Description: A custom plugin to handle form submissions.
Version: 1.0
Author: Your Name
*/

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Hook into the 'init' action to register custom post type
add_action('init', 'register_form_cpt');
function register_form_cpt()
{
    $labels = array(
        'name' => 'Forms',
        'singular_name' => 'Form',
    );

    $args = array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => false,
        'supports' => array('title'),
        'show_in_rest' => true,
    );

    register_post_type('form', $args);
}

// Hook into the 'rest_api_init' action to register REST route and add CORS headers
add_action('rest_api_init', function () {
    // Register the REST route for form submission
    register_rest_route('promise/v1', '/contact-form', array(
        'methods' => 'POST',
        'callback' => 'handle_contact_form_submission',
        'permission_callback' => '__return_true',
    ));

    // Register the REST route for handling preflight OPTIONS requests
    register_rest_route('promise/v1', '/contact-form', array(
        'methods' => 'OPTIONS',
        'callback' => function () {
            return new WP_REST_Response(null, 200);
        },
        'permission_callback' => '__return_true',
    ));

    // Remove existing CORS headers and add our own
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        return $value;
    });
}, 15);

// Handle the form submission
function handle_contact_form_submission($request)
{
    $parameters = $request->get_params();

    $name = sanitize_text_field($parameters['name']);
    $email = sanitize_email($parameters['email']);
    $message = sanitize_textarea_field($parameters['message']);

    // Check for duplicate submissions
    $recent_posts = get_posts(array(
        'post_type' => 'form',
        'meta_query' => array(
            array(
                'key' => 'email',
                'value' => $email,
                'compare' => '='
            )
        ),
        'date_query' => array(
            'after' => '1 hour ago'
        )
    ));

    if (!empty($recent_posts)) {
        return new WP_Error('duplicate_submission', 'A form with this email has already been submitted within the last hour.', array('status' => 400));
    }

    // Create a new form post
    $form_id = wp_insert_post(array(
        'post_title' => $name,
        'post_type' => 'form',
        'post_status' => 'publish'
    ));

    if (is_wp_error($form_id)) {
        return new WP_Error('post_creation_failed', 'Failed to create form post.', array('status' => 500));
    }

    // Save the email and message as post meta
    update_post_meta($form_id, 'email', $email);
    update_post_meta($form_id, 'message', $message);

    return new WP_REST_Response(array('status' => 'success'), 200);
}
