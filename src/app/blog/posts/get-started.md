---
title: 'Get Started with 80/20 Portfolio'
description: 'Learn how to set up and customize your professional portfolio with our Next.js and Tailwind CSS-based kit.'
keywords: 'tutorial, react, portfolio, next.js, tailwind css, professional portfolio'
author: {name: 'Ekim Karabey', imageUrl: "/images/pfp.png", handle: "@ekimerton", url: "https://www.twitter.com/ekimerton"}
date: 'April 15th, 2024'
---

This document is your gateway to quickly launching your professional site using the 80/20 Portfolio, a modular and customizable kit built with Next.js and styled using Tailwind CSS.

## Overview of the Kit

The 80/20 Portfolio is designed to be intuitive and flexible, offering you 'Lego-like' blocks to build your unique online presence. Here’s what you can find in the kit:

**Core Components**:
- **ProjectsSection**: Showcase your projects with options for images and descriptions.
- **ExperienceSection**: Detail your work experience.
- **EducationSection**: List your academic qualifications.
- **BlogSection**: Ready to integrate with your future blog posts.
- **AboutSection**: Introduce yourself with a personal bio.
- **Navbar**: Put *really* important stuff here -- it'll be shown on each screen.
- **Hero**: The first thing everyone clicking on your website will see.

These components are found in the `src/app/sections` directory and are easily customizable to fit your style and needs.

## Setting Up Your Portfolio

1. **Initial Setup**:
   - Make sure Node.js is installed on your system.
   - Clone the repository and navigate into your project folder.
   - Run `npm install` to set up your dependencies.

2. **Running Locally**:
   - Start the development server with `npm run dev`. This command compiles and runs the application locally.
   - Open `http://localhost:3000` to see your portfolio in action.

3. **Customization**:
   - Tailwind CSS is used for styling. It’s set up for you to easily modify the design through utility classes.
   - Dive into individual component files under `src/app/components` to tweak functionality or update styles.

## File Structure

Here's a brief look at the key directories and files:

- `components/`: Contains UI components like buttons, navigation bars, and specific entry components for jobs, projects, and education.
- `sections/`: Houses the main sections of your portfolio page, making it easy to manage and update content.
- `globals.css`: The place to add global styles or override Tailwind's base styles.

## Next Steps

- Detailed tutorials on writing blog posts and deploying your site can be found at `/blog/blogging-101` and `/blog/deployment`, respectively.
- For support, please email me at ekim0252@gmail.com.

Thank you for choosing the 80/20 Portfolio. Start building your personalized site today and take your professional online presence to the next level!