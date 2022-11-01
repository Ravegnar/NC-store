import {NavLink, Routes, Route} from "react-router-dom";
import Button from "./Button.js";
import Gear from "./Gear.js";
import Weapons from "./Weapons.js";
import Tools from "./Tools.js";
import Infa from "./Infa.js";

export default function InfantryGear() {

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
            to="/store/NSW/gear">
              <Button disabled={true}>Gear</Button>
          </NavLink>
      </div>
      <Routes>
        <Route 
          path="/"
          element={<Infa />}
        />
        <Route 
          path="/weapons"
          element={<Weapons />
        }
        />
        <Route 
          path="/tools"
          element={<Tools />}
        />
        <Route 
          path="/gear"
          element={<Gear />}
        />
      </Routes>
    </div>
  </>);
}