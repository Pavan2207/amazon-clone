'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import Footer from '../../components/Footer';
import { products, categories } from '../../data/products';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function SearchContent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [showFilters, setShowFilters] = useState(false);

  // Update selected category when URL parameter changes
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f]">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="flex-1 pt-24 pb-10">
        <div className="container">
          {/* Search Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white mb-2">
              {searchQuery ? `Results for "${searchQuery}"` : 'All Products'}
            </h1>
            <p className="text-gray-400 text-sm">
              Showing {filteredProducts.length} products
            </p>
          </div>

          <div className="flex gap-6">
            {/* Filters Sidebar - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Category Filter */}
                <div className="card p-4">
                  <h3 className="font-semibold text-white mb-4">Category</h3>
                  <div className="space-y-2">
                    <Link
                      href="/search"
                      className={`w-full text-left block px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === 'all' 
                          ? 'bg-blue-500/20 text-blue-400' 
                          : 'text-gray-400 hover:text-white hover:bg-[#1a1a26]'
                      }`}
                    >
                      All Categories
                    </Link>
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/search?category=${cat.id}`}
                        className={`w-full text-left block px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === cat.id 
                            ? 'bg-blue-500/20 text-blue-400' 
                            : 'text-gray-400 hover:text-white hover:bg-[#1a1a26]'
                        }`}
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="card p-4">
                  <h3 className="font-semibold text-white mb-4">Price Range</h3>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="100000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="w-full accent-blue-500"
                    />
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>₹0</span>
                      <span>₹{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 mb-4 rounded-lg bg-[#12121a] text-white text-sm"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              {/* Mobile Filters */}
              {showFilters && (
                <div className="lg:hidden card p-4 mb-4 space-y-4">
                  <div>
                    <h3 className="font-semibold text-white mb-3">Category</h3>
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href="/search"
                        onClick={() => setSelectedCategory('all')}
                        className={`px-3 py-1.5 rounded-lg text-xs ${
                          selectedCategory === 'all' ? 'bg-blue-500 text-white' : 'bg-[#1a1a26] text-gray-400'
                        }`}
                      >
                        All
                      </Link>
                      {categories.map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/search?category=${cat.id}`}
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs ${
                            selectedCategory === cat.id ? 'bg-blue-500 text-white' : 'bg-[#1a1a26] text-gray-400'
                          }`}
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {filteredProducts.length > 0 ? (
                <div className="grid-products">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
                  <p className="text-gray-400">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
