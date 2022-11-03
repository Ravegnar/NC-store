import './index.css';
import { useState, useEffect } from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar.js";
import NavbarSSS from "./NavbarSSS.js";
import Home from "./Home.js";
import About from "./About.js";
import Products from "./Products.js";
import Store from "./Store.js";
import ProductDetails from "./ProductDetails.js";
import Cart from "./Cart.js";
import Operatives from "./Operatives.js";
import OperativeDetails from "./OperativeDetails.js";
import InfantryGear from "./InfantryGear.js";
import WeaponDetails from "./WeaponDetails.js";

function App() {
  const [cart, setCart] = useState(function () {
    let savedCart = [];
    try {
      savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    } catch (error) {
      savedCart = [];
    }
    return savedCart;
  });

  useEffect(() => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  function handleProductDelete(id) {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  }

  function handleProductAdd(newProduct) {
    // check if item exists
    const existingProduct = cart.find(
      (product) => product.id === newProduct.id
    );
    if (existingProduct) {
      // increase quantity
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      // product is new to the cart
      setCart([
        ...cart,
        {
          ...newProduct,
          quantity: 1,
        },
      ]);
    }
  }

  return (<>
          <BrowserRouter>
            <Navbar cart={cart} />
            <NavbarSSS />
            <div className="container">
              <Routes>
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/about"
                  element={<About />}
                />
                <Route
                  path="store"
                  element={<Store
                  />}
                />
                <Route 
                  path="/store/NSO"
                  element={<Operatives />}
                />
                <Route
                  path="/store/NSO/:id/*"
                  element={<OperativeDetails />}
                />
                <Route 
                  path="/store/NSW/*"
                  element={<InfantryGear />}
                />
                <Route
                  path="/store/NSW/weapons/:id/*"
                  element={<WeaponDetails />}
                />
                <Route
                  path="/cart"
                  element={<Cart cart={cart} />}
                />
              </Routes>
            </div>
        </BrowserRouter>
  </>);
}

createRoot(document.querySelector("#react-root")).render(<App />);