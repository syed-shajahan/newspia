import React from "react";
import ArticleList from "@/components/home/Article";
import { searchAPi } from "@/utils/api";

// eslint-disable-next-line @next/next/no-async-client-component
const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const data = await searchAPi(searchParams.q);
  return (
    <div>
      <ArticleList datas={data} />
    </div>
  );
};

export default Page;
