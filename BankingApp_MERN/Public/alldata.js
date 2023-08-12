function AllData() {
  const [data, setData] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10;

  React.useEffect(() => {
    // Fetch all accounts from API
    fetch('/account/all')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedData = data.slice(startIndex, endIndex);

  function handleNextPage() {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  }

  function handlePreviousPage() {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  }

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
          {displayedData.map((user, index) => (
            <tr key={user.email} className={index % 2 === 0 ? "table-primary" : "table-secondary"}>
              <th scope="row">{startIndex + index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-center">
        <button className="btn btn-light" onClick={handlePreviousPage} disabled={currentPage === 1}>Previous Page</button>
        <span className="mx-3">Page {currentPage} of {totalPages}</span>
        <button className="btn btn-light" onClick={handleNextPage} disabled={currentPage === totalPages}>Next Page</button>
      </div>
    </div>
  );
}