"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Withdraw() {
  var _React$useState = React.useState(""),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    selectedUser = _React$useState2[0],
    setSelectedUser = _React$useState2[1];
  var _React$useState3 = React.useState(""),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    withdrawAmount = _React$useState4[0],
    setWithdrawAmount = _React$useState4[1];
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
  function handleWithdraw() {
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
    var newBalance = user.balance - parseFloat(withdrawAmount);
    if (isNaN(newBalance) || newBalance < 0 || withdrawAmount <= 0) {
      setStatus("Error: Invalid withdraw amount");
      setTimeout(function () {
        return setStatus("");
      }, 3000);
      return;
    }

    // update user.balance in DB
    fetch("/account/update/".concat(user.email, "/-").concat(withdrawAmount)).then(function (response) {
      return response.text();
    }).then(function (text) {
      try {
        var _data = JSON.parse(text);
        console.log('JSON:', _data);
      } catch (err) {
        setStatus('Withdraw failed');
        console.log('err:', text);
      }
    });

    // create transaction in DB
    fetch("/account/transaction/".concat(user.email, "/", 'Withdraw', "/-").concat(withdrawAmount)).then(function (response) {
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
    var withdrawFormatted = withdrawAmount.toLocaleString('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    var withdrawAmt = "Successfully withdrawed $" + withdrawFormatted + " into " + selectedUser + "'s account";
    setStatus(withdrawAmt);
    setWithdrawAmount("");
    setTimeout(function () {
      return setStatus("");
    }, 3000);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "container mt-3"
  }, /*#__PURE__*/React.createElement("h5", null, "Withdraw"), /*#__PURE__*/React.createElement("img", {
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
    htmlFor: "withdrawAmount"
  }, "Withdraw Amount"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: "form-control",
    id: "withdrawAmount",
    placeholder: "Enter amount",
    value: withdrawAmount,
    onChange: function onChange(e) {
      return setWithdrawAmount(e.currentTarget.value);
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: handleWithdraw
  }, "Withdraw")), status && /*#__PURE__*/React.createElement("div", {
    className: "mt-3 alert alert-primary"
  }, status));
}