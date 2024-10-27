import Link from "next/link";
import { FC } from "react";
import { NewsResponse } from "@/utils/type";
// import Image from "next/image"; 

const ArticleList: FC<{ datas: NewsResponse }> = ({ datas }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {datas.articles.map((article, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          {/* Image Section */}
          <div className="relative w-full h-[200px]">
            <Image
              src={article?.urlToImage || "/img/news-u-logo.webp"}
              alt={article?.title}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 100vw"
              className="object-cover"
            />
          </div>

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
