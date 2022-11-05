import './index.css';
import { useState, useEffect } from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import About from "./About.js";
import Checkout from "./Checkout.js";
import Store from "./Store.js";
import ProductDetails from "./ProductDetails.js";
import Cart from "./Cart.js";
import Operatives from "./Operatives.js";
import OperativeDetails from "./OperativeDetails.js";
import InfantryGear from "./InfantryGear.js";
import WeaponDetails from "./WeaponDetails.js";

function App() {
  const [open, setOpen] = useState(false)
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

  function handleOpenCart() {
    setOpen(!open);
  }

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
            <section className="bg-gray-900 max-h-screen overflow-y-scroll snap snap-y snap-mandatory scrollbar-hide scroll-smooth">
            <Navbar cart={cart} onOpenCart={handleOpenCart} />
            <Cart
              onOpenCart={handleOpenCart}
              onProductDelete={handleProductDelete}
              open={open}
              cart={cart}
            />
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
                  element={<Operatives 
                    cart={cart}
                    onProductAdd={handleProductAdd}
                    onProductDelete={handleProductDelete}
                  />}
                />
                <Route
                  path="/store/NSO/:id/*"
                  element={<OperativeDetails onProductAdd={handleProductAdd} />}
                />
                <Route 
                  path="/store/NSW/*"
                  element={<InfantryGear 
                    cart={cart}
                    onProductAdd={handleProductAdd}
                    onProductDelete={handleProductDelete}
                  />}
                />
                <Route
                  path="/store/NSW/weapons/:id/*"
                  element={<WeaponDetails onProductAdd={handleProductAdd} />}
                />
                <Route
                  path="/checkout"
                  element={<Checkout cart={cart} onProductDelete={handleProductDelete} />}
                />
              </Routes>
              
            </section>
        </BrowserRouter>
  </>);
}

createRoot(document.querySelector("#react-root")).render(<App />);