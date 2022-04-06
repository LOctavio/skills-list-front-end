import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import Search from './Search';
import User from './User';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Search />} />
        <Route exact path="/user/:slug" element={<User />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
