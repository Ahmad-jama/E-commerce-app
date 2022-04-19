import { Routes, Route } from "react-router-dom";

import { Home } from "./pages";
import "./index.css";
import Footer from "./components/Footer/Footer";
import { useDispatch } from "react-redux";
import Nav from "./components/Nav/Nav";
import { showModal } from "./features/modalSlice";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import Cart from "./pages/Cart/Cart";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(showModal());
  }, 3000);
  return (
    <div className="app">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/product/:id"
          element={
            <>
              <Nav />
              <SingleProductPage />
            </>
          }
        />
        <Route e path="*" element={<h1>i am the erorr page</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
