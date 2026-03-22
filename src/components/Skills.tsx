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
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
      skills: [
        { name: "Java", icon: <FaJava className="w-4 h-4 text-red-500" /> },
        { name: "Python", icon: <SiPython className="w-4 h-4 text-yellow-500" /> },
        { name: "C++", icon: <SiCplusplus className="w-4 h-4 text-blue-500" /> },
        { name: "C", icon: <SiC className="w-4 h-4 text-blue-600" /> },
      ],
    },
    {
      title: "Frameworks",
      icon: <Server className="w-5 h-5 text-purple-400" />,
      skills: [
        { name: "Scikit-learn", icon: <BrainCircuit className="w-4 h-4 text-green-500" /> },
        { name: "Streamlit", icon: <BrainCircuit className="w-4 h-4 text-red-500" /> },
        { name: "React", icon: <SiReact className="w-4 h-4 text-cyan-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="w-4 h-4 text-green-500" /> },
        { name: "Tailwind", icon: <FaCss3Alt className="w-4 h-4 text-cyan-400" /> },
        { name: "HTML/CSS", icon: <SiHtml5 className="w-4 h-4 text-orange-500" /> },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Database className="w-5 h-5 text-orange-400" />,
      skills: [
        { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-blue-400" /> },
        { name: "Excel", icon: <FaFileExcel className="w-4 h-4 text-green-600" /> },
        { name: "Power BI", icon: <Database className="w-4 h-4 text-yellow-500" /> },
        { name: "Figma", icon: <SiFigma className="w-4 h-4 text-pink-500" /> },
        { name: "Canva", icon: <BrainCircuit className="w-4 h-4 text-blue-400" /> },
      ],
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-5 h-5 text-pink-400" />,
      skills: [
        { name: "Problem-Solving", icon: <CheckCircle className="w-4 h-4 text-green-400" /> },
        { name: "Adaptability", icon: <CheckCircle className="w-4 h-4 text-blue-400" /> },
        { name: "Leadership", icon: <CheckCircle className="w-4 h-4 text-purple-400" /> },
        { name: "Self-Motivation", icon: <CheckCircle className="w-4 h-4 text-orange-400" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full" />
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
              className="group relative bg-[#0f172a]/80 dark:bg-[#0f172a] border border-blue-500/10 dark:border-white/5 rounded-2xl p-6 sm:p-8 overflow-hidden hover:border-blue-500/30 hover:shadow-2xl transition-all duration-300 shadow-lg"
            >
              {/* Subtle background glow effect on hover */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-background/50 border border-white/5 flex items-center justify-center shadow-inner">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground dark:text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex text-sm items-center gap-2 px-3 py-2 bg-background/40 dark:bg-black/20 border border-black/5 dark:border-white/5 text-foreground/80 dark:text-blue-100 rounded-lg hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-default shadow-sm group/skill"
                  >
                    <div className="group-hover/skill:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
