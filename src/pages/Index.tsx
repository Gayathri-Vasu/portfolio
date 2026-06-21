import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import WorkExperience from "@/components/sections/WorkExperience";
import CodingProfiles from "@/components/sections/CodingProfiles";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";


const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Particle Background */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <motion.main 
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WorkExperience />
        <CodingProfiles />
        <Contact />
        <Footer />
      </motion.main>
    </div>
  );
};

export default Index;
