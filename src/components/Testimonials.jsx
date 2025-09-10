import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rasyad",
      role: "Product Designer",
      company: "TechFlow",
      text: "Qulee AI telah mengubah cara saya bekerja. Dari brainstorming ide hingga membuat prototype, semuanya jadi lebih cepat dan efisien.",
      avatar: "SC",
      rating: 5
    },
    {
      name: "Naura",
      role: "Content Creator",
      company: "Digital Media",
      text: "Platform yang luar biasa! AI assistant-nya membantu saya membuat konten berkualitas tinggi dalam waktu singkat.",
      avatar: "AR",
      rating: 5
    },
    {
      name: "Naifa",
      role: "Marketing Manager",
      company: "StartupHub",
      text: "Qulee AI adalah game changer untuk tim marketing kami. Analisis data dan pembuatan campaign jadi sangat mudah.",
      avatar: "MS",
      rating: 5
    },
    {
      name: "Gibran",
      role: "Software Engineer",
      company: "CodeCraft",
      text: "Kualitas output yang dihasilkan sangat mengesankan. Tools ini benar-benar memahami kebutuhan developer modern.",
      avatar: "DK",
      rating: 5
    },
    {
      name: "Fikri",
      role: "UX Researcher",
      company: "InnovateNow",
      text: "Interface yang intuitif dan fitur-fitur canggih membuat research process jadi lebih enjoyable dan produktif.",
      avatar: "LW",
      rating: 5
    },
    {
      name: "Sakinah",
      role: "Data Scientist",
      company: "DataVision",
      text: "Kemampuan AI dalam menganalisis complex data sets sungguh luar biasa. Hasil insights yang diberikan sangat akurat.",
      avatar: "AT",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered, testimonials.length]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({
        ...testimonials[index],
        position: i
      });
    }
    return visible;
  };

  const StarRating = ({ rating }) => (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400" : "text-slate-600"
          }`}
        >
          ★
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="py-24 overflow-hidden relative">
      {/* Enhanced Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div 
          className="absolute top-20 left-10 h-64 w-64 rounded-full bg-fuchsia-600/20 blur-3xl opacity-60" 
          style={{
            animation: 'float-gentle-1 15s ease-in-out infinite, pulse-soft 4s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl opacity-60" 
          style={{
            animation: 'float-gentle-2 12s ease-in-out infinite, pulse-soft 5s ease-in-out infinite 1s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-purple-600/15 blur-3xl opacity-50" 
          style={{
            animation: 'float-gentle-3 18s ease-in-out infinite, pulse-soft 6s ease-in-out infinite 2s'
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-manrope"
          >
            Apa Kata{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-purple-300 to-blue-300">
              Pengguna Kami
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-300 max-w-2xl mx-auto font-sans"
          >
            Bergabung dengan ribuan profesional yang telah merasakan dampak transformatif Qulee AI
          </motion.p>
        </motion.div>

        {/* Innovative Card Slider */}
        <div 
          className="relative h-[420px] flex items-center justify-center perspective-1000"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            {getVisibleTestimonials().map((testimonial, index) => {
              const isCenter = testimonial.position === 1;
              const isLeft = testimonial.position === 0;
              const isRight = testimonial.position === 2;
              
              return (
                <motion.div
                  key={`${testimonial.name}-${currentIndex}-${testimonial.position}`}
                  initial={{ 
                    opacity: 0,
                    x: testimonial.position === 0 ? -200 : testimonial.position === 2 ? 200 : 0,
                    scale: 0.8,
                    rotateY: testimonial.position === 0 ? 15 : testimonial.position === 2 ? -15 : 0
                  }}
                  animate={{ 
                    opacity: isCenter ? 1 : 0.6,
                    x: isLeft ? -280 : isRight ? 280 : 0,
                    scale: isCenter ? 1 : 0.85,
                    rotateY: isLeft ? 15 : isRight ? -15 : 0,
                    z: isCenter ? 50 : 0
                  }}
                  exit={{ 
                    opacity: 0,
                    x: testimonial.position === 0 ? -200 : testimonial.position === 2 ? 200 : 0,
                    scale: 0.8
                  }}
                  transition={{ 
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  className={`absolute w-80 h-96 ${isCenter ? 'z-20' : 'z-10'}`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Card Container with Glassmorphism */}
                  <div className={`
                    relative h-full rounded-3xl backdrop-blur-xl border transition-all duration-500
                    ${isCenter 
                      ? 'bg-white/10 border-white/20 shadow-2xl shadow-purple-500/20' 
                      : 'bg-white/5 border-white/10'
                    }
                  `}>
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-fuchsia-500/20 via-purple-500/20 to-blue-500/20 opacity-50 blur-sm" />
                    
                    {/* Main Card Content */}
                    <div className="relative h-full p-8 flex flex-col">
                      {/* Floating Quote Icon */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-500 via-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                        <span className="text-white text-2xl font-bold">"</span>
                      </div>

                      {/* Star Rating */}
                      <StarRating rating={testimonial.rating} />

                      {/* Testimonial Text */}
                      <div className="flex-grow">
                        <p className="text-slate-200 text-base leading-relaxed font-sans">
                          {testimonial.text}
                        </p>
                      </div>

                      {/* User Info */}
                      <div className="flex items-center gap-4 mt-6">
                        {/* Avatar with Gradient */}
                        <div className="relative">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-lg">
                              {testimonial.avatar}
                            </span>
                          </div>
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-blue-500 opacity-20 blur-md animate-pulse" />
                        </div>
                        
                        {/* User Details */}
                        <div>
                          <h4 className="text-white font-bold text-lg font-manrope">
                            {testimonial.name}
                          </h4>
                          <p className="text-fuchsia-300 font-medium font-sans">
                            {testimonial.role}
                          </p>
                          <p className="text-slate-400 text-sm">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-30 blur-sm animate-pulse" />
                      <div className="absolute top-1/3 right-6 w-2 h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-50" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Enhanced Decorative Bottom Element */}
        <div className="relative mt-16 flex items-center justify-center">
          <div className="absolute inset-x-0 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-full max-w-4xl" />
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-fuchsia-400 via-purple-400 to-blue-400 rounded-full shadow-lg animate-pulse" />
            <div className="absolute inset-0 w-8 h-8 bg-gradient-to-br from-fuchsia-400 via-purple-400 to-blue-400 rounded-full blur-md opacity-50 animate-pulse" />
          </div>
        </div>

        {/* Progress Indicators - Positioned separately at the bottom */}
        <div className="flex items-center justify-center mt-16">
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-fuchsia-400 to-blue-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-400 to-blue-400"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes float-gentle-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-20px, -15px) rotate(1deg); }
          50% { transform: translate(25px, -25px) rotate(-1deg); }
          75% { transform: translate(-15px, 10px) rotate(0.5deg); }
        }
        
        @keyframes float-gentle-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          30% { transform: translate(15px, 20px) rotate(-1deg); }
          60% { transform: translate(-20px, -15px) rotate(1deg); }
          90% { transform: translate(10px, -10px) rotate(-0.5deg); }
        }
        
        @keyframes float-gentle-3 {
          0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
          33% { transform: translate(calc(-50% + 10px), calc(-50% - 20px)) rotate(0.5deg); }
          66% { transform: translate(calc(-50% - 15px), calc(-50% + 15px)) rotate(-0.5deg); }
        }
        
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;