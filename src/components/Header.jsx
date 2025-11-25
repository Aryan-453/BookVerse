// src/components/Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/index.css"; // keep your styles import

export default function Header() {
  const activeStyle = { color: "#ffca28" };

  return (
    <nav className="site-nav" role="navigation" aria-label="Primary">
      <div className="logo-area">
        <svg className="logo-icon" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 4H9a2 2 0 0 0-2 2v1H6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v1a2 2 0 0 0 2 2h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-9 6v6H8v-6h2Zm9 6h-8v-6h8v6Zm0-8H10V6h8v2Z"/>
        </svg>

        <span className="brand">BookVerse</span>

        <div className="nav-links" role="menu">
          <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</NavLink>
          {/* Books intentionally removed from nav */}
          <NavLink to="/categories" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Categories</NavLink>
          <NavLink to="/authors" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Authors</NavLink>
          <NavLink to="/admin" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Admin</NavLink>
          <NavLink to="/books" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Books</NavLink>
        </div>
      </div>

      <div className="nav-right">
        <NavLink to="/login" className="btn-primary">Log In</NavLink>
        <NavLink to="/signup" className="btn-outline">Sign Up</NavLink>
      </div>
    </nav>
  );
}
