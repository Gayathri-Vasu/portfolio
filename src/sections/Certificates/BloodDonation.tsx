import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BloodDonation = () => {
  const navigate = useNavigate();

  const certificates = [
    {
      title: "Blood Donation Camp 2023",
      description:
        "Donated blood during the 2023 'NSS Blood Donation Camp' organized at Bannari Amman Institute of Technology. This marked my first contribution toward saving lives through blood donation.",
      image: "/b2.jpg",
    },
    {
      title: "Blood Donation Camp 2024",
      description:
        "Actively participated in the 2024 Blood Donation Camp, continuing my yearly commitment to donate blood and inspire others to join this noble cause.",
      image: "/b1.jpg",
    },
    {
      title: "Blood Donation Camp 2025",
      description:
        "Dedicated to donating blood every year, I contributed again in 2025, promoting awareness about the importance of regular donations and social responsibility.",
      image: "/b3.jpg",
    },
  ];

  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-red-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Back Button */}
        <Button
          variant="outline"
          onClick={() => navigate("/certificates")}
          className="mb-4"
        >
          ← Back
        </Button>

        {/* Page Header */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-6 gradient-text-primary"
        >
          Blood Donation Certificates
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-10"
        >
          I am dedicated to donating blood <strong>every year</strong> as a small contribution toward saving lives.  
          These certificates represent my continued participation and commitment to social responsibility.
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

export default BloodDonation;
