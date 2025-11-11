import { Quote } from '@/src/lib/quoteService';

/**
 * Props for the QuoteCard component.
 */
export interface QuoteCardProps {
  quote: Quote;
}

/**
 * Presentational component that displays a quote and its author.
 * The quote is displayed prominently, with the author shown below
 * in a smaller, visually separated format.
 *
 * @param props - Component props containing the quote to display
 */
export default function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-3xl w-full mx-4">
      <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 leading-relaxed mb-6">
        &ldquo;{quote.text}&rdquo;
      </blockquote>
      {quote.author && (
        <p className="text-lg md:text-xl text-gray-600 text-right italic">
          &mdash; {quote.author}
        </p>
      )}
    </div>
  );
}

