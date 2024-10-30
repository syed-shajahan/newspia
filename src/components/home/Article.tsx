'use client';
import Link from 'next/link';
import { FC, useState } from 'react';
import { NewsResponse } from '@/utils/type';
import { Button } from '../ui/button';
import { HOME } from '@/utils/enum';
// import Image from 'next/image';

interface ArticleListProps {
  datas: NewsResponse | null;
}
const ArticleList: FC<ArticleListProps> = ({ datas }) => {
  const [visibleCount, setVisibleCount] = useState(30);

  const loadMoreArticles = () => {
    setVisibleCount((prev) => prev + 30);
  };
  console.log(datas?.articles.slice(0, visibleCount));
  return (
    <>
      <div className="columns-1 lg:columns-2">
        {datas?.articles.slice(0, visibleCount).map((article, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#101010] border mb-5 break  rounded-lg overflow-hidden transition-transform transform "
          >
            <div className="relative w-full pt-[50%] overflow-hidden">
              <img src={article.urlToImage} alt={article?.title} className="object-cover absolute top-0 left-0 w-full h-full" />
            </div>
            <div className="p-4">
              <Link href={article.url} passHref className="font-bold text-lg text-blue-600 dark:text-[#03A9F4] hover:underline">
                {article.title}
              </Link>
              <p className="text-sm text-gray-700 dark:text-[#fff] mt-2">{article.description}</p>
              <Link href={article.url} passHref>
                <Button className="mt-4 px-4 py-2 bg-black text-white rounded transition duration-200 hover:bg-blue-700">
                  {HOME.READ_MORE}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < (datas?.articles.length || 0) && (
        <Button
          className="my-4 mx-auto block p-4 h-auto w-[200px]  rounded-[25px] bg-transparent dark:border-[#ffffffcb] border-[#101010] border-[1px] dark:text-white text-[#101010]  transition duration-200 dark:hover:bg-[#03A9F4] hover:bg-blue-600"
          onClick={loadMoreArticles}
        >
          {HOME.SHOW_MORE} of{' '}
          <span>
            {visibleCount}/ {datas?.articles.length}{' '}
          </span>
        </Button>
      )}
    </>
  );
};

export default ArticleList;
