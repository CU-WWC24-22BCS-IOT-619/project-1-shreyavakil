import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setHoldings } from '../redux/portfolioSlice';
import PortfolioTable from './PortfolioTable';
import ChartVisualization from './ChartVisualization';

function Dashboard() {
  const dispatch = useDispatch();
  const holdings = useSelector((state) => state.portfolio.holdings);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
          },
        });
        dispatch(setHoldings(response.data));
      } catch (err) {
        console.error('Error fetching crypto data:', err);
      }
    };

    fetchCryptoData();
  }, [dispatch]);

  return (
    <div>
      <h2>Cryptocurrency Portfolio</h2>
      <PortfolioTable holdings={holdings} />
      <ChartVisualization holdings={holdings} />
    </div>
  );
}

export default Dashboard;
