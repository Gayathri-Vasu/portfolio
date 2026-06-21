import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiArrowDown } from "react-icons/fi";
import ProfilePhoto from "../ProfilePhoto";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced Purple Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background z-10 pointer-events-none" />
      
      {/* Animated Purple Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-accent text-lg font-medium mb-2">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                <span className="gradient-text-purple-glow">Gayathri</span>
                <br />
                <span className="gradient-text-primary">Vasudevan</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-muted-foreground max-w-lg"
            >
             Passionate developer focused on creating innovative and interactive digital solutions with AI integration. Experienced in web development and building platforms that enhance learning and productivity
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection("contact")}
              >
                Let's Connect
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-accent text-accent hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105 glow-accent"
                onClick={() => scrollToSection("projects")}
              >
                Explore Work
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="pt-8"
            >
              <button
                onClick={() => scrollToSection("about")}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="text-sm">Scroll to explore</span>
                <FiArrowDown className="w-4 h-4 animate-bounce group-hover:text-primary" />
              </button>
            </motion.div>
          </motion.div>

          {/* Profile Photo Section */}
          <div className="h-[500px] relative flex items-center justify-center">
            <ProfilePhoto />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
