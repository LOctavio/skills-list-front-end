import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import Search from './components/search';
import User from './components/user';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Search />} />
        <Route exact path="/user/:slug" element={<User />} />
      </Routes>
    </Router>
  </React.StrictMode>
);