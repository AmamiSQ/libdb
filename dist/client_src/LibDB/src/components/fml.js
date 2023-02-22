"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class asyncTest {
    static async fetchData(url) {
        return await (await fetch(url)).json();
    }
}
exports.default = asyncTest;
//# sourceMappingURL=fml.js.map