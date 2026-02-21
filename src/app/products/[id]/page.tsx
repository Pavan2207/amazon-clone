'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { getProductById } from '../../../data/products';
import { Star, ShoppingCart, Heart, Truck, Shield, RotateCcw, ChevronRight, Minus, Plus, Check } from 'lucide-react';

export default function ProductPage() {
  const params = useParams();
  const product = getProductById(params.id as string);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Calculate discount properly
  const discountPercent = product?.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : product?.discount || 0;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-[#0a0a0f]">
        <Header searchQuery="" setSearchQuery={() => {}} />
        <main className="flex-1 pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Product Not Found</h1>
            <Link href="/search" className="btn btn-primary">Browse Products</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f]">
      <Header searchQuery="" setSearchQuery={() => {}} />
      
      <main className="flex-1 pt-24 pb-10">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/search" className="hover:text-white">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white truncate max-w-[200px]">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="product-image-container" style={{ aspectRatio: '1/1', borderRadius: '24px' }}>
                {/* Big discount badge on image */}
                {discountPercent > 0 && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-lg font-bold px-4 py-2 rounded-xl shadow-xl z-10">
                    {discountPercent}% OFF
                  </div>
                )}
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                />
              </div>
              <div className="flex gap-3 overflow-x-auto no-scrollbar">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                      selectedImage === i ? 'border-blue-500 scale-105' : 'border-transparent hover:border-white/20'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain bg-[#1a1a26]" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="badge badge-blue capitalize">{product.category}</span>
                  {product.prime && <span className="text-xs font-bold text-blue-400">prime</span>}
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">{product.name}</h1>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`}
                    />
                  ))}
                </div>
                <span className="text-white font-semibold">{product.rating}</span>
                <span className="text-gray-400">|</span>
                <span className="text-blue-400 hover:underline cursor-pointer">
                  {product.reviewCount.toLocaleString()} reviews
                </span>
              </div>

              {/* Price - Enhanced */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-white">₹{product.price.toLocaleString('en-IN')}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
                {product.originalPrice && (
                  <div className="flex items-center gap-2">
                    <span className="badge badge-green text-sm">
                      {discountPercent}% Off
                    </span>
                    <span className="text-sm text-green-400 font-medium">
                      Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                    </span>
                  </div>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2">
                {product.inStock ? (
                  <>
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-medium">In Stock</span>
                  </>
                ) : (
                  <span className="text-red-400 font-medium">Out of Stock</span>
                )}
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Quantity</label>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg bg-[#12121a] flex items-center justify-center text-white hover:bg-[#1a1a26]"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-semibold text-white text-lg">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg bg-[#12121a] flex items-center justify-center text-white hover:bg-[#1a1a26]"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <button className="btn btn-primary flex-1">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="btn btn-secondary w-14">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-3 pt-4">
                <div className="text-center p-3 card">
                  <Truck className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                  <div className="text-xs text-gray-400">Free Delivery</div>
                </div>
                <div className="text-center p-3 card">
                  <Shield className="w-6 h-6 text-green-400 mx-auto mb-1" />
                  <div className="text-xs text-gray-400">Secure</div>
                </div>
                <div className="text-center p-3 card">
                  <RotateCcw className="w-6 h-6 text-orange-400 mx-auto mb-1" />
                  <div className="text-xs text-gray-400">Easy Returns</div>
                </div>
              </div>

              {/* Description */}
              <div className="pt-4 border-t border-white/[0.06]">
                <h3 className="font-semibold text-white mb-2">About this item</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
