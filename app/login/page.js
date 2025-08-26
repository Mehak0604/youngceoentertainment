


// // 'use client';
// // import '@/app/globals.css';
// // import React, { useState } from 'react';
// // import { FcGoogle } from 'react-icons/fc';
// // import { FiEye, FiEyeOff } from 'react-icons/fi';
// // import Image from 'next/image';
// // import Link from 'next/link';

// // export default function LoginPage() {
// //   const [passwordVisible, setPasswordVisible] = useState(false);
// //   const [isPasswordTyped, setIsPasswordTyped] = useState(false);

// //   // Toggle password visibility
// //   const togglePasswordVisibility = () => {
// //     setPasswordVisible((prevState) => !prevState);
// //   };

// //   // Handle password typing detection
// //   const handlePasswordChange = (e) => {
// //     setIsPasswordTyped(e.target.value.length > 0);
// //   };

// //   return (
// //     <div className="login-wrapper">
// //       <div className="background-image"></div>
// //       <div className="logo-container">
// //         <Link href="/">
// //           <Image src="/logo.png" alt="YCE Logo" width={100} height={100} />
// //         </Link>
// //       </div>
// //       <div className="login-form-container p-5 bg-[#141416] rounded-2xl border border-[#9fa9fa] justify-start items-center gap-2.5 font-poppins">
// //         <h2 className="text-white text-3xl font-medium">Welcome back</h2>
// //         <p className="w-[299px] ml-14 text-[#d9d9d9] text-base font-normal mb-[28px]">
// //           Login to connect with Young CEO Entertainment
// //         </p>
// //         <form className="w-full">
// //           <div className="mb-5">
// //             <label
// //               htmlFor="email"
// //               className="block text-[#999999] text-sm mb-1 font-normal text-left ml-2"
// //             >
// //               Email
// //             </label>
// //             <input
// //               id="email"
// //               type="email"
// //               placeholder="Enter Your Email"
// //               className="bg-[#0B0B0D] w-[393px] h-[40px] text-sm text-white px-3 py-2 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
// //               required
// //             />
// //           </div>
// //           <div className="mb-5 relative">
// //             <label
// //               htmlFor="password"
// //               className="block mb-1 text-[#999999] text-sm font-normal text-left ml-2"
// //             >
// //               Password
// //             </label>
// //             <input
// //               id="password"
// //               type={passwordVisible ? 'text' : 'password'}
// //               placeholder="Enter Your Password"
// //               className="bg-[#0B0B0D] w-[393px] h-[40px] text-white px-3 py-2 text-sm rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
// //               required
// //               onChange={handlePasswordChange}
// //             />
// //             <div
// //               onClick={togglePasswordVisibility}
// //               className={`absolute right-3 top-2/3 transform -translate-y-1/2 cursor-pointer ${
// //                 isPasswordTyped ? 'text-white' : 'text-[#2F2F33]'
// //               }`}
// //             >
// //               {passwordVisible ? (
// //                 <FiEye className="text-lg" />
// //               ) : (
// //                 <FiEyeOff className="text-lg" />
// //               )}
// //             </div>
// //           </div>

// //           <div className="login-actions">
// //             <Link href="/reset" className="text-base text-[#e97f18] underline">
// //               Forgot Password?
// //             </Link>
// //           </div>
// //           <button
// //             type="submit"
// //             className="bg-[#343439] w-full h-11 py-3 px-3 rounded-lg text-white mb-5 hover:bg-[#e97f18] hover:text-white transition duration-300"
// //           >
// //             Log in
// //           </button>
// //           <button
// //             type="button"
// //             className="flex items-center justify-center text-white h-11 py-3 rounded-lg border border-white w-full hover:bg-[#e97f18] hover:border-[#e97f18] hover:text-white transition duration-300"
// //           >
// //             <FcGoogle className="text-2xl mr-2" />
// //             Continue With Google
// //           </button>
// //         </form>
// //         <div className="text-[#9f9fa1] mt-[28px] text-sm">
// //           New to Young CEO Entertainment?{' '}
// //           <Link href="/signup" className="text-[#e97f18] underline">
// //             Signup
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// 'use client';
// import '@/app/globals.css';
// import React, { useState } from 'react';
// import { FcGoogle } from 'react-icons/fc';
// import { FiEye, FiEyeOff } from 'react-icons/fi';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function LoginPage() {
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [isPasswordTyped, setIsPasswordTyped] = useState(false);

//   // Toggle password visibility
//   const togglePasswordVisibility = () => {
//     setPasswordVisible((prevState) => !prevState);
//   };

//   // Handle password typing detection
//   const handlePasswordChange = (e) => {
//     setIsPasswordTyped(e.target.value.length > 0);
//   };

