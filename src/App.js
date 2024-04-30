import './App.css';
import MyComponent from './Components/CropAnalytics';
import Sidebar from './Components/Menubar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
         
        </Routes>
        <Sidebar />
      
      </div>
    </Router>
  );
}

export default App;
