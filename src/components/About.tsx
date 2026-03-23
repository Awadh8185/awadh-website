"use client";

import { motion } from "framer-motion";
import { BookOpen, Code2, Cpu, Lightbulb } from "lucide-react";

export function About() {
  const interests = [
    {
      title: "Machine Learning",
      icon: Cpu,
      desc: "Building predictive models and learning from data patterns.",
    },
    {
      title: "Software Development",
      icon: Code2,
      desc: "Creating robust, scalable, and efficient applications.",
    },
    {
      title: "Problem Solving",
      icon: Lightbulb,
      desc: "Tackling complex algorithmic challenges creatively.",
    },
    {
      title: "Research & Innovation",
      icon: BookOpen,
      desc: "Exploring modern technologies and novel solutions.",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            About <span className="text-red-600 dark:text-red-500">Me</span>
          </h2>
          <div className="h-1 w-20 bg-red-600 dark:bg-red-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-lg text-foreground/80 leading-relaxed"
          >
            <p>
              I am a passionate Information Technology student with strong skills in full stack development, data structures, and machine learning. I enjoy building user-friendly web applications and solving real-world problems using modern technologies.
            </p>
            <p>
              I am continuously learning new technologies and improving my problem-solving skills through coding challenges and project development.
            </p>
            <p>
              My goal is to become a skilled software developer and contribute to impactful technology solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl p-[1px] overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 shadow-sm"
                >
                  <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite]" style={{ transformOrigin: 'center center' }}>
                     <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0_280deg,#ef4444_360deg)] opacity-70" />
                  </div>
                  <div className="relative w-full h-full bg-card-bg rounded-2xl p-6 z-10 flex flex-col">
                    <Icon className="h-8 w-8 text-red-600 dark:text-red-500 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{interest.title}</h3>
                    <p className="text-sm text-foreground/60">{interest.desc}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
