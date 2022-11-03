import { useState, useEffect } from "react";
import {NavLink, Routes, Route, useParams, useLocation} from "react-router-dom";
import OperativeDetailInfo from "./OperativeDetailInfo.js";
import OperativeDetailGear from "./OperativeDetailGear.js";
import OperativeDetailStats from "./OperativeDetailStats.js";
import useFetch from "./useFetch.js";

export default function OperativeDetails(props) {
  const [operative, setOperative] = useState({});
  const params = useParams();
  const { pathname } = useLocation();
  const { get, loading } = useFetch(
    "https://nco-store-default-rtdb.europe-west1.firebasedatabase.app/NC-Store/"
  );

  useEffect(() => {
      get(`NCO/${params.id}.json`)
        .then((data) => {
            setOperative(data);
          })
          .catch((error) => console.log("Could not load operative details", error));
      }, []);

  return (
    <div className="product-details-layout">
      <div>
        <h2>{operative.name}</h2>
        <img
          src={operative.image}
          backgroundcolor="black"
          width="50"
          height="50"
          className="product-details-image"
          alt={operative.name}
        />
      </div>
      <div>
        <div className="tabs">
          <ul>
            <li>
              <NavLink
                className={(navData) => navData.isActive ? "tab-active" : "" }
                to={`/store/NSO/${operative.id}`} end>
                Info
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) => navData.isActive ? "tab-active" : "" }
                to={`/store/NSO/${operative.id}/gear`}>
                Gear
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) => navData.isActive ? "tab-active" : "" }
                to={`/store/NSO/${operative.id}/stats`}>
                Stats
              </NavLink>
            </li>
          </ul>
        </div>
        <Routes>
          <Route 
            path="/"
            element={<OperativeDetailInfo operative={operative} onProductAdd={props.onProductAdd} />}
          />
          <Route 
            path="/gear"
            element={<OperativeDetailGear operative={operative} />}
          />
          <Route 
            path="/stats"
            element={<OperativeDetailStats operative={operative} />}
          />
        </Routes>
      </div>
    </div>
  );
}