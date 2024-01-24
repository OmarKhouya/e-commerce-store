const RatingStars = ({ rating }) => {
  const maxStars = 5;
  const goldStars = Math.floor(rating);
  const greyStars = maxStars - goldStars;

  const renderStars = (count, color) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <span key={i} style={{ color: color }}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="d-inline">
      {renderStars(goldStars, "gold")}
      {renderStars(greyStars, "grey")}
    </div>
  );
};
export default RatingStars;
