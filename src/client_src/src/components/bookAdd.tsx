import React from "react";
//import { useState } from "react";

//add books to the database
export default function BookAdd() {
  //const [searchBox, getSearch] = useState("");

  return (
    <div>
      <div className="boxDB">
        <h1 className="boxTitle">Add or remove books from the library</h1>
        <form>
          <label className="boxText">
            Book title:
            <input 
            type="text" 
            className="searchBox"  />
          </label>
          <br />
          <br />
          <label className="boxText">
            Book author:
            <input 
            type="text" 
            className="searchBox"  />
          </label>
        </form>
      </div>
    </div>
  );
}