# Infinite Scroll Photo Gallery

## Overview
This project is a responsive **Photo Gallery Application** that dynamically fetches images from the **Unsplash API** and displays them in a grid format. The gallery implements **infinite scrolling**, meaning that more photos are loaded as the user scrolls down the page.

The application also features responsive design, error handling, and a loading indicator. On smaller screens, the gallery adjusts to 1-2 columns, and on larger screens, it displays 3-4 columns.

---

## Features

- **Dynamic Photo Grid**: Displays images fetched from the Unsplash API in a grid format.
- **Infinite Scrolling**: Fetches and loads more images as the user scrolls to the bottom of the page.
- **Responsive Layout**: Adjusts the number of columns based on screen size (1-2 columns for small screens, 3-4 columns for larger screens).
- **Error Handling**: Shows an error message if the API request fails due to network issues.
- **Loading Indicator**: Displays a spinner or "Loading..." message while new images are being fetched.
- **Image Hover Effects**: Adds subtle hover effects (zoom or shadow) to improve interactivity (Optional, if implemented).
- **Accessibility**: Includes alt tags for images and ARIA roles for dynamic content (Optional, if implemented).
- **Local Caching**: Caches images in memory to avoid redundant API calls when scrolling back up (Optional, if implemented).
- **Performance Optimization**: Lazy-loads images to improve performance for slow connections (Optional, if implemented).

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


