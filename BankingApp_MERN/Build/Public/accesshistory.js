"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function AccessHistory() {
  var _React$useState = React.useState([]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    transactionsdata = _React$useState2[0],
    settransactionsData = _React$useState2[1];
  //const [usersdata, setusersData] = React.useState([]);
  var _React$useState3 = React.useState(""),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    selectedUser = _React$useState4[0],
    setSelectedUser = _React$useState4[1];
  var _React$useState5 = React.useState(1),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    currentPage = _React$useState6[0],
    setCurrentPage = _React$useState6[1];
  var itemsPerPage = 10;
  var _React$useContext = React.useContext(UserContext),
    user = _React$useContext.user,
    updateUserContext = _React$useContext.updateUserContext;
  React.useEffect(function () {
    // fetch transactions from API
    fetch('/account/transactions').then(function (response) {
      return response.json();
    }).then(function (transactionsdata) {
      settransactionsData(transactionsdata);
    });
  }, []);

  // Reset current page to 1 when selected user changes
  React.useEffect(function () {
    setCurrentPage(1);
  }, [selectedUser]);
  var filteredTransactions = transactionsdata.filter(function (transaction) {
    return transaction.email === user.UserEmail && (transaction.typeTrans == 'Login' || transaction.typeTrans == 'Logout');
  });
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
  }, "Access History for user: ", user.UserEmail), /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "#"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Date/Time"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Email"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Type"))), /*#__PURE__*/React.createElement("tbody", null, displayedTransactions.map(function (transaction, index) {
    return /*#__PURE__*/React.createElement("tr", {
      key: transaction.dateTime,
      className: index % 2 === 0 ? "table-primary" : "table-secondary"
    }, /*#__PURE__*/React.createElement("th", {
      scope: "row"
    }, startIndex + index + 1), /*#__PURE__*/React.createElement("td", null, transaction.dateTime), /*#__PURE__*/React.createElement("td", null, transaction.email), /*#__PURE__*/React.createElement("td", null, transaction.typeTrans));
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