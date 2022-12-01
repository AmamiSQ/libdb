import React from "react";
import { useState } from "react";

//search for owned books in the database
export default function BookSearch() {
  const [searchBox, getSearch] = useState("");

  return (
    <div>
      <div className="boxSearch">
        <h1 className="boxTitle">Search for books in the library!</h1>
        <form>
          <label className="boxText">
            Search for name or author:
            <input 
            type="text" 
            className="searchBox" 
            value={searchBox} 
            onChange={(e) => getSearch(e.target.value)} />
          </label>
        </form>
        <h2 className="boxText">{searchBox}</h2>
      </div>
    </div>
  );
}
