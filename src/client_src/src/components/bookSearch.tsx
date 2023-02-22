import React, {useEffect} from "react";
import { useState } from "react";

//search for owned books in the database
export default function BookSearch() {
  interface Book {
    BooksID: string,
    Title: string,
    Author: string,
    isDigital: boolean,
    isFinished: boolean
}
  const [searchBox, setSearch] = useState("");
  const [books, setBooks] = (useState<Book[]>([]));

  useEffect(() => {
    const getBooks = async () => {
      const data = await (
        await fetch("http://localhost:3000/library")
      ).json();
      setBooks(data);
    };
    getBooks();
  }, []);

  console.log(books.map((book) => book.Title)); //

  //whole thing needs to be redone
  return (
    <div>
      <div className="boxSearch">
        <h1 className="boxTitle">{books.map((book) => book.Title)}</h1>
        <form>
          <label className="boxText">
            Search for name or author:
            <input
            type="text"
            className="searchBox"
            value={searchBox}
            onChange={(e) => setSearch(e.target.value)} />
          </label>
        </form>
        <h2 className="boxText">{searchBox}</h2>
      </div>
    </div>
  );
}
