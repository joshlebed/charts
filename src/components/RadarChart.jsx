import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Radar, RadarChart as RechartsRadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';
import Papa from 'papaparse';
import './RadarChart.css';

function RadarChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/charts/data/radar-chart-data.csv')
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          complete: (result) => {
            setData(result.data);
            setLoading(false);
          }
        });
      })
      .catch(error => {
        console.error('Error loading CSV:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading chart data...</div>;
  }

  return (
    <div className="radar-chart-container">
      <Link to="/" className="back-link">← Back to Charts Index</Link>
      <h1>Team Performance Radar Chart</h1>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={500}>
          <RechartsRadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="category" />
            <PolarRadiusAxis angle={90} domain={[0, 100]} />
            <Radar name="Team A" dataKey="teamA" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="Team B" dataKey="teamB" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Radar name="Team C" dataKey="teamC" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
            <Legend />
          </RechartsRadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RadarChart;