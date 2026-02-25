import Dashboard from './components/Dashboard.jsx'
import RequestType1 from './components/RequestType1.jsx'
import RequestType2 from './components/RequestType2.jsx'
import RequestType3 from './components/RequestType3.jsx'
import RequestType4 from './components/RequestType4.jsx'
import RequestType5 from './components/RequestType5.jsx'
import RequestType6 from './components/RequestType6.jsx'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/india/weather" element={<RequestType1 />} />
        <Route path="/india/forecast" element={<RequestType2 />} />
        <Route path="/india/climate" element={<RequestType3 />} />
        <Route path="/india/history" element={<RequestType4 />} />
        <Route path="/india/humidity" element={<RequestType5 />} />
        <Route path="/india/wind" element={<RequestType6 />} />
      </Routes>
    </Router>
  )
}

export default App