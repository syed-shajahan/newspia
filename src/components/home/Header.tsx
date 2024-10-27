import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import { SearchBar } from "./SearchInput";

const Header: FC = () => {
  return (
    <nav className="flex justify-between items-center py-1">
      <Link href="/">
        <div className="relative w-[200px] h-[50px]">
          <Image
            src="/img/news-u-logo.webp"
            alt="logo"
            fill
            className="object-contain"
          />
          {/* <h1>NewsPia</h1> */}
        </div>
      </Link>
      <SearchBar />
    </nav>
  );
};

export default Header;
