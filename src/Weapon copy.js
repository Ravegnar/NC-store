import { Link } from "react-router-dom";
import Button from "./Button.js";

export default function Weapon(props) {
  const { details } = props;

  return (
    <div className="product">
      <div className="product-image-container">
        <Link to={`/store/NSW/weapons/${details.id}`}>
          <img
            src={details.image}
            width="200"
            height="100"
            className="product-image"
            alt={details.name}
          />
        </Link>
      </div>
      <div className="product-info">
        <h3>{details.name}</h3>
        <p>{details.type}</p>
      </div>
      <div className="product-checkout">
        <div>
            <Button
              outline
              onClick={() => props.onProductDelete(details.id)}
              className="product-delete"
            >
              x
            </Button>
        </div>
        <Button outline onClick={() => props.onProductAdd(details)}>
          ${details.price}
        </Button>
      </div>
    </div>
  );
}