# Bluehost Deployment Guide

This guide provides step-by-step instructions for deploying the KM Medical website to Bluehost shared hosting.

## Prerequisites

- Bluehost hosting account with cPanel access
- Domain name configured to point to your Bluehost hosting
- FTP client (e.g., FileZilla) or cPanel File Manager access
- Node.js and npm installed locally for building the project

## Step 1: Build the Project Locally

1. Clone the repository if you haven't already:
   ```bash
   git clone https://github.com/your-username/KM_Medical.git
   cd KM_Medical
   ```

2. Install dependencies and build the project:
   ```bash
   npm install
   npm run build
   ```

3. The build output will be in the `dist` directory.

## Step 2: Prepare Bluehost cPanel

1. Log in to your Bluehost cPanel
2. Navigate to "File Manager" under the "Files" section
3. In File Manager, go to `public_html` directory
   - If deploying to a subdomain, navigate to the appropriate subdirectory

## Step 3: Upload Files

### Option A: Using cPanel File Manager
1. In File Manager, click "Upload"
2. Select all files from your local `dist` directory
3. After upload is complete, extract any compressed files if needed
4. Move all files to the root of your public directory or the target subdirectory

### Option B: Using FTP
1. Open your FTP client
2. Connect using your Bluehost FTP credentials
   - Host: your-domain.com
   - Username: Your cPanel username
   - Password: Your cPanel password
   - Port: 21
3. Navigate to `public_html` (or your target directory)
4. Upload the contents of the `dist` directory

## Step 4: Configure .htaccess

Create or modify the `.htaccess` file in your public directory with the following content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Set cache control for static assets
<FilesMatch "\.(ico|pdf|jpg|jpeg|png|gif|svg|js|css|woff|woff2|ttf|eot)$">
  Header set Cache-Control "max-age=31536000, public"
</FilesMatch>
```

## Step 5: Set Up Environment Variables

1. In cPanel, go to "Environment Variables" under the "Advanced" section
2. Add the following environment variables:
   - `VITE_APP_EMAILJS_SERVICE_ID`
   - `VITE_APP_EMAILJS_TEMPLATE_ID`
   - `VITE_APP_EMAILJS_PUBLIC_KEY`
3. Enter the corresponding values from your EmailJS account

## Step 6: Test the Deployment

1. Open your website in a web browser
2. Test all pages and functionality, including:
   - Navigation between pages
   - Contact form submission
   - Responsive design on different devices

## Troubleshooting

### 404 Errors on Page Refresh
If you encounter 404 errors when refreshing pages:
1. Verify the `.htaccess` file is in the correct location
2. Ensure `mod_rewrite` is enabled in your Bluehost account
3. Contact Bluehost support if issues persist

### Contact Form Not Working
1. Verify environment variables are set correctly
2. Check browser console for JavaScript errors
3. Ensure your EmailJS service is properly configured

### Slow Loading Times
1. Enable Cloudflare through Bluehost for CDN and caching
2. Optimize images before uploading
3. Consider upgrading your hosting plan if performance is consistently poor

## Maintenance

### Updating the Site
1. Make changes locally
2. Rebuild the project: `npm run build`
3. Upload the new `dist` contents to your Bluehost account
4. Clear any caching (browser and server-side)

### Backups
1. Regularly back up your website files through cPanel
2. Consider enabling automatic backups in Bluehost
3. Keep a local copy of the repository with all changes

## Support

For additional help:
- Bluehost Support: [https://www.bluehost.com/contact](https://www.bluehost.com/contact)
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- React Documentation: [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)
