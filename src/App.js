import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserDashboard from './pages/UserDashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/pages/UserDashboard" element={<UserDashboard/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
