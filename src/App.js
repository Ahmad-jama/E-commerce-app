import { Routes, Route } from "react-router-dom";
import { Home, SingleProductPage, Cart, Checkout } from "./pages";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import { useDispatch } from "react-redux";
import { showModal } from "./features/modalSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

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
        <Route
          path="/checkout"
          element={
            <>
              <Nav />
              <Checkout />
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
