// createaccount.js

function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const { user, updateUserContext }   = useContext(UserContext);
  

  function validate(field, label) {
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

  function createLoginTransaction(){
    // create transaction in DB
    fetch(`/account/transaction/${email}/${'Login'}/${0}`)
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
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    const url = `/account/create/${name}/${email}/${password}`;
    (async () => {
        var res  = await fetch(url);
        var data = await res.json();    
        console.log(data);     
        if (data.Error === 1) {
           setStatus('Error: User with this email already exists...');
           setTimeout(() => setStatus(''), 3000);
           setShow(true);   
        }
        else {
          
          updateUserContext({ UserEmail: email, IsloggedIn: true });

          console.log('User: ' + email + ' is logged in' );

          createLoginTransaction();

          setShow(false);
          
        }
    })();
    
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <Card
          bgcolor="primary"
          header="Create Account"
          status={status}
          body={show ? (
            <>
              Name:<br />
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br />
              Email address:<br />
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br />
              Password:<br />
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br />
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
            </>
          ) : (
            <>
              <h5>Account creation was successful</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
            </>
          )}
        />
      </div>
      <div style={{ flex: 1 }}>
        <img src="signup.gif" alt="Image" width="58%" />
      </div>
    </div>
  );
};