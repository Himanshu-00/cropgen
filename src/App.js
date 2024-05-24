// App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Menubar from './Components/Menubar';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/menubar" element={<Menubar />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
    </HashRouter>
  );
}


export default App;
