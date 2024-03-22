import withPWA from "next-pwa";

const configWithPwa = withPWA({
  dest:"public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

export default configWithPwa

// /** @type {import(withPWA).NextConfig} */
// const nextConfig = {
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//     disable: process.env.NODE_ENV === 'development'
//   }
// };

