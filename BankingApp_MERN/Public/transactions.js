function Transactions() {
  const [transactionsdata, settransactionsData] = React.useState([]);
  const [usersdata, setusersData] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10;

  React.useEffect(() => {
    // fetch transactions from API
    fetch('/account/transactions')
      .then(response => response.json())
      .then(transactionsdata => {
        settransactionsData(transactionsdata);
      });

    // fetch users from API
    fetch('/account/all')
      .then(response => response.json())
      .then(usersdata => {
        setusersData(usersdata);
      });
  }, []);

  // Reset current page to 1 when selected user changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedUser]);

  const filteredTransactions = selectedUser
    ? transactionsdata.filter(transaction => (transaction.email === selectedUser && (transaction.typeTrans == 'Deposit' || transaction.typeTrans == 'Withdraw')))
    : transactionsdata.filter(transaction => ((transaction.typeTrans == 'Deposit' || transaction.typeTrans == 'Withdraw')));

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  let totalDeposit   = 0;
  let totalWithdraw  = 0;

  filteredTransactions.forEach(element => {
    if (element.typeTrans === "Deposit") {
      totalDeposit += element.amount;
    }
    else 
    if (element.typeTrans === "Withdraw") {
      totalWithdraw += element.amount;
    }
  });

  const displayedTransactions = filteredTransactions.slice(startIndex, endIndex);

  function handleNextPage() {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  }

  function handlePreviousPage() {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  }

  return (
    <div className="container">
      <h5 className="mb-4">Transactions</h5>
      <div className="form-group">
        <label htmlFor="userSelect">Select User.... Total Records: {usersdata.length}</label>
        <select
          className="form-control"
          id="userSelect"
          value={selectedUser}
          onChange={e => setSelectedUser(e.currentTarget.value)}
        >
          <option value="">-- All Users --</option>
          {usersdata.map(user => (
            <option key={user.email} value={user.email}>
              {user.email} - {user.name}
            </option>
          ))}
        </select>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date/Time</th>
            <th scope="col">Email</th>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
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
              <td>${transaction.amount.toLocaleString('en-US', {
                    style: 'decimal',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2})}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-center">
        <button className="btn btn-light" onClick={handlePreviousPage} disabled={currentPage === 1}>Previous Page</button>
        <span className="mx-3">Page {currentPage} of {totalPages}</span>
        <button className="btn btn-light" onClick={handleNextPage} disabled={currentPage === totalPages}>Next Page</button>
        <span className="mx-3">Total Transactions: {filteredTransactions.length}</span>
        <span className="mx-3"><strong>Deposits: ${totalDeposit.toLocaleString('en-US', {
                    style: 'decimal',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2})}</strong></span>
        <span className="mx-3"><strong>Withdrawals: ${totalWithdraw.toLocaleString('en-US', {
                    style: 'decimal',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2})}</strong></span>
        
      </div>
    </div>
  );
}