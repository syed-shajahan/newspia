// import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';
import { SearchBar } from './SearchInput';

const Header: FC = () => {
  return (
    <nav className="flex justify-between items-center  z-10 sticky top-0 bg-[#fff] py-4">
      <Link href="/">
        <div className="relative w-[200px] h-[50px]">
          {/* <Image src="/img/news-u-logo.webp" alt="logo" fill className="object-contain" /> */}

          <Link href={'/'}>
            <h1 className="text-[45px] text-[#000] ">NewsPia</h1>
          </Link>
        </div>
      </Link>
      <SearchBar />
    </nav>
  );
};

export default Header;
