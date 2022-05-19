// import "./style.css";

const StoryCard = ({ name, content, backgroundColor, color }) => {
  return (
    <div className="spaceCard" style={{ backgroundColor: { backgroundColor } }}>
      <h2>{name}</h2>
      <p style={{ color: { color } }}>{content}</p>
    </div>
  );
};

export default StoryCard;
