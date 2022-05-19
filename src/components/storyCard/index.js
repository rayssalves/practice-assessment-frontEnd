import "./style.css";

const StoryCard = ({ name, content, backgroundColor, color, imageUrl }) => {
  return (
    <div className="spaceCard">
      <h2>{name}</h2>
      <p style={{ color: { color } }}>{content}</p>
      <img className="details-img" src={imageUrl} alt="" />
    </div>
  );
};

export default StoryCard;
