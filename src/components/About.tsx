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
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
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
              Hello! I&apos;m <strong>Pragati Patel</strong>, a dedicated B.Tech Information Technology student. My journey in tech is driven by an insatiable curiosity for how things work and a desire to build solutions that make a real-world impact.
            </p>
            <p>
              I thrive at the intersection of Artificial Intelligence and Full-Stack Development. Whether it&apos;s training a machine learning model to detect anomalies or designing a seamless web interface, I approach every project with enthusiasm and a growth mindset.
            </p>
            <p>
              When I&apos;m not coding or debugging, you can find me participating in hackathons, practicing competitive programming, or keeping up with the latest advancements in AI research.
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
                  className="p-6 rounded-2xl bg-foreground/5 border border-foreground/10 hover:border-blue-500/50 transition-colors"
                >
                  <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{interest.title}</h3>
                  <p className="text-sm text-foreground/60">{interest.desc}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
