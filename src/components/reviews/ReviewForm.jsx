import { useState } from "react";
import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL;

const initialData = {
  name: "",
  vote: "",
  text: "",
};

export default function ReviewForm(movieID, afterFormSubmit) {
  const [reviewData, setReviewData] = useState(initialData);

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setReviewData({
      ...reviewData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.post(apiURL + `/movies/${movieID}/review`, reviewData).then((res) => {
      console.log(res.data);
      setReviewData(initialData);
      afterFormSubmit();
    });
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
                //
                name="name"
                value={reviewData.name}
                onChange={handleFormChange}
                type="text"
                className="form-control"
                id="newReviewName"
                placeholder="Insert Name"
                required
              />
              <label htmlFor="newReviewName">Name</label>
            </div>
            {/* //* FORM VOTE INPUT */}
            <div className="form-floating mb-3">
              <input
                //
                name="vote"
                value={reviewData.vote}
                onChange={handleFormChange}
                type="number"
                className="form-control"
                id="newReviewVote"
                placeholder="Insert Vote"
                required
              />
              <label htmlFor="newReviewVote">Vote</label>
            </div>
            {/* //* FORM TEXT BOX */}
            <div className="form-floating">
              <textarea
                //
                name="text"
                value={reviewData.text}
                onChange={handleFormChange}
                className="form-control"
                placeholder="Leave a description here"
                id="newReviewDesc"
                style={{ height: "100px" }}
                required
              ></textarea>
              <label htmlFor="newReviewDesc">Description</label>
            </div>
            <div className="col-12 mt-4 mb-2">
              <button className="btn btn-primary">Send Review</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
