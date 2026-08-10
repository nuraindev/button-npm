"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  BlueHelloButton: () => BlueHelloButton,
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);
var import_jsx_runtime = require("react/jsx-runtime");
function BlueHelloButton() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      onClick: () => console.log("hello world"),
      style: {
        backgroundColor: "blue",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px"
      },
      children: "hi"
    }
  );
}
var index_default = BlueHelloButton;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BlueHelloButton
});
