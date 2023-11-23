import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import MenuPage from './pages/MenuPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} ></Route>
        <Route path="/menu" element={<MenuPage/>} ></Route>
      </Routes>
    </Router>
  );
};

export default App;