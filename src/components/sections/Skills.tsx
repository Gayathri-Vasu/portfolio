import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript, 
  SiAngular,
  SiMysql,
  SiGit,
  SiOpenai,
  SiFigma,
  SiSpring
} from "react-icons/si";
import { TbBrain, TbCursorText } from "react-icons/tb";

interface Skill {
  name: string;
  icon: any;
  level: number;
  color: string;
}

const mainSkills: Skill[] = [   
  { name: "Java", icon: SiSpring, level: 60, color: "#F89820" },
  { name: "HTML", icon: SiHtml5, level: 80, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, level: 80, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, level: 60, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, level: 55, color: "#3178C6" },
  { name: "Angular", icon: SiAngular, level: 50, color: "#DD0031" },
  { name: "SQL", icon: SiMysql, level: 75, color: "#4479A1" },
  { name: "DBMS", icon: SiMysql, level: 75, color: "#00758F" },
  { name: "Git", icon: SiGit, level: 90, color: "#F05032" },
  { name: "ChatGPT", icon: SiOpenai, level: 85, color: "#74AA9C" },
  { name: "Cursor", icon: TbCursorText, level: 80, color: "#000000" },
  { name: "Claude AI", icon: TbBrain, level: 80, color: "#CC8833" },
];

const supportingSkills: Skill[] = [
  { name: "Prompt Engineering", icon: SiFigma, level: 80, color: "#8C52FF" },
  { name: "Canva", icon: SiFigma, level: 85, color: "#00C4CC" },
  { name: "Excel ", icon: SiFigma, level: 80, color: "#217346" },
];

const SkillGrid = ({ title, skills }: { title: string; skills: Skill[] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="mb-20">
      {/* Section Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-8 text-center gradient-text-accent"
      >
        {title}
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="group relative"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${skill.color}20`,
                    boxShadow: `0 0 20px ${skill.color}40`,
                  }}
                >
                  <skill.icon
                    className="w-6 h-6 transition-all duration-300 group-hover:rotate-12"
                    style={{ color: skill.color }}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">{skill.name}</h4>
                  <p className="text-sm text-muted-foreground">{skill.level}%</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{
                    delay: index * 0.1 + 0.3,
                    duration: 1,
                    ease: "easeOut",
                  }}
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                    boxShadow: `0 0 10px ${skill.color}80`,
                  }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills<span className="gradient-text-accent"></span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my expertise in modern web technologies and tools
          </p>
        </motion.div>

        {/* ✅ Main Skills Grid */}
        <SkillGrid title="Core Technical Skills" skills={mainSkills} />

        {/* ✅ Supporting Skills Grid */}
        <SkillGrid title="Supporting Skills" skills={supportingSkills} />
      </div>
    </section>
  );
};

export default Skills;