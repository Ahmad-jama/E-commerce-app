import React from "react";

import {
  Banner,
  Category,
  ShowProducts,
  Testimonials,
  Modal,
} from "../../components/HomeComponents/";

const Home = () => {
  return (
    <div style={{ position: "relative" }} className="container">
      <Banner />
      <Category />
      <ShowProducts />
      <Testimonials />
      <Modal />
    </div>
  );
};

export default Home;
