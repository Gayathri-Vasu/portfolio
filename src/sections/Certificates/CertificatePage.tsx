import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Heart, Award, Timer, Flag } from "lucide-react";

const certificateCategories = [
  {
    title: "Blood Donation",
    description: "Certificate of appreciation for donating blood and saving lives.",
    icon: Heart,
    gradient: "from-rose-500/20 to-red-500/20",
    glowColor: "group-hover:shadow-rose-500/30",
    path: "/certificates/blood-donation",
  },
  {
    title: "Marathon",
    description: "Participation certificate for completing the annual 5Km run.",
    icon: Timer,
    gradient: "from-blue-500/20 to-cyan-500/20",
    glowColor: "group-hover:shadow-blue-500/30",
    path: "/certificates/marathon",
  },
  {
    title: "Technical Events",
    description: "Recognition for active participation in a Technical Events.",
    icon: Award,
    gradient: "from-violet-500/20 to-purple-500/20",
    glowColor: "group-hover:shadow-violet-500/30",
    path: "/certificates/technical",
  },
  {
    title: "NCC",
    description: "Acknowledgement for excellence in NCC training and discipline.",
    icon: Flag,
    gradient: "from-amber-500/20 to-orange-500/20",
    glowColor: "group-hover:shadow-amber-500/30",
    path: "/certificates/ncc",
  },
];

interface CertificateCategory {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  glowColor: string;
  path: string;
}

const CertificateCard = ({ category, index }: { category: CertificateCategory; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      className={`group relative flex flex-col items-center justify-center text-center rounded-2xl border border-border bg-gradient-to-br ${category.gradient} backdrop-blur-md cursor-pointer p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ${category.glowColor}`}
      onClick={() => navigate(category.path)}
    >
      <div className="p-4 rounded-full bg-background/70 backdrop-blur-md border border-border shadow-md mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-12 h-12 text-primary group-hover:text-accent transition-colors" />
      </div>
      <h3 className="text-2xl font-bold mb-2 gradient-text-primary">{category.title}</h3>
      <p className="text-muted-foreground text-sm">{category.description}</p>
    </motion.div>
  );
};

const CertificatePage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text-accent">Certificates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my participation, leadership, community service, and achievements beyond academics.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {certificateCategories.map((category, index) => (
            <CertificateCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatePage;
