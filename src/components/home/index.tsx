'use client';
import React, { useEffect, useState } from 'react';
import ArticleList from './Article';
import { getHomeApi } from '@/utils/api';
import { NewsResponse } from '@/utils/type';

const HomePage: React.FC = () => {
  const [datas, setDatas] = useState<NewsResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHomeApi();
      setDatas(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Welcome to NewsApp Blog</h1>
        <p className="mt-2">Stay updated with the latest news.</p>
      </div>
      {datas ? <ArticleList datas={datas} /> : <p>Loading...</p>}
    </>
  );
};

export default HomePage;
