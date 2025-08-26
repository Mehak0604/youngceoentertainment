'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authUtils } from '@/utils/auth';
import ProtectedRoute from '@/components/ProtectedRoute';
import Image from 'next/image';
import Link from 'next/link';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Get user data from localStorage
    const userData = authUtils.getUser();
    setUser(userData);
  }, []);

  const handleLogout = () => {
    authUtils.logout();
    router.push('/login');
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-[#0B0B0D] font-poppins">
        {/* Header */}
        <header className="bg-[#141416] border-b border-[#9fa9fa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/">
                  <Image src="/logo.png" alt="YCE Logo" width={50} height={50} />
                </Link>
                <span className="text-white text-xl font-medium ml-3">
                  Young CEO Entertainment
                </span>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-[#d9d9d9] text-sm">
                  Welcome, {user?.name || 'Artist'}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-[#e97f18] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#d16a15] transition duration-300"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-white text-3xl font-bold mb-2">
              Dashboard
            </h1>
            <p className="text-[#d9d9d9] text-lg">
              Manage your Young CEO Entertainment account
            </p>
          </div>

          {/* User Info Card */}
          <div className="bg-[#141416] border border-[#9fa9fa] rounded-2xl p-6 mb-8">
            <h2 className="text-white text-xl font-semibold mb-4">
              Account Information
            </h2>
            <div className="space-y-3">
              <div>
                <label className="text-[#999999] text-sm">Artist Name</label>
                <p className="text-white text-lg">{user?.name || 'N/A'}</p>
              </div>
              <div>
                <label className="text-[#999999] text-sm">Email</label>
                <p className="text-white text-lg">{user?.email || 'N/A'}</p>
              </div>
              <div>
                <label className="text-[#999999] text-sm">Member Since</label>
                <p className="text-white text-lg">
                  {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#141416] border border-[#9fa9fa] rounded-2xl p-6 hover:border-[#e97f18] transition-colors cursor-pointer">
              <h3 className="text-white text-lg font-semibold mb-2">
                Upload Music
              </h3>
              <p className="text-[#d9d9d9] text-sm">
                Share your latest tracks with the world
              </p>
            </div>
            
            <div className="bg-[#141416] border border-[#9fa9fa] rounded-2xl p-6 hover:border-[#e97f18] transition-colors cursor-pointer">
              <h3 className="text-white text-lg font-semibold mb-2">
                Manage Profile
              </h3>
              <p className="text-[#d9d9d9] text-sm">
                Update your artist information and preferences
              </p>
            </div>
            
            <div className="bg-[#141416] border border-[#9fa9fa] rounded-2xl p-6 hover:border-[#e97f18] transition-colors cursor-pointer">
              <h3 className="text-white text-lg font-semibold mb-2">
                View Analytics
              </h3>
              <p className="text-[#d9d9d9] text-sm">
                Track your music performance and engagement
              </p>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}