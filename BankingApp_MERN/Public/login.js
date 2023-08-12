function Login() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <Card
          bgcolor="secondary"
          header="Login"
          status={status}
          body={
            show ?
              <LoginForm setShow={setShow} setStatus={setStatus} /> :
              <LoginMsg setShow={setShow} setStatus={setStatus} />
          }
        />
      </div>
      <div style={{ flex: 1 }}>
        <img src="login.gif" alt="Image" width="60%" />
      </div>
    </div>
  )
}

function LoginMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Authenticate again
    </button>
  </>);
}

function LoginForm(props){
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

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
    console.log(email,password);
    if (!validate(email,    'email', props.setStatus))    return;
    if (!validate(password, 'password', props.setStatus)) return;

    fetch(`/account/login/${email}/${password}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus('');
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus(text)
            console.log('err:', text);
        }
    });
  }


  return (<>

    Email:<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password:<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" className="btn btn-light" onClick={handle}>Login</button>
   
  </>);
}