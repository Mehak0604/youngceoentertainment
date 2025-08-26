// // lib/api.js
// const API_BASE_URL = 'http://localhost:5000/api';

// export const apiService = {
//   // Register new user
//   async register(userData) {
//     try {
//       console.log('Sending registration data:', userData); // ✅ Added for debugging
      
//       const response = await fetch(`${API_BASE_URL}/auth/register`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });

//       const data = await response.json();
//       console.log('Registration response:', data); // ✅ Added for debugging
      
//       if (!response.ok) {
//         throw new Error(data.message || 'Registration failed');
//       }
      
//       return data; // This returns the full response including data.token and data.user
//     } catch (error) {
//       console.error('API registration error:', error); // ✅ Added for debugging
//       throw error;
//     }
//   },

//   // Login user
//   async login(credentials) {
//     try {
//       console.log('Sending login data:', credentials); // ✅ Added for debugging
      
//       const response = await fetch(`${API_BASE_URL}/auth/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//       });

//       const data = await response.json();
//       console.log('Login response:', data); // ✅ Added for debugging
      
//       if (!response.ok) {
//         throw new Error(data.message || 'Login failed');
//       }
      
//       return data; // This returns the full response including data.token and data.user
//     } catch (error) {
//       console.error('API login error:', error); // ✅ Added for debugging
//       throw error;
//     }
//   }
// };

//Deployment 
export const apiService = {
  register: async (data) => {
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.error || "Something went wrong");
    }

    return res.json();
  },
};
