import "./fruitCard.css";

function FruitCard({ data }) {
  return (
    <div className="fruitCard-container">
      {data.map((item) => (
        <div key={item.id} className="fruits">
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default FruitCard;
