function Withdraw() {
  const [selectedUser, setSelectedUser] = React.useState("");
  const [withdrawAmount, setWithdrawAmount] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [data, setData] = React.useState([]);  

  

  React.useEffect(() => {
        
    // fetch all accounts from API
    fetch('/account/all')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);
                                     
        });

  }, []);

  function handleWithdraw() {
    const selectedUserIndex = data.findIndex(user => user.email === selectedUser);
    if (selectedUserIndex === -1) {
      setStatus(`Error: User ${selectedUser} not found`);
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    const user = data[selectedUserIndex];
    const newBalance = user.balance - parseFloat(withdrawAmount);
    if (isNaN(newBalance) || newBalance < 0 || withdrawAmount <= 0) {  
      setStatus(`Error: Invalid withdraw amount`);
      setTimeout(() => setStatus(""), 3000);
      return;
    }
    
    // update user.balance in DB
    fetch(`/account/update/${user.email}/-${withdrawAmount}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            console.log('JSON:', data);
        } catch(err) {
            setStatus('Withdraw failed')
            console.log('err:', text);
        }
    });

    // create transaction in DB
    fetch(`/account/transaction/${user.email}/-${withdrawAmount}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            console.log('JSON:', data);
        } catch(err) {
            setStatus('Transaction failed')
            console.log('err:', text);
        }
    });

    user.balance = newBalance;
    const withdrawFormatted = withdrawAmount.toLocaleString('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2});
    const withdrawAmt = "Successfully withdrawed $" + withdrawFormatted + " into " + selectedUser + "'s account"; 
    setStatus(withdrawAmt);
    setWithdrawAmount("");
    setTimeout(() => setStatus(""), 3000);
  }

  return (
    <div className="container mt-3">
      <h5>Withdraw</h5>
      <img src="deposit_withdraw.gif" alt="Image" width="20%" />
      <form>
        <div className="form-group">
          <label htmlFor="userSelect">Select User.... Total Records: {data.length}</label>
          <select className="form-control" id="userSelect" value={selectedUser} onChange={e => setSelectedUser(e.currentTarget.value)}>
            <option value="">-- Select user --</option>
            {data.map(user => (
              <option key={user.email} value={user.email}>{user.email} - ${user.balance.toLocaleString('en-US', {
              style: 'decimal',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2})}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="withdrawAmount">Withdraw Amount</label>
          <input type="number" className="form-control" id="withdrawAmount" placeholder="Enter amount" value={withdrawAmount} onChange={e => setWithdrawAmount(e.currentTarget.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleWithdraw}>Withdraw</button>
      </form>
      {status && <div className="mt-3 alert alert-primary">{status}</div>}
    </div>
  );
}