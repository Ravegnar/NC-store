import { useState, useEffect } from "react";
import {NavLink, Routes, Route, useParams, useLocation} from "react-router-dom";
import WeaponDetailInfo from "./WeaponDetailInfo.js";
import WeaponDetailGear from "./WeaponDetailGear.js";
import WeaponDetailStats from "./WeaponDetailStats.js";
import useFetch from "./useFetch.js";
import Button from "./Button.js";

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
      const tabClasses = "flex-grow sm:w-1/3 text-white border-b-2 border-gray-300 py-2 text-lg px-1"

  return (<>
    <section className="text-white body-font overflow-hidden">
      <div className="container px-5 py-10 lg:pt-16 mx-auto">
        <div className="lg:w-4/5 justify-center lg:h-1/2 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full px-4 lg:min-h-[37rem] md:px-6 lg:px-10 py-4 md:py-8 lg:py-16 lg:pb-8 mb-6 lg:mb-0 bg-slate-800">
            <h1 className="text-white text-center text-4xl title-font font-bold mb-2">{weapon.name}</h1>
            <h2 className="text-sm title-font text-center text-white tracking-widest mb-4 lg:mb-8">{weapon.type}</h2>
            <div className="flex text-center mb-4">
              <NavLink
                className={(navData) => navData.isActive ? `${tabClasses}  text-indigo-500 border-b-2 border-indigo-500` : `${tabClasses}` }
                to={`/store/NSW/weapons/${weapon.id}`} end>
                  Info
              </NavLink>
              <NavLink
                className={(navData) => navData.isActive ? `${tabClasses}  text-indigo-500 border-b-2 border-indigo-500` : `${tabClasses}` }
                to={`/store/NSW/weapons/${weapon.id}/gear`}>
                  Weapons
              </NavLink>
              <NavLink
                className={(navData) => navData.isActive ? `${tabClasses}  text-indigo-500 border-b-2 border-indigo-500` : `${tabClasses}` }
                to={`/store/NSW/weapons/${weapon.id}/stats`}>
                  Gear
              </NavLink>
            </div>
            <Routes>
              <Route 
                path="/"
                element={<WeaponDetailInfo weapon={weapon} />}
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
            <div className="flex mt-8">
              <span className="title-font font-medium text-2xl text-white">${weapon.price}</span>
              <Button onClick={() => props.onProductAdd({...weapon, path: pathname})} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" >
                Add to cart
              </Button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-white ml-4">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
          <img className="lg:w-5/12 w-full lg:h-auto lg:px-6 h-auto object-contain object-center kundovina rounded" src={weapon.image} />
        </div>
      </div>
    </section>
  </>);
}
    