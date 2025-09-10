import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Buka Website",
      description: "Akses platform AI assistant kami melalui browser favorit Anda. Interface yang user-friendly dan modern siap membantu Anda dalam berbagai kebutuhan kreatif dan produktivitas.",
      image: "https://placehold.co/400x300/6366f1/ffffff?text=Open+Website",
      position: "right"
    },
    {
      id: 2,
      title: "Login / Sign Up",
      description: "Daftar akun baru atau masuk dengan akun yang sudah ada. Proses registrasi yang cepat dan aman untuk mengakses semua fitur premium yang tersedia di platform.",
      image: "https://placehold.co/400x300/8b5cf6/ffffff?text=Login+Signup",
      position: "left"
    },
    {
      id: 3,
      title: "Masukkan Prompt",
      description: "Ketik instruksi, pertanyaan, atau request Anda dengan jelas. AI akan memahami konteks dan memberikan response yang akurat sesuai dengan kebutuhan spesifik Anda.",
      image: "https://placehold.co/400x300/06b6d4/ffffff?text=Enter+Prompt",
      position: "right"
    },
    {
      id: 4,
      title: "Lihat Hasil",
      description: "Dapatkan output berkualitas tinggi dalam hitungan detik. Hasil dapat berupa teks, gambar, dokumen, atau webpage sesuai dengan request yang Anda berikan.",
      image: "https://placehold.co/400x300/10b981/ffffff?text=View+Results",
      position: "left"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      x: 0
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        type: "spring",
        stiffness: 80
      }
    })
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-lef mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-manrope">
            How It Works?
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-24"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              custom={index}
              variants={stepVariants}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                step.position === 'left' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 lg:max-w-lg">
                {/* Step number with connecting line */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/25">
                      {step.id}
                    </div>
                    {/* Connecting line */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-12 left-1/2 w-px h-16 bg-gradient-to-b from-purple-500/50 to-transparent transform -translate-x-1/2 lg:hidden" />
                    )}
                  </div>
                  {/* Verification badge */}
                  <div className="ml-4 w-8 h-8 rounded-full bg-blue-500/20 border-2 border-blue-400 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight font-manrope">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {step.title}
                  </span>
                </h3>
                
                <p className="text-slate-300 text-lg leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1 lg:max-w-lg">
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Image container */}
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-64 sm:h-80 object-cover"
                      loading="lazy"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    {/* Corner accent */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg shadow-blue-400/50" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative line */}
        <div className="mt-20 flex items-center justify-center">
          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent w-full max-w-md" />
          <div className="mx-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg shadow-blue-400/50" />
          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent w-full max-w-md" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;