'use client';

import { useState } from 'react';
import { getRandomQuote, type Quote } from '@/src/lib/quoteService';
import QuoteCard from './QuoteCard';

/**
 * Client component that handles quote fetching and state management.
 * Provides the "New Quote" button functionality.
 */
export default function QuoteRoulette() {
  const [quote, setQuote] = useState<Quote>(() => getRandomQuote());
  const [isLoading, setIsLoading] = useState(false);

  const handleNewQuote = () => {
    setIsLoading(true);
    // Small delay to provide visual feedback
    setTimeout(() => {
      setQuote(getRandomQuote());
      setIsLoading(false);
    }, 150);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <QuoteCard quote={quote} />
      <button
        onClick={handleNewQuote}
        disabled={isLoading}
        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg shadow-md transition-colors duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {isLoading ? 'Loading...' : 'New Quote'}
      </button>
    </div>
  );
}

