import React from "react";

import {
  Banner,
  Category,
  ShowProducts,
  Aside,
} from "../../components/HomeComponents/";

const Home = () => {
  return (
    <div className="container">
      <Banner />
      <Category />
      <ShowProducts />
    </div>
  );
};

export default Home;
