"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "MusicHUB – Online Music Streaming Platform",
      description:
        "Developed an interactive music streaming platform where users can explore songs, browse playlists, and enjoy seamless audio playback. Features: Song browsing, Playlist creation, Artist-based search, Responsive user interface, Smooth audio streaming.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Awadh8185",
      demo: "#",
      date: ""
    },
    {
      title: "Resume Builder Website",
      description:
        "Built an interactive resume builder website that allows users to create, edit, and download professional resumes easily. Features: Customizable templates, Form-based data entry, Real-time preview, PDF download, Responsive design.",
      tags: ["HTML", "CSS", "JavaScript", "MERN Stack"],
      github: "https://github.com/Awadh8185",
      demo: "#",
      date: ""
    },
    {
      title: "e-Governance Complaint Cluster Analyzer",
      description:
        "Developed a machine learning system that automatically groups public complaints into meaningful categories using clustering algorithms. Features: Text preprocessing, Feature extraction using NLP, K-Means clustering, Data visualization.",
      tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "TF-IDF", "Matplotlib"],
      github: "https://github.com/Awadh8185",
      demo: "#",
      date: ""
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Featured <span className="text-red-600 dark:text-red-500">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-red-600 dark:bg-red-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative rounded-2xl p-[1px] overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 shadow-lg flex flex-col h-full cursor-pointer"
              onClick={() => window.open(project.github, "_blank")}
            >
              <div className="absolute inset-[-150%] animate-[spin_4s_linear_infinite]" style={{ transformOrigin: 'center center' }}>
                 <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0_280deg,#ef4444_360deg)] opacity-70" />
              </div>
              <div className="relative w-full h-full bg-zinc-50 dark:bg-zinc-950 rounded-2xl p-6 flex flex-col h-full z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-foreground dark:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-foreground/60 hover:text-red-600 dark:hover:text-red-500 transition-colors relative z-10"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      className="text-foreground/60 hover:text-red-600 dark:hover:text-red-500 transition-colors relative z-10"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="text-xs font-semibold text-foreground dark:text-white mb-2">
                  {project.date}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-foreground/70 mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-foreground/5 text-foreground/80"
                    >
                      {tag}
                    </span>
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
