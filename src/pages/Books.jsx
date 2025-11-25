import React from "react";
import BookCard from "../components/BookCard";

const BOOKS = [
  {
    title: "Red, White & Royal Blue",
    author: "Casey McQuiston",
    image: "/redwhiteandroyalblue.jpg"
  },
  {
    title: "It Ends With Us",
    author: "Colleen Hoover",
    image: "/itendswithus.jpg"
  },
  {
    title: "It Starts With Us",
    author: "Colleen Hoover",
    image: "/itstartswithus.jpg"
  },
  {
    title: "Ugly Love",
    author: "Colleen Hoover",
    image: "/uglylove.jpg"
  },
  {
    title: "Verity",
    author: "Colleen Hoover",
    image: "/verity.jpeg"
  },
  {
    title: "November 9",
    author: "Colleen Hoover",
    image: "/november.jpeg"
  },
  {
    title: "Book Lovers",
    author: "Emily Henry",
    image: "/booklovers.jpeg"
  },
  {
    title: "Beach Read",
    author: "Emily Henry",
    image: "/beachread.jpeg"
  },

  // ⭐ 8 NEW BOOKS BELOW
  {
    title: "People We Meet on Vacation",
    author: "Emily Henry",
    image: "/peoplewemeetonvacation.jpeg"
  },
  {
    title: "Happy Place",
    author: "Emily Henry",
    image: "/happyplace.jpeg"
  },
  {
    title: "A Court of Thorns and Roses",
    author: "Sarah J. Maas",
    image: "/acourtofthornsandroses.jpg"
  },
  {
    title: "Crescent City",
    author: "Sarah J. Maas",
    image: "/crescentcity.jpg"
  },
  {
    title: "Throne of Glass",
    author: "Sarah J. Maas",
    image: "/throneofglass.jpg"
  },
  {
    title: "One Last Stop",
    author: "Casey McQuiston",
    image: "/onelaststop.jpg"
  },
  {
    title: "They Both Die at the End",
    author: "Adam Silvera",
    image: "/theybothdieattheend.jpg"
  },
  {
    title: "The First to Die at the End",
    author: "Adam Silvera",
    image: "/thefirsttodieatend.jpg"
  }
];


export default function Books() {
  return (
    <main className="container">
      <h1 style={{ textAlign: "center" }}>📚 Popular Books</h1>
      <div className="books-grid">
        {BOOKS.map((b, i) => (
          <BookCard key={i} book={b} />
        ))}
      </div>
    </main>
  );
}
