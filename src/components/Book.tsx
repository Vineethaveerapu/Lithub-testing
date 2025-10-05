'use client';
import { BookProps } from '@/utils/types';

const Book = ({ title, author, genre, onAdd }: BookProps) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">by {author}</p>
      <p className="text-sm text-gray-500 mb-3">{genre}</p>
      <button
        onClick={() => onAdd(title)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200">
        Add to Library
      </button>
    </div>
  );
};

export default Book;
