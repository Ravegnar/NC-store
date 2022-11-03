import { useState, useEffect } from "react";
import Weapon from "./Weapon.js";
import useFetch from "./useFetch.js";
import Loader from "./Loader.js";

export default function Weapons() {
  const [products, setProducts] = useState([]);
  const { get, loading } = useFetch(
    "https://nco-store-default-rtdb.europe-west1.firebasedatabase.app/NC-Store/"
  );

  let saver = []
  
  useEffect(() => {
      get("NCW/Primary.json").then(data => {
      Object.keys(data).forEach(prod => {
      saver.push(data[prod])
      })
      setProducts(saver);
      }).catch((error) => console.log("Could not load products", error));
  }, []);
 
  return (
    <div className="products-layout">
      <h1 className="text-4xl font-bold underline">
        Weapons
      </h1>
      <p>Take a look at our Weapons</p>
      <div className="products-grid">
        {loading && <Loader />}
        {products.map(product => {
          return (
            <Weapon
              key={product.id}
              details={product}

            ></Weapon>
          );
        })}
      </div>
    </div>
  );
}