import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TechnicalParticipation = () => {
  const navigate = useNavigate();

  const certificates = [
    {
      title:
        "Trichy National Conference – Integrated Approaches on Drug Discovery & Development",
      description:
        "At the National Conference held at Trichy, our team presented a paper on the ‘MediKart project', focusing on the integration of IoT and AI for efficient drug management. The event deepened our understanding of how engineering can enhance healthcare innovation and real-world applications.",
      image: "/trichi.jpg",
    },
    {
      title: "TANCAM Women Hackathon 2024 – Automated Dustbin Design Development",
      description:
        "Participated in the 'TANCAM Women Hackathon', where we developed an 'Automated Smart Dustbin' that intelligently separates 'metal waste from organic waste' using sensors and microcontrollers. This innovation promoted sustainable waste management through smart automation.",
      image: "/sona2024.jpg",
    },
    {
      title: "TANCAM Women Hackathon 2025 – MediKart Prototype Development",
      description:
        "In another round of the TANCAM Women Hackathon, we transformed our ‘MediKart’ concept into a working Model. The project demonstrated our commitment to applying engineering principles to healthcare challenges while enhancing collaboration and real-time design thinking.",
      image: "/sona2025.jpg",
    },
    {
      title: "Galaxy Phase 2 – Government College of Engineering, Erode",
      description:
        "Presented a Paper on 'Object Detection powered by AI and machine learning' at the 'Galaxy Phase 2 technical event'. Showcased real-time image recognition and detection using deep learning models, receiving valuable insights from domain experts.",
      image: "/erode.jpg",
    },
  ];

  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-purple-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Back Button */}
        <Button
          variant="outline"
          onClick={() => navigate("/certificates")}
          className="mb-4"
        >
          ← Back
        </Button>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-6 gradient-text-primary"
        >
          Technical Event Participation
        </motion.h2>

        {/* --- Main Intro --- */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto mb-6"
        >
          Throughout my <strong>four years of engineering</strong>, I have immersed myself in various
          <strong> technical symposiums, hackathons, and project presentations</strong>. 
          These experiences have strengthened my problem-solving mindset, technical creativity, and collaborative approach to innovation.
        </motion.p>

        {/* --- About Certificates --- */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-12"
        >
          The certificates below represent my active participation and achievements in 
          <strong> engineering innovation, research, and prototype development</strong>. 
          Each event provided a platform to transform ideas into impactful technical solutions.
        </motion.p>

        {/* Certificates Section */}
        <div className="flex flex-col items-center gap-14">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center max-w-4xl w-full"
            >
              <h3 className="text-2xl font-semibold mb-3">{cert.title}</h3>
              <p className="text-muted-foreground mb-5 px-4">{cert.description}</p>
              <img
                src={cert.image}
                alt={cert.title}
                className="rounded-xl shadow-2xl w-full max-w-4xl mx-auto border border-border"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalParticipation;
