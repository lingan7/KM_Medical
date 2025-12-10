# Deployment Guide

## Prerequisites

- GitHub account with repository access
- Node.js and npm installed
- GitHub Pages setup (for GitHub Pages deployment)

## Deployment Options

### 1. GitHub Pages (Recommended)

#### Initial Setup
1. Ensure `gh-pages` is installed as a dev dependency:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Verify the following scripts in your `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build:gh",
     "deploy": "gh-pages -d dist"
   }
   ```

#### Deployment Steps
1. Build and deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

2. Your site will be published to: `https://[username].github.io/KM_Medical/`

### 2. Custom Domain Setup (Optional)

1. Add a `CNAME` file in the `public` directory with your domain:
   ```
   yourdomain.com
   ```

2. Configure DNS settings with your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: [username].github.io
   ```

3. In GitHub repository settings, go to Pages and enter your custom domain.

## Environment Variables

For production, set up the following environment variables in your hosting platform:

- `VITE_APP_EMAILJS_SERVICE_ID`
- `VITE_APP_EMAILJS_TEMPLATE_ID`
- `VITE_APP_EMAILJS_PUBLIC_KEY`

## Build Process

1. The build process includes:
   - TypeScript compilation
   - Minification of JavaScript and CSS
   - Asset optimization
   - Code splitting

2. Build output is generated in the `dist` directory

## Post-Deployment Verification

1. Verify all pages load correctly
2. Test the contact form
3. Check console for any errors
4. Verify mobile responsiveness
5. Test all external links

## Rollback Procedure

1. Revert to previous commit:
   ```bash
   git checkout <previous-commit-hash>
   ```
2. Force push to update the deployment:
   ```bash
   git push -f origin main
   ```
3. Re-deploy the previous version

## Monitoring

- Set up Google Analytics for traffic monitoring
- Monitor error logs in the hosting platform
- Set up uptime monitoring (e.g., UptimeRobot)
