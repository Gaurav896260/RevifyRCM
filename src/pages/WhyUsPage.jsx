import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhyUsIntro from "../components/whychooseus/WhyUsIntro";
import EfficiencyDashboard from "../components/whychooseus/EfficiencyDashboard";
import TrustSection from "../components/whychooseus/TrustSection";
const WhyUsPage = () => {
  return (
    <main className="bg-white">
      <Navbar />
      <div className="pt-20">
        <WhyUsIntro />
        <EfficiencyDashboard />
        <TrustSection />
      </div>
      <Footer />
    </main>
  );
};

export default WhyUsPage;
