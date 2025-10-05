'use client';

import BookList from '@/components/BookList';
import { books } from '@/data/books';
import { useReadingList } from '@/components/ReadingListProvider';
import FeaturedBook from '@/components/FeaturedBook';
import Result from '@/components/Result';
import { useState, useEffect } from 'react';

export default function Home() {
  const { addBook } = useReadingList();
  const [message, setMessage] = useState<string | null>(null);
  const [featuredBook, setFeaturedBook] = useState(books[0]); // Default to first book

  const handleAdd = (title: string) => {
    const wasAdded = addBook(title);
    if (wasAdded) {
      setMessage(`"${title}" added to your reading list!`);
    } else {
      setMessage(`"${title}" is already in your reading list!`);
    }
  };

  // Set random featured book only on client side to avoid hydration mismatch
  useEffect(() => {
    setFeaturedBook(books[Math.floor(Math.random() * books.length)]);
  }, []);

  return (
    <div className="space-y-4">
      <FeaturedBook {...featuredBook} />
      <BookList
        books={books}
        onAdd={handleAdd}
      />
      <Result message={message} />
    </div>
  );
}
