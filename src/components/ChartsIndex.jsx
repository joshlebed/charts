import { Link } from 'react-router-dom';
import './ChartsIndex.css';

function ChartsIndex() {
  const charts = [
    {
      id: 'radar',
      title: 'Radar Chart',
      description: 'Team performance metrics visualization',
      path: '/radar'
    },
  ];

  return (
    <div className="charts-index">
      <h1>Chart Gallery</h1>
      <div className="charts-grid">
        {charts.map(chart => (
          <Link key={chart.id} to={chart.path} className="chart-card">
            <h2>{chart.title}</h2>
            <p>{chart.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ChartsIndex;