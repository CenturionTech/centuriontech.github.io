function Withdraw(){
  const [selectedUser, setSelectedUser] = React.useState("");
  const [withdrawAmount, setWithdrawAmount] = React.useState("");
  const [status, setStatus] = React.useState("");
  const ctx = React.useContext(UserContext);

  function handleWithdraw() {
    const selectedUserIndex = ctx.users.findIndex(user => user.name === selectedUser);
    if (selectedUserIndex === -1) {
      setStatus(`Error: User ${selectedUser} not found`);
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    const user = ctx.users[selectedUserIndex];
    const newBalance = user.balance - parseFloat(withdrawAmount);
    if (isNaN(newBalance) || newBalance < 0 || withdrawAmount <= 0) { 
      setStatus(`Error: Invalid withdraw amount`);
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    user.balance = newBalance;
    setStatus(`Successfully withdrawed ${withdrawAmount} into ${selectedUser}'s account`);
    setWithdrawAmount("");
    setTimeout(() => setStatus(""), 3000);
  }

  return (
    <div className="container mt-3">
      <h5>Withdraw</h5>
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
          <label htmlFor="withdrawAmount">Withdraw Amount</label>
          <input type="number" className="form-control" id="withdrawAmount" placeholder="Enter amount" value={withdrawAmount} onChange={e => setWithdrawAmount(e.currentTarget.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleWithdraw}>Withdraw</button>
      </form>
      {status && <div className="mt-3 alert alert-primary">{status}</div>}
    </div>
  );
}

