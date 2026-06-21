import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { SiSpring, SiAngular, SiHtml5, SiCss3, SiJavascript, SiMysql } from "react-icons/si";

const WorkExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="work-experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      
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
            Work <span className="gradient-text-primary">Experience</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center"
          >
            {/* Flip Card Container */}
            <div 
              className="relative w-full max-w-3xl h-[500px]"
              style={{ perspective: "1000px" }}
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
            >
              <motion.div
                className="w-full h-full relative"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
              >
                {/* Front Side - Internship Details */}
                <div 
                  className="absolute inset-0 bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl shadow-primary/10"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="bg-gradient-to-r from-primary to-secondary w-2 h-8 rounded-full"></div>
                        <h3 className="text-2xl md:text-3xl font-bold gradient-text-primary">Java Full Stack Development Intern</h3>
                      </div>
                      <p className="text-xl text-muted-foreground mb-6 font-semibold">Gradtwin Services</p>
                      
                      <p className="text-foreground leading-relaxed text-lg mb-8">
                        Gaining <span className="text-primary font-bold">comprehensive hands-on experience</span> in Java Full Stack Development by working with industry-standard technologies including 
                        <span className="text-secondary font-semibold"> Java, Angular, SQL, HTML, CSS, and JavaScript</span>. Contributing to the development of both 
                        <span className="text-accent font-semibold"> front-end user interfaces</span> and 
                        <span className="text-accent font-semibold"> back-end functionalities</span>, including 
                        <span className="font-semibold"> database integration</span>, through engaging projects and structured mentorship.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Tech Stack</h4>
                      <div className="flex flex-wrap gap-3">
                        {[
                          { icon: SiSpring, color: "#F89820", label: "Java" },
                          { icon: SiAngular, color: "#DD0031", label: "Angular" },
                          { icon: SiMysql, color: "#4479A1", label: "SQL" },
                          { icon: SiHtml5, color: "#E34F26", label: "HTML" },
                          { icon: SiCss3, color: "#1572B6", label: "CSS" },
                          { icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" }
                        ].map((tech, i) => (
                          <div key={i} className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg">
                            <tech.icon className="w-5 h-5" style={{ color: tech.color }} />
                            <span className="text-sm font-medium">{tech.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side - Offer Letter PDF */}
                <div 
                  className="absolute inset-0 bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-xl shadow-secondary/10"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="h-full flex flex-col">
                    <div className="p-4 border-b border-border bg-muted/30 flex items-center justify-between">
                      <h4 className="text-lg font-semibold gradient-text-accent">Internship Offer Letter</h4>
                      <a 
                        href="/offer.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                      >
                        Open in New Tab
                      </a>
                    </div>
                    <div className="flex-1 p-2">
                      <iframe 
                        src="/offer.pdf#toolbar=0&navpanes=0&scrollbar=0" 
                        className="w-full h-full rounded-lg border border-border"
                        title="Internship Offer Letter"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center text-muted-foreground mt-6"
          >
            Hover over the card to view the offer letter
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
