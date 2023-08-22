"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Balance() {
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
    bgcolor: "info",
    header: "Balance",
    status: status,
    body: show ? /*#__PURE__*/React.createElement(BalanceForm, {
      setShow: setShow,
      setStatus: setStatus
    }) : /*#__PURE__*/React.createElement(BalanceMsg, {
      setShow: setShow,
      setStatus: setStatus
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "balance.gif",
    alt: "Image",
    width: "60%"
  })));
}
function BalanceMsg(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h5", null, "Success"), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-light",
    onClick: function onClick() {
      props.setShow(true);
      props.setStatus('');
    }
  }, "Check balance again"));
}
function BalanceForm(props) {
  var _React$useContext = React.useContext(UserContext),
    user = _React$useContext.user,
    updateUserContext = _React$useContext.updateUserContext;
  var _React$useState5 = React.useState(''),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    email = _React$useState6[0],
    setEmail = _React$useState6[1];
  var _React$useState7 = React.useState(''),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    balance = _React$useState8[0],
    setBalance = _React$useState8[1];
  function validate(field, label, setStatus) {
    if (!field && user.UserEmail != '') {
      field = user.UserEmail;
      email = field;
      console.log(email);
    }
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
  function handle() {
    console.log(email);
    if (!validate(email, 'email', props.setStatus)) return;
    fetch("/account/findOne/".concat(email)).then(function (response) {
      return response.text();
    }).then(function (text) {
      try {
        var data = JSON.parse(text);
        var balanceFormatted = data.balance.toLocaleString('en-US', {
          style: 'decimal',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
        props.setStatus(data.name + '  ---> Balance: $' + balanceFormatted);
        props.setShow(false);
        setBalance(data.balance);
        console.log('Balance:', data.balance);
        console.log('JSON:', data);
      } catch (err) {
        props.setStatus(text);
        console.log(text);
      }
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, "Email", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "input",
    className: "form-control",
    placeholder: user.IsloggedIn ? user.UserEmail : "Enter email",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.currentTarget.value);
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-light",
    onClick: handle
  }, "Check Balance"));
}