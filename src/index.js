import './index.css';
import {useLayoutEffect, useState, useEffect} from "react";
import {createRoot} from "react-dom/client";
import {Routes, Route, BrowserRouter, useLocation} from 'react-router-dom';
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import About from "./About.js";
import Checkout from "./Checkout.js";
import Store from "./Store.js";
import Cart from "./Cart.js";
import Operatives from "./Operatives.js";
import OperativeDetails from "./OperativeDetails.js";
import InfantryGears from "./InfantryGears.js";
import Products from "./Products.js";
import ProductDetails from "./ProductDetails.js";

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

//  const Wrapper = ({children}) => {
//    const location = useLocation();
//    useLayoutEffect(() => {
//      document.documentElement.scrollTo(0, 0);
//    }, [location.pathname]);
//    return children
//  } 

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
            <Navbar cart={cart} onOpenCart={handleOpenCart} />
            <section className="bg-slate-900 min-h-[93vh] scrollbar-hide ">
            <Cart
              onOpenCart={handleOpenCart}
              onProductDelete={handleProductDelete}
              open={open}
              cart={cart}
            />
              <Routes>
                <Route
                  path="/NC-store/"
                  element={<Home />}
                />
                <Route
                  path="/NC-store/about"
                  element={<About />}
                />
                <Route
                  path="NC-store/store"
                  element={<Store
                  />}
                />
                <Route 
                  path="/NC-store/store/NSO"
                  element={<Operatives 
                    cart={cart}
                    onProductAdd={handleProductAdd}
                    onProductDelete={handleProductDelete}
                  />}
                />
                <Route
                  path="/NC-store/store/NSO/:id/*"
                  element={<OperativeDetails onProductAdd={handleProductAdd} />}
                />
                <Route 
                  path="/NC-store/store/NSW/"
                  element={<InfantryGears 
                  />}
                />
                <Route 
                  path="/NC-store/store/NSW/weapons"
                  element={<Products
                    category="Primary"
                    type="weapons"
                    cart={cart}
                    onProductAdd={handleProductAdd}
                    onProductDelete={handleProductDelete}
                  />
                }
                />
                <Route 
                  path="//NC-store/store/NSW/tools"
                  element={<Products
                    category="Tools"
                    type="tools"
                    cart={cart}
                    onProductAdd={handleProductAdd}
                    onProductDelete={handleProductDelete}
                  />
                }
                />
                <Route 
                  path="/NC-store/store/NSW/equipments"
                  element={<Products
                    category="Tools"
                    type="tools"
                    cart={cart}
                    onProductAdd={handleProductAdd}
                    onProductDelete={handleProductDelete}
                    />
                  }
                />
                <Route
                  path="/NC-store/store/NSW/weapons/:id/*"
                  element={<ProductDetails category="Primary" type="weapons" onProductAdd={handleProductAdd} />}
                />
                <Route
                  path="/NC-store/store/NSW/tools/:id/*"
                  element={<ProductDetails category="Tools" type="tools" onProductAdd={handleProductAdd} />}
                />
                <Route
                  path="/NC-store/checkout"
                  element={<Checkout cart={cart} onProductDelete={handleProductDelete} />}
                />
              </Routes>
            </section>
        </BrowserRouter>
  </>);
}

createRoot(document.querySelector("#react-root")).render(<App />);