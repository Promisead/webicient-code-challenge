Lead Developer Challenge Submission

Project Overview:

This project submission includes a landing page developed with Next.js and a WordPress API-based plugin. The landing page integrates with the WordPress plugin via a custom REST API endpoint for handling contact form submissions.

Landing Page Specifications:

- I ensured the landing page was developed using Next.js following modern markup and styling techniques.
- I ensured a fully responsive design for desktop, tablet, and mobile views.
- I implemented interactive features including a YouTube video player and animated grid cards.
- I connected the landing page seamlessly to the custom endpoint created in the WordPress API Based Plugin.

WordPress API Based Plugin Specifications:

- I created a custom post type named "Form" in WordPress with custom fields for email and message.
- I developed a REST API endpoint (/your_name/v1/contact-form) restricted to POST requests, accepting parameters: name, email, and message.
- I ensured form submissions were saved to the "Form" custom post type with proper validation to prevent duplicate submissions within an hour.
- I utilized modern PHP practices (OOP, autoloading, PSR4, Composer) to ensure data security, sanitization, and validation using WordPress and PHP functions.

Project Structure:

- web/: I organized the landing page development with Next.js.
- server/: I implemented the WordPress plugin for the REST API endpoint.

Development Resources:

I ensured all necessary development resources were included:

- .gitignore
- webpack.config.js
- .eslintrc.json
- composer.json
- package.json
- And any other relevant configuration files.

Installation Instructions:

To run this project locally, follow these steps:

1. Clone the repository:
   git clone https://github.com/your-repository.git
   cd your-repository

2. Install dependencies for the landing page (Next.js):
   cd web
   npm install

3. Install dependencies for the WordPress plugin (server):
   cd ../server
   composer install

4. Configure WordPress:

   - Upload the server folder to your WordPress plugins directory (wp-content/plugins/).
   - Activate the plugin through the WordPress admin dashboard.

5. Run the Next.js development server:
   cd ../web
   npm run dev

6. Access the landing page at http://localhost:3000.

Notes:

- I ensured all specifications and requirements were met as outlined in the challenge instructions.
- I prioritized security, code cleanliness, and adherence to best practices throughout the project.

Legal Notification:

The project results will be used solely for examination purposes and will be deleted after the recruitment process.

For any questions or clarifications, please reach out via the provided TeamTailor email thread.
# webicient-code-challenge
# webicient-challenge-code
