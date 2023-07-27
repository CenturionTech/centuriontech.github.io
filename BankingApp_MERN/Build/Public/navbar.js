"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// navbar implementation using bootstrap

var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect;
function NavBar() {
  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    tooltipText = _useState2[0],
    setTooltipText = _useState2[1];
  var handleMouseEnter = function handleMouseEnter(text) {
    setTooltipText(text);
    console.log(text);
  };
  var handleMouseLeave = function handleMouseLeave() {
    setTooltipText("");
  };
  useEffect(function () {
    var navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(function (link) {
      var text = link.getAttribute("data-tooltip");
      if (text) {
        link.addEventListener("mouseenter", function () {
          return handleMouseEnter(text);
        });
        link.addEventListener("mouseleave", handleMouseLeave);
      }
    });
    return function () {
      navLinks.forEach(function (link) {
        var text = link.getAttribute("data-tooltip");
        if (text) {
          link.removeEventListener("mouseenter", function () {
            return handleMouseEnter(text);
          });
          link.removeEventListener("mouseleave", handleMouseLeave);
        }
      });
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("a", {
    className: "navbar-brand",
    href: "#"
  }, "APS Bank"), /*#__PURE__*/React.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/React.createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/React.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "navbar-nav me-auto mb-2 mb-lg-0"
  }, /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "#/CreateAccount/",
    "data-tooltip": "Create Account: Enter name, email and password."
  }, "Create Account")), /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "#/login/",
    "data-tooltip": "Login: Enter email and password to login"
  }, "Login")), /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "#/deposit/",
    "data-tooltip": "Deposit: Select a user and enter the deposit amount"
  }, "Deposit")), /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "#/withdraw/",
    "data-tooltip": "Withdraw: Select a user and enter the withdraw amount"
  }, "Withdraw")), /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "#/balance/",
    "data-tooltip": "Balance: Select a user to show balance"
  }, "Balance")), /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "#/alldata/",
    "data-tooltip": "All Data: Show all data stored from the accounts created"
  }, "All Data")), /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    href: "#/transactions/",
    "data-tooltip": "Transactions: Show all transactions stored from users"
  }, "Transactions")))))), tooltipText && /*#__PURE__*/React.createElement("div", {
    className: "tooltip",
    style: {
      left: "50%"
    }
  }, tooltipText));
}