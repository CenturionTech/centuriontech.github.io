"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
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
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    showChart = _useState14[0],
    setShowChart = _useState14[1];
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    ApiError = _useState16[0],
    setAPIerror = _useState16[1];
  var stockLabels = "Oper. Date--Open--High--Low--Close";

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

  //get finance data for selected stock symbol
  // show stock chart from API alphavantage
  var RechartsStockChart = function RechartsStockChart() {
    var _useState17 = useState([]),
      _useState18 = _slicedToArray(_useState17, 2),
      stockData = _useState18[0],
      setStockData = _useState18[1];
    var _useState19 = useState(true),
      _useState20 = _slicedToArray(_useState19, 2),
      loading = _useState20[0],
      setLoading = _useState20[1];
    useEffect(function () {
      var fetchData = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var apiKey, _url, response, data, dailyData, chartData;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                apiKey = 'PGVCFEMTK2SS8KK8';
                console.log(selectedStockSymbol, apiKey);
                _url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=".concat(selectedStockSymbol, "&apikey=").concat(apiKey);
                console.log(_url);
                if (!(!_url || !apiKey)) {
                  _context2.next = 7;
                  break;
                }
                throw new Error("Invalid URL or API Key");
              case 7:
                _context2.next = 9;
                return fetch(_url);
              case 9:
                response = _context2.sent;
                _context2.next = 12;
                return response.json();
              case 12:
                data = _context2.sent;
                // Correctly parse JSON response

                if (data && data['Time Series (Daily)']) {
                  dailyData = data['Time Series (Daily)'];
                  chartData = Object.keys(dailyData).map(function (date) {
                    return {
                      date: date,
                      priceOpen: parseFloat(dailyData[date]['1. open']).toFixed(2),
                      priceHigh: parseFloat(dailyData[date]['2. high']).toFixed(2),
                      priceLow: parseFloat(dailyData[date]['3. low']).toFixed(2),
                      priceClose: parseFloat(dailyData[date]['4. close']).toFixed(2)
                    };
                  });
                  setStockData(chartData.reverse());
                  setLoading(false);
                  console.log({
                    chartData: chartData
                  });
                } else {
                  console.error('Invalid or empty data received from the API.');
                  setLoading(false);
                }
                _context2.next = 20;
                break;
              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](0);
                console.error('Error fetching stock data:', _context2.t0);
                setLoading(false);
              case 20:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[0, 16]]);
        }));
        return function fetchData() {
          return _ref2.apply(this, arguments);
        };
      }();
      fetchData();
    }, [selectedStockSymbol]); // Add selectedStockSymbol as a dependency to fetch data when it changes

    return /*#__PURE__*/React.createElement("div", null, stockData.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Stock Price from: ", stockData[0].date, " to ", stockData[stockData.length - 1].date), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "blue",
        fontSize: "18px"
      }
    }, /*#__PURE__*/React.createElement("strong", null, stockLabels))), loading ? 'Loading...' : stockData.length > 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: "280px",
        overflow: "auto",
        border: "1px solid #ccc",
        padding: "10px"
      }
    }, stockData.reverse().map(function (dataPoint, index) {
      return /*#__PURE__*/React.createElement("div", {
        key: index
      }, /*#__PURE__*/React.createElement("p", null, dataPoint.date, "\xA0\xA0", dataPoint.priceOpen, "\xA0\xA0", dataPoint.priceHigh, "\xA0\xA0", dataPoint.priceLow, "\xA0\xA0", dataPoint.priceClose));
    })) : 'No stock data available.');
  };

  // get stock market data from Yahoo API
  var url = 'https://yfinance-stock-market-data.p.rapidapi.com/stock-info';
  var handleSymbolChange = function handleSymbolChange(event) {
    setCeo('');
    setFinanceData({});
    setSelectedStockSymbol(event.target.value);
    setShowChart(false);
  };
  var handleFetchStockData = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var response, finance;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
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
            response = _context3.sent;
            _context3.next = 6;
            return response.json();
          case 6:
            finance = _context3.sent;
            console.log('Yahoo Stock Market');
            console.log(finance);
            if (finance.message && finance.message.includes('You have exceeded the DAILY quota for Requests on')) {
              setCeo('You have exceeded the DAILY quota for Requests on …pi.com/asepscareer/api/yfinance-stock-market-data');
              setShowChart(false);
              setAPIerror(true);
            }
            if (!ApiError) {
              setFinanceData(finance.data);
              if (finance.data != null) {
                setCeo(finance.data['companyOfficers'][0]['title'] + " : " + finance.data['companyOfficers'][0]['name']);
                setShowChart(true); // Set showChart to true when data is fetched
              } else {
                setCeo("No CEO found");
              }
              ;
            } else setFinanceData({});
            _context3.next = 18;
            break;
          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);
            setAPIerror(true);
            setShowChart(false);
          case 18:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 13]]);
    }));
    return function handleFetchStockData() {
      return _ref3.apply(this, arguments);
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
  }, Object.entries(stockSymbols).map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
      symbol = _ref5[0],
      name = _ref5[1];
    return /*#__PURE__*/React.createElement("option", {
      key: symbol,
      value: symbol
    }, symbol, " - ", name);
  })), /*#__PURE__*/React.createElement("button", {
    onClick: handleFetchStockData
  }, "Fetch Stock Data")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Market Data for ", stockSymbols[selectedStockSymbol]), console.log(financeData), " ", !ApiError && financeData !== null ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
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
  }, Object.entries(financeData).map(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
      key = _ref7[0],
      value = _ref7[1];
    // Skip rendering the "companyOfficers" field
    if (key === "companyOfficers") {
      return null; // Skip rendering this field
    }

    return /*#__PURE__*/React.createElement("p", {
      key: key
    }, /*#__PURE__*/React.createElement("strong", null, key, ":"), " ", value);
  })), showChart && /*#__PURE__*/React.createElement("div", {
    className: "col-md-12 mt-4"
  }, /*#__PURE__*/React.createElement(RechartsStockChart, null))) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "No market data available."), /*#__PURE__*/React.createElement("p", null, ceo)))));
}