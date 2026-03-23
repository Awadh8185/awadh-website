"use client";

import { motion } from "framer-motion";
import { Trophy, Code, BookOpen } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      icon: Code,
      title: "LeetCode",
      description: "Solved 50+ coding problems on LeetCode.",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
    {
      icon: Code,
      title: "HackerRank",
      description: "Solved 80+ coding problems on HackerRank.",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    }
  ];

  return (
    <section id="achievements" className="py-20 relative bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            My <span className="text-red-600 dark:text-red-500">Achievements</span>
          </h2>
          <div className="h-1 w-20 bg-red-600 dark:bg-red-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto gap-8">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group relative rounded-2xl p-[1px] overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 shadow-lg text-center"
              >
                <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite]" style={{ transformOrigin: 'center center' }}>
                   <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0_280deg,#ef4444_360deg)] opacity-70" />
                </div>
                <div className="relative w-full h-full bg-card-bg rounded-2xl p-8 z-10 flex flex-col items-center">
                  <div className={`w-16 h-16 ${item.bgColor} ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3 group-hover:rotate-6 transition-transform`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
