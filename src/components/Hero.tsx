"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pb-10 pt-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 dark:bg-blue-900/10 rounded-full blur-[120px] -z-10" />

      {/* Interactive Particles */}
      <ParticleBackground />

      <div className="container mx-auto max-w-7xl flex-grow flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 max-w-2xl"
          >
            <p className="text-lg sm:text-xl text-foreground/70 font-medium">Hello, I&apos;m</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] dark:from-[#818cf8] dark:to-[#c084fc]">
                Pragati Patel
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground/80">
              Information Technology Student &bull; Software Developer
            </h2>
            <p className="text-base sm:text-lg text-foreground/60 leading-relaxed max-w-xl">
              I build intelligent software systems and data-driven applications
              using modern technologies such as Python, Machine Learning, and
              Full-Stack Development. My focus is transforming complex data into scalable
              solutions that create real-world impact.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a
                href="#projects"
                className="w-full sm:w-auto flex items-center justify-center rounded-full bg-foreground text-background px-8 py-3.5 text-sm font-semibold transition-all hover:scale-105"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center rounded-full border border-foreground/20 hover:border-foreground/50 bg-transparent px-8 py-3.5 text-sm font-semibold transition-all hover:bg-foreground/5"
              >
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/Pragatipatel99"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors border border-foreground/10"
              >
                <Github className="w-5 h-5 text-foreground/80 dark:text-foreground/90" />
              </a>
              <a
                href="https://www.linkedin.com/in/pragati-03patel/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors border border-foreground/10"
              >
                <Linkedin className="w-5 h-5 text-foreground/80 dark:text-foreground/90" />
              </a>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Glowing ring behind the image */}
              <div className="absolute inset-0 rounded-full bg-white/20 dark:bg-white/10 blur-3xl scale-110 z-0" />
              
              <div className="relative w-full h-full rounded-full border-[6px] border-white/90 dark:border-white/80 shadow-[0_0_50px_rgba(255,255,255,0.4)] dark:shadow-[0_0_50px_rgba(255,255,255,0.2)] overflow-hidden z-10">
                <img 
                  src="/profile.jpg" 
                  alt="Awadh Kishor" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="%232d3748"/><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="%23a0aec0"/></svg>';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="container mx-auto max-w-5xl mt-16 sm:mt-24"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:divide-x divide-foreground/10">
          <div className="flex flex-col items-center justify-center space-y-2">
            <h3 className="text-4xl sm:text-5xl font-bold">7+</h3>
            <p className="text-xs sm:text-sm text-foreground/60 font-semibold tracking-widest uppercase">
              Projects Built
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 pt-4 sm:pt-0">
            <h3 className="text-4xl sm:text-5xl font-bold">5+</h3>
            <p className="text-xs sm:text-sm text-foreground/60 font-semibold tracking-widest uppercase">
              Core Technologies
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 pt-4 sm:pt-0">
            <h3 className="text-4xl sm:text-5xl font-bold">3+</h3>
            <p className="text-xs sm:text-sm text-foreground/60 font-semibold tracking-widest uppercase">
              Domains
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
