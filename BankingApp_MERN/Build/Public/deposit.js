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
  var _React$useState7 = React.useState([]),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    data = _React$useState8[0],
    setData = _React$useState8[1];
  React.useEffect(function () {
    // fetch all accounts from API
    fetch('/account/all').then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
      setData(data);
    });
  }, []);
  function handleDeposit() {
    var selectedUserIndex = data.findIndex(function (user) {
      return user.email === selectedUser;
    });
    if (selectedUserIndex === -1) {
      setStatus("Error: User ".concat(selectedUser, " not found"));
      setTimeout(function () {
        return setStatus("");
      }, 3000);
      return;
    }
    var user = data[selectedUserIndex];
    var newBalance = user.balance + parseFloat(depositAmount);
    if (isNaN(newBalance) || newBalance <= 0 || depositAmount <= 0) {
      setStatus("Error: Invalid deposit amount");
      setTimeout(function () {
        return setStatus("");
      }, 3000);
      return;
    }

    // update user.balance in DB
    fetch("/account/update/".concat(user.email, "/").concat(depositAmount)).then(function (response) {
      return response.text();
    }).then(function (text) {
      try {
        var _data = JSON.parse(text);
        console.log('JSON:', _data);
      } catch (err) {
        setStatus('Deposit failed');
        console.log('err:', text);
      }
    });

    // create transaction in DB
    fetch("/account/transaction/".concat(user.email, "/").concat(depositAmount)).then(function (response) {
      return response.text();
    }).then(function (text) {
      try {
        var _data2 = JSON.parse(text);
        console.log('JSON:', _data2);
      } catch (err) {
        setStatus('Transaction failed');
        console.log('err:', text);
      }
    });
    user.balance = newBalance;
    var depositFormatted = depositAmount.toLocaleString('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    var depositAmt = "Successfully deposited $" + depositFormatted + " into " + selectedUser + "'s account";
    setStatus(depositAmt);
    setDepositAmount("");
    setTimeout(function () {
      return setStatus("");
    }, 3000);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "container mt-3"
  }, /*#__PURE__*/React.createElement("h5", null, "Deposit"), /*#__PURE__*/React.createElement("img", {
    src: "deposit_withdraw.gif",
    alt: "Image",
    width: "20%"
  }), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "userSelect"
  }, "Select User.... Total Records: ", data.length), /*#__PURE__*/React.createElement("select", {
    className: "form-control",
    id: "userSelect",
    value: selectedUser,
    onChange: function onChange(e) {
      return setSelectedUser(e.currentTarget.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "-- Select user --"), data.map(function (user) {
    return /*#__PURE__*/React.createElement("option", {
      key: user.email,
      value: user.email
    }, user.email, " - $", user.balance.toLocaleString('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }));
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