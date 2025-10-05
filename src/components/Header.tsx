import React from 'react';

interface HeaderProps {
  title: string;
  logo?: string; // optional logo prop
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="flex items-center justify-center gap-9 p-4 px-8 border-b border-gray-200">
      <img
        src="/library.svg"
        alt="Logo"
        data-testid="logo_image"
        className="w-8 h-8 sm:w-10 sm:h-10"
      />
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500">
        {title}
      </h1>
    </header>
  );
};

export default Header;
