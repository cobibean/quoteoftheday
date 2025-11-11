import { getRandomQuote, type Quote } from '@/src/lib/quoteService';

describe('quoteService', () => {
  describe('getRandomQuote', () => {
    it('should return an object with text and author properties', () => {
      const quote = getRandomQuote();
      
      expect(quote).toHaveProperty('text');
      expect(quote).toHaveProperty('author');
      expect(typeof quote.text).toBe('string');
      expect(quote.text.length).toBeGreaterThan(0);
    });

    it('should handle missing authors gracefully', () => {
      // Run multiple times to catch edge cases
      for (let i = 0; i < 10; i++) {
        const quote = getRandomQuote();
        // Author should either be a non-empty string or null
        expect(quote.author === null || (typeof quote.author === 'string' && quote.author.length > 0)).toBe(true);
      }
    });

    it('should never throw synchronously', () => {
      expect(() => getRandomQuote()).not.toThrow();
    });

    it('should return a valid quote object structure', () => {
      const quote = getRandomQuote();
      
      expect(quote).toBeInstanceOf(Object);
      expect(quote.text).toBeDefined();
      expect(quote.author).toBeDefined();
      expect(typeof quote.text).toBe('string');
      expect(quote.text.trim().length).toBeGreaterThan(0);
    });

    it('should return quotes with trimmed text', () => {
      const quote = getRandomQuote();
      expect(quote.text).toBe(quote.text.trim());
    });

    it('should return different quotes on multiple calls', () => {
      // Call the function multiple times and collect unique quotes
      const quotes = new Set<string>();
      for (let i = 0; i < 20; i++) {
        const quote = getRandomQuote();
        quotes.add(quote.text);
      }
      // With 326 quotes available, we should get at least 2 different quotes in 20 calls
      // (allowing for some randomness, but ensuring it's not always the same)
      expect(quotes.size).toBeGreaterThan(1);
    });
  });
});

