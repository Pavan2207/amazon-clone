'use client';

import Link from 'next/link';
import { ArrowRight, Star, Truck, Shield, RefreshCw, Zap, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f]"></div>
      
      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[520px] py-4">
          {/* Left Content */}
          <div className="lg:col-span-5 space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">Biggest Sale of the Year</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight">
              Discover
              <br />
              <span className="text-gradient">Amazing Products</span>
            </h1>
            
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-sm">
              Shop the latest trends in electronics, fashion, home & kitchen and more. 
              Great prices, fast delivery.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <Link 
                href="/search" 
                className="btn btn-primary"
              >
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/search?category=fashion" 
                className="btn btn-secondary text-sm"
              >
                Explore Fashion
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-6 pt-4">
              <div>
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm text-gray-500">Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm text-gray-500">Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white flex items-center gap-1">
                  4.9 <Star className="w-4 h-4 fill-blue-400 text-blue-400" />
                </div>
                <div className="text-sm text-gray-500">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Products */}
          <div className="lg:col-span-7 hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {/* Featured Product 1 */}
              <Link href="/products/1" className="card p-3 group">
                <div className="product-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop" 
                    alt="MacBook"
                    className="hero-product-image"
                  />
                </div>
                <h3 className="font-semibold text-white text-sm line-clamp-2 mb-1 mt-3">
                  Apple MacBook Pro 16" M3 Max
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-white">₹3,49,900</span>
                  <span className="text-xs text-gray-500 line-through">₹3,99,900</span>
                </div>
                <div className="badge badge-orange text-[10px] mt-1.5 w-fit">12% Off</div>
              </Link>

              {/* Featured Product 2 */}
              <Link href="/products/3" className="card p-3 group">
                <div className="product-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop" 
                    alt="Samsung Galaxy"
                    className="hero-product-image"
                  />
                </div>
                <h3 className="font-semibold text-white text-sm line-clamp-2 mb-1 mt-3">
                  Samsung Galaxy S24 Ultra
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-white">₹1,39,999</span>
                  <span className="text-xs text-gray-500 line-through">₹1,59,999</span>
                </div>
                <div className="badge badge-orange text-[10px] mt-1.5 w-fit">12% Off</div>
              </Link>

              {/* Featured Product 3 */}
              <Link href="/products/2" className="card p-3 group">
                <div className="product-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop" 
                    alt="Sony Headphones"
                    className="hero-product-image"
                  />
                </div>
                <h3 className="font-semibold text-white text-sm line-clamp-2 mb-1 mt-3">
                  Sony WH-1000XM5
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-white">₹27,990</span>
                  <span className="text-xs text-gray-500 line-through">₹34,990</span>
                </div>
                <div className="badge badge-green text-[10px] mt-1.5 w-fit">20% Off</div>
              </Link>

              {/* Featured Product 4 */}
              <Link href="/products/4" className="card p-3 group">
                <div className="product-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop" 
                    alt="Nike Shoes"
                    className="hero-product-image"
                  />
                </div>
                <h3 className="font-semibold text-white text-sm line-clamp-2 mb-1 mt-3">
                  Nike Air Max 270
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-white">₹11,995</span>
                  <span className="text-xs text-gray-500 line-through">₹14,995</span>
                </div>
                <div className="badge badge-pink text-[10px] mt-1.5 w-fit">20% Off</div>
              </Link>
            </div>
          </div>
        </div>

        {/* Features Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-6">
          <div className="flex items-center gap-3 p-3 card">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
              <Truck className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <div className="font-semibold text-white text-sm">Free Delivery</div>
              <div className="text-xs text-gray-500">On ₹500+ orders</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 card">
            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <div className="font-semibold text-white text-sm">Secure Payment</div>
              <div className="text-xs text-gray-500">100% protected</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 card">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
              <RefreshCw className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <div className="font-semibold text-white text-sm">Easy Returns</div>
              <div className="text-xs text-gray-500">7 day policy</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 card">
            <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-pink-400" />
            </div>
            <div>
              <div className="font-semibold text-white text-sm">Express Delivery</div>
              <div className="text-xs text-gray-500">Same day</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
