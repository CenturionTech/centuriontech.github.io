// navbar implementation using bootstrap

function NavBar() {
  const { user, updateUserContext }   = useContext(UserContext);
  const [tooltipText, setTooltipText] = useState("");
  const [userEmail, setUserEmail]     = useState('');
  const [isLoggedIn, setIsLoggedIn]   = useState(false);
  
    
  const handleMouseEnter = (text) => {
    setTooltipText(text);
    console.log(text);
  };

  const handleMouseLeave = () => {
    setTooltipText("");
  };

  function handleLogout() {
    console.log('User: ' + user.UserEmail + ' is logged out' );
    setUserEmail('');
    setIsLoggedIn(false);

    updateUserContext({ UserEmail: '', IsloggedIn: false });
    
    
  };
  
  if (user != null) {
    console.log("NavBar: " + user.UserEmail + " is logged in?: " , user.IsloggedIn ? "true": "false");
        
  };

  useEffect(() => {
  const navLinks = document.querySelectorAll(".nav-link");

  const addEventListeners = () => {
    navLinks.forEach((link) => {
      const text = link.getAttribute("data-tooltip");
      if (text) {
        link.addEventListener("mouseenter", () => handleMouseEnter(text));
        link.addEventListener("mouseleave", handleMouseLeave);
      }
    });
  };

  const removeEventListeners = () => {
    navLinks.forEach((link) => {
      const text = link.getAttribute("data-tooltip");
      if (text) {
        link.removeEventListener("mouseenter", () => handleMouseEnter(text));
        link.removeEventListener("mouseleave", handleMouseLeave);
      }
    });
  };

  // Add event listeners initially
  addEventListeners();

  // If user.IsloggedIn changes, update event listeners
  if (user.IsloggedIn) {
    addEventListeners();
  } else {
    removeEventListeners();
  }

  if (!user.IsloggedIn) {addEventListeners()}

  // Cleanup function
  return () => {
    removeEventListeners();
  };
}, [user.IsloggedIn]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">APS Bank</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className={`nav-link ${user.IsloggedIn ? 'disabled' : ''}`} href="#/CreateAccount/" data-tooltip="Create Account: Enter name, email and password.">Create Account</a>
            </li>
            
            <li className="nav-item">
            <a className={`nav-link ${user.IsloggedIn ? 'disabled' : ''}`} href="#/login/" data-tooltip="Login: Enter email and password to login">Login</a>
            </li>

            {user.IsloggedIn && (
              <>
                
                {/* Enable other menu items */}
                <li className="nav-item">
                  <a className="nav-link" href="#/deposit/" data-tooltip="Deposit: Select a user and enter the deposit amount">Deposit</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/withdraw/" data-tooltip="Withdraw: Select a user and enter the withdraw amount">Withdraw</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/balance/" data-tooltip="Balance: Select a user to show balance">Balance</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/alldata/" data-tooltip="All Data: Show all data stored from the accounts created">All Data</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#/transactions/" data-tooltip="Transactions: Show all transactions stored from users">Transactions</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Welcome: {user.UserEmail}</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleLogout()} data-tooltip="Logout current user">Logout</a>
                </li>
              </>
            )}
          </ul>
        </div>
        </div>
      </nav>

      {tooltipText && (
        <div className="tooltip" style={{ left: "50%" }}>
          {tooltipText}
        </div>
      )}
    </>
  );
}