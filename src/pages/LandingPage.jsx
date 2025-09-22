import React, { useEffect, useState } from 'react';
// NEW: Import the DotLottieReact component
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  // Add this right below your existing `scrollY` state
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // REMOVED: The useState and useEffect for fetching the Lottie JSON are no longer needed.

  useEffect(() => {

    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const aiAssistant = document.querySelector('.ai-assistant');
    const serviceCards = document.querySelectorAll('.service-card');
    
    const handleAiClick = () => {
      alert('AI Assistant: How can I help you optimize your healthcare revenue cycle today?');
    };

    const handleCardMouseEnter = (card) => {
      card.style.transform = 'translateY(-10px) scale(1.05)';
      card.style.zIndex = '10';
    };

    const handleCardMouseLeave = (card) => {
      card.style.transform = '';
      card.style.zIndex = '';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    if (aiAssistant) {
      aiAssistant.addEventListener('click', handleAiClick);
    }

    serviceCards.forEach(card => {
      const enterHandler = () => handleCardMouseEnter(card);
      const leaveHandler = () => handleCardMouseLeave(card);
      card.addEventListener('mouseenter', enterHandler);
      card.addEventListener('mouseleave', leaveHandler);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (aiAssistant) {
        aiAssistant.removeEventListener('click', handleAiClick);
      }
      serviceCards.forEach(card => {
        card.removeEventListener('mouseenter', handleCardMouseEnter);
        card.removeEventListener('mouseleave', handleCardMouseLeave);
      });
    };
  }, []);

  const handleContact = () => {
    alert('Contacting Revify RCM Group...');
  };

  return (
    <div>
      <style jsx global>{`
        /* --- ADD THIS LINE --- */
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
        
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,700&family=Poppins:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
      `}</style>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          overflow-x: hidden;
        }

        /* Hero Section Styles */
        .hero-section {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #8B7FEB 0%, #A294F5 25%, #B8A9FF 50%, #A294F5 75%, #9688F2 100%);
          overflow: hidden;
        }

       .parallax-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 120%;
          /* --- MODIFICATION START --- */
          /* We add a third layer: a radial gradient that acts as a "lens" */
          background:
            /* Layer 1: The distortion "lens" that follows the mouse */
            radial-gradient(
              circle at var(--mouse-x) var(--mouse-y),
              rgba(184, 169, 255, 0.3) 0%,
              rgba(184, 169, 255, 0) 20%
            ),
            /* Layer 2: The visible dot pattern */
            url('data:image/svg+xml,<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="white" cx="10" cy="10" r="1.2" fill-opacity="0.25"/></svg>'),
            /* Layer 3: The base color gradient */
            linear-gradient(135deg, #8B7FEB 0%, #A294F5 25%, #B8A9FF 50%, #A294F5 75%, #9688F2 100%);
          transition: background 0.1s ease-out; /* Adds a slight smoothing effect */
          /* --- MODIFICATION END --- */
          transform: translateY(${scrollY * 0.5}px);
          z-index: 0;
        }

        .bg-decoration {
          position: absolute;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
          z-index: 1;
          transform: translateY(${scrollY * 0.3}px);
        }

        .bg-decoration:nth-child(2) { 
          top: 20%; 
          left: 10%; 
          width: 200px; 
          height: 200px; 
          background: rgba(255, 255, 255, 0.1); 
          border-radius: 50%; 
          animation-delay: 0s; 
          transform: translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.1}deg);
        }

        .bg-decoration:nth-child(3) { 
          top: 60%; 
          right: 15%; 
          width: 150px; 
          height: 150px; 
          background: rgba(255, 255, 255, 0.08); 
          border-radius: 50%; 
          animation-delay: 2s; 
          transform: translateY(${scrollY * 0.4}px) rotate(${-scrollY * 0.1}deg);
        }

        .bg-decoration:nth-child(4) { 
          top: 40%; 
          left: 60%; 
          width: 100px; 
          height: 100px; 
          background: rgba(255, 255, 255, 0.06); 
          border-radius: 50%; 
          animation-delay: 4s; 
          transform: translateY(${scrollY * 0.6}px) rotate(${scrollY * 0.2}deg);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: ${scrollY > 50 ? 'rgba(139, 127, 235, 0.95)' : 'transparent'};
          backdrop-filter: ${scrollY > 50 ? 'blur(10px)' : 'none'};
          transition: all 0.3s ease;
          border-bottom: ${scrollY > 50 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'};
        }

        .logo { 
          display: flex; 
          align-items: center; 
          color: white; 
          font-size: 28px; 
          font-weight: 700; 
          transform: translateY(${scrollY * 0.1}px);
        }

        .logo::before { 
          content: '»»'; 
          margin-right: 8px; 
          font-size: 32px; 
        }

        .nav-links { 
          display: flex; 
          list-style: none; 
          gap: 40px; 
        }

        .nav-links a { 
          color: rgba(255, 255, 255, 0.9); 
          text-decoration: none; 
          font-weight: 500; 
          font-size: 16px; 
          transition: color 0.3s ease; 
        }

        .nav-links a:hover { 
          color: white; 
        }

        .contact-btn { 
          background: rgba(255, 255, 255, 0.1); 
          color: white; 
          border: 1px solid rgba(255, 255, 255, 0.2); 
          padding: 12px 24px; 
          border-radius: 25px; 
          font-size: 14px; 
          font-weight: 600; 
          cursor: pointer; 
          transition: all 0.3s ease; 
        }

        .contact-btn:hover { 
          background: rgba(255, 255, 255, 0.2); 
          transform: translateY(-2px); 
        }

        .main-content {
          text-align: center;
          padding: 60px 20px;
          position: relative;
          z-index: 5;
          transform: translateY(${scrollY * 0.2}px);
        }

        .main-title { 
          font-family: 'Poppins', sans-serif;
          color: white; 
          font-size: clamp(48px, 8vw, 80px); 
          font-weight: 300; 
          line-height: 1.2; 
          margin-bottom: 30px; 
          letter-spacing: -1px; 
          transform: translateY(${scrollY * 0.15}px);
          opacity: ${Math.max(0, 1 - scrollY / 500)};
        }

       .main-title .brand-name {
          /* --- MODIFIED LINES --- */
          font-family: 'Pacifico', cursive;
          font-weight: 400;
          font-style: normal;
          /* --- END MODIFIED LINES --- */
          color: #000000;
        }

        .main-subtitle { 
          color: rgba(255, 255, 255, 0.9); 
          font-size: clamp(18px, 3vw, 24px); 
          font-weight: 400; 
          max-width: 800px; 
          margin: 0 auto 40px; 
          line-height: 1.5; 
          transform: translateY(${scrollY * 0.25}px);
          opacity: ${Math.max(0, 1 - scrollY / 400)};
        }

        .key-points { 
          display: flex; 
          justify-content: center; 
          flex-wrap: wrap; 
          gap: 30px; 
          margin: 40px 0 60px; 
          transform: translateY(${scrollY * 0.3}px);
          opacity: ${Math.max(0, 1 - scrollY / 300)};
        }

        .key-point { 
          color: rgba(255, 255, 255, 0.9); 
          font-size: 18px; 
          font-weight: 500; 
          display: flex; 
          align-items: center; 
          gap: 10px; 
        }

        .key-point::before { 
          content: '✓'; 
          color: #4CAF50; 
          font-weight: bold; 
          font-size: 20px; 
        }

        .action-buttons { 
          display: flex; 
          justify-content: center; 
          gap: 20px; 
          flex-wrap: wrap; 
          transform: translateY(${scrollY * 0.35}px);
          opacity: ${Math.max(0, 1 - scrollY / 250)};
        }

        .btn-primary { 
          background: #4A90E2; 
          color: white; 
          border: none; 
          padding: 16px 32px; 
          border-radius: 12px; 
          font-size: 16px; 
          font-weight: 600; 
          cursor: pointer; 
          transition: all 0.3s ease; 
          box-shadow: 0 4px 15px rgba(74, 144, 226, 0.3); 
        }

        .btn-primary:hover { 
          background: #357ABD; 
          transform: translateY(-2px); 
          box-shadow: 0 6px 20px rgba(74, 144, 226, 0.4); 
        }

        .btn-secondary { 
          background: white; 
          color: #333; 
          border: none; 
          padding: 16px 32px; 
          border-radius: 12px; 
          font-size: 16px; 
          font-weight: 600; 
          cursor: pointer; 
          transition: all 0.3s ease; 
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); 
        }

        .btn-secondary:hover { 
          transform: translateY(-2px); 
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15); 
        }

        /* --- INTERMEDIATE SECTION STYLES --- */
        .intermediate-section {
          background: linear-gradient(180deg, #9688F2 0%, #f8f9ff 100%);
          padding: 80px 40px;
          position: relative;
          z-index: 10;
        }

        .intermediate-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 50px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .lottie-container {
          flex: 1;
          max-width: 450px;
        }

        .text-container {
          flex: 1;
          max-width: 600px;
          text-align: left;
        }

        .intermediate-title { 
          color: #333; 
          font-size: clamp(32px, 5vw, 48px); 
          font-weight: 700; 
          margin-bottom: 20px; 
        }

        .intermediate-subtitle { 
          color: #4A90E2; 
          font-size: 20px; 
          font-weight: 500; 
          margin-bottom: 30px; 
        }

        .intermediate-description { 
          color: #555; 
          font-size: 16px; 
          line-height: 1.6; 
          margin-bottom: 30px; 
        }

        .intermediate-cta { 
          color: #333; 
          font-size: 18px; 
          font-weight: 500; 
          margin-top: 20px; 
        }
        /* --- END OF INTERMEDIATE STYLES --- */

        /* Testimonials Section Styles */
        .testimonials-section {
          background: #f8f9ff;
          padding: 80px 20px;
          font-family: 'Poppins', sans-serif;
        }

        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .testimonials-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: #8B7FEB;
          background: rgba(139, 127, 235, 0.1);
          padding: 8px 16px;
          border-radius: 20px;
          margin-bottom: 20px;
        }

        .testimonials-title {
          font-size: clamp(36px, 6vw, 56px);
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 10px;
          line-height: 1.2;
        }

        .testimonials-subtitle {
          font-size: clamp(36px, 6vw, 56px);
          font-weight: 700;
          color: #666;
          margin-bottom: 30px;
          line-height: 1.2;
        }

        .testimonials-description {
          font-size: 18px;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          align-items: start;
        }

        .testimonial-card-large {
          background: white;
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(139, 127, 235, 0.1);
          border: 1px solid rgba(139, 127, 235, 0.1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 400px;
          transition: all 0.3s ease;
        }

        .testimonial-card-large:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(139, 127, 235, 0.15);
        }

        .stat-number {
          font-size: 72px;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1;
          margin-bottom: 10px;
        }

        .stat-text {
          font-size: 20px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 30px;
        }

        .quote-icon {
          color: #8B7FEB;
          font-size: 40px;
          margin-bottom: 15px;
          transform: scaleX(-1);
        }

        .testimonial-quote {
          font-size: 16px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .author-info {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .author-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
        }

        .author-name {
          font-weight: 600;
          color: #1a1a1a;
          font-size: 16px;
        }

        .author-title {
          color: #666;
          font-size: 14px;
        }

        .company-logo {
          width: 32px;
          height: 32px;
          opacity: 0.7;
        }

        .testimonials-right {
          display: grid;
          grid-template-rows: 1fr 1fr;
          gap: 30px;
        }

        .testimonial-card-medium {
          background: white;
          padding: 30px;
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(139, 127, 235, 0.1);
          border: 1px solid rgba(139, 127, 235, 0.1);
          transition: all 0.3s ease;
        }

        .testimonial-card-medium:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(139, 127, 235, 0.15);
        }

        .stat-header {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-bottom: 20px;
        }

        .stat-number-medium {
          font-size: 48px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .stat-text-medium {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .testimonials-bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .testimonial-card-small {
          background: white;
          padding: 25px;
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(139, 127, 235, 0.1);
          border: 1px solid rgba(139, 127, 235, 0.1);
          transition: all 0.3s ease;
        }

        .testimonial-card-small:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(139, 127, 235, 0.15);
        }

        .testimonial-card-dark {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          color: white;
        }

        .testimonial-card-dark .testimonial-quote {
          color: #ccc;
        }

        .testimonial-card-dark .author-title {
          color: #999;
        }

        .testimonial-quote-small {
          font-size: 14px;
          color: #666;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .author-info-small {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .author-avatar-small {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
        }

        .author-name-small {
          font-weight: 600;
          color: #1a1a1a;
          font-size: 14px;
        }

        .author-title-small {
          color: #666;
          font-size: 12px;
        }

        .ai-assistant { 
          position: fixed; 
          bottom: 30px; 
          left: 30px; 
          width: 60px; 
          height: 60px; 
          background: #8B7FEB; 
          border-radius: 50%; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          cursor: pointer; 
          box-shadow: 0 4px 20px rgba(139, 127, 235, 0.3); 
          transition: all 0.3s ease; 
          z-index: 100; 
          opacity: ${scrollY > 100 ? 1 : 0};
          transform: ${scrollY > 100 ? 'scale(1)' : 'scale(0.8)'};
        }

        .ai-assistant:hover { 
          transform: scale(1.1); 
          box-shadow: 0 6px 25px rgba(139, 127, 235, 0.4); 
        }

        .ai-assistant-icon { 
          color: white; 
          font-size: 24px; 
        }

        @media (max-width: 992px) {
            .intermediate-container {
                flex-direction: column;
                text-align: center;
            }
            .text-container {
                text-align: center;
                order: 1;
            }
            .lottie-container {
                order: 0;
                margin-bottom: 30px;
            }
        }

        @media (max-width: 768px) {
          .navbar { padding: 15px 20px; }
          .nav-links { display: none; }
          .main-content, .testimonials-section { padding: 40px 20px; }
          .intermediate-section { padding: 40px 20px; }
          .key-points { flex-direction: column; align-items: center; gap: 15px; }
          .action-buttons { flex-direction: column; align-items: center; }
          
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .testimonials-right {
            grid-template-rows: auto auto;
          }
          
          .testimonials-bottom {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        {/* ... (Hero section content remains unchanged) ... */}
        <div
          className="parallax-bg"
          style={{
            '--mouse-x': `${mousePosition.x}px`,
            '--mouse-y': `${mousePosition.y}px`,
          }}
        ></div>
        <div className="parallax-bg"></div>
        <div className="bg-decoration"></div>
        <div className="bg-decoration"></div>
        <div className="bg-decoration"></div>
        <div className="bg-decoration"></div>

        <nav className="navbar">
          <div className="logo">Revify</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Why Choose Us</a></li>
            <li><a href="#solutions">Our Services</a></li>
          </ul>
          <button className="contact-btn" onClick={handleContact}>Contact Us</button>
        </nav>

        <main className="main-content">
          <h1 className="main-title">
            Welcome to <span className="brand-name">Revify</span><br />
            RCM Group
          </h1>
        </main>
      </section>

      {/* --- MODIFIED INTERMEDIATE SECTION --- */}
      <section className="intermediate-section">
        <div className="intermediate-container">
          <div className="lottie-container">
            {/* NEW: Replaced Lottie component with DotLottieReact */}
            <DotLottieReact
              src="https://lottie.host/10374cbb-da1d-4481-88ba-b7f68f148d66/PkKljTuu4j.lottie"
              loop
              autoplay
            />
          </div>
          <div className="text-container">
            <h2 className="intermediate-title">Revify RCM Group - Revolutionizing the Way Healthcare Gets Paid</h2>
            <p className="intermediate-subtitle">Ready to fix your revenue cycle?</p>
            <p className="intermediate-description">
              Managing a healthcare organization's finances can be complex, but we have the solutions. Our expertise, advanced 
              technology, and streamlined processes are designed to tackle any revenue cycle challenges. We'll help you reduce your 
              claim denials, speed up your cash flow, and improve your billing accuracy.
            </p>
            <p className="intermediate-cta">
              Partner with Revify to regain control of your financial performance and overcome those time consuming obstacles.
            </p>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials-section">
       {/* ... (Testimonials section content remains unchanged) ... */}
       <div className="testimonials-container">
          <header className="testimonials-header">
            <div className="testimonials-badge">
              <span className="material-icons" style={{fontSize: '16px'}}>format_quote</span>
              Testimonials
            </div>
            <h1 className="testimonials-title">Results that speaks volume</h1>
            <h2 className="testimonials-subtitle">Read success stories</h2>
            <p className="testimonials-description">
              Find out how our happy clients are raving about us.
            </p>
          </header>

          <main className="testimonials-grid">
            {/* Large testimonial card */}
            <div className="testimonial-card-large">
              <div>
                <h3 className="stat-number">8X</h3>
                <p className="stat-text">Increase in conversion rate</p>
                <div>
                  <span className="material-icons quote-icon">format_quote</span>
                  <blockquote className="testimonial-quote">
                    "We needed a modern, high-converting website, and the Bravio team delivered beyond expectations. Their design and SEO expertise helped us increase conversion rate by 800% in just two weeks. Highly recommend!"
                  </blockquote>
                </div>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <img 
                    alt="David Callahan's profile picture" 
                    className="author-avatar" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-bxD7E2JwGdMh1wNMl5ZlBQptdEnYkSL4eoi_tTUPY5G0WNCxD82OCherAiCsXhVjwyOPFKnDW9Wz4mHCvGrwMt9K8iFHgf62L5nwl5-bl1SJkHPkJnwv-UDXf1h2R2m8kwa6IPFByjj7J-sdIIdkSdL0sX6FX3vxVdzGKz94m-SD2TwAExmYY_LH0AS3ptssWJSDnRvV7aVJNSU_r_4xMI3NJAI5OxTQkNJ2n7eFIQZMmYCFh1hEmzrXWo0zRMPW4uJd3AS5rKwY"
                  />
                  <div>
                    <p className="author-name">David Callahan</p>
                    <p className="author-title">Marketing Director, Spotify</p>
                  </div>
                </div>
                <img 
                  alt="Spotify logo" 
                  className="company-logo" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsknA2FQOUxoju_1oZU1_E4NoFwjEITRTQ6aPrxRFCPmlf6XUi0OuVZuhDg6-TE6blTngED9kjob6AXJOxrofrw-lom1Ua3F7cNQI9VJgArMjmALxphM0TikPG5E36uOqSS6ZAXeCU4iLwTWSzYJ0Sb9_l9yyPf3BQFBj3j8iGbC7H07xRge_tbHTGfuj_6NtN-QdydpkvWhklkfrKvJ7ZzH6IB-fsD_Q21Wu9ob781hLAcwNbpDgnGDSVjJVbziGgzmjEULKOfrYo"
                />
              </div>
            </div>

            {/* Right column */}
            <div className="testimonials-right">
              {/* Medium testimonial card */}
              <div className="testimonial-card-medium">
                <div>
                  <div className="stat-header">
                    <h3 className="stat-number-medium">2X</h3>
                    <span className="stat-text-medium">Increase in lead generation</span>
                  </div>
                  <div>
                    <span className="material-icons quote-icon">format_quote</span>
                    <blockquote className="testimonial-quote">
                      "From branding to website design, every detail was meticulously handled. The team's expertise helped us launch faster, and the results have been phenomenal!"
                    </blockquote>
                  </div>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <img 
                      alt="Sarah Mitchel's profile picture" 
                      className="author-avatar" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDziJnnK0xaf2m7him2HH-jD3goXweFcw3twgHflM9vPEBzYjv76lRvfNtF6wlMBBvE_c2TqR7EYBERcEDTdgNguLNj6I5IzDwIpuULRzsbU6WVOZTOLWurytUI6XV8rdOkZWm3aXG7UVjefB7gsO1J1ol2hYdQZNvgHCDy0MSq5DfMr6c1cVsLh94OOsv6-1v2OxWmC-PVBPGDAj-GXWRcWmkC_qAmVsp-cky0IkDXYtIrNTnJgao7rUNH_gKg_3DuKEklh5dNDfOu"
                    />
                    <div>
                      <p className="author-name">Sarah Mitchel</p>
                      <p className="author-title">Marketing Director, Google</p>
                    </div>
                  </div>
                  <svg className="company-logo" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.0003 4.8833C12.0003 4.8833 16.3263 4.7013 19.5533 7.9253C22.7803 11.1493 22.9623 15.4743 22.9623 15.4743C22.9623 15.4743 18.6363 15.6563 15.4093 12.4323C12.1823 9.2083 12.0003 4.8833 12.0003 4.8833ZM11.9923 12.4221C11.9923 12.4221 12.1753 16.7441 8.9483 19.9681C5.7213 23.1921 1.3953 23.3741 1.3953 23.3741C1.3953 23.3741 1.2133 19.0491 4.4403 15.8251C7.6673 12.6011 11.9923 12.4221 11.9923 12.4221Z"></path>
                    <path d="M11.9999 12.0004C11.9999 12.0004 7.67388 12.1824 4.44688 15.4064C1.21988 18.6304 1.03788 22.9554 1.03788 22.9554L1.03798 12.0003C1.03798 12.0003 1.21998 7.67526 4.44698 4.45126C7.67398 1.22726 12.0000 1.04526 12.0000 1.04526L11.9999 12.0004Z"></path>
                    <path d="M12.0001 12.0004L12.0001 1.04529C16.3261 1.22729 19.5531 4.45129 22.7801 7.67529C25.0001 9.89529 22.9621 15.4744 22.9621 15.4744C18.6361 15.6564 15.4091 12.4324 12.1821 9.20839C12.1821 9.20839 12.0001 4.88339 12.0001 4.88339"></path>
                    <path d="M12.0001 12.0004L12.0001 22.9555C7.67406 22.7735 4.44706 19.5495 1.22006 16.3255C-0.999945 14.1055 1.03806 8.5264 1.03806 8.5264C5.36406 8.3444 8.59106 11.5684 11.8181 14.7924C11.8181 14.7924 12.0001 19.1174 12.0001 19.1174"></path>
                  </svg>
                </div>
              </div>

              {/* Bottom row with 2 small cards */}
              <div className="testimonials-bottom">
                {/* Small testimonial card 1 */}
                <div className="testimonial-card-small">
                  <div>
                    <span className="material-icons quote-icon">format_quote</span>
                    <blockquote className="testimonial-quote-small">
                      "Their animation work took our product videos to the next level. The team truly understands user experience and storytelling."
                    </blockquote>
                  </div>
                  <div className="author-info-small">
                    <img 
                      alt="Tom Becker's profile picture" 
                      className="author-avatar-small" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA5HBvKdq6tIob4xRaGnMoyon5PVnxTAMvAra5knMf-DwKm5suL0ySa0Ab8uEyD0mKfkwAKjrmJtSn7ZfL7T8YSOaehLP5PYYpKNkKVTg16DiXwT_n7pF_-gQVvl23uR_BCh0EDp3P3UTHLpa6lQtIi5aHZDAT-3vBuqaEVUvvNMqR6WaN3s5HA4KS3P7YGe-MQ3sEapmMfGqUITd6VZF3c0kFwiYc0ZH_sDbt1g1xaesFMuDPeLmT_B3vd_aDONe9lF-Xe5Pw63_v"
                    />
                    <div>
                      <p className="author-name-small">Tom Becker</p>
                      <p className="author-title-small">Founder, PulseCore</p>
                    </div>
                  </div>
                </div>

                {/* Small testimonial card 2 - darker theme */}
                <div className="testimonial-card-small testimonial-card-dark">
                  <div>
                    <span className="material-icons quote-icon" style={{color: '#8B7FEB'}}>format_quote</span>
                    <blockquote className="testimonial-quote-small" style={{color: '#ccc'}}>
                      "The team nailed our MVP design with a fast turnaround and incredible attention to detail. The final product felt polished and professional."
                    </blockquote>
                  </div>
                  <div className="author-info-small">
                    <img 
                      alt="Sarah Mitchel's profile picture" 
                      className="author-avatar-small" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqo3lREBL2lj_zB6Lvd-XCJ1TB6Ndjm9-i-mDXabXyJyLjqC8v3KVHMSPD64vcn3JESkCadOIjnnR3BC7NaEUuprr-QLWP6iU6PqeQmksv4INYwkZec8eQ5lj1SO3_2DrK3n4lEty0qLca9eABVReVWWtK9h4IK9mwcW6IDet3j8bkzTDITCkPiV_zFfHt9rC6xp7r4kiJGhdl1n-7zhqAUzPJfYvv92GSCZHfsDZal80HE99YsPlL9Tp1ovqMNx9dUQNlQPeQoVyP"
                    />
                    <div>
                      <p className="author-name-small" style={{color: 'white'}}>Sarah Mitchel</p>
                      <p className="author-title-small" style={{color: '#999'}}>Marketing Director, Google</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* AI Assistant */}
      <div className="ai-assistant">
        <div className="ai-assistant-icon">🤖</div>
      </div>
    </div>
  );
};

export default LandingPage;