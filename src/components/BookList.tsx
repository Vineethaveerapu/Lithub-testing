'use client';
import { BookListProps } from '@/utils/types';
import Book from './Book';

const BookList = ({ books, onAdd }: BookListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book) => (
        <Book
          key={book.title}
          {...book}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
};

export default BookList;
