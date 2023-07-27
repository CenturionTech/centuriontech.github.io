"use strict";

function Home() {
  return /*#__PURE__*/React.createElement("div", {
    className: "row mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement(Card, {
    txtcolor: "black",
    header: "APS Bank International",
    title: "Welcome to APS Bank International",
    text: "APS Bank is one of the oldest banks on the Maltese Islands and is a leading provider of financial services, offering personal, business and investments solutions. APS is licensed as an investment services firm, registered as a Tied Insurance Intermediary.",
    body: /*#__PURE__*/React.createElement("img", {
      src: "bank_logo.jpg",
      className: "img-fluid",
      alt: "Responsive image"
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-6 mt-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "embed-responsive embed-responsive-16by9"
  }, /*#__PURE__*/React.createElement("iframe", {
    className: "embed-responsive-item",
    src: "https://www.youtube.com/embed/DRAB2o6WwJw",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    allowFullScreen: true,
    autoplay: true
  }))));
}