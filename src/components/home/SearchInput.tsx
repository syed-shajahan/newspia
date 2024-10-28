// components/ui/SearchBar.tsx
'use client';

import { useState, FormEvent } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

export const SearchBar = () => {
  const [keywords, setKeywords] = useState<string>('');
  const router = useRouter();

  const searchKeywords = (e: FormEvent) => {
    e.preventDefault();
    if (keywords) {
      router.push(`/search?q=${encodeURIComponent(keywords)} `);
    }
  };

  return (
    <form onSubmit={searchKeywords} className="relative w-full max-w-md">
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Search articles..."
        className="w-full px-4 py-2 text-sm border rounded-md outline-none bg-gray-50 focus:border-gray-500"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black"
        aria-label="Search"
      >
        <BiSearch size={20} />
      </button>
    </form>
  );
};
