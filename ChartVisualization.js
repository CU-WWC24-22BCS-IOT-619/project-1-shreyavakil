import React from 'react';
import { Bar } from 'react-chartjs-2';

function ChartVisualization({ holdings }) {
  const data = {
    labels: holdings.map((crypto) => crypto.name),
    datasets: [
      {
        label: 'Market Cap (USD)',
        data: holdings.map((crypto) => crypto.market_cap),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h3>Market Cap Visualization</h3>
      <Bar data={data} options={options} />
    </div>
  );
}

export default ChartVisualization;
