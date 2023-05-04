"use strict";

function Spa() {
  return /*#__PURE__*/React.createElement(HashRouter, null, /*#__PURE__*/React.createElement(NavBar, null), /*#__PURE__*/React.createElement(UserContext.Provider, {
    value: {
      users: [{
        name: 'Omar Cerda',
        email: 'int3lltec.group@gmail.com',
        password: 'Topsecret',
        balance: 1000
      }]
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      padding: "20px"
    }
  }, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    exact: true,
    component: Home
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/CreateAccount/",
    component: CreateAccount
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/deposit/",
    component: Deposit
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/withdraw/",
    component: Withdraw
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/alldata/",
    component: AllData
  }))));
}
ReactDOM.render( /*#__PURE__*/React.createElement(Spa, null), document.getElementById('root'));
