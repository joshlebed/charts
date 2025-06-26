import Papa from "papaparse";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RechartsRadarChart,
  ResponsiveContainer,
} from "recharts";
import "./RadarChart.css";

function RadarChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/charts/data/radar-chart-data.csv")
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          complete: (result) => {
            setData(result.data);
            setLoading(false);
          },
        });
      })
      .catch((error) => {
        console.error("Error loading CSV:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading chart data...</div>;
  }

  return (
    <div className="radar-chart-container">
      <Link to="/" className="back-link">
        ← Back to Charts Index
      </Link>
      <h1>Biking headwear chart</h1>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={500}>
          <RechartsRadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="category" />
            <PolarRadiusAxis angle={90} domain={[0, 100]} />
            <Radar
              name="Beanie"
              dataKey="Beanie"
              stroke="#4c46c7"
              fill="#4c46c7"
              fillOpacity={0.6}
            />
            <Radar
              name="Black headband"
              dataKey="Black headband"
              stroke="#1f1f1f"
              fill="#1f1f1f"
              fillOpacity={0.6}
            />
            <Radar
              name="White headband"
              dataKey="White headband"
              stroke="#adadad"
              fill="#adadad"
              fillOpacity={0.6}
            />
            <Radar
              name="Nothing"
              dataKey="Nothing"
              stroke="#dbb839"
              fill="#dbb839"
              fillOpacity={0.6}
            />
            <Legend />
          </RechartsRadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RadarChart;
