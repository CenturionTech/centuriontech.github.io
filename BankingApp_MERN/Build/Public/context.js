"use strict";

// context.js

var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useContext = _React.useContext,
  createContext = _React.createContext;
var Route = ReactRouterDOM.Route;
var Link = ReactRouterDOM.Link;
var HashRouter = ReactRouterDOM.HashRouter;
var UserContext = createContext(null);
function Card(props) {
  function classes() {
    var bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    var txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
    return 'card mb-3 ' + bg + txt;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: classes(),
    style: {
      maxWidth: "24rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-header"
  }, props.header), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("br", null), props.title && /*#__PURE__*/React.createElement("h5", {
    className: "card-title"
  }, props.title), props.text && /*#__PURE__*/React.createElement("p", {
    className: "card-text"
  }, props.text), props.body, props.status && /*#__PURE__*/React.createElement("div", {
    id: "createStatus"
  }, props.status)));
}