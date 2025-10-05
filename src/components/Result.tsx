'use client';

import { useEffect, useState } from 'react';

interface ResultProps {
  message: string | null;
  duration?: number;
}

export default function Result({ message, duration = 3000 }: ResultProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!message) return;

    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [message, duration]);

  if (!message) {
    return null;
  }

  return (
    <div
      role="alert"
      className={`text-center bg-green-200 rounded-lg p-4 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
      {message}
    </div>
  );
}
