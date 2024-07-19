import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Layout from "../pages/Layout";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import SignUp from "../pages/Sign up";
import AddProduct from "../pages/Add product";
import Cart from "../pages/Cart";
import { useState, useEffect } from "react";

function Router() {
  const [cart, setCart] = useState([]);
  const [CartCopy, setCartCopy] = useState([]);

  useEffect(() => {
    cart && cart.length !== 0 && localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {

    const cartItems = JSON.parse(localStorage.getItem("cart"));

   cartItems && setCart(cartItems);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout cart={cart} setCart={setCart}>
              <Home cart={cart} setCart={setCart} />
            </Layout>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/shop"
          element={
            <Layout cart={cart} setCart={setCart}>
              <Shop cart={cart} setCart={setCart} />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout cart={cart} setCart={setCart}>
              <Login cart={cart} setCart={setCart} />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />
        <Route
          path="/addproduct"
          element={
            <Layout>
              <AddProduct />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout cart={cart} setCart={setCart}>
              <Cart
                cart={cart}
                setCart={setCart}
                CartCopy={CartCopy}
                setCartCopy={setCartCopy}
              />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
