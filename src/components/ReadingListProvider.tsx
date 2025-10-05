'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ReadingListContextType {
  favoriteBooks: string[];
  addBook: (title: string) => boolean; // Returns true if book was added, false if already exists
}

const ReadingListContext = createContext<ReadingListContextType | undefined>(
  undefined
);

interface ReadingListProviderProps {
  children: ReactNode;
}

export const ReadingListProvider = ({ children }: ReadingListProviderProps) => {
  const [favoriteBooks, setFavoriteBooks] = useState<string[]>([]);

  const addBook = (title: string): boolean => {
    let wasAdded = false;
    setFavoriteBooks((prevBooks) => {
      // Prevent duplicates by checking if book already exists
      if (prevBooks.includes(title)) {
        wasAdded = false;
        return prevBooks;
      }
      wasAdded = true;
      return [...prevBooks, title];
    });
    return wasAdded;
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
