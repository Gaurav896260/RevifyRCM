import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhoWeAre from "../components/about/WhoWeAre";
import OurVision from "../components/about/OurVision";
import OurMission from "../components/about/OurMission";
import ContactPage from "../components/about/ContactPage";
const AboutPage = () => {
  return (
    <main className="bg-white pt-20">
      <Navbar />
      <WhoWeAre />
      <OurVision />
      <OurMission />
      <ContactPage />
      <Footer />
    </main>
  );
};

export default AboutPage;
