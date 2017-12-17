import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-dark navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
    <nav className="navbar-nav-scroll">
      <ul className="navbar-nav bd-navbar-nav flex-row">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/pictures" className="nav-link">Pictures</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
