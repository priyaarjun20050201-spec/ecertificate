# Deployment Guide

This guide covers multiple ways to deploy the Certificate Generation Web App. Since this is a React Single Page Application (SPA), it can be hosted on any static file hosting service or web server.

## Option 1: Static Hosting (Recommended for Ease of Use)

Services like **Vercel** and **Netlify** are optimized for React apps and offer the easiest deployment.

### Vercel
1.  Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2.  Log in to [Vercel](https://vercel.com/) and click "Add New Project".
3.  Import your repository.
4.  Vercel will automatically detect Vite. Ensure the following settings:
    -   **Framework Preset**: Vite
    -   **Build Command**: `npm run build`
    -   **Output Directory**: `dist`
5.  Click **Deploy**.

### Netlify
1.  Push your code to a Git repository.
2.  Log in to [Netlify](https://www.netlify.com/) and click "New site from Git".
3.  Choose your repository.
4.  Configure build settings:
    -   **Build command**: `npm run build`
    -   **Publish directory**: `dist`
5.  Click **Deploy site**.
6.  *Important*: To fix refresh 404 errors on Netlify, create a file named `_redirects` in the `public` folder with this content:
    ```
    /*  /index.html  200
    ```

## Option 2: Docker (Recommended for Containerized Environments)

A `Dockerfile` and `nginx.conf` are included in the root directory.

1.  **Build the Docker image**:
    ```bash
    docker build -t certificate-app .
    ```

2.  **Run the container**:
    ```bash
    docker run -p 8080:80 certificate-app
    ```

3.  Access the app at `http://localhost:8080`.

## Option 3: Traditional Web Server (Apache/Nginx)

If you have a VPS (e.g., DigitalOcean, Linode) or shared hosting:

1.  **Build the project locally**:
    ```bash
    npm install
    npm run build
    ```
2.  **Upload Files**: Upload the contents of the `dist` folder to your server's public HTML directory (e.g., `/var/www/html` or `public_html`).

3.  **Server Configuration (SPA Routing)**:
    Since this is an SPA, you must configure your server to redirect all requests to `index.html` so React Router can handle them.

    **Nginx Configuration:**
    ```nginx
    location / {
      try_files $uri $uri/ /index.html;
    }
    ```

    **Apache (.htaccess):**
    Create a `.htaccess` file in the root of your deployment:
    ```apache
    <IfModule mod_rewrite.c>
      RewriteEngine On
      RewriteBase /
      RewriteRule ^index\.html$ - [L]
      RewriteCond %{REQUEST_FILENAME} !-f
      RewriteCond %{REQUEST_FILENAME} !-d
      RewriteRule . /index.html [L]
    </IfModule>
    ```

## Option 4: WordPress Integration (As per original requirements)

If you intend to use this design within a WordPress environment as requested in the original brief, you have two main approaches:

### A. Headless WordPress (Recommended for this React Code)
1.  **Backend**: Set up your WordPress site to act as the backend API.
    -   Install plugins for **JWT Authentication** (for security) and **ACF** (for custom fields).
    -   Expose endpoints for storing certificate data and checking access codes.
2.  **Frontend**: Deploy this React app using **Option 1 (Vercel/Netlify)**.
3.  **Connect**: Update the React app to fetch data from `https://your-wordpress-site.com/wp-json/...`.

### B. WordPress Theme Integration
If you must host inside WordPress directly:
1.  **Build**: Run `npm run build`.
2.  **Enqueue**: Create a custom WordPress theme or plugin.
3.  **Assets**: Enqueue the generated JS and CSS files from the `dist/assets` folder in your `functions.php`.
    ```php
    function enqueue_react_app() {
        wp_enqueue_script('react-app', get_template_directory_uri() . '/path-to-dist/assets/index-script.js', array(), null, true);
        wp_enqueue_style('react-app', get_template_directory_uri() . '/path-to-dist/assets/index-style.css');
    }
    add_action('wp_enqueue_scripts', 'enqueue_react_app');
    ```
4.  **Root Div**: Add `<div id="root"></div>` to your WordPress page template.
