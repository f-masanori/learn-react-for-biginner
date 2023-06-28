"use strict";

var App = function App() {
  return /*#__PURE__*/React.createElement("h1", null, "Hello, world!");
};
var container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
var root = ReactDOM.createRoot(container);
root.render( /*#__PURE__*/React.createElement(App, null));