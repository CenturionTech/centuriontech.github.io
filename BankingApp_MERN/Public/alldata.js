function AllData(){
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
    
return (
    <div className="container">
      <h5 className="mb-4">All Data</h5>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
        
        

        {data.map((user, index) => (
            <tr key={user.email} className={index % 2 === 0 ? "table-primary" : "table-secondary"}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.balance}</td>
            </tr>
          ))}
          
           
        </tbody>
      </table>
    </div>
  );
}
