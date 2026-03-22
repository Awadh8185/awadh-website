import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { ParticleBackground } from "@/components/ParticleBackground";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <div className="flex flex-col gap-20 sm:gap-32 relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </div>
    </>
  );
}
