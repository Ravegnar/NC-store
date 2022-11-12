import {useEffect} from "react";
import StoreNavigation from "./StoreNavigation.js";
import Products from "./Products.js";

export default function Tools() {
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [])
  
  return (<>
    <StoreNavigation />
    <h1 className="text-white text-5xl">It is being worked on</h1>
  </>)
}