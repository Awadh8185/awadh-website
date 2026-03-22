"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

export function Certifications() {
  const certs = [
    {
      title: "Full Stack Development (React & Node.js)",
      issuer: "Training Program",
      date: "Recent",
      description: "Developed responsive full-stack applications. Implemented RESTful APIs and designed dynamic UI components. Optimized application workflow and data handling.",
      link: "/Full Stack Development (React & Node.js).jpg"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "Certified",
      description: "Successfully completed Cloud Computing principles and applications certification.",
      link: "/Cloud Computing.jpg"
    },
    {
      title: "Data Science",
      issuer: "Code With Harry",
      date: "Certified",
      description: "Completed comprehensive training in data science and analytics principles.",
      link: "/Data Science.jpg"
    },
    {
      title: "Introduction to DevOps",
      issuer: "IBM | Coursera",
      date: "Certified",
      description: "Fundamental concepts of DevOps, continuous integration, and continuous delivery.",
      link: "/Introduction to DevOps.jpg"
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
            My <span className="text-blue-600 dark:text-blue-400">Certifications</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
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
              className="bg-background rounded-2xl p-6 md:p-8 border border-foreground/10 flex gap-6 items-start hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 shadow-sm cursor-pointer"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mt-1">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
