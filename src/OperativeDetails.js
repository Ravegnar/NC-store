import { useState, useEffect } from "react";
import {NavLink, Routes, Route, useParams, useLocation} from "react-router-dom";
import OperativeDetailInfo from "./OperativeDetailInfo.js";
import OperativeDetailGear from "./OperativeDetailGear.js";
import OperativeDetailWeapons from "./OperativeDetailWeapons.js";
import useFetch from "./useFetch.js";
import Footer from "./Footer.js";
import StoreNavigation from "./StoreNavigation.js";

export default function OperativeDetails(props) {
  const [operative, setOperative] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
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
            setOperative(data)
            setSelectedImage(data.image)
          })
          .catch((error) => console.log("Could not load operative details", error));
      }, [pathname]);

  const tabClasses = "flex-grow sm:w-1/3 text-white border-b-2 border-gray-300 py-2 text-lg px-1"
  
  const productFromCart = props.cart.find(
    (cartProduct) => cartProduct.id === operative.id
  );

  const quantity = productFromCart ? productFromCart.quantity : 0;
  return (<>
    <section className="text-white body-font overflow-hidden">
      <StoreNavigation />
      <div className="container flex px-5 py-10 mx-auto">
        <div className="w-full justify-center items-stretch mx-auto flex flex-wrap">
          <div className="flex flex-col place-content-between lg:mr-4 lg:w-1/2 w-full max-w-[38rem] px-4 lg:min-h-[33rem] md:px-6 lg:px-10 py-4 md:py-8 lg:py-16 lg:pb-8 mb-6 lg:mb-0 bg-slate-800">
            <div>
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
            </div>

            <div>
              {quantity > 0 && (<>
                <div className="flex mt-4 mb-2 items-baseline justify-between">
                  <p className="title-font font-medium text-white">In the cart</p>
                  <div className="flex">
                    <button className="text-cyan-700 hover:text-cyan-500 font-medium  my-auto" onClick={() => props.onProductRemove(operative)}>
                      -
                    </button>
                    <p className="text-white px-2 my-auto">{quantity}</p>
                    <button className="text-cyan-700 hover:text-cyan-500 font-medium" onClick={() => props.onProductDelete(operative.id)}>
                      remove
                    </button>
                  </div>
                </div>
              </>)}
              <div className="flex items-baseline">
                <span className="title-font font-medium text-2xl text-white">${operative.price && operative.price.toLocaleString()}</span>
                <button className="flex ml-auto min-w-[8rem] mt-3 text-white border-4 py-2 px-4 sm:px-6 uppercase font-semibold hover:bg-white hover:bg-opacity-25 hover:scale-110"
                  onClick={() => props.onProductAdd({...operative, path: pathname})}>
                    Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:w-4/12 w-full max-w-[38rem] max-h-[46rem] lg:h-auto lg:px-6 p-6 lg:ml-4 h-auto bg-slate-800">
            {operative.image && (<>
              <div className="w-full h-4/5">
                <img src={require(`${selectedImage}`)}  className="w-full h-full border-b-8 border-slate-800 my-auto object-cover object-top bg-slate-900" />
              </div>
              <div className="flex w-full h-1/5">
                <img src={require(`${operative.image}`)} url={operative.image} className="w-1/2 h-full border-r-8 border-t-8 cursor-pointer border-slate-800 object-contain object-center bg-slate-900" onClick={(e) => setSelectedImage(e.currentTarget.getAttribute('url'))} />
                <img src={require(`${operative.gif}`)} url={operative.gif} className="w-1/2 h-full border-l-8 border-t-8 cursor-pointer border-slate-800 object-contain object-center bg-slate-900" onClick={(e) => setSelectedImage(e.currentTarget.getAttribute('url'))} />
              </div>
            </>)}
          </div>
        </div>
      </div>
    </section>
  <Footer />
  </>);
}
