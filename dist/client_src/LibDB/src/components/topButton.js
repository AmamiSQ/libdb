"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_2 = require("react");
//scrolls back to the top of the page
function TopButton() {
    const [backButton, setBackButton] = (0, react_2.useState)(false);
    (0, react_2.useEffect)(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackButton(true);
            }
            else {
                setBackButton(false);
            }
        });
    }, []);
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (<div>
      {backButton && (<button className="topButton" onClick={scrollUp}>^</button>)}   
    </div>);
}
exports.default = TopButton;
//# sourceMappingURL=topButton.js.map