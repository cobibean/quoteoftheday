# Quote Roulette

A minimal, polished web app that displays random inspirational quotes. Built with Next.js 14+, TypeScript, and the app router.

## Features

- 🎲 Random quote generation on page load
- 🔄 "New Quote" button to fetch another random quote
- 📱 Mobile-friendly responsive design
- 🎨 Clean, modern UI with Tailwind CSS
- ⚡ Fast client-side updates without page reloads
- 🧪 Basic test coverage for quote service

## Tech Stack

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **React Server Components** for the page shell
- **React Client Components** for interactivity
- **Tailwind CSS** for styling
- **inspirational-quotes** NPM package for quote data
- **Jest** for testing

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

### Running the App

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Running Tests

Run the test suite:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## Project Structure

```
quote-roulette/
├── app/
│   ├── components/
│   │   ├── QuoteCard.tsx       # Presentational quote display component
│   │   └── QuoteRoulette.tsx   # Client component with interactivity
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main page (Server Component)
│   └── globals.css             # Global styles with Tailwind
├── src/
│   └── lib/
│       ├── quoteService.ts     # Quote fetching logic
│       └── __tests__/
│           └── quoteService.test.ts
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── jest.config.js
```

## How It Works

### Quote Service (`src/lib/quoteService.ts`)

The `getRandomQuote()` function:
- Wraps the `inspirational-quotes` package API
- Normalizes author data (handles missing authors as `null`)
- Returns a strongly-typed `Quote` object: `{ text: string; author: string | null }`
- Never throws synchronously; returns a fallback quote on errors

### Components

- **`QuoteCard`**: Presentational component that displays the quote text and author
- **`QuoteRoulette`**: Client component that manages quote state and handles button clicks
- **`page.tsx`**: Server Component that renders the initial page shell

### Data Flow

1. On page load, `QuoteRoulette` initializes with a random quote
2. User clicks "New Quote" button
3. `getRandomQuote()` is called locally (no API calls)
4. Component state updates with new quote
5. UI re-renders without page reload

## Configuration

- **No environment variables required** - all quotes come from the local `inspirational-quotes` package
- **No API keys needed** - everything runs client-side
- **No external API calls** - quotes are fetched from the installed NPM package

## Building for Production

```bash
npm run build
npm start
```

## License

MIT

