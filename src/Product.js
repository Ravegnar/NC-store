import { Link } from "react-router-dom";
import Button from "./Button.js";

export default function Product(props) {
  const {type, cart, details, onProductDelete, onProductAdd} = props;
  const productFromCart = cart.find(
    (product) => product.id === details.id
  );
  const quantity = productFromCart ? productFromCart.quantity : 0;
  const pathname = `/NC-store/store/NSW/${type}/${details.id}`

  return (<>
    <div>
      <Link to={pathname} >
        <div className="w-full overflow-hidden rounded-lg bg-slate-800 p-6">
          <img
            src={require("" + details.image)}
            alt={details.name}
            width="200"
            height="100"
            className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
        </div>
      </Link>
      {quantity > 0 && (
          <div className="relative">
            <div className=" text-white font-bold absolute m-2">Qty {quantity}</div>
          </div>
        )}
      <div className=" text-center">
        <div className="flex items-baseline relative justify-end text-center">
          <Link to={pathname} className="mt-4 text-2xl mx-auto hover:text-orange-500 text-center font-bold text-cyan-800">{details.name}</Link>
          {quantity > 0 && (
            <Button outline onClick={() => onProductDelete(details.id)}
              className="product-delete absolute m-2">
              X
            </Button>
          )}
        </div>
        <p className="mb-3 text-sm text-white">{details.type}</p>
        <Button outline onClick={() => onProductAdd({...details, path: pathname})}>
          ${details.price}
        </Button>
      </div>
    </div>
  </>)
}