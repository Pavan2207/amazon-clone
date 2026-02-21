'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { products } from '../../data/products';
import { CreditCard, Truck, MapPin, Check, ChevronRight, Package } from 'lucide-react';

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState('1');
  
  const cartItems = [
    { ...products[0], quantity: 1 },
    { ...products[2], quantity: 1 },
  ];

  const addresses = [
    { id: '1', name: 'Pavan Kumar', address: '123 Main Street, Apt 4B', city: 'Hyderabad', state: 'Telangana', pincode: '500001', phone: '9876543210' },
    { id: '2', name: 'Pavan Kumar', address: '456 Tech Park, Floor 3', city: 'Bangalore', state: 'Karnataka', pincode: '560001', phone: '9876543210' },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 49;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f]">
      <Header searchQuery="" setSearchQuery={() => {}} />
      
      <main className="flex-1 pt-24 pb-10">
        <div className="container">
          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {['Address', 'Payment', 'Review'].map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step > i + 1 ? 'bg-green-500 text-white' : step === i + 1 ? 'bg-blue-500 text-white' : 'bg-[#1a1a26] text-gray-500'
                }`}>
                  {step > i + 1 ? <Check className="w-4 h-4" /> : i + 1}
                </div>
                <span className={`text-sm ${step >= i + 1 ? 'text-white' : 'text-gray-500'}`}>{label}</span>
                {i < 2 && <ChevronRight className="w-4 h-4 text-gray-600" />}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {step === 1 && (
                <div className="card p-6">
                  <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Delivery Address
                  </h2>
                  
                  <div className="space-y-3">
                    {addresses.map((addr) => (
                      <label
                        key={addr.id}
                        className={`block p-4 rounded-xl border cursor-pointer transition-all ${
                          selectedAddress === addr.id 
                            ? 'border-blue-500 bg-blue-500/10' 
                            : 'border-white/[0.06] hover:border-white/[0.12]'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <input
                            type="radio"
                            name="address"
                            value={addr.id}
                            checked={selectedAddress === addr.id}
                            onChange={() => setSelectedAddress(addr.id)}
                            className="mt-1"
                          />
                          <div>
                            <div className="font-semibold text-white">{addr.name}</div>
                            <div className="text-sm text-gray-400 mt-1">{addr.address}</div>
                            <div className="text-sm text-gray-400">{addr.city}, {addr.state} - {addr.pincode}</div>
                            <div className="text-sm text-gray-500 mt-1">Phone: {addr.phone}</div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>

                  <button onClick={() => setStep(2)} className="btn btn-primary w-full mt-6">
                    Continue to Payment
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="card p-6">
                  <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Payment Method
                  </h2>
                  
                  <div className="space-y-3">
                    {['UPI', 'Credit/Debit Card', 'Net Banking', 'Cash on Delivery'].map((method) => (
                      <label
                        key={method}
                        className="block p-4 rounded-xl border border-white/[0.06] hover:border-white/[0.12] cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <input type="radio" name="payment" defaultValue={method} className="accent-blue-500" />
                          <span className="text-white">{method}</span>
                        </div>
                      </label>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button onClick={() => setStep(1)} className="btn btn-secondary flex-1">
                      Back
                    </button>
                    <button onClick={() => setStep(3)} className="btn btn-primary flex-1">
                      Continue to Review
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="card p-6">
                  <h2 className="text-lg font-bold text-white mb-4">Review Order</h2>
                  
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 p-3 bg-[#1a1a26] rounded-xl">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded-lg" />
                        <div>
                          <div className="font-medium text-white text-sm">{item.name}</div>
                          <div className="text-white font-bold mt-1">₹{item.price.toLocaleString()}</div>
                          <div className="text-gray-500 text-sm">Qty: {item.quantity}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button onClick={() => setStep(2)} className="btn btn-secondary flex-1">
                      Back
                    </button>
                    <button className="btn btn-primary flex-1">
                      Place Order
                      <Check className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="card p-5 sticky top-24">
                <h2 className="text-lg font-bold text-white mb-4">Order Summary</h2>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal ({cartItems.length} items)</span>
                    <span className="text-white">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Shipping</span>
                    <span className={shipping === 0 ? 'text-green-400' : 'text-white'}>
                      {shipping === 0 ? 'Free' : `₹${shipping}`}
                    </span>
                  </div>
                  <div className="border-t border-white/[0.06] pt-3 flex justify-between">
                    <span className="text-white font-semibold">Total</span>
                    <span className="text-white font-bold text-lg">₹{total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-blue-500/10 rounded-lg">
                  <div className="flex items-center gap-2 text-blue-400 text-sm">
                    <Truck className="w-4 h-4" />
                    Free delivery on orders above ₹500
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
