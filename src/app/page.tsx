'use client';

import { products, categories } from '../data/products';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import Footer from '../components/Footer';

export default function Home() {
  // Get top products from each category
  const getTopProductsByCategory = (categoryId: string, limit: number = 5) => {
    return products
      .filter(p => p.category === categoryId)
      .slice(0, limit);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f]">
      <Header searchQuery="" setSearchQuery={() => {}} />
      
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-bold text-white mb-6 section-title">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Electronics Section */}
      <section className="section">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white section-title">
              Electronics
            </h2>
            <a href="/search?category=electronics" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
              View All →
            </a>
          </div>
          <div className="grid-products">
            {getTopProductsByCategory('electronics', 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Fashion Section */}
      <section className="section">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white section-title">
              Fashion
            </h2>
            <a href="/search?category=fashion" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
              View All →
            </a>
          </div>
          <div className="grid-products">
            {getTopProductsByCategory('fashion', 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Home & Kitchen Section */}
      <section className="section">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white section-title">
              Home & Kitchen
            </h2>
            <a href="/search?category=home" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
              View All →
            </a>
          </div>
          <div className="grid-products">
            {getTopProductsByCategory('home', 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="section">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white section-title">
              Books
            </h2>
            <a href="/search?category=books" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
              View All →
            </a>
          </div>
          <div className="grid-products">
            {getTopProductsByCategory('books', 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Toys & Games Section */}
      <section className="section">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white section-title">
              Toys & Games
            </h2>
            <a href="/search?category=toys" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
              View All →
            </a>
          </div>
          <div className="grid-products">
            {getTopProductsByCategory('toys', 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Beauty Section */}
      <section className="section">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white section-title">
              Beauty
            </h2>
            <a href="/search?category=beauty" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
              View All →
            </a>
          </div>
          <div className="grid-products">
            {getTopProductsByCategory('beauty', 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
