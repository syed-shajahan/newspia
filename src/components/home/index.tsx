import React, { FC } from 'react';
import ArticleList from './Article';
import { NewsResponse } from '@/utils/type';
import { HOME } from '@/utils/enum';

interface IhomeProps {
  datas: NewsResponse | null;
}

const HomePage: FC<IhomeProps> = ({ datas }) => {
  console.log(datas, 'test');
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">{HOME.HOME_TITLE}</h1>
        <p className="mt-2">{HOME.HOME_SUBTITLE}</p>
      </div>
      {datas ? (
        <ArticleList datas={datas} />
      ) : (
        <p className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">{HOME.LOADING}</p>
      )}
    </>
  );
};

export default HomePage;
