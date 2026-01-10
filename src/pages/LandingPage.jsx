import HeroSection from "../components/home/HeroSection";
import ClaimLifeCycle from "../components/home/ClaimLifeCycle";
import LogoMarquee from "../components/home/LogoMarquee"; // Import
import TestimonialsSection from "../components/home/Testimonials";
import MeetTheTeam from "../components/home/MeetTheTeam";
import Footer from "../components/Footer";
const LandingPage = () => {
  return (
    <main className="bg-white">
      <HeroSection />
      <LogoMarquee /> {/* Add here or below the Life Cycle */}
      <ClaimLifeCycle />
      <TestimonialsSection />
      <MeetTheTeam />
      <Footer />
    </main>
  );
};

export default LandingPage;
