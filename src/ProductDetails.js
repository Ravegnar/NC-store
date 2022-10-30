import { useState, useEffect } from "react";
import {NavLink, Routes, Route, useParams, useLocation} from "react-router-dom";
import useFetch from "./useFetch.js";
import ProductDetailInfo from "./ProductDetailInfo.js";
import ProductDetailNutrition from "./ProductDetailNutrition.js";
import ProductDetailStorage from "./ProductDetailStorage.js";

export default function ProductDetails(props) {
  const [product, setProduct] = useState({});
  const params = useParams();
  const { pathname } = useLocation();
  const { get, loading } = useFetch(
    "https://nco-store-default-rtdb.europe-west1.firebasedatabase.app/NC-Store/"
  );

  useEffect(() => {
      get(`NCW/Primary/${params.id}.json`)
        .then((data) => {
            setProduct(data);
          })
          .catch((error) => console.log("Could not load product details", error));
      }, []);

  return (
    <div className="product-details-layout">
      <div>
        <h2>{product.name}</h2>
        <img
          src={product.image}
          width="200"
          height="100"
          className="product-details-image"
          alt={product.name}
        />
      </div>
      <div>
        <div className="tabs">
          <ul>
            <li>
              <NavLink
                className={(navData) => navData.isActive ? "tab-active" : "" }
                to={"/products/" + params.id} end>
                Details
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) => navData.isActive ? "tab-active" : "" }
                to={"/products/" + params.id + "/nutrition"}>
                Nutrition
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) => navData.isActive ? "tab-active" : "" }
                to={"/products/" + params.id +"/storage"}>
                Storage
              </NavLink>
            </li>
          </ul>
        </div>
        <Routes>
          <Route 
            path="/"
            element={<ProductDetailInfo product={product} onProductAdd={props.onProductAdd} />}
          />
          <Route 
            path="/nutrition"
            element={<ProductDetailNutrition nutrition={product.nutrition} />}
          />
          <Route 
            path="/storage"
            element={<ProductDetailStorage storage={product.storage} />}
          />
        </Routes>
      </div>
    </div>
  );
}