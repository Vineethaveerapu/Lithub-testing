import { BookType } from '@/utils/types';

interface FeaturedBookProps extends BookType {}

const FeaturedBook = ({ title, author, genre }: FeaturedBookProps) => {
  return (
    <div className="max-w-6xl mx-auto py-3">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to LitHub Website
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the world of literature through our curated collection
        </p>
      </div>

      <section
        role="region"
        aria-label="Featured Book"
        className="bg-amber-200 rounded-2xl p-8 shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Featured Book
          </h2>

          <div className="bg-white rounded-lg p-6  max-w-md mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 mb-2">by {author}</p>
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {genre}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedBook;
