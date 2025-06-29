import React, { useState } from 'react';

export default function QueryForm({ onSubmit }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(text);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask in plain English…"
        className="flex-1 border border-gray-300 rounded p-2"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white rounded px-4 py-2"
      >
        Ask
      </button>
    </form>
  );
}
