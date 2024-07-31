import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlagsList from "./components/FlagsList";
import CountryDetail from "./components/CountryDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FlagsList />} />
          <Route path="/country/:cca3" element={<CountryDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

