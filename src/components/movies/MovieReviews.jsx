export default function MovieReviews({ reviews }) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header">Reviews</div>
        <ul className="list-group list-group-flush">
          {reviews.map((review) => (
            <li key={review.id} className="list-group-item">
              <small>{new Date(review.created_at).toLocaleDateString()}</small>
              {review.name}
              {review.text}
              {review.vote}/5
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
