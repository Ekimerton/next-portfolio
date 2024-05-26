---
title: 'Deploying Your 10X Portfolio'
description: 'Explore various deployment options for your 10X Portfolio, including GitHub Pages, Vercel, and more.'
keywords: 'deployment, GitHub Pages, Vercel, Next.js, 10X Portfolio'
author: {name: 'Ekim Karabey', imageUrl: "/images/pfp.png", handle: "@ekimerton", url: "https://www.twitter.com/ekimerton"}
date: 'April 16th, 2024'
---

Once you've set up your 10X Portfolio and customized it to your liking, the next step is to deploy it so that it's accessible on the internet. This guide will cover several popular platforms for deploying your portfolio, including GitHub Pages, Vercel, and others, providing you with step-by-step instructions for each.

## Deploying on GitHub Pages

GitHub Pages offers a straightforward solution if your project is already hosted on GitHub. Here's how to deploy your Next.js project using GitHub Pages with a focus on static deployment:

1. **Prepare your project**:
   - Add the following to your `next.config.mjs` to prepare your project for static deployment:
     ```javascript
     /** @type {import('next').NextConfig} */
     const nextConfig = {
       output: "export", // Uncomment this line for static deployment
       images: { unoptimized: true }, // Uncomment this line if using unoptimized images
     };

     export default nextConfig;
     ```

   - Ensure the `homepage` field in your `package.json` matches your GitHub Pages URL:
     ```javascript
     "homepage": "http://<username>.github.io/<repository>"
     ```

2. **Build and Export Your Project**:
   - Run `npm run build` to build your project.

3. **Deploy**:
   - Push the contents of the `out` folder to the `gh-pages` branch of your GitHub repository.
   - Go to your repository settings on GitHub, navigate to the "Pages" section, and set the GitHub Pages source to the `gh-pages` branch.
   - **Alternatively**, select github actions when deploying and ignore the last two steps!

## Deploying on Vercel

Vercel is optimized for frontend frameworks like Next.js and offers a seamless deployment experience:

1. **Connect Your GitHub Repository**:
   - Create a Vercel account and connect your GitHub repository.

2. **Configure Your Project**:
   - Vercel automatically detects that you are using Next.js and sets up your project accordingly.
   - Configure necessary environment variables in the project settings.

3. **Deploy**:
   - Each push to your repository will automatically trigger a deployment through Vercel.

## Deploying on Other Platforms

For platforms like Netlify or Firebase, where static or serverless deployments are necessary, the general approach is as follows:

1. **Prepare Your Project**:
   - Ensure your `next.config.mjs` has the necessary lines uncommented if using static site generation.
   - Ensure your project's settings are compatible with the platform’s deployment requirements.

2. **Configure Build Settings**:
   - Specify build commands and publish directories according to your chosen platform's guidelines.

3. **Deploy**:
   - Connect your repository and set up automatic deployments to keep your site updated without manual intervention.

## Conclusion

Whether you opt for the simplicity of GitHub Pages, the robust integration of Vercel with Next.js, or another platform, there are multiple paths to take your 10X Portfolio live. Choose the one that best fits your project’s needs and audience.

Happy deploying!
