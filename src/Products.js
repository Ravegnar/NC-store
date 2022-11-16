import { useState, useEffect } from "react";
import useFetch from "./useFetch.js";
import Loader from "./Loader.js";
import Product from "./Product.js";
import StoreNavigation from "./StoreNavigation.js";
import Footer from "./Footer.js";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const { get, loading } = useFetch(
    "https://nco-store-default-rtdb.europe-west1.firebasedatabase.app/NC-Store/"
  );

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [])
  
  let saver = []

  useEffect(() => {
      get(`NCW/${props.category}.json`).then(data => {
      Object.keys(data).forEach(prod => {
      saver.push(data[prod])
      })
      setProducts(saver);
      }).catch((error) => console.log("Could not load products", error));
  }, [props]);

  return (<>
    <StoreNavigation />
    <div className="">
      <div className="mx-auto max-w-2xl px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-white text-3xl text-center font-bold py-5">{props.category}</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 mx-0 sm:mx-10 md:mx-0 lg:mx-12">
          {loading && <Loader />}
          {products.map(product => {
            return (
              <Product
                type={props.type}
                key={product.id}
                details={product}
                cart={props.cart}
                onProductAdd={props.onProductAdd}
                onProductDelete={props.onProductDelete}
              ></Product>
            );
          })}
        </div>
      </div>
    </div>
    <Footer />
  </>);
}