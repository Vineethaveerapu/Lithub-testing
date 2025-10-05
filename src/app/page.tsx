'use client';

import BookList from '@/components/BookList';
import { books } from '@/data/books';
import { useReadingList } from '@/components/ReadingListProvider';

export default function Home() {
  const { addBook } = useReadingList();

  const handleAdd = (title: string) => {
    addBook(title);
  };

  return (
    <div>
      <BookList
        books={books}
        onAdd={handleAdd}
      />
    </div>
  );
}
