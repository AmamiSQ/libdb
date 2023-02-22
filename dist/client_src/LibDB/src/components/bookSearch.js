"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_2 = require("react");
const fml_1 = tslib_1.__importDefault(require("./fml"));
//search for owned books in the database
function BookSearch() {
    const [searchBox, setSearch] = (0, react_2.useState)("");
    const bookList = async () => {
        let result = await fml_1.default.fetchData("http://localhost:3000/library");
        return await result;
    };
    const test = bookList().then(result => { return result; });
    //UUUUUUUUUUUUGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHH
    //whole thing needs to be redone
    return (<div>
      <div className="boxSearch">
        <h1 className="boxTitle">Search for books in the library!</h1>
        <form>
          <label className="boxText">
            Search for name or author:
            <input type="text" className="searchBox" value={searchBox} onChange={(e) => setSearch(e.target.value)}/>
          </label>
        </form>
        <h2 className="boxText">{searchBox}</h2>
      </div>
    </div>);
}
exports.default = BookSearch;
//# sourceMappingURL=bookSearch.js.map