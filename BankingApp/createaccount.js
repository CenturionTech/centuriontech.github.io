"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function CreateAccount() {
  var _React$useState = React.useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    show = _React$useState2[0],
    setShow = _React$useState2[1];
  var _React$useState3 = React.useState(''),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    status = _React$useState4[0],
    setStatus = _React$useState4[1];
  var _React$useState5 = React.useState(''),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    name = _React$useState6[0],
    setName = _React$useState6[1];
  var _React$useState7 = React.useState(''),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    email = _React$useState8[0],
    setEmail = _React$useState8[1];
  var _React$useState9 = React.useState(''),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    password = _React$useState10[0],
    setPassword = _React$useState10[1];
  var ctx = React.useContext(UserContext);
  function validate(field, label) {
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
  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, 'name')) return;
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;
    ctx.users.push({
      name: name,
      email: email,
      password: password,
      balance: 1000
    });
    setShow(false);
  }
  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }
  return /*#__PURE__*/React.createElement(Card, {
    bgcolor: "primary",
    header: "Create Account",
    status: status,
    body: show ? /*#__PURE__*/React.createElement(React.Fragment, null, "Name", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "input",
      className: "form-control",
      id: "name",
      placeholder: "Enter name",
      value: name,
      onChange: function onChange(e) {
        return setName(e.currentTarget.value);
      }
    }), /*#__PURE__*/React.createElement("br", null), "Email address", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "input",
      className: "form-control",
      id: "email",
      placeholder: "Enter email",
      value: email,
      onChange: function onChange(e) {
        return setEmail(e.currentTarget.value);
      }
    }), /*#__PURE__*/React.createElement("br", null), "Password", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "password",
      className: "form-control",
      id: "password",
      placeholder: "Enter password",
      value: password,
      onChange: function onChange(e) {
        return setPassword(e.currentTarget.value);
      }
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      className: "btn btn-light",
      onClick: handleCreate
    }, "Create Account")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h5", null, "Account creation was successful"), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      className: "btn btn-light",
      onClick: clearForm
    }, "Add another account"))
  });
}
