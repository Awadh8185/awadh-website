"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  const educationList = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      date: "2023 - Present",
      description: "CGPA: 7.96",
    },
    {
      degree: "Intermediate (PCM)",
      institution: "Kendriya Vidyalaya Roorkee",
      location: "Roorkee, Uttarakhand",
      date: "2020 - 2021",
      description: "Percentage: 85%",
    },
    {
      degree: "Matriculation",
      institution: "Kendriya Vidyalaya Roorkee",
      location: "Roorkee, Uttarakhand",
      date: "2018 - 2019",
      description: "Percentage: 81%",
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            My <span className="text-red-600 dark:text-red-500">Education</span>
          </h2>
          <div className="h-1 w-20 bg-red-600 dark:bg-red-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {educationList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 sm:pl-0"
            >
              {/* Timeline dot (visible on small screens) */}
              <div className="sm:hidden absolute left-0 top-2 w-3 h-3 bg-red-600 dark:bg-red-500 rounded-full" />
              
              <div className="relative rounded-2xl p-[1px] overflow-hidden group sm:ml-6 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 shadow-lg">
                <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite]" style={{ transformOrigin: 'center center' }}>
                   <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0_280deg,#ef4444_360deg)] opacity-70" />
                </div>
                <div className="relative w-full h-full bg-card-bg rounded-2xl p-6 sm:p-8 z-10 flex flex-col">
                  <div className="hidden sm:flex absolute -left-[53px] top-8 w-12 items-center justify-center z-20">
                    <div className="w-4 h-4 rounded-full bg-red-600 dark:bg-red-500 border-4 border-background dark:border-background z-10 group-hover:scale-125 transition-transform" />
                    <div className="absolute top-0 bottom-0 left-1/2 -ml-px w-0.5 bg-foreground/10 -z-10 h-full" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
                        <GraduationCap className="h-6 w-6 text-red-600 dark:text-red-500" />
                        {item.degree}
                      </h3>
                      <p className="text-lg font-medium text-foreground/80">
                        {item.institution}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2 text-sm text-foreground/60 whitespace-nowrap">
                      <span className="flex items-center gap-1.5 bg-foreground/5 px-3 py-1 rounded-full">
                        <Calendar className="h-4 w-4" />
                        {item.date}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1">
                        <MapPin className="h-4 w-4" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
