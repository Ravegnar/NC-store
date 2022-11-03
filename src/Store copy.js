import {Link, Routes, Route} from "react-router-dom";

import Button from "./Button.js";

export default function Store(props) {

    

  return (<>
      <div>
        <h1>Products</h1>
        <p>Take a look at our products</p>
        <div>
            <Link to="/store/NSO">
                <Button>Operatives</Button>
            </Link>
            <Link to="/store/NSW">
                <Button>Infantry Gear</Button>
            </Link>
        </div>
      </div>
    </>);
}