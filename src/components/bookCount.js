import React from "react";
import { useState } from "react";

//takes a number and returns the amount of books needed to reach that number
export default function BookCount() {
  const totalBooks = 12;
  const [givenBooks, setBooks] = useState("");

  let booksResult = (givenBooks > totalBooks ) ? `${(givenBooks - totalBooks)} books to go!` : "Goal already reached!";

  return (
    <div>
      <div className="boxCount">
        <h1 className="countTitle">Calculate your books!</h1>
        <p className="countText">Current amount of books: {totalBooks}</p>
        <form>
          <label className="countText">
            Amount of books you want:
            <input 
            type="number" 
            className="countInput" 
            value={givenBooks} 
            onChange={(e) => setBooks(e.target.value)} />
          </label>
        </form>
        <h2 className="countText">{booksResult}</h2>
      </div>
    </div>
  );
}
