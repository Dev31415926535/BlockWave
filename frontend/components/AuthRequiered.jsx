import React, { useEffect, useState } from 'react';
import { useUser, SignInButton, SignUpButton } from '@clerk/nextjs';
import { motion, AnimatePresence } from 'framer-motion';

const AuthRequiredPage = () => {
  const { isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AnimatePresence>
          <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-4 py-12 bg-gradient-to-r from-[#F9FAFB] via-[#F9FAFB] to-blue-100 min-h-screen">
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <div className="max-w-md">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Supply Chain Illustration */}
                  <svg 
                    className="w-full max-w-md" 
                    viewBox="0 0 400 300" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background */}
                    <rect width="400" height="300" fill="#F9FAFB" />
                    
                    {/* Supply Chain Path */}
                    <path d="M50 150 C100 100, 150 200, 200 150 C250 100, 300 200, 350 150" 
                          stroke="#818CF8" strokeWidth="4" strokeDasharray="8 8" />
                    
                    {/* Factory/Manufacturer */}
                    <rect x="30" y="125" width="40" height="50" fill="#6366F1" />
                    <rect x="35" y="115" width="30" height="10" fill="#4F46E5" />
                    <rect x="45" y="95" width="10" height="20" fill="#4F46E5" />
                    
                    {/* Distribution Center */}
                    <rect x="180" y="130" width="40" height="40" rx="4" fill="#A5B4FC" />
                    <rect x="190" y="140" width="20" height="30" fill="#818CF8" />
                    <rect x="195" y="150" width="10" height="10" fill="#6366F1" />
                    
                    {/* Retail Store */}
                    <rect x="330" y="125" width="40" height="50" fill="#6366F1" />
                    <path d="M330 125 L350 100 L370 125" fill="#4F46E5" />
                    <rect x="345" y="150" width="10" height="25" fill="#A5B4FC" />
                    
                    {/* Blockchain Nodes */}
                    <circle cx="50" cy="150" r="10" fill="#E0E7FF" stroke="#4F46E5" strokeWidth="2" />
                    <circle cx="125" cy="175" r="10" fill="#E0E7FF" stroke="#4F46E5" strokeWidth="2" />
                    <circle cx="200" cy="150" r="10" fill="#E0E7FF" stroke="#4F46E5" strokeWidth="2" />
                    <circle cx="275" cy="175" r="10" fill="#E0E7FF" stroke="#4F46E5" strokeWidth="2" />
                    <circle cx="350" cy="150" r="10" fill="#E0E7FF" stroke="#4F46E5" strokeWidth="2" />
                    
                    {/* Connecting Lines */}
                    <line x1="60" y1="150" x2="115" y2="175" stroke="#4F46E5" strokeWidth="2" />
                    <line x1="135" y1="175" x2="190" y2="150" stroke="#4F46E5" strokeWidth="2" />
                    <line x1="210" y1="150" x2="265" y2="175" stroke="#4F46E5" strokeWidth="2" />
                    <line x1="285" y1="175" x2="340" y2="150" stroke="#4F46E5" strokeWidth="2" />
                  </svg>
                </motion.div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 max-w-md">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Authentication Required</h1>
                  <p className="text-gray-600">
                    Sign in to start tracking products from manufacturer to retailer
                  </p>
                </div>
                
                <div className="flex flex-col space-y-4">
                  <SignInButton mode="modal">
                    <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
                      Sign In
                    </button>
                  </SignInButton>
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">
                        Or
                      </span>
                    </div>
                  </div>
                  
                  <SignUpButton mode="modal">
                    <button className="w-full bg-white text-indigo-600 py-3 px-4 rounded-md border border-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
                      Create an Account
                    </button>
                  </SignUpButton>
                </div>
                
                <div className="mt-6 text-center text-sm text-gray-500">
                  <p>By signing in, you agree to our Terms of Service and Privacy Policy</p>
                </div>
              </motion.div>
            </div>
          </div>
      </AnimatePresence>
    </div>
  );
};

export default AuthRequiredPage;