import React from 'react';

function PortfolioTable({ holdings }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Symbol</th>
          <th>Current Price (USD)</th>
          <th>Market Cap</th>
        </tr>
      </thead>
      <tbody>
        {holdings.map((crypto) => (
          <tr key={crypto.id}>
            <td>{crypto.name}</td>
            <td>{crypto.symbol.toUpperCase()}</td>
            <td>${crypto.current_price.toLocaleString()}</td>
            <td>${crypto.market_cap.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PortfolioTable;
