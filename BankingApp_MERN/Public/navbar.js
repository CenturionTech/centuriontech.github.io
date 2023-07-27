// navbar implementation using bootstrap

const { useState, useEffect } = React;



function NavBar() {
  const [tooltipText, setTooltipText] = useState("");

  const handleMouseEnter = (text) => {
    setTooltipText(text);
    console.log(text);
  };

  const handleMouseLeave = () => {
    setTooltipText("");
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
      const text = link.getAttribute("data-tooltip");
      if (text) {
        link.addEventListener("mouseenter", () => handleMouseEnter(text));
        link.addEventListener("mouseleave", handleMouseLeave);
      }
    });

    return () => {
      navLinks.forEach((link) => {
        const text = link.getAttribute("data-tooltip");
        if (text) {
          link.removeEventListener("mouseenter", () => handleMouseEnter(text));
          link.removeEventListener("mouseleave", handleMouseLeave);
        }
      });
    };
  }, []);

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
              <a className="nav-link"  href="#/CreateAccount/" data-tooltip="Create Account: Enter name, email and password.">Create Account</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#/login/" data-tooltip="Login: Enter email and password to login">Login</a>
            </li>

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
