import React, { FC } from 'react';
import ArticleList from './Article';
import { NewsResponse } from '@/utils/type';

interface IhomeProps {
  datas: NewsResponse | null;
}

const HomePage: FC<IhomeProps> = ({ datas }) => {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Welcome to NewsPia Blog</h1>
        <p className="mt-2">Stay updated with the latest news.</p>
      </div>
      {datas ? (
        <ArticleList datas={datas} />
      ) : (
        <p className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">Loading...</p>
      )}
    </>
  );
};

export default HomePage;
