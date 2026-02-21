'use client';

import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, X, Heart, Package } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/search?category=electronics', label: 'Electronics' },
    { href: '/search?category=fashion', label: 'Fashion' },
    { href: '/search?category=home', label: 'Home' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Package className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg md:text-xl font-bold text-white tracking-tight">
                Pavan's<span className="text-blue-400">Fashions</span>
              </span>
            </div>
          </Link>

          {/* Search - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className={`relative w-full transition-all duration-200 ${isSearchFocused ? 'scale-[1.01]' : ''}`}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                placeholder="Search for products, brands..."
                className="w-full h-11 pl-12 pr-24 bg-[#12121a] border border-white/[0.06] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-[#12121a]/80 transition-all text-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <Link
                href={searchQuery ? `/search?q=${encodeURIComponent(searchQuery)}` : '/search'}
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center text-white font-medium text-sm transition-colors"
              >
                Search
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Mobile Search */}
            <Link href="/search" className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-[#12121a] text-gray-400">
              <Search className="w-5 h-5" />
            </Link>

            {/* Account */}
            <Link href="/signin" className="hidden sm:flex items-center gap-2 px-4 h-10 rounded-xl bg-[#12121a] text-white hover:bg-[#1a1a26] transition-colors">
              <User className="w-4 h-4" />
              <span className="font-medium text-sm">Sign In</span>
            </Link>
            <Link href="/signin" className="sm:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-[#12121a] text-gray-400">
              <User className="w-5 h-5" />
            </Link>

            {/* Wishlist */}
            <Link href="/wishlist" className="hidden md:flex w-10 h-10 items-center justify-center rounded-xl bg-[#12121a] text-gray-400 hover:text-pink-400 transition-colors">
              <Heart className="w-5 h-5" />
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative flex items-center gap-2 px-3 py-2 h-10 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm transition-colors">
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:block">Cart</span>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center text-xs font-bold">
                0
              </span>
            </Link>

            {/* Menu Toggle */}
            <button 
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-[#12121a] text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation - Desktop */}
      <div className="hidden md:block border-t border-white/[0.04]">
        <div className="container">
          <nav className="flex items-center gap-6 h-10 text-sm">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-gray-400 hover:text-white font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link href="/search?category=appliances" className="text-gray-400 hover:text-white font-medium transition-colors">
              Appliances
            </Link>
            <Link href="/search?category=books" className="text-gray-400 hover:text-white font-medium transition-colors">
              Books
            </Link>
            <Link href="/search?category=toys" className="text-gray-400 hover:text-white font-medium transition-colors">
              Toys
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#12121a] border-t border-white/[0.04]">
          <div className="container py-4 space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="block py-2.5 px-4 rounded-xl text-white font-medium hover:bg-[#1a1a26] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/search" className="block py-2.5 px-4 rounded-xl text-white font-medium hover:bg-[#1a1a26] transition-colors" onClick={() => setIsMenuOpen(false)}>
              All Products
            </Link>
            <Link href="/cart" className="block py-2.5 px-4 rounded-xl text-white font-medium hover:bg-[#1a1a26] transition-colors" onClick={() => setIsMenuOpen(false)}>
              Cart
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
