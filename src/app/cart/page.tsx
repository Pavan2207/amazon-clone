'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { products } from '../../data/products';
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, Package, Tag } from 'lucide-react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { ...products[0], quantity: 1 },
    { ...products[2], quantity: 1 },
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 49;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f]">
      <Header searchQuery="" setSearchQuery={() => {}} />
      
      <main className="flex-1 pt-24 pb-10">
        <div className="container">
          <h1 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <ShoppingCart className="w-7 h-7" />
            Shopping Cart ({cartItems.length})
          </h1>

          {cartItems.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="card p-4 flex gap-4">
                    <Link href={`/products/${item.id}`} className="w-24 h-24 bg-[#1a1a26] rounded-xl flex items-center justify-center p-3 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </Link>
                    
                    <div className="flex-1 min-w-0">
                      <Link href={`/products/${item.id}`} className="font-medium text-white hover:text-blue-400 line-clamp-2">
                        {item.name}
                      </Link>
                      
                      <div className="text-lg font-bold text-white mt-1">₹{item.price.toLocaleString()}</div>
                      
                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 rounded-lg bg-[#1a1a26] flex items-center justify-center text-white hover:bg-[#252532]"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-10 text-center font-semibold text-white">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 rounded-lg bg-[#1a1a26] flex items-center justify-center text-white hover:bg-[#252532]"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="card p-5 sticky top-24">
                  <h2 className="text-lg font-bold text-white mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Subtotal</span>
                      <span className="text-white font-medium">₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Shipping</span>
                      <span className={shipping === 0 ? 'text-green-400' : 'text-white'}>
                        {shipping === 0 ? 'Free' : `₹${shipping}`}
                      </span>
                    </div>
                    {shipping > 0 && (
                      <div className="text-xs text-gray-500 bg-[#1a1a26] p-2 rounded-lg">
                        Free delivery on orders above ₹500
                      </div>
                    )}
                    <div className="border-t border-white/[0.06] pt-3 flex justify-between">
                      <span className="text-white font-semibold">Total</span>
                      <span className="text-white font-bold text-lg">₹{total.toLocaleString()}</span>
                    </div>
                  </div>

                  <Link href="/checkout" className="btn btn-primary w-full mt-5">
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                    <Tag className="w-3 h-3" />
                    Secure checkout
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <Package className="w-20 h-20 text-gray-600 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-white mb-2">Your cart is empty</h2>
              <p className="text-gray-400 mb-6">Looks like you haven't added anything to your cart yet</p>
              <Link href="/search" className="btn btn-primary">
                Start Shopping
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
