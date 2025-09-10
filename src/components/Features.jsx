import React from "react";
import { motion } from "framer-motion";
import 'bootstrap-icons/font/bootstrap-icons.css';

const features = [
	{
		title: "Text Chat",
		icon: (
			<i className="bi bi-chat-dots-fill w-8 h-8 text-3xl"></i>
		),
	},
	{
		title: "Generate Image",
		icon: (
			<i className="bi bi-image-fill w-8 h-8 text-3xl"></i>
		),
	},
	{
		title: "Generate Webpage",
		icon: (
			<i className="bi bi-window-fullscreen w-8 h-8 text-3xl"></i>
		),
	},
	{
		title: "Generate Document/Excel",
		icon: (
			<i className="bi bi-file-earmark-spreadsheet-fill w-8 h-8 text-3xl"></i>
		),
	},
];

const cardVariants = {
	hidden: { 
		scale: 0.8, 
		opacity: 0,
		rotateY: -45,
	},
	show: (i) => ({
		scale: 1,
		opacity: 1,
		rotateY: 0,
		transition: { 
			duration: 0.8, 
			delay: i * 0.15,
			type: "spring",
			stiffness: 100,
		},
	}),
};

const floatingVariants = {
	float: (i) => ({
		y: [0, -12, 0],
		transition: {
			duration: 3 + i * 0.5,
			repeat: Infinity,
			repeatType: "reverse",
			ease: "easeInOut",
		},
	}),
};

const Features = () => {
	return (
		<section id="features" className="relative py-16 sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-left mb-16">
					<motion.h2 
						className="text-5xl sm:text-6xl font-bold text-white relative font-manrope"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
					> 
						Powerful Features
						{/* Animated accent line */}
						<motion.div
							className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"
							initial={{ width: 0 }}
							whileInView={{ width: "60%" }}
							transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
						/>
					</motion.h2>
					<motion.p 
						className="mt-6 text-xl text-slate-300 max-w-2xl font-sans"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3, duration: 0.6 }}
					>
						Semua yang Anda butuhkan untuk membuat ide menjadi nyata.
					</motion.p>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
					{features.map((f, i) => (
						<motion.div
							key={f.title}
							custom={i}
							initial="hidden"
							whileInView="show"
							animate="float"
							viewport={{ once: true, amount: 0.3 }}
							variants={cardVariants}
							className="group relative flex flex-col items-center justify-center p-8 cursor-pointer perspective-1000"
						>
							{/* Animated floating particles */}
							<div className="absolute inset-0 pointer-events-none">
								{[...Array(6)].map((_, idx) => (
									<motion.div
										key={idx}
										className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-60"
										style={{
											left: `${Math.random() * 100}%`,
											top: `${Math.random() * 100}%`,
										}}
										animate={{
											scale: [0, 1.5, 0],
											opacity: [0, 0.8, 0],
										}}
										transition={{
											duration: 2 + Math.random() * 2,
											repeat: Infinity,
											delay: Math.random() * 2,
										}}
									/>
								))}
							</div>

							{/* Main icon with morphing glow */}
							<motion.div
								variants={floatingVariants}
								custom={i}
								whileHover={{ 
									scale: 1.2, 
									rotateY: 15,
									rotateX: -10,
								}}
								className="relative mb-6 transform-gpu"
							>
								{/* Dynamic glow layers */}
								<div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
									<div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 blur-xl animate-pulse" />
									<div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-2xl animate-pulse delay-75" />
								</div>
								
								{/* Icon container with glass morphism */}
								<div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-500">
									<motion.div
										whileHover={{ rotate: 360 }}
										transition={{ duration: 0.6 }}
										className="transform-gpu"
									>
										{f.icon}
									</motion.div>
								</div>

								{/* Orbiting elements */}
								<motion.div
									className="absolute -inset-8 pointer-events-none"
									animate={{ rotate: 360 }}
									transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
								>
									<div className="absolute top-0 left-1/2 w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full transform -translate-x-1/2 opacity-60" />
								</motion.div>
								<motion.div
									className="absolute -inset-6 pointer-events-none"
									animate={{ rotate: -360 }}
									transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
								>
									<div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-40" />
								</motion.div>
							</motion.div>

							{/* Title with typewriter effect simulation */}
							<motion.h3 
								className="text-xl font-bold text-center text-white relative overflow-hidden font-manrope"
								whileHover={{ scale: 1.05 }}
							>
								<motion.span
									className="inline-block"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: i * 0.1 + 0.5, duration: 0.6 }}
								>
									{f.title}
								</motion.span>
								
								{/* Subtle underline animation */}
								<motion.div
									className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
									initial={{ width: 0 }}
									whileHover={{ width: "100%" }}
									transition={{ duration: 0.3 }}
								/>
							</motion.h3>

							{/* Interactive hover elements */}
							<div className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
								<div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 blur-xl" />
								<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-white/5 to-transparent" />
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;