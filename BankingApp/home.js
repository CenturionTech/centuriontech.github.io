function Home() {
  return (
    <div className="row mx-auto">
      <div className="col-md-6">
        <Card
          txtcolor="black"
          header="APS Bank International"
          title="Welcome to APS Bank International"
          text="APS Bank is one of the oldest banks on the Maltese Islands and is a leading provider of financial services, offering personal, business and investments solutions. APS is licensed as an investment services firm, registered as a Tied Insurance Intermediary."
          body={<img src="bank_logo.jpg" className="img-fluid" alt="Responsive image" />}
        />
      </div>
      <div className="col-md-6 mt-4">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/DRAB2o6WwJw" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen autoplay></iframe>
        </div>
      </div>
    </div>
  );
}
