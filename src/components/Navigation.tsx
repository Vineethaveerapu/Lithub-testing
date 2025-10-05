'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center gap-4 text-xl py-4 px-8 bg-amber-200">
      <Link
        href="/"
        className={`transition-colors duration-200 ${
          pathname === '/'
            ? 'text-blue-600 font-semibold underline underline-offset-4'
            : 'text-gray-700 hover:text-blue-500'
        }`}>
        Home
      </Link>
      <Link
        href="/reading-list"
        className={`transition-colors duration-200 ${
          pathname === '/reading-list'
            ? 'text-blue-600 font-semibold underline underline-offset-4'
            : 'text-gray-700 hover:text-blue-500'
        }`}>
        Reading List
      </Link>
    </nav>
  );
};

export default Navigation;
