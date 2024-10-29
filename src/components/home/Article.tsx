'use client';
import Link from 'next/link';
import { FC, useState } from 'react';
import { NewsResponse } from '@/utils/type';
import { Button } from '../ui/button';
import { HOME } from '@/utils/enum';
// import Image from "next/image";
interface ArticleListProps {
  datas: NewsResponse | null;
}
const ArticleList: FC<ArticleListProps> = ({ datas }) => {
  const [visibleCount, setVisibleCount] = useState(30);

  const loadMoreArticles = () => {
    setVisibleCount((prev) => prev + 30);
  };
  return (
    <>
      <div className="columns-2 lg:columns-3">
        {datas?.articles.slice(0, visibleCount).map((article, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#101010] border mb-5 break  rounded-lg overflow-hidden transition-transform transform "
          >
            {/* Image Section */}
            <div className="relative w-full overflow-hidden">
              <img src={article.urlToImage} alt={article?.title} />
            </div>

            {/* Content Section */}
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
          {HOME.LOAD_MORE} of {' '}
          <span>
             {visibleCount}/ {datas?.articles.length}{' '}
          </span>
        </Button>
      )}
    </>
  );
};

export default ArticleList;
