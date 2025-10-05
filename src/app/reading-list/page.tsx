'use client';
import ReadingList from '@/components/ReadingList';
import { useReadingList } from '@/components/ReadingListProvider';

export default function ReadingListPage() {
  const { favoriteBooks } = useReadingList();

  return (
    <div>
      <ReadingList books={favoriteBooks} />
    </div>
  );
}
