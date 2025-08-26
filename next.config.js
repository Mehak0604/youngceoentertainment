// // /** @type {import('next').NextConfig} */
// // const nextConfig = {};

// // export default nextConfig;





// // next.config.js Exporting Files...

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'export',
//     images: {
//       unoptimized: true, // Disable optimization for static export
//       basePath: '/youngceoentertainment',

//     },
//   };
  
//   module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/youngceoentertainment',
};

module.exports = nextConfig;
