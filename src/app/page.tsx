'use client';

import BookList from '@/components/BookList';
import { books } from '@/data/books';
import { useReadingList } from '@/components/ReadingListProvider';
import FeaturedBook from '@/components/FeaturedBook';

export default function Home() {
  const { addBook } = useReadingList();

  const handleAdd = (title: string) => {
    addBook(title);
  };

  const featuredBook = books[Math.floor(Math.random() * books.length)];

  return (
    <div className="space-y-4">
      <FeaturedBook {...featuredBook} />
      <BookList
        books={books}
        onAdd={handleAdd}
      />
    </div>
  );
}
