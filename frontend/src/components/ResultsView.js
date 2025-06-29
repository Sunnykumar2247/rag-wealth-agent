import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function ResultsView({ results }) {
  if (!results) return null;

  if (results.result_type === 'text') {
    return <pre className="whitespace-pre-wrap">{results.data}</pre>;
  }

  if (results.result_type === 'table') {
    const headers = Object.keys(results.data[0] || {});
    return (
      <table className="min-w-full text-left border">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((h) => (
              <th key={h} className="py-2 px-3 border-b">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {results.data.map((row, i) => (
            <tr key={i}>
              {headers.map((h) => (
                <td key={h} className="py-1 px-3 border-b">
                  {row[h]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  if (results.result_type === 'graph') {
    const labels = results.data.map((d) => d.label);
    const values = results.data.map((d) => d.value);
    const data = { labels, datasets: [{ label: 'Value', data: values }] };
    return (
      <div className="max-w-xl">
        <Bar data={data} />
      </div>
    );
  }

  return null;
}
