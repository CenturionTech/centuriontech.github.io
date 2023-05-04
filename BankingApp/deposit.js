function Deposit() {
  const [selectedUser, setSelectedUser] = React.useState("");
  const [depositAmount, setDepositAmount] = React.useState("");
  const [status, setStatus] = React.useState("");
  const ctx = React.useContext(UserContext);

  function handleDeposit() {
    const selectedUserIndex = ctx.users.findIndex(user => user.name === selectedUser);
    if (selectedUserIndex === -1) {
      setStatus(`Error: User ${selectedUser} not found`);
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    const user = ctx.users[selectedUserIndex];
    const newBalance = user.balance + parseFloat(depositAmount);
    if (isNaN(newBalance) || newBalance <= 0 || depositAmount <= 0) { 
      setStatus(`Error: Invalid deposit amount`);
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    user.balance = newBalance;
    setStatus(`Successfully deposited ${depositAmount} into ${selectedUser}'s account`);
    setDepositAmount("");
    setTimeout(() => setStatus(""), 3000);
  }

  return (
    <div className="container mt-3">
      <h5>Deposit</h5>
      <form>
        <div className="form-group">
          <label htmlFor="userSelect">Select User</label>
          <select className="form-control" id="userSelect" value={selectedUser} onChange={e => setSelectedUser(e.currentTarget.value)}>
            <option value="">-- Select user --</option>
            {ctx.users.map(user => (
              <option key={user.name} value={user.name}>{user.name} - ${user.balance.toFixed(2)}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="depositAmount">Deposit Amount</label>
          <input type="number" className="form-control" id="depositAmount" placeholder="Enter amount" value={depositAmount} onChange={e => setDepositAmount(e.currentTarget.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleDeposit}>Deposit</button>
      </form>
      {status && <div className="mt-3 alert alert-primary">{status}</div>}
    </div>
  );
}
