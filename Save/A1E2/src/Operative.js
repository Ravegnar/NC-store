import { Link } from "react-router-dom";
import Button from "./Button.js";

export default function Operative(props) {
  const { operative } = props;

  return (
    <div>
      <h1>xxxxxxx</h1>
      <div className="product">
      <div className="product-image-container">
        <Link to={`/store/NSO/${operative.id}`}>
          <img
            src={operative.image}
            width="50"
            height="50"
            className="product-image"
            alt={operative.name}
          />
        </Link>
      </div>
      <div className="product-info">
        <h3>{operative.name}</h3>
        <p>{operative.type}</p>
      </div>
      <div className="product-checkout">
        <div>
        
        </div>
        <Button outline >
          ${operative.price}
        </Button>
      </div>
    </div>
    </div>
  );
}