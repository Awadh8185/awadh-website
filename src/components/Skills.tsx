"use client";

import { motion } from "framer-motion";
import { Code2, Server, BrainCircuit, Users, CheckCircle, Database } from "lucide-react";
import { 
  SiCplusplus, SiJavascript, SiC, SiPython, SiHtml5, 
  SiReact, SiNodedotjs, SiMongodb, SiPandas, SiNumpy, 
  SiMysql, SiFigma
} from "react-icons/si";
import { FaJava, FaDatabase, FaCode, FaRobot, FaCss3Alt, FaFileExcel, FaFilePowerpoint } from "react-icons/fa";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-5 h-5 text-red-600 dark:text-red-500" />,
      skills: [
        { name: "C++", icon: <SiCplusplus className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "Java", icon: <FaJava className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "Python", icon: <SiPython className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "C", icon: <SiC className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "SQL", icon: <Database className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "HTML", icon: <SiHtml5 className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="w-4 h-4 text-red-600 dark:text-red-500" /> },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Server className="w-5 h-5 text-red-600 dark:text-red-500" />,
      skills: [
        { name: "Pandas", icon: <SiPandas className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "NumPy", icon: <SiNumpy className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "React", icon: <SiReact className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "Node.js", icon: <SiNodedotjs className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "Express", icon: <Server className="w-4 h-4 text-red-600 dark:text-red-500" /> },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <Database className="w-5 h-5 text-red-600 dark:text-red-500" />,
      skills: [
        { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "Automation Anywhere", icon: <BrainCircuit className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "Figma", icon: <SiFigma className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "Excel", icon: <FaFileExcel className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "PowerPoint", icon: <FaFilePowerpoint className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "Git", icon: <Code2 className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "REST APIs", icon: <Server className="w-4 h-4 text-red-600 dark:text-red-500" /> },
      ],
    },
    {
      title: "Technical Skills",
      icon: <BrainCircuit className="w-5 h-5 text-red-600 dark:text-red-500" />,
      skills: [
        { name: "Data Structures and Algorithms (DSA)", icon: <Code2 className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "Machine Learning", icon: <BrainCircuit className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "Natural Language Processing (NLP)", icon: <BrainCircuit className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "Full Stack Development", icon: <Server className="w-4 h-4 text-red-600 dark:text-red-500" /> },
      ],
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-5 h-5 text-red-600 dark:text-red-500" />,
      skills: [
        { name: "Problem Solving", icon: <CheckCircle className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "Adaptability", icon: <CheckCircle className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "Critical Thinking", icon: <CheckCircle className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "Teamwork", icon: <Users className="w-4 h-4 text-red-600 dark:text-red-500" /> },
        { name: "Communication", icon: <CheckCircle className="w-4 h-4 text-red-600 dark:text-red-500" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            My <span className="text-red-600 dark:text-red-500">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-red-600 dark:bg-red-500 mx-auto rounded-full" />
        </motion.div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative rounded-2xl p-[1px] overflow-hidden transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              {/* Spinning light ball base */}
              <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite]" style={{ transformOrigin: 'center center' }}>
                 <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0_280deg,#ef4444_360deg)] opacity-50 dark:opacity-100" />
              </div>

              {/* Inner card surface masking the middle */}
              <div className="relative w-full h-full bg-card-bg rounded-2xl p-6 sm:p-8 z-10 flex flex-col">
                {/* Subtle background glow effect on hover */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-red-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center shadow-inner">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground tracking-wide">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex text-sm items-center gap-2 px-3 py-2 bg-foreground/5 border border-foreground/10 text-foreground/80 rounded-lg hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-600 transition-all cursor-default shadow-sm group/skill"
                    >
                      <div className="group-hover/skill:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
