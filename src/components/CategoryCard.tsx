'use client';

import Link from 'next/link';

interface Category {
  id: string;
  name: string;
  image: string;
}

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/search?category=${category.id}`}>
      <div className="card h-full p-4 text-center group cursor-pointer">
        <div className="category-image mb-3">
          <img 
            src={category.image} 
            alt={category.name}
          />
        </div>
        <h3 className="font-semibold text-white text-sm group-hover:text-blue-400 transition-colors">
          {category.name}
        </h3>
      </div>
    </Link>
  );
}
