import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [particlePositions, setParticlePositions] = useState([]);

  // Generate random particles
  useEffect(() => {
    const generateParticles = () => {
      const particles = [];
      for (let i = 0; i < 15; i++) {
        particles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 2 + Math.random() * 2
        });
      }
      setParticlePositions(particles);
    };

    generateParticles();

    // Glitch effect trigger
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 8000 + Math.random() * 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  const menuItems = [];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-lg">
      <div className="w-full flex items-center justify-between px-6 md:px-10 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden p-2 rounded-lg bg-gray-800/80 text-white hover:bg-gray-700 transition"
          >
            {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Advanced AI Logo */}
          <div className="ai-title-container" onClick={() => setGlitchActive(true)}>
            {/* Neural Network Background */}
            <div className="neural-network">
              {particlePositions.map(particle => (
                <div
                  key={particle.id}
                  className="neural-particle"
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    animationDelay: `${particle.delay}s`,
                    animationDuration: `${particle.duration}s`
                  }}
                />
              ))}
            </div>

            {/* Main Title */}
            <div className={`ai-title ${glitchActive ? 'glitch-active' : ''}`}>
              <span className="title-primary">Qulee</span>
              
              {/* AI Badge */}
              <div className="ai-badge">
                <span className="ai-text">AI</span>
                <div className="ai-pulse"></div>
                <div className="ai-scan-line"></div>
              </div>

              {/* Glitch container */}
              <div className="glitch-container">
                <span className="glitch-layer" aria-hidden="true">Qulee AI</span>
                <span className="glitch-layer" aria-hidden="true">Qulee AI</span>
              </div>
            </div>

            {/* Quantum field effect */}
            <div className="quantum-field">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="quantum-ring"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Rest of navbar content */}
        <div className="flex items-center gap-6 md:gap-8">
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-base font-medium">
            {menuItems.map((item) => (
              <motion.a
                key={item.label}
                href="#"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1 text-slate-300 hover:text-white transition"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown size={16} className="text-slate-400" />
                )}
              </motion.a>
            ))}
          </nav>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#"
            className="rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 px-6 py-2.5 text-base font-semibold text-white shadow-lg shadow-purple-500/30"
          >
            Try Qulee
          </motion.a>
        </div>
      </div>

      <style jsx>{`
        .ai-title-container {
          position: relative;
          cursor: pointer;
          padding: 10px;
          border-radius: 8px;
          transition: transform 0.3s ease;
          overflow: hidden;
        }

        .neural-network {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.6;
        }

        .neural-particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: radial-gradient(circle, #667eea, transparent);
          border-radius: 50%;
          animation: neuralPulse infinite ease-in-out;
        }

        .ai-title {
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 10;
          isolation: isolate; /* Penting untuk stacking context */
        }

        .title-primary {
          position: relative;
          z-index: 2;
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(45deg, #667eea, #764ba2, #f093fb);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientShift 4s ease infinite;
        }

        .ai-badge {
          position: relative;
          background: linear-gradient(135deg, #0a0a0a, #1a1a2e);
          border: 1px solid #667eea;
          border-radius: 6px;
          padding: 2px 8px;
          overflow: hidden;
        }

        .ai-text {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          text-shadow: 0 0 8px #667eea;
          position: relative;
          z-index: 2;
        }

        .ai-pulse {
          position: absolute;
          inset: -1px;
          background: linear-gradient(45deg, #667eea, #764ba2);
          border-radius: 6px;
          opacity: 0;
          animation: aiPulse 2s infinite;
        }

        .ai-scan-line {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00ff88, transparent);
          animation: scanLine 2s infinite;
        }

        .quantum-field {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .quantum-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 50%;
          animation: quantumExpand 3s infinite;
        }

        /* Glitch Effect Styles */
        .glitch-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 800;
        }

        .glitch-active .glitch-layer:nth-child(4) {
          animation: glitch1 0.3s infinite;
          color: #ff0040;
          opacity: 0.8;
          text-shadow: 2px 0 #00ff40;
          transform: translate(-2px, 2px);
        }

        .glitch-active .glitch-layer:nth-child(5) {
          animation: glitch2 0.3s infinite;
          color: #00ff40;
          opacity: 0.6;
          text-shadow: -2px 0 #ff0040;
          transform: translate(2px, -2px);
        }

        @keyframes glitch1 {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }

        @keyframes glitch2 {
          0% { transform: translate(0); }
          20% { transform: translate(2px, -2px); }
          40% { transform: translate(2px, 2px); }
          60% { transform: translate(-2px, -2px); }
          80% { transform: translate(-2px, 2px); }
          100% { transform: translate(0); }
        }

        @keyframes neuralPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes aiPulse {
          0%, 100% { opacity: 0; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }

        @keyframes scanLine {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        @keyframes quantumExpand {
          0% {
            width: 20px;
            height: 20px;
            opacity: 0.8;
          }
          100% {
            width: 100px;
            height: 100px;
            opacity: 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
