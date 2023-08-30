// home.js

const { useState , useEffect} = React;

const currencyNames = {
  AUD:"Australian Dollar",
  BGN:"Bulgarian Lev",
  BRL:"Brazilian Real",
  CAD:"Canadian Dollar",
  CHF:"Swiss Franc",
  CNY:"Chinese Renminbi Yuan",
  CZK:"Czech Koruna",
  DKK:"Danish Krone",
  EUR:"Euro",
  GBP:"British Pound",
  HKD:"Hong Kong Dollar",
  HUF:"Hungarian Forint",
  IDR:"Indonesian Rupiah",
  ILS:"Israeli New Sheqel",
  INR:"Indian Rupee",
  ISK:"Icelandic Króna",
  JPY:"Japanese Yen",
  KRW:"South Korean Won",
  MXN:"Mexican Peso",
  MYR:"Malaysian Ringgit",
  NOK:"Norwegian Krone",
  NZD:"New Zealand Dollar",
  PHP:"Philippine Peso",
  PLN:"Polish Złoty",
  RON:"Romanian Leu",
  SEK:"Swedish Krona",
  SGD:"Singapore Dollar",
  THB:"Thai Baht",
  TRY:"Turkish Lira",
  USD:"United States Dollar",
  ZAR:"South African Rand"
};

const stockSymbols = {
  AAPL:"Apple Inc",
  MSFT:"Microsoft",
  GOOGL:"Alphabet Class A",
  AMZN: "Amazon",
  TSLA:"Tesla",
  NVDA:"Nvidia",
  META:"Meta Platforms",
  BABA:"Alibaba",
  AMD:"Advanced Micro Devices",
  DIS:"Walt Disney",
  T:"AT&T",
  PYPL:"Paypal Holdings",
  PLTR:"Palantir Technologies",
  VISA:"Visa",
  JNJ:"Johnson & Johnson",
  BAC:"Bank of America",
  CRM:"Salesforce",
  PFE:"Pfizer",
  NFLX:"Netflix",
  INTC:"Intel",
  BA:"Boeing",
  GE:"General Electric",
  F:"Ford Motor",
  XOM:"Exxon Mobil",
  JPM:"JPMorgan Chase & Co.",
  WMT:"Walmart",
  KO:"Coca-Cola",
  CSCO:"Cisco Systems",
  GM:"General Motors",
  MA:"Mastercard",
  HD:"Home Depot",
  CVX:"Chevron",
  SBUX:"Starbucks",
  NKE:"Nike",
  C:"Citigroup",
  DAL:"Delta Air Lines",
  ZM:"Zoom Video Communications",
  IBM:"International Business Machines",
  AAL:"American Airlines",
  SPCE:"Virgin Galactic Holdings",
  PG:"Procter & Gamble",
  MCD:"McDonald's",
  MMM:"3M",
  FDX:"FedEx",
  ORCL:"Oracle",
  BP:"BP",
  MLB1:"Mercado Libre",
  AXP:"American Express",
};

function Home() {
 
  const [exchangeRates, setExchangeRates] = useState({});
  const [financeData, setFinanceData] = useState({});
  const [selectedStockSymbol, setSelectedStockSymbol] = useState('AAPL'); // Default symbol
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [ratesDate, setRatesDate] = useState('');
  
  // get the current exchange rates from frankfurter API
  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(
          'https://api.frankfurter.app/latest?from=USD'
        );
        const data = await response.json();
        
        setExchangeRates(data.rates);
        console.log(data);
        setRatesDate(data.date);
        
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
    const interval = setInterval(fetchExchangeRates, 600000);

    return () => clearInterval(interval);
  }, []);

  
  // get stock market data from Yahoo API
  const url = 'https://yfinance-stock-market-data.p.rapidapi.com/stock-info';
  const handleSymbolChange = event => {
    setSelectedStockSymbol(event.target.value);
  };

  const handleFetchStockData = async () => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'af73607823msh25085cda054075ap1a7c79jsn6f7c0cb329b8',
          'X-RapidAPI-Host': 'yfinance-stock-market-data.p.rapidapi.com'
        },
        body: new URLSearchParams({ symbol: selectedStockSymbol }).toString()
      });
      const finance = await response.json();
      console.log('Yahoo Stock Market');
      console.log(finance);
      setFinanceData(finance.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  const totalPages = Math.ceil(Object.keys(exchangeRates).length / itemsPerPage);

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  const renderExchangeRows = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currenciesToShow = Object.keys(exchangeRates).slice(
      startIndex,
      startIndex + itemsPerPage
    );

    return currenciesToShow.map(currency => (
      <tr key={currency}>
        <td>{currency}</td>
        <td>{currencyNames[currency]}</td>
        <td>{exchangeRates[currency]}</td>
      </tr>
    ));
  };


  return (
    <div className="row mx-auto">
      <div className="col-md-6">
        <Card
          txtcolor="black"
          header="APS Bank International"
          title="Welcome to APS Bank International"
          text="APS Bank is one of the oldest banks on the Maltese Islands and is a leading provider of financial services, offering personal, business and investments solutions. APS is licensed as an investment services firm, registered as a Tied Insurance Intermediary."
          body={<img src="bank_logo.jpg" className="img-fluid" alt="Responsive image" />}
        />
      </div>
      <div className="col-md-6 mt-4">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/DRAB2o6WwJw" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen autoplay></iframe>
        </div>
      </div>

      <div className="col-md-6 mt-4">
        <div>
          <h5>Exchange Rates with Respect to USD for {ratesDate}</h5>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Currency Code</th>
                <th scope="col">Currency Name</th>
                <th scope="col">Exchange Rate</th>
              </tr>
            </thead>
            <tbody>{renderExchangeRows()}</tbody>
          </table>
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6 mt-4">
        <div>
          <h5>Stock Symbol Selector</h5>
          <select
            value={selectedStockSymbol}
            onChange={handleSymbolChange}
          >
            {Object.entries(stockSymbols).map(([symbol, name]) => (
              <option key={symbol} value={symbol}>
                {symbol} - {name}
              </option>
            ))}
          </select>
          <button onClick={handleFetchStockData}>Fetch Stock Data</button>
             
        </div>
        <div>
            <h5>Market Data for {stockSymbols[selectedStockSymbol]}</h5>
            {console.log(financeData)} {/* Debugging */}
            {financeData !== null ? (
              <div style={{ maxHeight: "300px", overflow: "auto", border: "1px solid #ccc", padding: "10px" }}>
                {Object.entries(financeData).map(([key, value]) => {
                  // Skip rendering the "companyOfficers" field
                  if (key === "companyOfficers") {
                    return null; // Skip rendering this field
                  }

                  return (
                    <p key={key}>
                      <strong>{key}:</strong> {value}
                    </p>
                  );
                })}
              </div>
            ) : (
              <p>No market data available.</p>
            )}
        </div>
      </div>

    </div>
  );
}
