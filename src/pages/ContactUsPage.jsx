import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactPage from "../components/about/ContactPage";

const ContactUsPage = () => {
  return (
    // Changed to bg-black to seamlessly blend with the ContactPage component
    <main className="bg-black min-h-screen flex flex-col">
      {/* Increased padding drastically to push the massive "Contact" text below the navbar */}
      <div className="flex-grow pt-48 pb-0">
        <ContactPage />
      </div>

      <Footer />
    </main>
  );
};

export default ContactUsPage;
