import React from "react";
import HeroSection from "./HeroSection";
import Brands from "./Brands";
import Latest from "./Latest";
import Banner from "./Banner";
import TeenFav from "./TeenFav";
import Vaucher from "./Vaucher";
import Community from "./Community";
import Footer from "./Footer";
import "../../../css/shopping.css";

export default function MarketPage() {
  return (
    <div className={"shop-page"}>
      <HeroSection />
      <Brands />
      <Latest />
      <Banner />
      <TeenFav />
      <Vaucher />
      <Community />
      <Footer />
    </div>
  );
}
  
