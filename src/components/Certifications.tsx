"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, CheckCircle, X } from "lucide-react";

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const certs = [
    {
      title: "Essentials Automation Professional",
      issuer: "Automation Anywhere",
      date: "Dec 2025 - Dec 2027",
      description: "Developed foundational skills in Robotic Process Automation (RPA), including creating bots, automating repetitive tasks, and managing workflows using the Automation Anywhere platform.",
      link: "/automation%20anywhrre.jpg"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "",
      description: "Successfully completed Cloud Computing certification.",
      link: "/Cloud%20Computing.jpg"
    },
    {
      title: "Full Stack Development in React and Node",
      issuer: "Lovely Professional University",
      date: "",
      description: "Developed responsive full-stack applications and designed dynamic UI components.",
      link: "/Full%20Stack%20Development%20in%20React%20and%20Node.jpg"
    },
    {
      title: "Introduction to Image Processing",
      issuer: "Coursera",
      date: "",
      description: "Fundamentals of image processing and analysis techniques.",
      link: "/Introduction%20to%20Image%20Processing.jpg"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            My <span className="text-red-600 dark:text-red-500">Certifications</span>
          </h2>
          <div className="h-1 w-20 bg-red-600 dark:bg-red-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={(e) => {
                e.preventDefault();
                if (cert.link !== "#") {
                  setSelectedCert(cert.link);
                }
              }}
              className="group relative rounded-2xl p-[1px] overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 shadow-lg cursor-pointer"
            >
              <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite]" style={{ transformOrigin: 'center center' }}>
                 <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0_280deg,#ef4444_360deg)] opacity-70" />
              </div>
              <div className="relative w-full h-full bg-card-bg rounded-2xl p-6 md:p-8 z-10 flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center text-red-600 dark:text-red-500 mt-1">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                  <p className="text-red-600 dark:text-red-500 font-medium text-sm mb-3">
                    {cert.issuer} &bull; {cert.date}
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-foreground/50">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Verified Credential
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] bg-zinc-950 rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Header with Go Back Button */}
              <div className="flex justify-between items-center p-4 sm:p-6 border-b border-white/10 bg-zinc-900/80">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                  <Award className="w-6 h-6 text-red-500" />
                  Certificate Viewer
                </h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="group flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-full transition-all shadow-lg hover:shadow-red-500/25"
                >
                  <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                  <span className="font-semibold hidden sm:inline">Go Back</span>
                </button>
              </div>
              
              {/* Image Container */}
              <div className="relative flex-1 overflow-auto bg-black p-4 sm:p-8 flex items-center justify-center min-h-[50vh]">
                {/* Glowing backdrop for premium feel */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="w-[300px] h-[300px] bg-red-600/20 blur-[100px] rounded-full" />
                </div>
                <img
                  src={selectedCert}
                  alt="Certificate"
                  className="relative z-10 max-w-full max-h-full object-contain rounded-lg shadow-2xl ring-1 ring-white/10"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
