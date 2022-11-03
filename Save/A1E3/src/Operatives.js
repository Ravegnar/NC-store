import { useState, useEffect } from "react";
import {NavLink,  Link, Routes, Route, useParams} from "react-router-dom";
import useFetch from "./useFetch.js";
import Loader from "./Loader.js";
import Operative from "./Operative.js";

export default function Operatives() {
  const [operatives, setOperatives] = useState([]);
  const params = useParams();
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

  return (
    <div className="products-layout">
      <h1>Operatives</h1>
      <p>Take a look at our products</p>
      <div className="products-grid">
        {loading && <Loader />}
        {operatives.map(operative => {
          return (
            <Operative
              key={operative.id}
              operative={operative}
            ></Operative>
          );
        })}
      </div>
    </div>
  );
}