import { useState, useEffect } from "react";
import {NavLink, Routes, Route, useParams, useLocation} from "react-router-dom";
import WeaponDetailInfo from "./WeaponDetailInfo.js";
import WeaponDetailGear from "./WeaponDetailGear.js";
import WeaponDetailStats from "./WeaponDetailStats.js";
import useFetch from "./useFetch.js";

export default function WeaponDetails(props) {
  const [weapon, setWeapon] = useState({});
  const params = useParams();
  const { pathname } = useLocation();
  const { get, loading } = useFetch(
    "https://nco-store-default-rtdb.europe-west1.firebasedatabase.app/NC-Store/"
  );

  useEffect(() => {
      get(`NCW/Primary/${params.id}.json`)
        .then((data) => {
            setWeapon(data);
          })
          .catch((error) => console.log("Could not load weapon details", error));
      }, []);

  return (
    <div className="product-details-layout">
      <div>
        <h2>{weapon.name}</h2>
        <img
          src={weapon.image}
          backgroundcolor="black"
          width="200"
          height="100"
          className="product-details-image"
          alt={weapon.name}
        />
      </div>
      <div>
        <div className="tabs">
          <ul>
            <li>
              <NavLink
                className={(navData) => navData.isActive ? "tab-active" : "" }
                to={`/store/NSW/weapons/${weapon.id}`} end>
                Info
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) => navData.isActive ? "tab-active" : "" }
                to={`/store/NSW/weapons/${weapon.id}/gear`}>
                Gear
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navData) => navData.isActive ? "tab-active" : "" }
                to={`/store/NSW/weapons/${weapon.id}/stats`}>
                Stats
              </NavLink>
            </li>
          </ul>
        </div>
        <Routes>
          <Route 
            path="/"
            element={<WeaponDetailInfo weapon={weapon} onProductAdd={props.onProductAdd} />}
          />
          <Route 
            path="/gear"
            element={<WeaponDetailGear weapon={weapon} />}
          />
          <Route 
            path="/stats"
            element={<WeaponDetailStats weapon={weapon} />}
          />
        </Routes>
      </div>
    </div>
  );
}