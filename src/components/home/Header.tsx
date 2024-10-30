// import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';
import { SearchBar } from './SearchInput';
import { ModeToggle } from '../ModeToggle';

const Header: FC = () => {
  return (
    <nav className=" border-[#EEE] dark:border-[#1b1b1b]  bg-[#ffffff99] dark:!bg-[#0000004b]  z-10 sticky top-0  p-4 border-b backdrop-blur-[3px]">
      <div className="container px-5 mx-auto flex justify-between items-center">
        {/* <Link href="/">
          <div className="relative w-[200px] h-[50px]">
            <Image src="/img/news-u-logo.webp" alt="logo" fill className="object-contain" />
          </div>
        </Link> */}
        <Link href={'/'}>
          <h1 className="text-[45px] text-[#000] dark:text-[#fff] ">NewsPia</h1>
        </Link>

        <div className="flex items-center">
          <SearchBar />

          <div className="ms-2">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
