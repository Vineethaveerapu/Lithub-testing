'use client';

import BookList from '@/components/BookList';
import { books } from '@/data/books';

export default function Home() {
  const handleAdd = (title: string) => {
    console.log(title);
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
