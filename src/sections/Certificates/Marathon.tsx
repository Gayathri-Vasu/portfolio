import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Marathon = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Back Button */}
        <Button
          variant="outline"
          onClick={() => navigate("/certificates")}
          className="mb-4"
        >
          ← Back
        </Button>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-6 gradient-text-primary"
        >
          Marathon Participation
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-10"
        >
          Successfully completed a <strong>5K College Marathon</strong> promoting physical fitness and mental wellness.  
          Demonstrated endurance, commitment, and teamwork in a competitive environment.
        </motion.p>

        {/* Certificate Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/Marathonn.jpg"
            alt="Marathon Certificate"
            className="rounded-xl shadow-2xl w-full max-w-4xl border border-border"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Marathon;
