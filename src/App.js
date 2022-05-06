import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, SingleProductPage, Cart, Checkout, AllProducts } from "./pages";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import { useDispatch } from "react-redux";
import { showModal } from "./features/modalSlice";
import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(showModal());
    }, 3000);
  }, []);

  return (
    <div className="app">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Allproduct" element={<AllProducts />} />
        <Route
          path="/product/:id"
          element={
            <>
              <Nav />
              <SingleProductPage />
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route e path="*" element={<h1>i am the erorr page</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
