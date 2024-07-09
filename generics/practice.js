"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getProp = function (control) {
    switch (control.type) {
        case "input":
            control.type;
            break;
        case "button":
            control.type;
            console.log(control.text);
            break;
        case "checkbox":
            control.type;
            break;
        default:
            var _exhaustiveCheck = control;
            return _exhaustiveCheck;
    }
    return "";
};
getProp({ type: "button", color: "blue", typeBtm: "secondary", text: "Next" });
