import { Routes, Route } from "react-router-dom";

import { Home } from "./pages";
import "./index.css";
import Footer from "./components/Footer/Footer";
import { useDispatch } from "react-redux";
import Nav from "./components/Nav/Nav";
import { showModal } from "./features/modalSlice";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";

function App() {
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(showModal());
  }, 3000);
  return (
    <div className="app">
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
        <Route e path="*" element={<h1>i am the erorr page</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
