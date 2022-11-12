import { useState, useEffect } from "react";
import {NavLink, Routes, Route, useParams, useLocation} from "react-router-dom";
import ProductDetailInfo from "./ProductDetailInfo.js";
import ProductDetailPreview from "./ProductDetailPreview.js";
import ProductDetailStats from "./ProductDetailStats.js";
import useFetch from "./useFetch.js";
import Button from "./Button.js";
import Footer from "./Footer.js";
import StoreNavigation from "./StoreNavigation.js";

export default function ProductDetails(props) {
  const [product, setProduct] = useState({});
  const params = useParams();
  const { pathname } = useLocation();
  const { get, loading } = useFetch(
    "https://nco-store-default-rtdb.europe-west1.firebasedatabase.app/NC-Store/"
  );

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [])
  
  useEffect(() => {
      get(`NCW/${props.category}/${params.id}.json`)
        .then((data) => {
            setProduct(data);
          })
          .catch((error) => console.log("Could not load product details", error));
      }, [pathname]);
      const tabClasses = "flex-grow sm:w-1/3 text-white border-b-2 border-gray-300 py-2 text-lg px-1"

return (<>
    <section className="text-white body-font overflow-hidden">
      <StoreNavigation />
      <div className="container px-5 py-10 lg:pt-16 mx-auto">
        <div className="lg:w-4/5 justify-center lg:h-1/2 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full px-4 lg:min-h-[37rem] md:px-6 lg:px-10 py-4 md:py-8 lg:py-16 lg:pb-8 mb-6 lg:mb-0 bg-slate-800">
            <h1 className="text-white text-center text-4xl title-font font-bold mb-2">{product.name}</h1>
            <h2 className="text-sm title-font text-center text-white tracking-widest mb-4 lg:mb-8">{product.type}</h2>
            <div className="flex text-center mb-4">
              <NavLink
                className={(navData) => navData.isActive ? `${tabClasses}  text-indigo-500 border-b-2 border-indigo-500` : `${tabClasses}` }
                to={`/NC-store/store/NSW/${props.type}/${product.id}`} end>
                  Info
              </NavLink>
              <NavLink
                className={(navData) => navData.isActive ? `${tabClasses}  text-indigo-500 border-b-2 border-indigo-500` : `${tabClasses}` }
                to={`/NC-store/store/NSW/${props.type}/${product.id}/preview`}>
                  Preview
              </NavLink>
              <NavLink
                className={(navData) => navData.isActive ? `${tabClasses}  text-indigo-500 border-b-2 border-indigo-500` : `${tabClasses}` }
                to={`/NC-store/store/NSW/${props.type}/${product.id}/stats`}>
                  Stats
              </NavLink>
            </div>
            <Routes>
              <Route 
                path="/"
                element={<ProductDetailInfo product={product} />}
                />
              <Route 
                path="/preview"
                element={<ProductDetailPreview product={product} />}
              />
              <Route 
                path="/stats"
                element={<ProductDetailStats product={product} />}
              />
            </Routes>
            <div className="flex mt-8">
              <span className="title-font font-medium text-2xl text-white">${product.price}</span>
              <Button onClick={() => props.onProductAdd({...product, path: pathname})} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" >
                Add to cart
              </Button>
            </div>
          </div>
          {product.image ? (
            <img src={require(`${product.image}`)}  className="lg:w-5/12 w-full lg:h-auto lg:px-6 h-auto object-contain object-center rounded" />
          ) : null}
          </div>
      </div>
    </section>
    <Footer />
  </>);
}