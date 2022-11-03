import {NavLink, Routes, Route} from "react-router-dom";
import Button from "./Button.js";
import Gear from "./Gear.js";
import Weapons from "./Weapons.js";
import Tools from "./Tools.js";
import InfantryGears from "./InfantryGears.js";

export default function InfantryGearCopy(props) {

  return (<>
    <div>
      <h1>Infantry Gear</h1>
      <p>Take a look at our products</p>
      <div>
          <NavLink
            className={(navData) => navData.isActive ? "tab-active" : "" }
            to="/store/NSW/">
          </NavLink>
          <NavLink
            className={(navData) => navData.isActive ? "tab-active" : "" }
            to="/store/NSW/weapons">
              <Button>Weapons</Button>
          </NavLink>
          <NavLink
            className={(navData) => navData.isActive ? "tab-active" : "" }
            to="/store/NSW/tools">
              <Button disabled={true}>Tools</Button>
          </NavLink>
          <NavLink
            className={(navData) => navData.isActive ? "tab-active" : "" }
            to="/store/NSW/equipment">
              <Button disabled={true}>Gear</Button>
          </NavLink>
      </div>
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
          element={<Gear />}
        />
      </Routes>
    </div>
  </>);
}