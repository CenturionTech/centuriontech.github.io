import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const RechartsStockChart = ({ stockSymbol }) => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = 'PGVCFEMTK2SS8KK8';
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}&apikey=${apiKey}`
        );

        if (response.data && response.data['Time Series (Daily)']) {
          const dailyData = response.data['Time Series (Daily)'];
          const chartData = Object.keys(dailyData).map((date) => ({
            date,
            price: parseFloat(dailyData[date]['4. close']),
          }));

          setStockData(chartData.reverse());
          setLoading(false);
        } else {
          console.error('Invalid or empty data received from the API.');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching stock data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [stockSymbol]);

  return (
    <div>
      {loading ? (
        'Loading...'
      ) : (
        <LineChart width={800} height={400} data={stockData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="blue" />
        </LineChart>
      )}
    </div>
  );
};

export default RechartsStockChart;