import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Login from './Components/Login';
// import Menubar from './Components/Menubar';
// import { useState } from 'react';
import MyComponent from './Components/CropAnalytics';


function App() {



  return (
    // <Router>
    //   <Routes>
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/menubar" element={<Menubar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />} />
    //     <Route path="/" element={<Navigate to="/login" />} />
    //   </Routes>
    // </Router>
    <MyComponent/>
  );
}


export default App;
