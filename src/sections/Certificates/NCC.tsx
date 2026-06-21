import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NCC = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-background to-background/90 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-green-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />

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
          NCC Achievements
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-10"
        >
          As an active <strong>National Cadet Corps (NCC)</strong> member, I’ve proudly
          served with dedication, teamwork, and discipline. My NCC journey reflects a
          strong sense of <strong>patriotism and commitment to serving the nation</strong>.
        </motion.p>

        {/* Personal Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-16"
        >
          <img
            src="/222.png"
            alt="NCC Uniform Photo"
            className="rounded-xl shadow-2xl w-full max-w-[500px] max-h-[400px] object-contain border border-border"
          />
        </motion.div>

        {/* Certificate 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-4 text-primary">
            CATC Camp Participation
          </h3>
          <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
            Attended the <strong>CATC Camp</strong> and secured the{" "}
            <strong>Runner-up position</strong> in the Volleyball match.
            Recognized as a <strong>notable and active player</strong> in the unit.
          </p>
          <div className="flex justify-center">
            <img
              src="/ncc1.jpg"
              alt="NCC CATC Camp Certificate"
              className="rounded-xl shadow-2xl w-full max-w-4xl border border-border"
            />
          </div>
        </motion.div>

        {/* Group Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-4 text-primary">
            Group Photo with Officials
          </h3>
          <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
            A memorable group photo of <strong>BIT NCC Cadets</strong> taken at the end
            of the camp with our respected officials —{" "}
            <strong>Group Commander, Major, GCI, PI Staff, and ANOs</strong> of the{" "}
            <strong>5 TN Girls Battalion</strong>. This moment reflects unity,
            discipline, and teamwork.
          </p>
          <div className="flex justify-center">
            <img
              src="/555.jpg"
              alt="NCC Group Photo with Officials"
              className="rounded-xl shadow-2xl w-full max-w-4xl border border-border"
            />
          </div>
        </motion.div>

        {/* Certificate 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-4 text-primary">
            B-Certificate Examination
          </h3>
          <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
            Successfully completed the <strong>B-Certificate Examination</strong>,
            including both theory and practical sessions conducted over{" "}
            <strong>two days</strong>, and secured <strong>Grade A</strong> for
            outstanding performance.
          </p>
          <div className="flex justify-center">
            <img
              src="/ncc2.jpg"
              alt="NCC B-Certificate"
              className="rounded-xl shadow-2xl w-full max-w-4xl border border-border"
            />
          </div>
        </motion.div>

        {/* Certificate 3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-4 text-primary">
            2nd CATC Camp Participation
          </h3>
          <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
            Actively participated in the <strong>Second CATC Camp</strong>, demonstrating
            discipline, teamwork, and consistent involvement in all training and
            community activities.
          </p>
          <div className="flex justify-center">
            <img
              src="/ncc3.jpg"
              alt="NCC Second CATC Certificate"
              className="rounded-xl shadow-2xl w-full max-w-4xl border border-border"
            />
          </div>
        </motion.div>

        {/* Certificate 4 - C Certificate */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-center mb-4 text-primary">
            C-Certificate Examination
          </h3>
          <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
            With consistent effort and dedication, I reached the final milestone of my
            NCC journey — the <strong>C-Certificate Examination</strong>. I successfully
            completed the NCC training, reflecting leadership, discipline, and
            commitment till the end.
          </p>
          <div className="flex justify-center">
            <img
              src="/nccc.jpeg"
              alt="NCC C-Certificate"
              className="rounded-xl shadow-2xl w-full max-w-4xl border border-border"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NCC;
