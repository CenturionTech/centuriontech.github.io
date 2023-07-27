function Transactions() {
    const [transactionsdata, settransactionsData] = React.useState([]);
    const [usersdata, setusersData] = React.useState([]);
    const [selectedUser, setSelectedUser] = React.useState("");
  
    React.useEffect(() => {
      // fetch transactions from API
      fetch('/account/transactions')
        .then(response => response.json())
        .then(transactionsdata => {
          settransactionsData(transactionsdata);
        });
    }, []);
  
    React.useEffect(() => {
      // fetch users from API
      fetch('/account/all')
        .then(response => response.json())
        .then(usersdata => {
          setusersData(usersdata);
        });
    }, []);
  
    // Filter transactions based on selected user
    const filteredTransactions = selectedUser
      ? transactionsdata.filter(transaction => transaction.email === selectedUser)
      : transactionsdata;
  
    return (
      <div className="container">
        <h5 className="mb-4">Transactions</h5>
        <div className="form-group">
          <label htmlFor="userSelect">Select User</label>
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
            {filteredTransactions.map((transaction, index) => (
              <tr
                key={transaction.dateTime}
                className={index % 2 === 0 ? "table-primary" : "table-secondary"}
              >
                <th scope="row">{index + 1}</th>
                <td>{transaction.dateTime}</td>
                <td>{transaction.email}</td>
                <td>{transaction.typeTrans}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  