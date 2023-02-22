"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
//import { useState } from "react";
//add books to the database
function BookAdd() {
    //const [searchBox, getSearch] = useState("");
    return (<div>
      <div className="boxDB">
        <h1 className="boxTitle">Add or remove books from the library</h1>
        <form>
          <label className="boxText">
            Book title:
            <input type="text" className="searchBox"/>
          </label>
          <br />
          <br />
          <label className="boxText">
            Book author:
            <input type="text" className="searchBox"/>
          </label>
        </form>
      </div>
    </div>);
}
exports.default = BookAdd;
//# sourceMappingURL=bookAdd.js.map