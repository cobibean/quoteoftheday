// Import the quotes data directly to ensure true randomness
// The package's getQuote() calculates random index once at module load,
// so we access the data array directly and generate a new random index each call
import quotesData from 'inspirational-quotes/data/data.json';

/**
 * Represents a quote with its text and author.
 */
export type Quote = {
  text: string;
  author: string | null;
};

/**
 * Fallback quote used when the package fails or returns invalid data.
 */
const FALLBACK_QUOTE: Quote = {
  text: 'The only way to do great work is to love what you do.',
  author: 'Steve Jobs',
};

/**
 * Normalizes author information from the inspirational-quotes package.
 * Handles cases where author might be undefined, null, or empty string.
 *
 * @param author - The author string from the package (may be undefined/null/empty)
 * @returns Normalized author string or null
 */
function normalizeAuthor(author: string | undefined | null): string | null {
  if (!author || typeof author !== 'string' || author.trim() === '') {
    return null;
  }
  return author.trim();
}

/**
 * Generates a random integer between min and max (inclusive).
 *
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Random integer
 */
function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Fetches a random quote from the inspirational-quotes package data.
 * Accesses the data array directly and generates a new random index each call
 * to ensure different quotes on each invocation.
 *
 * @returns A Quote object with text and author (author may be null)
 */
export function getRandomQuote(): Quote {
  try {
    // Ensure quotesData is available and is an array
    if (!quotesData || !Array.isArray(quotesData) || quotesData.length === 0) {
      return FALLBACK_QUOTE;
    }

    // Generate a new random index each time this function is called
    const randomIndex = randomInt(0, quotesData.length - 1);
    const quoteData = quotesData[randomIndex];

    // Ensure we have valid data
    if (!quoteData || typeof quoteData.text !== 'string' || quoteData.text.trim() === '') {
      return FALLBACK_QUOTE;
    }

    return {
      text: quoteData.text.trim(),
      author: normalizeAuthor(quoteData.from), // The package uses 'from' field for author
    };
  } catch (error) {
    // If anything goes wrong, return the fallback quote
    console.error('Error fetching quote:', error);
    return FALLBACK_QUOTE;
  }
}

