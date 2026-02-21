'use client';

import Link from 'next/link';
import { Product } from '../data/products';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Calculate discount percentage properly
  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : product.discount || 0;

  return (
    <Link href={`/products/${product.id}`}>
      <div className="card h-full flex flex-col group">
        {/* Image */}
        <div className="product-image-container">
          <img 
            src={product.image} 
            alt={product.name}
          />
          
          {/* Discount Badge - More Prominent */}
          {discountPercent > 0 && (
            <div className="absolute -top-1 -left-1 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg rounded-tl-lg shadow-lg">
              {discountPercent}% OFF
            </div>
          )}
          
          {/* Prime Badge */}
          {product.prime && (
            <div className="absolute top-2.5 right-2.5">
              <span className="text-[10px] font-bold text-blue-400">prime</span>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-3.5 flex-1 flex flex-col">
          <h3 className="font-medium text-white text-sm leading-snug line-clamp-2 mb-2 hover:text-blue-400 transition-colors">
            {product.name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-2.5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">({product.reviewCount.toLocaleString()})</span>
          </div>
          
          {/* Price */}
          <div className="mb-2">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-white">₹{product.price.toLocaleString('en-IN')}</span>
              {product.originalPrice && (
                <span className="text-xs text-gray-500 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            {/* Save amount */}
            {product.originalPrice && (
              <div className="text-xs text-green-400 mt-0.5">
                Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
              </div>
            )}
          </div>
          
          {/* Delivery */}
          <div className="text-xs text-gray-500 mb-auto">
            <span className="text-green-400">Free delivery</span> by Tomorrow
          </div>
          
          {/* Add to Cart */}
          <button className="mt-3 w-full btn btn-secondary text-xs py-2.5">
            <ShoppingCart className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}
