// React component for rendering star ratings
const RatingStars = ({ rating }) => {
  // Constants for maximum stars and calculating gold and grey stars
  const maxStars = 5;
  const goldStars = Math.floor(rating);
  const greyStars = maxStars - goldStars;

  // Function to render stars with specified color
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

  // Rendering component with gold and grey stars
  return (
    <div className="d-inline">
      {renderStars(goldStars, "gold")}
      {renderStars(greyStars, "grey")}
    </div>
  );
};

// Exporting the RatingStars component
export default RatingStars;