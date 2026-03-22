"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  const educationList = [
    {
      degree: "Bachelor of Technology - Information Technology",
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      date: "Aug 2023 - Present",
      description: "CGPA: 7.02. Currently pursuing a bachelor's degree with a focus on Information Technology.",
    },
    {
      degree: "Intermediate",
      institution: "Shivam Residential Public School",
      location: "Nalanda, Bihar",
      date: "Apr 2021 - March 2023",
      description: "Completed higher secondary education. Percentage: 70.20%",
    },
    {
      degree: "Matriculation",
      institution: "St. Paul's English School",
      location: "Nalanda, Bihar",
      date: "Apr 2020 - March 2021",
      description: "Completed secondary education. Percentage: 82.22%",
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
            My <span className="text-blue-600 dark:text-blue-400">Education</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
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
              <div className="sm:hidden absolute left-0 top-2 w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full" />
              
              <div className="bg-background rounded-2xl p-6 sm:p-8 border border-foreground/10 hover:border-blue-500/50 transition-colors shadow-sm relative sm:ml-6 group">
                <div className="hidden sm:flex absolute -left-12 top-8 w-12 items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-background dark:border-background z-10 group-hover:scale-125 transition-transform" />
                  <div className="absolute top-0 bottom-0 left-1/2 -ml-px w-0.5 bg-foreground/10 -z-10 h-full" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
                      <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
