<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp-landing-page');

/** Database username */
define('DB_USER', 'promise');

/** Database password */
define('DB_PASSWORD', 'Promiseduke10$');

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The database collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ')moqjO!)z.K=i4*[mjD(,heGaN#FS  |6%GTE,`9+g4%c1Mh.H$qKY:c2bS;w4<#');
define('SECURE_AUTH_KEY',  'uD5}ui{K~9lr7@6?(qlL)?skO~;S54dy6DXU)*SH9F*a7fV6[z$ j7g}wx3l~=$]');
define('LOGGED_IN_KEY',    'ZeU,o@o?[ab^~iz/Br|+#k$B@0R#,C;{&NS*H*O+1KO$iQU>VK[5HVc</joJ|L(m');
define('NONCE_KEY',        '}]v&z,%Ed?_Eul v*A8&H_g[k2z31+|o^B)oCRZ_WT8F_x?){r].^dq0$9.qn,ZJ');
define('AUTH_SALT',        '.5]JI3[2:&.uYqCvG-Zt;!kYE0yh={+UnE/2B5.ZpN,Bl,52pldk<ZL3?Z$+7 ;$');
define('SECURE_AUTH_SALT', 'c%{w5iXx_&VR&gKU<YqL_G, `3)_c;ofy(#X[<0ZRyAdp`y.suDq2g?D;njXScKh');
define('LOGGED_IN_SALT',   'DRY}|dLfR5k8Q*Go,nc?_D,#<=D>-`kr}~# =`j[hYOrFZS&KWmGm C:DVyJxx}J');
define('NONCE_SALT',       'Yd?BkctH}jO{//*Z%A,>Q|1M.E?lJswV-gHU5(7YuO=AX(?-VZA{]BPodXD=)~k_');

define('WP_HOME', 'http://localhost/promise_duke/server/');
define('WP_SITEURL', 'http://localhost/promise_duke/server/');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
	define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
