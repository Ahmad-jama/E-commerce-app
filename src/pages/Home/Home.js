import React from "react";
import {
  Banner,
  Category,
  ShowProducts,
  Testimonials,
  Modal,
  HomeNav,
} from "../../components/HomeComponents/";

const Home = () => {
  return (
    <>
      <HomeNav />
      <div style={{ position: "relative" }} className="container">
        <Banner />
        <Category />
        <ShowProducts />
        <Testimonials />
        <Modal />
      </div>
    </>
  );
};

export default Home;
