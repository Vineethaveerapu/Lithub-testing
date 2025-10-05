'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ReadingListContextType {
  favoriteBooks: string[];
  addBook: (title: string) => void;
}

const ReadingListContext = createContext<ReadingListContextType | undefined>(
  undefined
);

interface ReadingListProviderProps {
  children: ReactNode;
}

export const ReadingListProvider = ({ children }: ReadingListProviderProps) => {
  const [favoriteBooks, setFavoriteBooks] = useState<string[]>([]);

  const addBook = (title: string) => {
    setFavoriteBooks((prevBooks) => {
      // Prevent duplicates by checking if book already exists
      if (prevBooks.includes(title)) {
        return prevBooks;
      }
      return [...prevBooks, title];
    });
  };

  const value: ReadingListContextType = {
    favoriteBooks,
    addBook,
  };

  return (
    <ReadingListContext.Provider value={value}>
      {children}
    </ReadingListContext.Provider>
  );
};

export const useReadingList = (): ReadingListContextType => {
  const context = useContext(ReadingListContext);
  if (context === undefined) {
    throw new Error('useReadingList must be used within a ReadingListProvider');
  }
  return context;
};
