'use client';
import React from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const Categories = () => {
  const CatData = ['technology', 'movies', 'sports', 'studies', 'ai', 'space', 'health', 'fashion', 'music', 'gaming'];
  const router = useRouter();

  const handleCat = (catData: string) => {
    router.push(`/search?q=${encodeURIComponent(catData)}`);
    console.log(catData, 'is here');
  };

  return (
    <div className="flex items-center my-5 gap-2 justify-center container">
      {CatData.map((data, index) => (
        <Button className="rounded-[25px]" key={index} onClick={() => handleCat(data)}>
          {data.charAt(0).toUpperCase() + data.slice(1).toLowerCase()}
        </Button>
      ))}
    </div>
  );
};

export default Categories;
