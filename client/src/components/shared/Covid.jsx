const Covid = () => {
  return (
    <div className="my-4">
      <h4>COVID-19 NIGERIA</h4>
      <section className="bg-primary my-3 d-flex flex-nowrap align-items-center justify-content-between rounded text-white p-3">
        <div>
          <i className="bi bi-gear-fill fw-bold"></i>
          <p className="mb-0">Confirmed Cases</p>
        </div>

        <h4>212,894</h4>
      </section>
      <section className="bg-warning my-3 d-flex flex-nowrap align-items-center justify-content-between rounded text-white p-3">
        <div>
          <i className="bi bi-gear-fill fw-bold"></i>
          <p className="mb-0">Active Cases</p>
        </div>

        <h4>5,297</h4>
      </section>
      <section className="bg-success my-3 d-flex flex-nowrap align-items-center justify-content-between rounded text-white p-3">
        <div>
          <i className="bi bi-gear-fill fw-bold"></i>
          <p className="mb-0">Discharged Cases</p>
        </div>

        <h4>204,675</h4>
      </section>
      <section className="bg-danger my-3 d-flex flex-nowrap align-items-center justify-content-between rounded text-white p-3">
        <div>
          <i className="bi bi-gear-fill fw-bold"></i>
          <p className="mb-0">Death</p>
        </div>

        <h4>2,922</h4>
      </section>
    </div>
  );
};

export default Covid;
