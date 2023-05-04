"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Deposit() {
  var _React$useState = React.useState(""),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    selectedUser = _React$useState2[0],
    setSelectedUser = _React$useState2[1];
  var _React$useState3 = React.useState(""),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    depositAmount = _React$useState4[0],
    setDepositAmount = _React$useState4[1];
  var _React$useState5 = React.useState(""),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    status = _React$useState6[0],
    setStatus = _React$useState6[1];
  var ctx = React.useContext(UserContext);
  function handleDeposit() {
    var selectedUserIndex = ctx.users.findIndex(function (user) {
      return user.name === selectedUser;
    });
    if (selectedUserIndex === -1) {
      setStatus("Error: User ".concat(selectedUser, " not found"));
      setTimeout(function () {
        return setStatus("");
      }, 3000);
      return;
    }
    var user = ctx.users[selectedUserIndex];
    var newBalance = user.balance + parseFloat(depositAmount);
    if (isNaN(newBalance) || newBalance <= 0 || depositAmount <= 0) {
      setStatus("Error: Invalid deposit amount");
      setTimeout(function () {
        return setStatus("");
      }, 3000);
      return;
    }
    user.balance = newBalance;
    setStatus("Successfully deposited ".concat(depositAmount, " into ").concat(selectedUser, "'s account"));
    setDepositAmount("");
    setTimeout(function () {
      return setStatus("");
    }, 3000);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "container mt-3"
  }, /*#__PURE__*/React.createElement("h5", null, "Deposit"), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "userSelect"
  }, "Select User"), /*#__PURE__*/React.createElement("select", {
    className: "form-control",
    id: "userSelect",
    value: selectedUser,
    onChange: function onChange(e) {
      return setSelectedUser(e.currentTarget.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "-- Select user --"), ctx.users.map(function (user) {
    return /*#__PURE__*/React.createElement("option", {
      key: user.name,
      value: user.name
    }, user.name, " - $", user.balance.toFixed(2));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "depositAmount"
  }, "Deposit Amount"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: "form-control",
    id: "depositAmount",
    placeholder: "Enter amount",
    value: depositAmount,
    onChange: function onChange(e) {
      return setDepositAmount(e.currentTarget.value);
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: handleDeposit
  }, "Deposit")), status && /*#__PURE__*/React.createElement("div", {
    className: "mt-3 alert alert-primary"
  }, status));
}
