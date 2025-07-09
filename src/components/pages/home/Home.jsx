import React from "react";
import Hero from "./hero/Hero";
import FishingSpot from "./fishingspot/FishingSpot";
import Tips from "./tips/Tips";
import GearGuide from "./gearguide/GearGuide";
import Contact from "./contact/Contact";
import Footer from "../../partials/Footer";
import Nav from "../../partials/Nav";

const Home = () => {
  return (
    <>
      {" "}
      <div className='min-h-screen bg-gray-50'>
        <Nav />
        <Hero />
        <FishingSpot />
        <GearGuide />

        <Tips />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
