import { useState, useEffect } from "react";
import useFetch from "./useFetch.js";
import Loader from "./Loader.js";
import Operative from "./Operative.js";
import StoreNavigation from "./StoreNavigation.js";

export default function Operatives(props) {
  const [operatives, setOperatives] = useState([]);
  const { get, loading } = useFetch(
    "https://nco-store-default-rtdb.europe-west1.firebasedatabase.app/NC-Store/"
  );

  let saver = []
  
  useEffect(() => {
      get("NCO.json").then(data => {
      Object.keys(data).forEach(prod => {
      saver.push(data[prod])
      })
      setOperatives(saver);
      }).catch((error) => console.log("Could not load operatives", error));
  }, []);

  return (<>
    <StoreNavigation />
    <div className="">
      <div className="mx-auto max-w-2xl px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-white text-3xl text-center font-bold py-5">Operatives</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 mx-12 md:mx-0 lg:mx-12">
        {loading && <Loader />}
        {operatives.map(operative => {
          return (
            <Operative
              key={operative.id}
              operative={operative}
              cart={props.cart}
              onProductAdd={props.onProductAdd}
              onProductDelete={props.onProductDelete}
            ></Operative>
          );
        })}
        </div>
      </div>
    </div>
  </>);
}