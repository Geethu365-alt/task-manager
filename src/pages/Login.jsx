

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/authSlice';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login(username));
      navigate('/');
    }
  };

  return (
    <div className="  max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 border w-full rounded mb-4"
        placeholder="Enter your name"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Login
      </button>
    </div>
  );
}
