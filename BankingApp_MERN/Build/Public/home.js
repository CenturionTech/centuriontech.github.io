"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// home.js

var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect;
var currencyNames = {
  AUD: "Australian Dollar",
  BGN: "Bulgarian Lev",
  BRL: "Brazilian Real",
  CAD: "Canadian Dollar",
  CHF: "Swiss Franc",
  CNY: "Chinese Renminbi Yuan",
  CZK: "Czech Koruna",
  DKK: "Danish Krone",
  EUR: "Euro",
  GBP: "British Pound",
  HKD: "Hong Kong Dollar",
  HUF: "Hungarian Forint",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Sheqel",
  INR: "Indian Rupee",
  ISK: "Icelandic Króna",
  JPY: "Japanese Yen",
  KRW: "South Korean Won",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  NOK: "Norwegian Krone",
  NZD: "New Zealand Dollar",
  PHP: "Philippine Peso",
  PLN: "Polish Złoty",
  RON: "Romanian Leu",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  THB: "Thai Baht",
  TRY: "Turkish Lira",
  USD: "United States Dollar",
  ZAR: "South African Rand"
};
var stockSymbols = {
  AAPL: "Apple Inc",
  MSFT: "Microsoft",
  GOOGL: "Alphabet Class A",
  AMZN: "Amazon",
  TSLA: "Tesla",
  NVDA: "Nvidia",
  META: "Meta Platforms",
  BABA: "Alibaba",
  AMD: "Advanced Micro Devices",
  DIS: "Walt Disney",
  T: "AT&T",
  PYPL: "Paypal Holdings",
  PLTR: "Palantir Technologies",
  VISA: "Visa",
  JNJ: "Johnson & Johnson",
  BAC: "Bank of America",
  CRM: "Salesforce",
  PFE: "Pfizer",
  NFLX: "Netflix",
  INTC: "Intel",
  BA: "Boeing",
  GE: "General Electric",
  F: "Ford Motor",
  XOM: "Exxon Mobil",
  JPM: "JPMorgan Chase & Co.",
  WMT: "Walmart",
  KO: "Coca-Cola",
  CSCO: "Cisco Systems",
  GM: "General Motors",
  MA: "Mastercard",
  HD: "Home Depot",
  CVX: "Chevron",
  SBUX: "Starbucks",
  NKE: "Nike",
  C: "Citigroup",
  DAL: "Delta Air Lines",
  ZM: "Zoom Video Communications",
  IBM: "International Business Machines",
  AAL: "American Airlines",
  SPCE: "Virgin Galactic Holdings",
  PG: "Procter & Gamble",
  MCD: "McDonald's",
  MMM: "3M",
  FDX: "FedEx",
  ORCL: "Oracle",
  BP: "BP",
  MLB1: "Mercado Libre",
  AXP: "American Express"
};
function Home() {
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    exchangeRates = _useState2[0],
    setExchangeRates = _useState2[1];
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    financeData = _useState4[0],
    setFinanceData = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    ceo = _useState6[0],
    setCeo = _useState6[1];
  var _useState7 = useState('AAPL'),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedStockSymbol = _useState8[0],
    setSelectedStockSymbol = _useState8[1]; // Default symbol
  var _useState9 = useState(1),
    _useState10 = _slicedToArray(_useState9, 2),
    currentPage = _useState10[0],
    setCurrentPage = _useState10[1];
  var itemsPerPage = 6;
  var _useState11 = useState(''),
    _useState12 = _slicedToArray(_useState11, 2),
    ratesDate = _useState12[0],
    setRatesDate = _useState12[1];

  // get the current exchange rates from frankfurter API
  useEffect(function () {
    var fetchExchangeRates = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch('https://api.frankfurter.app/latest?from=USD');
            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();
            case 6:
              data = _context.sent;
              setExchangeRates(data.rates);
              console.log(data);
              setRatesDate(data.date);
              _context.next = 15;
              break;
            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              console.error('Error fetching exchange rates:', _context.t0);
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 12]]);
      }));
      return function fetchExchangeRates() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchExchangeRates();
    var interval = setInterval(fetchExchangeRates, 600000);
    return function () {
      return clearInterval(interval);
    };
  }, []);

  // get stock market data from Yahoo API
  var url = 'https://yfinance-stock-market-data.p.rapidapi.com/stock-info';
  var handleSymbolChange = function handleSymbolChange(event) {
    setCeo('');
    setFinanceData({});
    setSelectedStockSymbol(event.target.value);
  };
  var handleFetchStockData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response, finance;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': 'af73607823msh25085cda054075ap1a7c79jsn6f7c0cb329b8',
                'X-RapidAPI-Host': 'yfinance-stock-market-data.p.rapidapi.com'
              },
              body: new URLSearchParams({
                symbol: selectedStockSymbol
              }).toString()
            });
          case 3:
            response = _context2.sent;
            _context2.next = 6;
            return response.json();
          case 6:
            finance = _context2.sent;
            console.log('Yahoo Stock Market');
            console.log(finance);
            setFinanceData(finance.data);
            if (finance.data != null) {
              setCeo(finance.data['companyOfficers'][0]['title'] + " : " + finance.data['companyOfficers'][0]['name']);
            } else {
              setCeo("No CEO found");
            }
            ;
            _context2.next = 17;
            break;
          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 14]]);
    }));
    return function handleFetchStockData() {
      return _ref2.apply(this, arguments);
    };
  }();
  var totalPages = Math.ceil(Object.keys(exchangeRates).length / itemsPerPage);
  var handlePageChange = function handlePageChange(newPage) {
    setCurrentPage(newPage);
  };
  var renderExchangeRows = function renderExchangeRows() {
    var startIndex = (currentPage - 1) * itemsPerPage;
    var currenciesToShow = Object.keys(exchangeRates).slice(startIndex, startIndex + itemsPerPage);
    return currenciesToShow.map(function (currency) {
      return /*#__PURE__*/React.createElement("tr", {
        key: currency
      }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("strong", null, currency)), /*#__PURE__*/React.createElement("td", null, currencyNames[currency]), /*#__PURE__*/React.createElement("td", null, exchangeRates[currency]));
    });
  };
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
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-6 mt-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Exchange Rates with Respect to USD for ", ratesDate), /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Currency Code"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Currency Name"), /*#__PURE__*/React.createElement("th", {
    scope: "col"
  }, "Exchange Rate"))), /*#__PURE__*/React.createElement("tbody", null, renderExchangeRows())), /*#__PURE__*/React.createElement("div", {
    className: "pagination"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return handlePageChange(currentPage - 1);
    },
    disabled: currentPage === 1
  }, "Previous"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return handlePageChange(currentPage + 1);
    },
    disabled: currentPage === totalPages
  }, "Next")))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-6 mt-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Stock Symbol Selector"), /*#__PURE__*/React.createElement("select", {
    value: selectedStockSymbol,
    onChange: handleSymbolChange
  }, Object.entries(stockSymbols).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      symbol = _ref4[0],
      name = _ref4[1];
    return /*#__PURE__*/React.createElement("option", {
      key: symbol,
      value: symbol
    }, symbol, " - ", name);
  })), /*#__PURE__*/React.createElement("button", {
    onClick: handleFetchStockData
  }, "Fetch Stock Data")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Market Data for ", stockSymbols[selectedStockSymbol]), console.log(financeData), " ", financeData !== null ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      color: "blue",
      fontSize: "18px"
    }
  }, ceo), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: "280px",
      overflow: "auto",
      border: "1px solid #ccc",
      padding: "10px"
    }
  }, Object.entries(financeData).map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      key = _ref6[0],
      value = _ref6[1];
    // Skip rendering the "companyOfficers" field
    if (key === "companyOfficers") {
      return null; // Skip rendering this field
    }

    return /*#__PURE__*/React.createElement("p", {
      key: key
    }, /*#__PURE__*/React.createElement("strong", null, key, ":"), " ", value);
  }))) : /*#__PURE__*/React.createElement("p", null, "No market data available."))));
}