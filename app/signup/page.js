
// // 'use client';
// // import '@/app/globals.css';
// // import React, {useState} from 'react';
// // import { FcGoogle } from 'react-icons/fc'; // Import Google icon
// // import Image from 'next/image';
// // import Link from 'next/link';
// // import { FiEye, FiEyeOff } from 'react-icons/fi'; // Import eye icons // Import Google icon

// // export default function SignPage() {
// //   const [passwordVisible, setPasswordVisible] = useState(false);
// //   const [isPasswordTyped, setIsPasswordTyped] = useState(false);

// //   // Toggle password visibility
// //   const togglePasswordVisibility = () => {
// //     setPasswordVisible((prevState) => !prevState);
// //   };

// //     // Handle password typing detection
// //     const handlePasswordChange = (e) => {
// //       setIsPasswordTyped(e.target.value.length > 0);
// //     };
  
// //   return (
// //     <div className="login-wrappers">
// //       <div className="background-image"></div>
// //       <div className="logo-container">
// //         <Link href="/">
// //           <Image src="/logo.png" alt="YCE Logo" width={100} height={100} />
// //         </Link>
// //       </div>
// //       <div className="login-form-container p-5 bg-[#141416] rounded-2xl border border-[#9fa9fa] justify-start items-center gap-2.5 font-poppins">
// //         <h2 className="text-white text-3xl font-medium">Register</h2>
// //         <p className="w-[299px] text-center ml-14 text-[#d9d9d9] text-base font-normal mb-[28px]">
// //         Easy registration to connect with Young CEO Entertainment
// //         </p>
// //         <form className="w-full">
// //           <div className="mb-5">
// //           <label
// //               htmlFor="Artist Name"
// //               className="block w-1/4 text-[#999999] text-sm font-normal mr-[400px]"
// //             >
// //              Artist Name
// //             </label>
// //             <input
// //               id="artistname"
// //               type="artistname"
// //               placeholder="Artist Name"
// //               className="bg-[#0B0B0D] mb-5  w-[393px] h-[40px] text-white px-3 py-2 text-sm rounded-md  focus:outline-none focus:ring-2 focus:ring-[#e97f18]"

// //               required
// //             />
// //             <label
// //               htmlFor="email"
// //               className="block text-[#999999] text-sm font-normal mr-[350px]"
// //             >
// //               Email
// //             </label>
// //             <input
// //               id="email"
// //               type="email"
// //               placeholder="Enter Your Email"
// //               className="bg-[#0B0B0D]  w-[393px] h-[40px] text-white text-sm px-3 py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
// //               required
// //             />
// //             <p className="text-[#999999] w-full text-[10px] text-left ml-2 mt-1">(This email will be used as Official Company Communication channel)</p>
// //           </div>
// //           <div className="mb-5 relative">
// //   <label
// //     htmlFor="password"
// //     className="block mb-1 text-[#999999] text-sm font-normal text-left ml-2"
// //   >
// //     Password
// //   </label>
// //   <input
// //               id="password"
// //               type={passwordVisible ? 'text' : 'password'}
// //               placeholder="Enter Your Password"
// //               className="bg-[#0B0B0D] w-[393px] h-[40px] text-white px-3 py-2 text-sm rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
// //               required
// //               onChange={handlePasswordChange}
// //             />
// //     <p className="text-[#999999] w-full text-[10px] text-left ml-2 mt-1">(Password must be at least 8 characters long, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.)</p>
// //   <div
// //     onClick={togglePasswordVisibility}
// //     className={`absolute right-3 top-11 transform -translate-y-1/2 cursor-pointer ${
// //       isPasswordTyped ? 'text-white' : 'text-[#2F2F33]'
// //     }`}// Eye icon color
// //   >
// //     {passwordVisible ? (
// //       <FiEye className="text-lg" />
// //     ) : (
// //       <FiEyeOff className="text-lg" />
// //     )}
// //   </div>
// // </div>
       
