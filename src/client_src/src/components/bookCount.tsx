import React from "react";
import { useState } from "react";

//takes a number and returns the amount of books needed to reach that number
export default function BookCount() {
  const totalBooks = 87; //total books taken from the database
  const [givenBooks, setBooks] = useState("");

  let booksResult = (+givenBooks > totalBooks ) ? `${(+givenBooks - totalBooks)} books to go!` : "Goal already reached!";

  return (
    <div>
      <div className="boxCount">
        <h1 className="boxTitle">Calculate your books!</h1>
        <p className="boxText">Current amount of books: {totalBooks}</p>
        <form>
          <label className="boxText">
            Amount of books you want:
            <input 
            type="number" 
            className="boxInput" 
            value={givenBooks} 
            onChange={(e) => setBooks(e.target.value)} 
            />
          </label>
        </form>
        <br></br>
        <h2 className="countText">{booksResult}</h2>
      </div>
    </div>
  );
}
