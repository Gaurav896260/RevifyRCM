import React, { useEffect, useState } from 'react';

const RevifyRcm = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
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

    // Add scroll event listener
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
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,700&family=Poppins:wght@300;400&display=swap');
      `}</style>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          background-color: #f0f2f5;
          overflow-x: hidden;
        }

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
          background: linear-gradient(135deg, #8B7FEB 0%, #A294F5 25%, #B8A9FF 50%, #A294F5 75%, #9688F2 100%);
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
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-style: italic;
          color: #000000ff;
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

        .service-cards {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 2;
        }

        .service-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: cardFloat 8s ease-in-out infinite;
          min-width: 220px;
          pointer-events: auto;
        }

        .service-card.card-1 { 
          top: 75%; 
          left: 5%; 
          animation-delay: 0s; 
          transform: translateY(${scrollY * 0.4}px);
        }
        
        .service-card.card-2 { 
          top: 15%; 
          right: 5%; 
          animation-delay: 2s; 
          transform: translateY(${scrollY * 0.6}px);
        }
        
        .service-card.card-3 { 
          bottom: 15%; 
          left: 2%; 
          animation-delay: 4s; 
          transform: translateY(${scrollY * 0.5}px);
        }
        
        .service-card.card-4 { 
          bottom: 10%; 
          right: 8%; 
          animation-delay: 6s; 
          transform: translateY(${scrollY * 0.7}px);
        }

        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.02); }
        }

        .card-header { 
          display: flex; 
          align-items: center; 
          gap: 12px; 
          margin-bottom: 15px; 
        }

        .card-icon { 
          width: 40px; 
          height: 40px; 
          border-radius: 8px; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          color: white; 
          font-weight: bold; 
          font-size: 18px; 
        }

        .eligibility-icon { background: #4A90E2; }
        .authorization-icon { background: #9B59B6; }
        .ai-icon { background: #27AE60; }
        .billing-icon { background: #3498DB; }

        .card-title { 
          color: #333; 
          font-weight: 600; 
          font-size: 16px; 
        }

        .card-subtitle { 
          color: #666; 
          font-size: 12px; 
        }

        .card-highlight { 
          background: #E8F5E8; 
          color: #27AE60; 
          padding: 4px 8px; 
          border-radius: 15px; 
          font-size: 12px; 
          font-weight: 600; 
          display: inline-block; 
          margin-bottom: 8px; 
        }

        .card-description { 
          color: #666; 
          font-size: 14px; 
        }

        .content-section {
          background: #ffffff;
          padding: 80px 40px;
          text-align: center;
          position: relative;
          z-index: 10;
          margin-top: -50px;
          border-radius: 50px 50px 0 0;
          box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.1);
        }

        .content-title { 
          color: #111; 
          font-size: clamp(32px, 5vw, 48px); 
          font-weight: 700; 
          margin-bottom: 20px; 
          transform: translateY(${Math.max(0, (scrollY - 300) * -0.1)}px);
          opacity: ${scrollY > 200 ? Math.min(1, (scrollY - 200) / 300) : 0};
          transition: opacity 0.6s ease;
        }

        .content-subtitle { 
          color: #4A90E2; 
          font-size: 20px; 
          font-weight: 500; 
          margin-bottom: 30px; 
          transform: translateY(${Math.max(0, (scrollY - 400) * -0.1)}px);
          opacity: ${scrollY > 300 ? Math.min(1, (scrollY - 300) / 300) : 0};
          transition: opacity 0.6s ease 0.2s;
        }

        .content-description { 
          color: #555; 
          font-size: 16px; 
          line-height: 1.6; 
          max-width: 900px; 
          margin: 0 auto 30px; 
          transform: translateY(${Math.max(0, (scrollY - 500) * -0.1)}px);
          opacity: ${scrollY > 400 ? Math.min(1, (scrollY - 400) / 300) : 0};
          transition: opacity 0.6s ease 0.4s;
        }

        .content-cta { 
          color: #333; 
          font-size: 18px; 
          font-weight: 500; 
          margin-top: 20px; 
          transform: translateY(${Math.max(0, (scrollY - 600) * -0.1)}px);
          opacity: ${scrollY > 500 ? Math.min(1, (scrollY - 500) / 300) : 0};
          transition: opacity 0.6s ease 0.6s;
        }

        .ai-assistant { 
          position: fixed; 
          bottom: 30px; 
          left: 30px; 
          width: 60px; 
          height: 60px; 
          background: #4A90E2; 
          border-radius: 50%; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          cursor: pointer; 
          box-shadow: 0 4px 20px rgba(74, 144, 226, 0.3); 
          transition: all 0.3s ease; 
          z-index: 100; 
          opacity: ${scrollY > 100 ? 1 : 0};
          transform: ${scrollY > 100 ? 'scale(1)' : 'scale(0.8)'};
        }

        .ai-assistant:hover { 
          transform: scale(1.1); 
          box-shadow: 0 6px 25px rgba(74, 144, 226, 0.4); 
        }

        .ai-assistant-icon { 
          color: white; 
          font-size: 24px; 
        }

        @media (max-width: 768px) {
          .navbar { padding: 15px 20px; }
          .nav-links { display: none; }
          .service-cards { display: none; }
          .main-content, .content-section { padding: 40px 20px; }
          .key-points { flex-direction: column; align-items: center; gap: 15px; }
          .action-buttons { flex-direction: column; align-items: center; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero-section">
        {/* Parallax background */}
        <div className="parallax-bg"></div>
        
        {/* Background decorations with parallax */}
        <div className="bg-decoration"></div>
        <div className="bg-decoration"></div>
        <div className="bg-decoration"></div>
        <div className="bg-decoration"></div>

        {/* Navigation */}
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

        {/* Main content */}
        <main className="main-content">
          <h1 className="main-title">
            Welcome to <span className="brand-name">Revify</span><br />
            RCM Group
          </h1>
        </main>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <h2 className="content-title">Revify RCM Group - Revolutionizing the Way Healthcare Gets Paid</h2>
        <p className="content-subtitle">Ready to fix your revenue cycle?</p>
        <p className="content-description">
          Managing a healthcare organization's finances can be complex, but we have the solutions. Our expertise, advanced 
          technology, and streamlined processes are designed to tackle any revenue cycle challenges. We'll help you reduce your 
          claim denials, speed up your cash flow, and improve your billing accuracy.
        </p>
        <p className="content-cta">
          Partner with Revify to regain control of your financial performance and overcome those time consuming obstacles.
        </p>
      </section>

      {/* AI Assistant */}
      <div className="ai-assistant">
        <div className="ai-assistant-icon">🤖</div>
      </div>
    </div>
  );
};

export default RevifyRcm;