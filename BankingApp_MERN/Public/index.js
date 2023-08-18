// index.js

function Spa() {
    // Define userContext object
    const [user, setUser] = useState({ UserEmail: '', IsloggedIn: false });

    // Modify the context data
    const updateUserContext = (newUserData) => {
       setUser((prevUser) => ({ ...prevUser, ...newUserData }));
       //setUser(newUserData);
       console.log(newUserData);
       
    };


    return (
      <HashRouter>
        <div>
                  
          <UserContext.Provider value={{user, updateUserContext}}>
            <NavBar/>
            <div className="container" style={{padding: "20px"}}>
              <Route path="/" exact         component={Home} />
              <Route path="/CreateAccount/" component={CreateAccount} />
              <Route path="/login/"         component={Login} />
              <Route path="/deposit/"       component={Deposit} />
              <Route path="/withdraw/"      component={Withdraw} />
              <Route path="/balance/"       component={Balance} />
              <Route path="/alldata/"       component={AllData} />
              <Route path="/transactions/"  component={Transactions} />
            </div>
          </UserContext.Provider>
        </div>
      </HashRouter>
    );
  }
  
  ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
  );
  