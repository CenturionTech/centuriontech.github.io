function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
      <Card
        bgcolor="info"
        header="Balance"
        status={status}
        body={show ?
          <BalanceForm setShow={setShow} setStatus={setStatus}/> :
          <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
      />
      </div>
      <div style={{ flex: 1 }}>
        <img src="balance.gif" alt="Image" width="60%" />
      </div>
    </div>
  )

}

function BalanceMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        Check balance again
    </button>
  </>);
}

function BalanceForm(props){
  const [email, setEmail]   = React.useState('');
  const [balance, setBalance] = React.useState('');  

  function validate(field, label, setStatus) {
    if (!field) {
      setStatus('Error: ' + label + " is left blank");
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    
    
    if (label === 'email') {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(field)) {
        setStatus('Error: ' + label + ' is not a valid email');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
    }
  
    if (label === 'password' && field.length < 8) {
      setStatus('Error: Password must be at least 8 characters long');
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
  
    return true;
  }

  function handle(){
    console.log(email);
    if (!validate(email,    'email', props.setStatus))    return;
    

    fetch(`/account/findOne/${email}`)
    .then(response => response.text())
    .then(text => {
        try {
            
            const data = JSON.parse(text);
            props.setStatus(data.name + '  ---> Balance: ' + data.balance);
            props.setShow(false);
            setBalance(data.balance);
            console.log('Balance:', data.balance);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus(text)
            console.log(text);
        }
    });
  }

  return (<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Check Balance
    </button>

  </>);
}