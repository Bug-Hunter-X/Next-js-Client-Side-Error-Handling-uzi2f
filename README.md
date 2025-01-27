# Next.js Client-Side Error Handling

This repository demonstrates an issue with handling errors during client-side navigation in Next.js. The `/about` page throws an error, resulting in a poorly formatted error message on the client side.  The solution improves error handling and provides a better user experience.

## Bug

The `pages/about.js` file intentionally throws an error. When navigating to the `/about` page, the error is not gracefully handled by Next.js, resulting in a less-than-ideal user experience.

## Solution

The solution involves using `next/error` to create a custom error page and implementing proper error boundaries to handle unexpected issues in components.