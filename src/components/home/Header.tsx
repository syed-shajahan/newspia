// import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';
import { SearchBar } from './SearchInput';
import { ModeToggle } from '../ModeToggle';

const Header: FC = () => {
  return (
    <nav className="flex justify-between items-center  z-10 sticky top-0  p-4 border-b backdrop-blur-[3px]">
      <Link href="/">
        <div className="relative w-[200px] h-[50px]">
          {/* <Image src="/img/news-u-logo.webp" alt="logo" fill className="object-contain" /> */}

          <Link href={'/'}>
            <h1 className="text-[45px] text-[#000] dark:text-[#fff] ">NewsPia</h1>
          </Link>
        </div>
      </Link>

      <div className="flex items-center">
        <SearchBar />

        <div className="ms-2">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Header;
