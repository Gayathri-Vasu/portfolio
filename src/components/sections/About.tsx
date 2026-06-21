import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            About <span className="gradient-text-primary">Me</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-6"
          >
            <p className="text-lg text-foreground leading-relaxed">
             I am Gayathri V, an ECE student with a strong passion for web technologies, AI, and data-driven solutions using Excel tools.
              I am known for my sincerity and dedication, always giving my best to every project I undertake.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond academics, I am an active NCC alumnus and volunteer, which has taught me the value of discipline, teamwork, and leadership. I enjoy collaborating with others to develop innovative, practical, and impactful digital solutions that solve real-world problems and create meaningful experiences for users.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="pt-4"
            >
              <Button
  size="lg"
  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground glow-secondary transition-all duration-300 hover:scale-105"
  asChild
>
  <a href="/resume.pdf" download>
    <FiDownload className="mr-2" />
    Download Resume
  </a>
</Button>

            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
