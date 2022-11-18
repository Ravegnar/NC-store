import { useState, useEffect } from "react";
import {NavLink, Routes, Route, useParams, useLocation} from "react-router-dom";
import OperativeDetailInfo from "./OperativeDetailInfo.js";
import OperativeDetailGear from "./OperativeDetailGear.js";
import OperativeDetailWeapons from "./OperativeDetailWeapons.js";
import useFetch from "./useFetch.js";
import Button from "./Button.js";
import Footer from "./Footer.js";
import StoreNavigation from "./StoreNavigation.js";

export default function OperativeDetails(props) {
  const [operative, setOperative] = useState(false);
  const params = useParams();
  const { pathname } = useLocation();
  const { get, loading } = useFetch(
    "https://nco-store-default-rtdb.europe-west1.firebasedatabase.app/NC-Store/"
  );
  
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [])
  

  useEffect(() => {
      get(`NCO/${params.id}.json`)
        .then((data) => {
            setOperative(data);
          })
          .catch((error) => console.log("Could not load operative details", error));
      }, [pathname]);

  const tabClasses = "flex-grow sm:w-1/3 text-white border-b-2 border-gray-300 py-2 text-lg px-1"
console.log(operative.image)
return (<>
    <section className="text-white body-font overflow-hidden">
      <StoreNavigation />
      <div className="container px-5 py-10 lg:pt-12 mx-auto lg:max-h-[52rem] xl:max-h-[48rem] 2xl:max-h-[47rem]">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full px-4 md:px-6 lg:px-10 py-4 md:py-8 lg:py-16 mb-6 lg:mb-0 bg-slate-800">
            <h1 className="text-white text-center text-4xl title-font font-bold mb-2">{operative.name}</h1>
            <h2 className="text-sm title-font text-center text-white tracking-widest mb-4 lg:mb-8">{operative.specialization}</h2>
            <div className="flex text-center mb-4">
              <NavLink
                className={(navData) => navData.isActive ? `${tabClasses}  text-cyan-600 border-b-2 border-cyan-600` : `${tabClasses}` }
                to={`/NC-store/store/NSO/${operative.id}`} end>
                  Description
              </NavLink>
              <NavLink
                className={(navData) => navData.isActive ? `${tabClasses}  text-cyan-600 border-b-2 border-cyan-600` : `${tabClasses}` }
                to={`/NC-store/store/NSO/${operative.id}/weapons`}>
                  Weapons
              </NavLink>
              <NavLink
                className={(navData) => navData.isActive ? `${tabClasses}  text-cyan-600 border-b-2 border-cyan-600` : `${tabClasses}` }
                to={`/NC-store/store/NSO/${operative.id}/gear`}>
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
            </div>
          </div>
          {operative.image ? (
            <img src={require(`${operative.image}`)} className="lg:w-1/2 w-full lg:h-auto lg:px-6 h-auto object-cover object-top rounded" />
            ) : null}
        </div>
      </div>
    </section>
  <Footer />
  </>);
}
