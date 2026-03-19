export default function ReviewForm() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="reviews-header">
        <hr className="line-header" />
        <span className="new-review-text">New Review</span>
      </div>
      <div className="card my-4">
        <div className="card-body">
          <form onSubmit={handleFormSubmit}>
            {/* //* FORM NAME INPUT */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Insert Name"
              />
              <label htmlFor="floatingInput">Name</label>
            </div>
            {/* //* FORM VOTE INPUT */}
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                id="floatingInput"
                placeholder="Insert Vote"
              />
              <label htmlFor="floatingInput">Vote</label>
            </div>
            {/* //* FORM TEXT BOX */}
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a description here"
                id="floatingTextarea2"
                style={{ height: "100px" }}
              ></textarea>
              <label htmlFor="floatingTextarea2">Description</label>
            </div>
            <div className="col-12 my-3">
              <button className="btn btn-primary">Send Review</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
