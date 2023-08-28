function AccessHistory() {
    const [transactionsdata, settransactionsData] = React.useState([]);
    //const [usersdata, setusersData] = React.useState([]);
    const [selectedUser, setSelectedUser] = React.useState("");
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 10;
    const { user, updateUserContext } = React.useContext(UserContext);
  
    React.useEffect(() => {
      // fetch transactions from API
      fetch('/account/transactions')
        .then(response => response.json())
        .then(transactionsdata => {
          settransactionsData(transactionsdata);
        });
        
    }, []);
  
    // Reset current page to 1 when selected user changes
    React.useEffect(() => {
      setCurrentPage(1);
    }, [selectedUser]);
  
    const filteredTransactions = transactionsdata.filter(transaction => 
                (transaction.email === user.UserEmail && (transaction.typeTrans == 'Login' || transaction.typeTrans == 'Logout')));
      
    const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    const displayedTransactions = filteredTransactions.slice(startIndex, endIndex);
  
    function handleNextPage() {
      setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    }
  
    function handlePreviousPage() {
      setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    }
  
    return (
      <div className="container">
        <h5 className="mb-4">Access History for user: {user.UserEmail}</h5>
        
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date/Time</th>
              <th scope="col">Email</th>
              <th scope="col">Type</th>
              
            </tr>
          </thead>
          <tbody>
            {displayedTransactions.map((transaction, index) => (
              <tr
                key={transaction.dateTime}
                className={index % 2 === 0 ? "table-primary" : "table-secondary"}
              >
                <th scope="row">{startIndex + index + 1}</th>
                <td>{transaction.dateTime}</td>
                <td>{transaction.email}</td>
                <td>{transaction.typeTrans}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
  
        <div className="text-center">
          <button className="btn btn-light" onClick={handlePreviousPage} disabled={currentPage === 1}>Previous Page</button>
          <span className="mx-3">Page {currentPage} of {totalPages}</span>
          <button className="btn btn-light" onClick={handleNextPage} disabled={currentPage === totalPages}>Next Page</button>
          <span className="mx-3">Total Transactions: {filteredTransactions.length}</span>
        </div>
      </div>
    );
  }