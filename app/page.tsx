import QuoteRoulette from './components/QuoteRoulette';

/**
 * Main page component for Quote Roulette.
 * This is a Server Component that renders the client-side QuoteRoulette component.
 */
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Quote Roulette
        </h1>
        <QuoteRoulette />
      </div>
    </main>
  );
}

