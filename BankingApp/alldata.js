"use strict";

function AllData() {
  var ctx = React.useContext(UserContext);
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "mb-4"
  }, "All Data"), /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "#"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Name"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Email"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Password"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Balance"))), /*#__PURE__*/React.createElement("tbody", null, ctx.users.map(function (user, index) {
    return /*#__PURE__*/React.createElement("tr", {
      key: user.email,
      className: index % 2 === 0 ? "table-primary" : "table-secondary"
    }, /*#__PURE__*/React.createElement("th", {
      scope: "row"
    }, index + 1), /*#__PURE__*/React.createElement("td", null, user.name), /*#__PURE__*/React.createElement("td", null, user.email), /*#__PURE__*/React.createElement("td", null, user.password), /*#__PURE__*/React.createElement("td", null, user.balance));
  }))));
}
