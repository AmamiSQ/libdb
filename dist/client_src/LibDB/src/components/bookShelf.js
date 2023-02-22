"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
//main attraction, puts owned books on display on a shelf
function BookShelf() {
    return (<div className="shelfLiner">
        <img src={require("../img/shelf.png")} style={{ "width": "100%" }} alt="shelf1"/>
        <br />
        <br />
        <img src={require("../img/shelf.png")} style={{ "width": "100%" }} alt="shelf2"/>
    </div>);
}
exports.default = BookShelf;
//# sourceMappingURL=bookShelf.js.map