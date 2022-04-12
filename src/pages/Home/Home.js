import React from "react";

import Aside from "../../components/HomeComponents/Aside/Aside";
import Banner from "../../components/HomeComponents/Banner/Banner";
import Category from "../../components/HomeComponents/Category/Category";
const Home = () => {
  return (
    <div className="container">
      <Banner />
      <Category />
    </div>
  );
};

export default Home;
