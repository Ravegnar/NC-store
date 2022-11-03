import { Link } from "react-router-dom";
import Button from "./Button.js";

export default function Operative(props) {
  const { operative } = props;
  console.log(props)
  const productFromCart = props.cart.find(
    (product) => product.id === operative.id
  );
  const quantity = productFromCart ? productFromCart.quantity : 0;
  return (<>
    <div>
      <Link to={`/store/NSO/${operative.id}`} >
        <div className="w-full overflow-hidden rounded-lg bg-slate-800 p-6">
          <img
            src={operative.image}
            alt={operative.name}
            width="50"
            height="50"
            className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
        </div>
      </Link>
      {quantity > 0 && (
          <div className="relative">
            <div className=" text-white font-bold absolute m-2">{quantity}</div>
          </div>
        )}
      <div className=" text-center">
        <div className="flex items-baseline relative justify-end text-center">
          <a href={`/store/NSW/weapons/${operative.id}`} className="mt-4 text-2xl mx-auto hover:text-orange-500 text-center font-bold text-cyan-800">{operative.name}</a>
          {quantity > 0 && (
            <Button outline onClick={() => props.onProductDelete(operative.id)}
              className="product-delete absolute m-2">
              X
            </Button>
          )}
        </div>
        <p className="mb-3 text-sm text-white">{operative.type}</p>
        <Button outline onClick={() => props.onProductAdd(operative)}>
          ${operative.price}
        </Button>
      </div>
    </div>
  </>)
}