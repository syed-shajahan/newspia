import Link from 'next/link';
import React from 'react';
import { searchAPI } from '@/utils/api';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Article } from '@/utils/type';

const RandomNews = async () => {
  const data = await searchAPI('random news');

  return (
    <>
      <div className="block w-[33.3%] mt-[50px] ps-[10px] ml-[10px] border-l sticky top-20">
        {data?.articles?.slice(0, 10).map((article: Article, index: number) => {
          return (
            <div
              key={index}
              className="bg-white w-full p-2 flex dark:bg-[#101010] border mb-5 flex-shrink-0  rounded-lg overflow-hidden transition-transform transform "
            >
              <div className="block">
                <Link
                  href={article.url}
                  passHref
                  className="font-bold text-[13px] leading-[20px] text-blue-600 dark:text-[#03A9F4] hover:underline"
                >
                  {article.title}
                </Link>

                <p className="text-sm  text-gray-700 dark:text-[#fff] mt-2 text-[14px]">
                  {article.description} <FaArrowRightLong className="inline-block" />
                </p>

                <span>{article.publishedAt}</span>
              </div>
              <div className="relative w-fulloverflow-hidden w-[200px] h-[200px]">
                <img src={article.urlToImage} alt={article?.title} className="flex-shrink-0" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RandomNews;
