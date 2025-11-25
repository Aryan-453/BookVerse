import React from "react";

const CATEGORIES = [
  {
    name: "Romance",
    image: "/cat-romance.jpg",
  },
  {
    name: "Fantasy",
    image: "/cat-fantasy.jpg",
  },
  {
    name: "Thriller",
    image: "/cat-thriller.jpg",
  },
  {
    name: "Young Adult",
    image: "/cat-ya.jpg",
  },
  {
    name: "Science Fiction",
    image: "/cat-scifi.jpg",
  },
];

export default function Categories() {
  return (
    <main className="container">
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 24 }}>Categories</h1>

      <div className="categories-grid">
        {CATEGORIES.map((cat, i) => (
          <div key={i} className="category-card">
            <img src={cat.image} alt={cat.name} className="category-img" />
            <div className="category-info">
              <h3>{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
