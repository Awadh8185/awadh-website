"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

export function Certifications() {
  const certs = [
    {
      title: "Full Stack Development - Training",
      issuer: "Lovely Professional University",
      date: "",
      description: "Completed training in React.js, Node.js, Express.js, MongoDB, REST API Development, and Authentication Systems.",
      link: "#"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "",
      description: "Successfully completed Cloud Computing certification.",
      link: "#"
    },
    {
      title: "Full Stack Development in React and Node",
      issuer: "Lovely Professional University",
      date: "",
      description: "Developed responsive full-stack applications and designed dynamic UI components.",
      link: "#"
    },
    {
      title: "Introduction to Image Processing",
      issuer: "Coursera",
      date: "",
      description: "Fundamentals of image processing and analysis techniques.",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
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
              onClick={() => window.location.href = cert.link}
              className="group relative rounded-2xl p-[1px] overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 shadow-lg cursor-pointer"
            >
              <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite]" style={{ transformOrigin: 'center center' }}>
                 <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0_280deg,#ef4444_360deg)] opacity-70" />
              </div>
              <div className="relative w-full h-full bg-zinc-50 dark:bg-zinc-950 rounded-2xl p-6 md:p-8 z-10 flex gap-6 items-start">
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
    </section>
  );
}
