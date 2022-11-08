import StoreNavigation from "./StoreNavigation.js";
import {useEffect} from "react";

export default function Tools() {
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [])
  
  return (<>
    <StoreNavigation />
    <h1>Tools</h1>
  </>)
}