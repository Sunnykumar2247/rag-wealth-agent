import React, { useState } from 'react';
import QueryForm from './components/QueryForm';
import ResultsView from './components/ResultsView';

export default function App() {
  const [results, setResults] = useState(null);

  async function handleQuery(query) {
    if (!query.trim()) return;
    const res = await fetch('http://localhost:8000/query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    const json = await res.json();
    setResults(json);
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">
        💹 Wealth Insights Assistant
      </h1>
      <QueryForm onSubmit={handleQuery} />
      <ResultsView results={results} />
    </main>
  );
}
