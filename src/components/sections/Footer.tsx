import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-border">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-16 items-start justify-between text-center md:text-left mb-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-2xl font-bold gradient-text-primary mb-4">
              Creative Developer
            </h3>
            <p className="text-muted-foreground max-w-xs text-center md:text-right">
              Crafting immersive digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links - perfectly centered */}
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
            <p className="text-muted-foreground mb-2 max-w-xs text-center md:text-left">
              Ready to start your next project?
            </p>
            <p className="text-muted-foreground max-w-xs text-center md:text-left">
              Reach out and let's create something amazing together.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Creative Developer. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-primary/20 border border-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
          >
            <FiArrowUp className="w-5 h-5 group-hover:animate-bounce" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
