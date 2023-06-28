"use strict";

var _client = require("react-dom/client");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var App = function App() {
  return /*#__PURE__*/_react["default"].createElement("h1", null, "Hello, world!");
};
var container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
var root = (0, _client.createRoot)(container);
root.render( /*#__PURE__*/_react["default"].createElement(App, null));