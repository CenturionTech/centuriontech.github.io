"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Transactions() {
  var _React$useState = React.useState([]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    transactionsdata = _React$useState2[0],
    settransactionsData = _React$useState2[1];
  var _React$useState3 = React.useState([]),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    usersdata = _React$useState4[0],
    setusersData = _React$useState4[1];
  var _React$useState5 = React.useState(""),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    selectedUser = _React$useState6[0],
    setSelectedUser = _React$useState6[1];
  var _React$useState7 = React.useState(1),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    currentPage = _React$useState8[0],
    setCurrentPage = _React$useState8[1];
  var itemsPerPage = 10;
  React.useEffect(function () {
    // fetch transactions from API
    fetch('/account/transactions').then(function (response) {
      return response.json();
    }).then(function (transactionsdata) {
      settransactionsData(transactionsdata);
    });

    // fetch users from API
    fetch('/account/all').then(function (response) {
      return response.json();
    }).then(function (usersdata) {
      setusersData(usersdata);
    });
  }, []);

  // Reset current page to 1 when selected user changes
  React.useEffect(function () {
    setCurrentPage(1);
  }, [selectedUser]);
  var filteredTransactions = selectedUser ? transactionsdata.filter(function (transaction) {
    return transaction.email === selectedUser;
  }) : transactionsdata;
  var totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  var startIndex = (currentPage - 1) * itemsPerPage;
  var endIndex = startIndex + itemsPerPage;
  var displayedTransactions = filteredTransactions.slice(startIndex, endIndex);
  function handleNextPage() {
    setCurrentPage(function (prevPage) {
      return Math.min(prevPage + 1, totalPages);
    });
  }
  function handlePreviousPage() {
    setCurrentPage(function (prevPage) {
      return Math.max(prevPage - 1, 1);
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "mb-4"
  }, "Transactions"), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "userSelect"
  }, "Select User.... Total Records: ", usersdata.length), /*#__PURE__*/React.createElement("select", {
    className: "form-control",
    id: "userSelect",
    value: selectedUser,
    onChange: function onChange(e) {
      return setSelectedUser(e.currentTarget.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "-- All Users --"), usersdata.map(function (user) {
    return /*#__PURE__*/React.createElement("option", {
      key: user.email,
      value: user.email
    }, user.email, " - ", user.name);
  }))), /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "#"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Date/Time"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Email"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Type"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Amount"))), /*#__PURE__*/React.createElement("tbody", null, displayedTransactions.map(function (transaction, index) {
    return /*#__PURE__*/React.createElement("tr", {
      key: transaction.dateTime,
      className: index % 2 === 0 ? "table-primary" : "table-secondary"
    }, /*#__PURE__*/React.createElement("th", {
      scope: "row"
    }, startIndex + index + 1), /*#__PURE__*/React.createElement("td", null, transaction.dateTime), /*#__PURE__*/React.createElement("td", null, transaction.email), /*#__PURE__*/React.createElement("td", null, transaction.typeTrans), /*#__PURE__*/React.createElement("td", null, "$", transaction.amount.toLocaleString('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-light",
    onClick: handlePreviousPage,
    disabled: currentPage === 1
  }, "Previous Page"), /*#__PURE__*/React.createElement("span", {
    className: "mx-3"
  }, "Page ", currentPage, " of ", totalPages), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-light",
    onClick: handleNextPage,
    disabled: currentPage === totalPages
  }, "Next Page"), /*#__PURE__*/React.createElement("span", {
    className: "mx-3"
  }, "Total Transactions: ", filteredTransactions.length)));
}