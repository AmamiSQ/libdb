import React from "react";

//main attraction, puts owned books on display on a shelf
export default function BookShelf() {
  return (
    <div className="shelfLiner">
        <img src={ require("../img/shelf.png") } style={{"width" : "100%"}} alt="shelf1"/>
        <br />
        <br />
        <img src={ require("../img/shelf.png") } style={{"width" : "100%" }} alt="shelf2"/>
    </div>
    );
  }
