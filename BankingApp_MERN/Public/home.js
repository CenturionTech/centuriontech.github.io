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
  const [ceo, setCeo] = useState('');
  const [selectedStockSymbol, setSelectedStockSymbol] = useState('AAPL'); // Default symbol
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [ratesDate, setRatesDate] = useState('');
  const [showChart, setShowChart] = useState(false);
  const [ApiError, setAPIerror] = useState(false);
  const stockLabels = "Oper. Date--Open--High--Low--Close";
    
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

  
  //get finance data for selected stock symbol
  // show stock chart from API alphavantage
  const RechartsStockChart = () => {
    const [stockData, setStockData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const apiKey = 'PGVCFEMTK2SS8KK8';
          console.log(selectedStockSymbol, apiKey);
          const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${selectedStockSymbol}&apikey=${apiKey}`;
          console.log(url);
  
          if (!url || !apiKey) {
            throw new Error("Invalid URL or API Key");
          }
  
          const response = await fetch(url);
          const data = await response.json(); // Correctly parse JSON response
  
          if (data && data['Time Series (Daily)']) {
            const dailyData = data['Time Series (Daily)'];
            const chartData = Object.keys(dailyData).map((date) => ({
              date,
              priceOpen:  parseFloat(dailyData[date]['1. open']).toFixed(2),
              priceHigh:  parseFloat(dailyData[date]['2. high']).toFixed(2),
              priceLow:   parseFloat(dailyData[date]['3. low']).toFixed(2),
              priceClose: parseFloat(dailyData[date]['4. close']).toFixed(2),
            }));
  
            setStockData(chartData.reverse());
            setLoading(false);
            console.log({ chartData });
          } else {
            console.error('Invalid or empty data received from the API.');
            setLoading(false);
          }
        } catch (error) {
          console.error('Error fetching stock data:', error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [selectedStockSymbol]); // Add selectedStockSymbol as a dependency to fetch data when it changes
  
    return (
      <div>
        {stockData.length > 0 && (
          <div>
            <h5>Stock Price from: {stockData[0].date} to {stockData[stockData.length - 1].date}</h5>
            <p style={{ color: "blue", fontSize: "18px" }}><strong>{stockLabels}</strong></p>
            
          </div>
        )}
        {loading ? (
          'Loading...'
        ) : (
          stockData.length > 0 ? (
            <div style={{ maxHeight: "280px", overflow: "auto", border: "1px solid #ccc", padding: "10px" }}>
              {stockData.reverse().map((dataPoint, index) => (
                <div key={index}>
                  <p>{dataPoint.date}&nbsp;&nbsp;  
                     {dataPoint.priceOpen}&nbsp;&nbsp; 
                     {dataPoint.priceHigh}&nbsp;&nbsp; 
                     {dataPoint.priceLow}&nbsp;&nbsp; 
                     {dataPoint.priceClose} 
                  </p>
                </div>
              ))}
            </div>
          ) : (
            'No stock data available.'
          )
        )}
      </div>
    );
  };
  
  

  
  // get stock market data from Yahoo API
  const url = 'https://yfinance-stock-market-data.p.rapidapi.com/stock-info';
  const handleSymbolChange = event => {
    setCeo('');
    setFinanceData({});
    setSelectedStockSymbol(event.target.value);
    setShowChart(false);
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
      if (finance.message && finance.message.includes('You have exceeded the DAILY quota for Requests on'))
      { 
        setCeo('You have exceeded the DAILY quota for Requests on …pi.com/asepscareer/api/yfinance-stock-market-data');
        setShowChart(false); 
        setAPIerror(true);
        
      }
      
      if (!ApiError) {
       setFinanceData(finance.data);

       if (finance.data != null) {
        setCeo(finance.data['companyOfficers'][0]['title'] + " : "+ finance.data['companyOfficers'][0]['name']);
        setShowChart(true); // Set showChart to true when data is fetched
       } else{setCeo("No CEO found")};
      }
      else setFinanceData({});

    } catch (error) {
      console.error(error);
      setAPIerror(true);
      setShowChart(false); 
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
        <td><strong>{currency}</strong></td>
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
            
            {(!ApiError && financeData !== null) ? (
              <div>
               <p style={{ color: "blue", fontSize: "18px" }}>{ceo}</p>
               <div style={{ maxHeight: "280px", overflow: "auto", border: "1px solid #ccc", padding: "10px" }}>
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
                  {showChart && (
                    <div className="col-md-12 mt-4">
                      
                      <RechartsStockChart />
                    </div>
                  )}
               </div>
               
               
            ) : (
              <div>
              <p>No market data available.</p>
              <p>{ceo}</p>
              </div>
                  
            )}
        </div>
      </div>

    </div>
  );
}
