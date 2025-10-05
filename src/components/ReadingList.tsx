import { ReadingListProps } from '@/utils/types';

const ReadingList = ({ books = [] }: ReadingListProps) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">My Reading List</h2>

      {books.length === 0 ? (
        <p className="text-gray-600 text-lg">
          You haven't added any books yet.
        </p>
      ) : (
        <ul className="space-y-3">
          {books.map((book, index) => (
            <li
              key={`${book}-${index}`}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-gray-900 font-medium">{book}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ReadingList;
