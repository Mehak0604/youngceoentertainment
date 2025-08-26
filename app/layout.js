// // import localFont from "next/font/local";
// // import "./globals.css";

// // const geistSans = localFont({
// //   src: "./fonts/GeistVF.woff",
// //   variable: "--font-geist-sans",
// //   weight: "100 900",
// // });
// // const geistMono = localFont({
// //   src: "./fonts/GeistMonoVF.woff",
// //   variable: "--font-geist-mono",
// //   weight: "100 900",
// // });

// // export const metadata = {
// //   title: "Young Ceo Entertainment",
// //   description: "YCE TECH TEAM",
// // };

// // export default function RootLayout({ children }) {
// //   return (
// //     <html lang="en">
// //       <body
// //         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
// //       >
// //         {children}
// //       </body>
// //     </html>
// //   );
// // }

// 'use client'; // Needed for client-side hooks 
// import { usePathname } from 'next/navigation';
// import Navbar from '@/components/NavBar';
// import '@/app/globals.css';

// export default function Layout({ children }) {
//   const pathname = usePathname(); // Get the current path

//   // Hide Navbar 
//   const hideNavbar = ['/login', '/signup', '/reset', '/upgrade', '/upgrade-duo', '/upgrade-label', '/quest', '/subscription', '/pre-save', '/smart-links', '/single-track']
//     .includes(pathname) || pathname.startsWith('/dashboard');

//   return (
//     <html lang="en">
//       <head>
//         <title>Young CEO Entertainment</title>
//         <meta name="google-site-verification" content="ayoezX55fg8h20CEHvVJ8FgDGElkr1Np89LvdTLhxQI" />
//       </head>
//       <body>
//         {!hideNavbar && <Navbar />}
//         {children}
//       </body>
//     </html>
//   );
// }

'use client' // Needed for client-side hooks
import { usePathname } from 'next/navigation'
import Navbar from '@/components/NavBar'
import './globals.css' // now relative since we’re inside app/

export default function Layout({ children }) {
  const pathname = usePathname()

  // Hide Navbar on certain routes
  const hideNavbar =
    ['/login', '/signup', '/reset', '/upgrade', '/upgrade-duo', '/upgrade-label', '/quest', '/subscription', '/pre-save', '/smart-links', '/single-track']
      .includes(pathname) || pathname.startsWith('/dashboard')

  return (
    <html lang="en">
      <head>
        <title>Young CEO Entertainment</title>
        <meta
          name="google-site-verification"
          content="ayoezX55fg8h20CEHvVJ8FgDGElkr1Np89LvdTLhxQI"
        />
      </head>
      <body>
        {!hideNavbar && <Navbar />}
        {children}
      </body>
    </html>
  )
}
