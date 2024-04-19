---
title: 'Deploying Your 80/20 Portfolio: A Comprehensive Guide'
description: 'Explore various deployment options for your 80/20 Portfolio, including GitHub Pages, Vercel, and more.'
keywords: 'deployment, GitHub Pages, Vercel, Next.js, 80/20 Portfolio'
author: {name: 'Ekim Karabey', imageUrl: "/images/pfp.png", handle: "@ekimerton", url: "https://www.twitter.com/ekimerton"}
date: 'April 15th, 2024'
---

Once you've set up your 80/20 Portfolio and customized it to your liking, the next step is to deploy it so that it's accessible on the internet. This guide will cover several popular platforms for deploying your portfolio, including GitHub Pages, Vercel, and others, providing you with step-by-step instructions for each.

## Deploying on GitHub Pages

GitHub Pages is a convenient option if you are already hosting your project repository on GitHub. Here's how to deploy your Next.js project on GitHub Pages:

1. **Prepare your project**:
   - Make sure your project's `package.json` has a homepage field: `"homepage": "http://<username>.github.io/<repository>"`
   - Update your Next.js export path by adding the following to your `next.config.js`:
     ```javascript
     module.exports = {
       assetPrefix: './',
       basePath: '/<repository>'
     }
     ```

2. **Build and Export Your Project**:
   - Run `npm run build` to build your project.
   - Run `npm run export` to create a static version of your site.

3. **Deploy**:
   - Push the contents of the `out` folder to the `gh-pages` branch of your GitHub repository.
   - Navigate to your GitHub repository settings and set the GitHub Pages source to the `gh-pages` branch.

## Deploying on Vercel

Vercel is a platform optimized for frontend frameworks like Next.js and offers a seamless deployment experience:

1. **Connect Your GitHub Repository**:
   - Create a Vercel account and connect your GitHub repository to Vercel.
   
2. **Configure Your Project**:
   - Vercel automatically detects that you are using Next.js and sets up your project accordingly.
   - Configure environment variables if necessary under the project settings.

3. **Deploy**:
   - Each push to your repository will automatically trigger a deployment through Vercel.

## Deploying on Other Platforms

For platforms like Netlify or Firebase, the general steps are similar:

1. **Prepare Your Project**:
   - Ensure your project builds as a static site or is compatible with serverless deployment if using server-side rendering features.

2. **Configure Build Settings**:
   - Set up build commands and publish directories according to your platform’s requirements.

3. **Deploy**:
   - Connect your repository and configure automatic deployments to ensure your site is always up-to-date.

## Conclusion

Deploying your 80/20 Portfolio can be done in several ways depending on your preferences and requirements. Whether you choose GitHub Pages for simplicity, Vercel for its deep integration with Next.js, or any other platform, you have numerous options to bring your portfolio online.

Happy deploying!
