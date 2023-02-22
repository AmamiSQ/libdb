"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bookCount_1 = tslib_1.__importDefault(require("./components/bookCount"));
const bookSearch_1 = tslib_1.__importDefault(require("./components/bookSearch"));
const bookAdd_1 = tslib_1.__importDefault(require("./components/bookAdd"));
const header_1 = tslib_1.__importDefault(require("./components/header"));
const bookShelf_1 = tslib_1.__importDefault(require("./components/bookShelf"));
const topButton_1 = tslib_1.__importDefault(require("./components/topButton"));
function App() {
    return (<div className="AppClass">
      <header_1.default />
      <bookCount_1.default />
      <bookSearch_1.default />
      <bookAdd_1.default />
      <bookShelf_1.default />
      <topButton_1.default />
    </div>);
}
exports.default = App;
//# sourceMappingURL=App.js.map