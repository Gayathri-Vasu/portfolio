import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiLinkedin,
  FiGithub,
  FiMapPin,
  FiPhone,
  FiClock,
} from "react-icons/fi";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/gayathri-vasudevan01",
    color: "#0A66C2",
  },
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/Gayathri-Vasu",
    color: "#333",
  },
  {
    name: "Gmail",
    icon: FiLinkedin,
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=vgayathri0108@gmail.com&su=Portfolio%20Contact&body=Hi%20Gayathri,%0D%0A",
    color: "#D14836",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text-accent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let’s collaborate and create impactful projects together 🚀
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-muted-foreground text-lg">
              I’m an <span className="font-semibold text-primary">ECE student</span> passionate about
              <span className="font-semibold text-primary"> AI tools</span> and 
              <span className="font-semibold text-primary"> full-stack web development</span>.
              Always excited to turn creative ideas into real-world solutions.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <FiPhone className="text-primary w-6 h-6" />
                <span className="text-lg">+91 84897 41485</span>
              </div>
              <div className="flex items-center gap-4">
                <FiMapPin className="text-primary w-6 h-6" />
                <span className="text-lg">Salem, Tamil Nadu, 636305</span>
              </div>
              <div className="flex items-center gap-4">
                <FiClock className="text-primary w-6 h-6" />
                <span className="text-lg">Available for Internship & Collaboration</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side — Social Links (Now inside a card box) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-8">Connect With Me</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all duration-300 group"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${social.color}20`,
                      boxShadow: `0 0 20px ${social.color}40`,
                    }}
                  >
                    <social.icon
                      className="w-6 h-6"
                      style={{ color: social.color }}
                    />
                  </div>
                  <span className="text-lg font-medium">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
