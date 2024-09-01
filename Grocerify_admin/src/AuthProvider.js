// AuthProvider.js (Context for managing authentication state)
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is authenticated on initial load
    const token = localStorage.getItem('token');
    if (token) {
      // If token exists, verify it
      axios.post('/api/auth/verify', { token })
        .then(response => {
          setUser(response.data.user);
        })
        .catch(error => {
          console.error('Token verification failed:', error);
          localStorage.removeItem('token'); // Remove invalid token
        });
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.post('localhost:4000/login', { username, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
      setUser(response.data.user);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
