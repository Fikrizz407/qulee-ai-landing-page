import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div 
          className="absolute -top-40 -left-20 h-96 w-96 rounded-full bg-fuchsia-600/40 blur-3xl opacity-70" 
          style={{
            animation: 'float-random-1 8s ease-in-out infinite, twinkle-bg 3s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute top-20 -right-32 h-[28rem] w-[28rem] rounded-full bg-blue-600/40 blur-3xl opacity-70" 
          style={{
            animation: 'float-random-2 10s ease-in-out infinite, twinkle-bg 4s ease-in-out infinite 1s'
          }}
        />
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-purple-600/40 blur-3xl opacity-70" 
          style={{
            animation: 'float-random-3 12s ease-in-out infinite, twinkle-bg 3.5s ease-in-out infinite 2s'
          }}
        />
        
        <style jsx>{`
          @keyframes float-random-1 {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(-30px, -20px); }
            50% { transform: translate(40px, -35px); }
            75% { transform: translate(-20px, 15px); }
          }
          
          @keyframes float-random-2 {
            0%, 100% { transform: translate(0, 0); }
            20% { transform: translate(25px, 30px); }
            40% { transform: translate(-15px, -25px); }
            60% { transform: translate(35px, 10px); }
            80% { transform: translate(-25px, 20px); }
          }
          
          @keyframes float-random-3 {
            0%, 100% { transform: translate(-50%, 0); }
            30% { transform: translate(calc(-50% + 20px), -25px); }
            60% { transform: translate(calc(-50% - 30px), 15px); }
            90% { transform: translate(calc(-50% + 15px), -10px); }
          }
          
          @keyframes twinkle-bg {
            0%, 100% { 
              opacity: 0.5; 
            }
            50% { 
              opacity: 0.9; 
            }
          }
        `}</style>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-16 text-center">
        <motion.h1
          initial={{ y: 8, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl sm:text-6xl font-semibold tracking-tight text-white font-manrope"
        >
          Your Intelligent{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-purple-300 to-blue-300">
            AI Assistant
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 8, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-4 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-sans"
        >
          Qulee AI membantu Anda berpikir, membuat, dan menyelesaikan pekerjaan
          super cepat — dari chat, membuat gambar & dokumen, hingga membangun
          halaman web dan spreadsheet.
        </motion.p>

        <motion.div
          initial={{ y: 8, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a
            href="#"
            className="px-6 py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400 shadow-[0_0_30px_rgba(139,92,246,0.65)] font-manrope"
          >
            Get Started
          </a>
        </motion.div>
      </div>

      {/* Attractive White Divider */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center py-8">
          {/* Main divider line */}
          <div className="absolute inset-x-0 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-white/60 to-transparent w-full max-w-4xl" />
          </div>
          
          {/* Central ornamental element */}
          <div className="relative flex items-center justify-center">
            {/* Diamond shaped center piece with twinkling effect */}
            <div className="relative">
              <div className="w-6 h-6 bg-white/80 rotate-90 shadow-lg shadow-white/20 animate-pulse" style={{
                animation: 'twinkle 2s ease-in-out infinite'
              }} />
              <div className="absolute inset-0 w-6 h-6 bg-gradient-to-br from-white/40 to-white/80 rotate-45 blur-sm animate-pulse" style={{
                animation: 'twinkle 2s ease-in-out infinite 0.5s'
              }} />
            </div>
          </div>
          
          <style jsx>{`
            @keyframes twinkle {
              0%, 100% { opacity: 0.3; transform: rotate(45deg) scale(1); }
              50% { opacity: 1; transform: rotate(45deg) scale(1.1); }
            }
          `}</style>
          
          {/* Corner accent elements */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2">
            <div className="flex items-center space-x-1">
              <div className="w-1 h-8 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
              <div className="w-0.5 h-4 bg-white/20" />
            </div>
          </div>
          
          <div className="absolute right-8 top-1/2 -translate-y-1/2">
            <div className="flex items-center space-x-1">
              <div className="w-0.5 h-4 bg-white/20" />
              <div className="w-1 h-8 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;