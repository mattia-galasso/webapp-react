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

  const voteToStars = (userVote) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      i <= userVote
        ? stars.push(<i key={i} className="bi bi-star-fill stars-icon"></i>)
        : stars.push(<i key={i} className="bi bi-star"></i>);
    }
    return stars;
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
                <p className="review-stars mb-0">{voteToStars(review.vote)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
