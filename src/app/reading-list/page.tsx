'use client';
import ReadingList from '@/components/ReadingList';
import { useState, useEffect } from 'react';

export default function ReadingListPage() {
  const books = [] as string[];

  return (
    <div>
      <ReadingList books={books} />
    </div>
  );
}
