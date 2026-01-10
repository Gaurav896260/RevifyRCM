import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesIntro from "../components/ourservices/ServicesIntro";
import RCMConsulting from "../components/ourservices/RCMConsulting";
import RCMServices from "../components/ourservices/RCMServices";
const ServicesPage = () => {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="pt-20">
        <ServicesIntro />
        <RCMConsulting />
        <RCMServices />
      </div>
      <Footer />
    </main>
  );
};

export default ServicesPage;
