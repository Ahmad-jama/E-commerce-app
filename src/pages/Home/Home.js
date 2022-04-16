import React from "react";

import {
  Banner,
  Category,
  ShowProducts,
  Testimonials,
} from "../../components/HomeComponents/";

const Home = () => {
  return (
    <div className="container">
      <Banner />
      <Category />
      <ShowProducts />
      <Testimonials />
    </div>
  );
};

export default Home;
