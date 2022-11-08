import {NavLink, Routes, Route} from "react-router-dom";
import Button from "./Button.js";
import Gears from "./Gears.js";
import Weapons from "./Weapons.js";
import Tools from "./Tools.js";
import InfantryGears from "./InfantryGears.js";
import Footer from "./Footer.js";

export default function InfantryGearCopy(props) {

  return (<>
    <div>
      <Routes>
        <Route 
          path="/"
          element={<InfantryGears />}
        />
        <Route 
          path="/weapons"
          element={<Weapons 
            cart={props.cart}
            onProductAdd={props.onProductAdd}
            onProductDelete={props.onProductDelete}
          />
        }
        />
        <Route 
          path="/tools"
          element={<Tools />}
        />
        <Route 
          path="/equipment"
          element={<Gears />}
        />
      </Routes>
    </div>
    <Footer />
  </>);
}