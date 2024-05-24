// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 
  const navigate = useNavigate();
  
  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      // If login successful, navigate to the home page
      navigate('/menubar');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-container">
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="input-container">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button className="login-button" onClick={handleLogin}>Login</button>
      {/* Add your icon here */}

    </div>
  );
};

export default Login;
