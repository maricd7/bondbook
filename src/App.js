import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserDashboard from './pages/UserDashboard';

import CreateContact from './components/Dash/CreateContact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/pages/UserDashboard" element={<UserDashboard />}>
            
          </Route>
          <Route path="/components/Dash/CreateContact" element={<CreateContact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