// //           <button
// //             type="submit"
// //             className="bg-[#343439] w-full mt-7 h-11 py-3 px-3 rounded-lg text-white mb-5 hover:bg-[#e97f18] hover:text-white transition duration-300"
// //           >
// //             Continue
// //           </button>
// //           <button
// //             type="button"
// //             className="flex items-center justify-center text-white h-11 py-3 rounded-lg border border-white w-full hover:bg-[#e97f18] hover:border-[#e97f18] hover:text-white transition duration-300"
// //           >
// //             <FcGoogle className="text-2xl mr-2" /> {/* Google Icon */}
// //             Continue With Google
// //           </button>
// //         </form>
// //         <div className="text-[#9f9fa1] mt-[28px] text-sm">
// //           Already have an account?{' '}
// //           <Link href="/login" className="text-[#e97f18] underline">
// //             Log In
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
//     <div className="login-wrappers flex flex-col items-center justify-center min-h-screen bg-[#0B0B0D] px-4 sm:px-6 lg:px-8">
//       <div className="background-image"></div>
//       <div className="logo-container mb-8">
//         <Link href="/">
//           <Image src="/logo.png" alt="YCE Logo" width={100} height={100} />
//         </Link>
//       </div>
//       <div className="login-form-container w-full max-w-md p-6 bg-[#141416] rounded-2xl border border-[#9fa9fa] flex flex-col justify-start items-center gap-4 font-poppins">
//         <h2 className="text-white text-2xl sm:text-3xl font-medium text-center">
//           Register
//         </h2>
//         <p className="w-full text-[#d9d9d9] text-sm sm:text-base font-normal text-center">
//         Easy registration to connect with Young CEO Entertainment
//         </p>
//         <form className="w-full">
//         <div className="mb-5">
          
          
//           <label
//             htmlFor="artistsname"
//             className="block text-[#999999] text-left  text-sm mb-1 font-normal"
//           >
//             Artists Name
//           </label>
//           <input
//             id="name"
//             type="name"
//             placeholder="Enter Your Artists Name"
//             className="bg-[#0B0B0D] w-full h-10 text-sm text-white px-3 py-2 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
//             required
//           />
//         </div>
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
//              <p className="text-[#999999] w-full text-[10px] text-left mt-1">(This email will be used as Official Company Communication channel)</p>
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
//             <p className="text-[#999999] w-full text-[10px] text-left mt-1">(Password must be at least 8 characters long, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.)</p>
//             <div
//               onClick={togglePasswordVisibility}
//               className={`absolute right-3 top-11 transform -translate-y-1/2 cursor-pointer ${
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
//           Already have an Account?{' '}
//           <Link href="/login" className="text-[#e97f18] underline">
//             Log In
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
import connectDB from "@/lib/mongodb";


export default function SignupPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isPasswordTyped, setIsPasswordTyped] = useState(false);
  const [formData, setFormData] = useState({
    artistName: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
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
    
    // Clear messages when user starts typing
    if (error) setError('');
    if (success) setSuccess('');
  };

  // Password validation
  const validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    
    return minLength && hasUpper && hasLower && hasNumber && hasSpecial;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Check if all fields are filled
    if (!formData.artistName.trim() || !formData.email.trim() || !formData.password.trim()) {
      setError('Please provide all required fields');
      setLoading(false);
      return;
    }

    // Validate password
    if (!validatePassword(formData.password)) {
      setError('Password must be at least 8 characters long and include 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.');
      setLoading(false);
      return;
    }

    try {
      // Call registration API - FIXED: Using correct field name
      const response = await apiService.register({
        artistsName: formData.artistName, // ✅ Changed from 'name' to 'artistsName'
        email: formData.email,
        password: formData.password
      });

      setSuccess('Registration successful! You can now log in.');
      
      // Optionally auto-login the user
      if (response.data && response.data.token) { // ✅ Fixed: response.data.token
        authUtils.setToken(response.data.token);
        if (response.data.user) { // ✅ Fixed: response.data.user
          authUtils.setUser(response.data.user);
        }
        // Redirect to dashboard
        router.push('/dashboard');
      } else {
        // Redirect to login page after successful registration
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      }
      
    } catch (err) {
      console.error('Registration error:', err); // ✅ Added for debugging
      setError(err.message || 'Registration failed. Please try again.');
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
          Welcome to YCE
        </h2>
        <p className="w-full text-[#d9d9d9] text-sm sm:text-base font-normal text-center">
          Create your account to connect with Young CEO Entertainment
        </p>
        
        {error && (
          <div className="w-full p-3 bg-red-500/20 border border-red-500/50 rounded-md text-red-400 text-sm text-center">
            {error}
          </div>
        )}
        
        {success && (
          <div className="w-full p-3 bg-green-500/20 border border-green-500/50 rounded-md text-green-400 text-sm text-center">
            {success}
          </div>
        )}
        
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="artistName"
              className="block text-[#999999] text-left text-sm mb-1 font-normal"
            >
              Artists Name
            </label>
            <input
              id="artistName"
              name="artistName"
              type="text"
              placeholder="Enter Your Artists Name"
              className="bg-[#0B0B0D] w-full h-10 text-sm text-white px-3 py-2 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-[#e97f18]"
              required
              value={formData.artistName}
              onChange={handleInputChange}
            />
          </div>
          
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
            <p className="text-[#999999] w-full text-[10px] text-left mt-1">
              (This email will be used as Official Company Communication channel)
            </p>
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
            <p className="text-[#999999] w-full text-[10px] text-left mt-1">
              (Password must be at least 8 characters long, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.)
            </p>
            <div
              onClick={togglePasswordVisibility}
              className={`absolute right-3 top-11 transform -translate-y-1/2 cursor-pointer ${
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

          <button
            type="submit"
            disabled={loading}
            className="bg-[#343439] w-full h-11 py-3 px-3 rounded-lg text-white mb-4 hover:bg-[#e97f18] hover:text-white transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
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
          Already have an Account?{' '}
          <Link href="/login" className="text-[#e97f18] underline">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}