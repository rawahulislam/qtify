import card from "../../assets/CardImage.png";
import "./card.css";
const CardJsx = () => {
  return (
    <div className="grid">
      <div className="heading1">Top albums</div>
      <div className="card">
        <img style={{ display: "block" }} src={card} alt="cardImg" />
        <div
          style={{
            display: "flex",
            backgroundColor: "white",
            margin: "0px",
            padding: "12px",
            borderRadius: "0px 0px 10px 10px",
            paddingLeft: "4px"
          }}
        >
          <p
            style={{
              display: "flex",
              backgroundColor: "black",
              color: "white",
              borderRadius: "12px",
              margin: "0px",
              padding: "8px"
            }}
          >
            100 Follows
          </p>
        </div>
        <p style={{ paddingLeft: "4px", color: "white", marginBottom: "0px" }}>
          New Bollywood
        </p>
      </div>
    </div>
  );
};

export default CardJsx;
