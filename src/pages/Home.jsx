import React from 'react';
const BACKGROUND_IMAGE = "/pexels-technobulka-2908984.jpg";

export default function Home() {
  const style = BACKGROUND_IMAGE ? { backgroundImage: `url(${BACKGROUND_IMAGE})` } : undefined;
  return (
    <main className="hero-background" style={style} role="main" aria-labelledby="hero-title" aria-describedby="hero-desc">
      <div className="overlay-dark"></div>
      <div className="hero-content">
        <h1 id="hero-title" className="hero-title">Manage Your Bookstore,<br/><span className="highlight-accent">Effortlessly</span>.</h1>
        <p id="hero-desc" className="hero-desc">Streamline your bookstore operations with our intuitive system. Track inventory, manage sales, and connect with readers in a warm, welcoming experience.</p>
        <form className="search-bar" role="search" onSubmit={(e)=>e.preventDefault()}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{width:20,height:20}}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 1 1-12 0 6 6 0 0 1 12 0z"/>
          </svg>
          <input type="search" placeholder="Search for books, categories, or authors" aria-label="Search" />
          <button className="search-button" type="submit">Search</button>
        </form>
      </div>
    </main>
  );
}
