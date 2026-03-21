export default function Vote({ userVote }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    i <= userVote
      ? stars.push(<i key={i} className="bi bi-star-fill stars-icon"></i>)
      : stars.push(<i key={i} className="bi bi-star"></i>);
  }
  return stars;
}
