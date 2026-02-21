'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Package } from 'lucide-react';

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f]">
      <Header searchQuery="" setSearchQuery={() => {}} />
      
      <main className="flex-1 pt-24 pb-10">
        <div className="container">
          <div className="max-w-md mx-auto">
            <div className="card p-6">
              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20">
                  <Package className="w-7 h-7 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
                <p className="text-gray-400 text-sm mt-1">Sign in to continue shopping</p>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Email or Mobile Number</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="input pl-11"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="input pl-11 pr-11"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-[#1a1a26] text-blue-500 focus:ring-blue-500" />
                    <span className="text-sm text-gray-400">Remember me</span>
                  </label>
                  <Link href="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300">
                    Forgot Password?
                  </Link>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Sign In
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/[0.06]"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-3 bg-[#12121a] text-gray-500">New to Pavan's Fashions?</span>
                </div>
              </div>

              <Link href="/signup" className="btn btn-secondary w-full">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
