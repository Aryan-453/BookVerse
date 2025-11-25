import React from 'react'
export default function BookCard({book}){
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />
      <div className="book-info">
        <div>
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">{book.author}</p>
        </div>
        <button className="book-btn" onClick={()=>alert(`Added ${book.title} to cart`)}>Add to Cart</button>
      </div>
    </div>
  )
}