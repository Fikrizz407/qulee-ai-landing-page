import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWork from "./components/HowItWork";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import Testimonials from "./components/Testimonials";

const TestimonialCard = ({ name, role, text }) => (
  <motion.div
    initial={{ y: 12, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="rounded-2xl border border-white/10 bg-white/5 p-5 w-full"
  >
    <div className="flex items-center gap-3">
      <div className="size-10 rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-blue-500 flex-shrink-0" />
      <div className="min-w-0 flex-1">
        <div className="text-white font-medium truncate">{name}</div>
        <div className="text-slate-400 text-sm truncate">{role}</div>
      </div>
    </div>
    <p className="mt-3 text-slate-300 text-sm leading-relaxed">{text}</p>
  </motion.div>
);

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0f] text-slate-200 selection:bg-fuchsia-500/30 selection:text-white w-screen">
      {/* Background gradient halo */}
      <div className="pointer-events-none fixed inset-0 -z-10 w-full h-full">
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(168,85,247,0.12),transparent),radial-gradient(900px_500px_at_100%_10%,rgba(59,130,246,0.12),transparent),radial-gradient(900px_500px_at_0%_20%,rgba(236,72,153,0.08),transparent)]" />
      </div>

      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <main
        className={`flex-grow transition-all duration-300 pt-20 w-full ${
          isSidebarOpen ? "lg:ml-72" : "lg:ml-0"
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Hero />
          <Features />
          <HowItWork />

            <Testimonials />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
