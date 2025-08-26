// // /** @type {import('next').NextConfig} */
// // const nextConfig = {};

// // export default nextConfig;





// // next.config.js Exporting Files...

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     // output: 'export',
//     images: {
//       unoptimized: true, // Disable optimization for static export
//     },
//   };
  
//   module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // you can keep this if you want
  },
}

module.exports = nextConfig
