// ATM App with improvements

const ATMDeposit = ({ onChange, isDeposit , validTransaction}) => {
    const choice = ['Deposit', 'Cash Back'];
    console.log(`ATM isDeposit: ${isDeposit}`);
    let rendering = (isDeposit != null);
    let isValid = validTransaction ? true: false;
    
    return (rendering && 
        <label className="label huge">
          <h3> {choice[Number(!isDeposit)]}</h3>
          <input id="number-input" type="number" width="200" onChange={onChange}></input>
          <input type="submit" width="200" value="Submit" id="submit-input" disabled={!isValid}></input>
        </label>
      
    );
  };
  
  const Account = () => {
    const [deposit, setDeposit] = React.useState(0);
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(null);
    const [atmMode, setAtmMode] = React.useState("");
    const [validTransaction, setValidTransaction] = React.useState(false);
  
    let status = `Account Balance $ ${totalState} `;
    console.log(`Account Rendered with isDeposit: ${isDeposit}`);
    const handleChange = (event) => {
      console.log(`handleChange ${event.target.value}`);
      let amount = Number(event.target.value);
      setDeposit(amount);
      
      if (amount < 0) return;

      setValidTransaction(true);

      if ((atmMode == "Cash Back") && 
         (amount > totalState)) {
             setValidTransaction(false);
             return;
         } 
         
     
        
    };
    const handleSubmit = (event) => {
      let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
      setTotalState(newTotal);
      setValidTransaction(false);
      event.preventDefault();
    };
  
    const handleModeSelect = (event) => {
      setAtmMode(event.target.value);
      let typeOperation = event.target.value;
      
      let deposit = null;
      if (typeOperation == "Deposit") deposit = true;
      if (typeOperation == "Cash Back") deposit = false; 
      
      setIsDeposit(deposit);
      
  
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2 id="total">{status}</h2>
        <label>Select an action below to continue</label>
        <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
        <option id="no-selection" value=""></option>
        <option id="deposit-selection" value="Deposit">Deposit</option>
        <option id="cashback-selection" value="Cash Back">Cash Back</option>
        </select>
        
        <ATMDeposit onChange={handleChange} isDeposit={isDeposit} validTransaction={validTransaction}></ATMDeposit>
      </form>
    );
  };
  // ========================================
  ReactDOM.render(<Account />, document.getElementById('root'));
  
