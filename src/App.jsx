import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import WhyUsPage from "./pages/WhyUsPage";
import ServicesPage from "./pages/ServicesPage";
import HealthCareAdminPage from "./pages/HealthCareAdminPage";
import ARRevenueAuditPage from "./pages/ARRevenueAuditPage";
import ProviderCredentialingPage from "./pages/ProviderCredentialingPage";
import RCMServiceListPage from "./pages/RCMServiceListPage";
import CloudConsultingPage from "./pages/CloudConsultingPage";
import ServerManagementPage from "./pages/ServerManagementPage";
import DigitalSolutionPage from "./pages/DigitalSolutionPage";

// --- NEW IMPORT ---
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/services" element={<ServicesPage />} />

        {/* RCM Consulting Routes */}
        <Route
          path="/healthcare-administrations"
          element={<HealthCareAdminPage />}
        />
        <Route path="/ar-revenue-audit" element={<ARRevenueAuditPage />} />
        <Route
          path="/provider-credentialing"
          element={<ProviderCredentialingPage />}
        />
        <Route path="/rcm-service-list" element={<RCMServiceListPage />} />

        {/* IT Consulting Routes */}
        <Route path="/cloud-consulting" element={<CloudConsultingPage />} />
        <Route path="/server-management" element={<ServerManagementPage />} />
        <Route path="/digital-solution" element={<DigitalSolutionPage />} />

        {/* --- NEW ROUTE --- */}
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
