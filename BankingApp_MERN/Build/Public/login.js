"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// login.js

function Login() {
  var _React$useState = React.useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    show = _React$useState2[0],
    setShow = _React$useState2[1];
  var _React$useState3 = React.useState(''),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    status = _React$useState4[0],
    setStatus = _React$useState4[1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Card, {
    bgcolor: "secondary",
    header: "Login",
    status: status,
    body: show ? /*#__PURE__*/React.createElement(LoginForm, {
      setShow: setShow,
      setStatus: setStatus
    }) : /*#__PURE__*/React.createElement(LoginMsg, {
      setShow: setShow,
      setStatus: setStatus
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "login.gif",
    alt: "Image",
    width: "60%"
  })));
}
function LoginMsg(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h5", null, "Success"), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-light",
    onClick: function onClick() {
      return props.setShow(true);
    }
  }, "Authenticate again"));
}
function LoginForm(props) {
  var _React$useContext = React.useContext(UserContext),
    user = _React$useContext.user,
    updateUserContext = _React$useContext.updateUserContext;
  var _React$useState5 = React.useState(''),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    email = _React$useState6[0],
    setEmail = _React$useState6[1];
  var _React$useState7 = React.useState(''),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    password = _React$useState8[0],
    setPassword = _React$useState8[1];
  function validate(field, label, setStatus) {
    if (!field) {
      setStatus('Error: ' + label + " is left blank");
      setTimeout(function () {
        return setStatus('');
      }, 3000);
      return false;
    }
    if (label === 'email') {
      var emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(field)) {
        setStatus('Error: ' + label + ' is not a valid email');
        setTimeout(function () {
          return setStatus('');
        }, 3000);
        return false;
      }
    }
    if (label === 'password' && field.length < 8) {
      setStatus('Error: Password must be at least 8 characters long');
      setTimeout(function () {
        return setStatus('');
      }, 3000);
      return false;
    }
    return true;
  }
  function createLoginTransaction() {
    // create transaction in DB
    fetch("/account/transaction/".concat(email, "/", 'Login', "/", 0)).then(function (response) {
      return response.text();
    }).then(function (text) {
      try {
        var data = JSON.parse(text);
        console.log('JSON:', data);
      } catch (err) {
        setStatus('Transaction failed');
        console.log('err:', text);
      }
    });
  }
  function handle() {
    console.log(email, password);
    if (!validate(email, 'email', props.setStatus)) return;
    if (!validate(password, 'password', props.setStatus)) return;
    fetch("/account/login/".concat(email, "/").concat(password)).then(function (response) {
      return response.text();
    }).then(function (text) {
      try {
        var data = JSON.parse(text);
        props.setStatus('');
        props.setShow(false);

        // Update the userEmail and isLoggedIn states through the context
        updateUserContext({
          UserEmail: email,
          IsloggedIn: true
        });
        console.log('JSON:', data);
        text = 'User: ' + email + ' is logged in';
        console.log(text);
        props.setStatus(text);
        createLoginTransaction(); // record the login of current user
      } catch (err) {
        props.setStatus(text);
        console.log('err:' + err, text);
      }
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, "Email:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "input",
    className: "form-control",
    placeholder: "Enter email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.currentTarget.value);
    }
  }), /*#__PURE__*/React.createElement("br", null), "Password:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "password",
    className: "form-control",
    placeholder: "Enter password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.currentTarget.value);
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-light",
    onClick: handle
  }, "Login"));
}