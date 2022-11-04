import { useState, useEffect } from "react";
import {NavLink, Routes, Route, useParams, useLocation} from "react-router-dom";
import OperativeDetailInfo from "./OperativeDetailInfo.js";
import OperativeDetailGear from "./OperativeDetailGear.js";
import OperativeDetailWeapons from "./OperativeDetailWeapons.js";
import useFetch from "./useFetch.js";
import Button from "./Button.js";

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

  const tabClasses = "flex-grow sm:w-1/3 text-white border-b-2 border-gray-300 py-2 text-lg px-1"

  return (<>
    <section className="text-white body-font overflow-hidden">
      <div className="container px-5 py-10 lg:pt-12 mx-auto lg:max-h-[52rem] xl:max-h-[48rem] 2xl:max-h-[47rem]">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full px-4 md:px-6 lg:px-10 py-4 md:py-8 lg:py-16 mb-6 lg:mb-0 bg-slate-800">
            <h1 className="text-white text-center text-4xl title-font font-bold mb-2">{operative.name}</h1>
            <h2 className="text-sm title-font text-center text-white tracking-widest mb-4 lg:mb-8">{operative.specialization}</h2>
            <div className="flex text-center mb-4">
              <NavLink
                className={(navData) => navData.isActive ? `${tabClasses}  text-indigo-500 border-b-2 border-indigo-500` : `${tabClasses}` }
                to={`/store/NSO/${operative.id}`} end>
                  Description
              </NavLink>
              <NavLink
                className={(navData) => navData.isActive ? `${tabClasses}  text-indigo-500 border-b-2 border-indigo-500` : `${tabClasses}` }
                to={`/store/NSO/${operative.id}/weapons`}>
                  Weapons
              </NavLink>
              <NavLink
                className={(navData) => navData.isActive ? `${tabClasses}  text-indigo-500 border-b-2 border-indigo-500` : `${tabClasses}` }
                to={`/store/NSO/${operative.id}/gear`}>
                  Gear
              </NavLink>
            </div>
            <Routes>
              <Route 
                path="/"
                element={<OperativeDetailInfo operative={operative} />}
              />
              <Route 
                path="/weapons"
                element={<OperativeDetailWeapons operative={operative} />}
              />
              <Route 
                path="/gear"
                element={<OperativeDetailGear operative={operative} />}
              />
            </Routes>
            <div className="flex mt-8">
              <span className="title-font font-medium text-2xl text-white">${operative.price}</span>
              <Button onClick={() => props.onProductAdd({...operative, path: pathname})} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" >
                Add to cart
              </Button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-white ml-4">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
          <img className="lg:w-1/2 w-full lg:h-auto lg:px-6 h-auto object-cover object-top rounded" src={operative.image} />
        </div>
      </div>
    </section>
  </>);
}
