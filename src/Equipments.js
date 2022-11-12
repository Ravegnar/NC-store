import StoreNavigation from "./StoreNavigation.js";
import {useEffect} from "react";


export default function Equipments() {

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []) 

  return (<>
    <StoreNavigation />
    <h1 className="text-white text-5xl">It is being worked on</h1>
  </>)
}