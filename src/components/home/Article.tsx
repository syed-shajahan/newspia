import Link from 'next/link';
import { FC } from 'react';
import { NewsResponse } from '@/utils/type';
interface ArticleListProps {
  datas: NewsResponse | null;
}
const ArticleList: FC<ArticleListProps> = ({ datas }) => {
  return (
    <div className="columns-3">
      {datas?.articles.map((article, index) => (
        <div
          key={index}
          className="bg-white mb-5 break shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
        >
          {/* Image Section */}
          {/* <div className="relative w-full overflow-hidden">
            <img src={article.urlToImage} alt={article?.title} />
          </div> */}

          {/* Content Section */}
          <div className="p-4">
            <Link href={article.url} passHref className="font-bold text-lg text-blue-600 hover:underline">
              {article.title}
            </Link>
            <p className="text-sm text-gray-700 mt-2">{article.description}</p>
            <Link href={article.url} passHref>
              <button className="mt-4 px-4 py-2 bg-black text-white rounded transition duration-200 hover:bg-blue-700">
                Read More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
