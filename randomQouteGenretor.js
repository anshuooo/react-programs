import { useState } from "react";

const quotes = ["Keep going!", "You can do it!", "Believe in yourself!", "Success is near."];

export default function QuoteGenerator() {
  const [quote, setQuote] = useState(quotes[0]);

  return (
    <div className="text-center p-4">
      <h2 className="text-xl italic">"{quote}"</h2>
      <button className="bg-blue-500 text-white px-4 py-2 mt-2" onClick={() => setQuote(quotes[Math.floor(Math.random() * quotes.length)])}>
        New Quote
      </button>
    </div>
  );
}
