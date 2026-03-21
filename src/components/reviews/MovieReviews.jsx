import Vote from "../Vote";

export default function MovieReviews({ reviews }) {
  const dateTimeString = (string) => {
    const dateTime = new Date(string);
    const date = dateTime.toLocaleDateString();
    const time = dateTime.toLocaleTimeString("it-IT", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return date + " | " + time;
  };

  return (
    <>
      <div className="reviews-header">
        <span>User Reviews</span>
        <hr className="line-header" />
      </div>
      <div className="card my-3">
        <ul className="list-group list-group-flush">
          {reviews.map((review) => (
            <li key={review.id} className="list-group-item">
              <span className="review-text text-decoration-underline">
                {review.name}
              </span>
              <div className="">
                <p className="review-text my-2 ">{review.text}</p>
              </div>
              <div className="date-author-review">
                <small className="badge text-bg-secondary">
                  {dateTimeString(review.created_at)}
                </small>
                <p className="review-stars mb-0">
                  {<Vote userVote={review.vote} />}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
