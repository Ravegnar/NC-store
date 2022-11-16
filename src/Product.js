import { Link } from "react-router-dom";

export default function Product(props) {
  const {type, cart, details, onProductDelete, onProductAdd} = props;
  const productFromCart = cart.find(
    (product) => product.id === details.id
  );
  const quantity = productFromCart ? productFromCart.quantity : 0;
  const pathname = `/NC-store/store/NSW/${type}/${details.id}`

  return (<>
    <div className="flex flex-col place-content-between bg-slate-800 border-0 border-white overflow-hidden p-6 min:w-[300px]">
      <Link to={pathname} >
        <div className="w-full h-48 overflow-hidden bg-slate-900 p-6 hover:p-2 hover:brightness-125 mb-6">
          <img
            src={require("" + details.image)}
            alt={details.name}
            className="h-full w-full object-contain object-center group-hover:opacity-75"
            />
        </div>
      </Link>

      <div className="flex-col">
        <div className="flex w-full justify-between items-baseline px-1">
          <Link to={pathname} className="text-cyan-700 hover:text-cyan-500 text-xl font-bold">
            {details.name}
          </Link>
          <p className="text-white font-medium pl-2">
            ${details.price}
          </p>
        </div>
        <div className="flex w-full justify-between items-center px-1">
          <p className="text-slate-300">
            {details.type}
          </p>
        </div>
        <div className="flex w-full justify-between items-center px-1">

        {quantity > 0 && (<>
          <p className="text-white">
            quantity {quantity}
          </p>
          <button className="text-cyan-700 hover:text-cyan-500 font-medium" onClick={() => onProductDelete(details.id)}>
            remove
          </button>
          </>)}

        </div>
      </div>
        <div className="flex justify-center mt-auto">
          <button className="inline-block min-w-[8rem] mt-4 text-white border-4 py-2 px-6 uppercase font-semibold hover:bg-white hover:bg-opacity-25 hover:scale-110" onClick={() => onProductAdd({...details, path: pathname})}>
            Add to cart
          </button>
        </div>

    </div>
  </>)
}