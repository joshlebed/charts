import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ChartsIndex from './components/ChartsIndex'
import RadarChart from './components/RadarChart'
import './App.css'

function App() {
  return (
    <Router basename="/charts">
      <div className="App">
        <Routes>
          <Route path="/" element={<ChartsIndex />} />
          <Route path="/radar" element={<RadarChart />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App