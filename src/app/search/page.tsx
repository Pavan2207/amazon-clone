import { Suspense } from 'react';
import SearchContent from './SearchContent';

export const dynamic = 'force-dynamic';

function SearchLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]">
      <div className="text-white">Loading...</div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchLoading />}>
      <SearchContent />
    </Suspense>
  );
}