//   return (
//     <div className="login-wrapper flex flex-col items-center justify-center min-h-screen bg-[#0B0B0D] px-4 sm:px-6 lg:px-8">
//       <div className="background-image"></div>
//       <div className="logo-container mb-8">
//         <Link href="/">
//           <Image src="/logo.png" alt="YCE Logo" width={100} height={100} />
//         </Link>
//       </div>
//       <div className="login-form-container w-full max-w-md p-6 bg-[#141416] rounded-2xl border border-[#9fa9fa] flex flex-col justify-start items-center gap-4 font-poppins">
//         <h2 className="text-white text-2xl sm:text-3xl font-medium text-center">
//           Welcome back
//         </h2>
//         <p className="w-full text-[#d9d9d9] text-sm sm:text-base font-normal text-center">
//           Login to connect with Young CEO Entertainment
//         </p>
//         <form className="w-full">
//           <div className="mb-5">
//             <label
//               htmlFor="email"
//               className="block text-[#999999] text-left  text-sm mb-1 font-normal"
//             >
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               placeholder="Enter Your Email"
//               className="bg-[#0B0B0D] w-full h-10 text-sm text-white px-3 py-2 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
//               required
//             />
//           </div>
//           <div className="mb-5 relative">
//             <label
//               htmlFor="password"
//               className="block mb-1 text-[#999999] text-left text-sm font-normal"
//             >
//               Password
//             </label>
//             <input
//               id="password"
//               type={passwordVisible ? 'text' : 'password'}
//               placeholder="Enter Your Password"
//               className="bg-[#0B0B0D] w-full h-10 text-sm text-white px-3 py-2 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
//               required
//               onChange={handlePasswordChange}
//             />
//             <div
//               onClick={togglePasswordVisibility}
//               className={`absolute right-3 top-2/3 transform -translate-y-1/2 cursor-pointer ${
//                 isPasswordTyped ? 'text-white' : 'text-[#2F2F33]'
//               }`}
//             >
//               {passwordVisible ? (
//                 <FiEye className="text-lg" />
//               ) : (
//                 <FiEyeOff className="text-lg" />
//               )}
//             </div>
//           </div>

//           <div className="login-actions mb-5 text-center">
//             <Link href="/reset" className="text-base text-[#e97f18] underline">
//               Forgot Password?
//             </Link>
//           </div>
//           <button
//             type="submit"
//             className="bg-[#343439] w-full h-11 py-3 px-3 rounded-lg text-white mb-4 hover:bg-[#e97f18] hover:text-white transition duration-300"
//           >
//             Log in
//           </button>
//           <button
//             type="button"
//             className="flex items-center justify-center text-white h-11 py-3 rounded-lg border border-white w-full hover:bg-[#e97f18] hover:border-[#e97f18] hover:text-white transition duration-300"
//           >
//             <FcGoogle className="text-2xl mr-2" />
//             Continue With Google
//           </button>
//         </form>
//         <div className="text-[#9f9fa1] text-center text-sm">
//           New to Young CEO Entertainment?{' '}
//           <Link href="/signup" className="text-[#e97f18] underline">
//             Signup
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';
import '@/app/globals.css';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { apiService } from '@/lib/api';
import { authUtils } from '@/utils/auth';

export default function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isPasswordTyped, setIsPasswordTyped] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const router = useRouter();

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (name === 'password') {
      setIsPasswordTyped(value.length > 0);
    }
    
    // Clear error when user starts typing
    if (error) setError('');
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Call login API
      const response = await apiService.login({
        email: formData.email,
        password: formData.password
      });

      // Save token and user data
      if (response.token) {
        authUtils.setToken(response.token);
      }
      if (response.user) {
        authUtils.setUser(response.user);
      }

      // Redirect to dashboard or home page
      router.push('/dashboard'); // Change this to your desired redirect page
      
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper flex flex-col items-center justify-center min-h-screen bg-[#0B0B0D] px-4 sm:px-6 lg:px-8">
      <div className="background-image"></div>
      <div className="logo-container mb-8">
        <Link href="/">
          <Image src="/logo.png" alt="YCE Logo" width={100} height={100} />
        </Link>
      </div>
      <div className="login-form-container w-full max-w-md p-6 bg-[#141416] rounded-2xl border border-[#9fa9fa] flex flex-col justify-start items-center gap-4 font-poppins">
        <h2 className="text-white text-2xl sm:text-3xl font-medium text-center">
          Welcome back
        </h2>
        <p className="w-full text-[#d9d9d9] text-sm sm:text-base font-normal text-center">
          Login to connect with Young CEO Entertainment
        </p>
        
        {error && (
          <div className="w-full p-3 bg-red-500/20 border border-red-500/50 rounded-md text-red-400 text-sm text-center">
            {error}
          </div>
        )}
        
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-[#999999] text-left text-sm mb-1 font-normal"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Your Email"
              className="bg-[#0B0B0D] w-full h-10 text-sm text-white px-3 py-2 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-5 relative">
            <label
              htmlFor="password"
              className="block mb-1 text-[#999999] text-left text-sm font-normal"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Enter Your Password"
              className="bg-[#0B0B0D] w-full h-10 text-sm text-white px-3 py-2 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
              required
              value={formData.password}
              onChange={handleInputChange}
            />
            <div
              onClick={togglePasswordVisibility}
              className={`absolute right-3 top-2/3 transform -translate-y-1/2 cursor-pointer ${
                isPasswordTyped ? 'text-white' : 'text-[#2F2F33]'
              }`}
            >
              {passwordVisible ? (
                <FiEye className="text-lg" />
              ) : (
                <FiEyeOff className="text-lg" />
              )}
            </div>
          </div>

          <div className="login-actions mb-5 text-center">
            <Link href="/reset" className="text-base text-[#e97f18] underline">
              Forgot Password?
            </Link>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="bg-[#343439] w-full h-11 py-3 px-3 rounded-lg text-white mb-4 hover:bg-[#e97f18] hover:text-white transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Logging in...' : 'Log in'}
          </button>
          
          <button
            type="button"
            className="flex items-center justify-center text-white h-11 py-3 rounded-lg border border-white w-full hover:bg-[#e97f18] hover:border-[#e97f18] hover:text-white transition duration-300"
          >
            <FcGoogle className="text-2xl mr-2" />
            Continue With Google
          </button>
        </form>
        
        <div className="text-[#9f9fa1] text-center text-sm">
          New to Young CEO Entertainment?{' '}
          <Link href="/signup" className="text-[#e97f18] underline">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}