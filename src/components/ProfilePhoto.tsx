import { motion } from "framer-motion";


const ProfilePhoto = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      className="relative w-full h-full flex items-center justify-center"
    >
      {/* Animated Background Rings */}
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-primary/30"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-accent/20"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Glow Effect Behind Photo */}
      <div className="absolute inset-0 bg-gradient-radial opacity-60 blur-3xl" />
      <motion.div
        className="absolute inset-0 glow-primary opacity-50 blur-2xl rounded-full"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Photo Container */}
      <motion.div
        className="relative z-10 w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary shadow-elegant"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient Overlay on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-purple-glow opacity-0 mix-blend-overlay"
          whileHover={{ opacity: 0.3 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Photo - Replace with your actual photo */}
        <img
          src="/gayu.png"
          alt="Profile"
          className="w-full h-full object-cover"
        />
        
        {/* Animated Border Gradient */}
        
        
      </motion.div>

      {/* Floating Particles Around Photo */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-primary/40"
          style={{
            left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 8)}%`,
            top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 8)}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </motion.div>
  );
};

export default ProfilePhoto;
