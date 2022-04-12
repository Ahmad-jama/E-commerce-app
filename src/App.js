import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import { Home } from "./pages";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>i am the about page</h1>} />
        <Route e path="*" element={<h1>i am the erorr page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
