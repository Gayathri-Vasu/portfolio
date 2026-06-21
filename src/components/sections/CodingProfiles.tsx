import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiLeetcode,
  SiCodeforces,
  SiHackerrank,
  SiCodechef
} from "react-icons/si";

interface Profile {
  name: string;
  icon: any;
  url: string;
  color: string;
  username?: string;
}

const profiles: Profile[] = [
  {
    name: "LeetCode",
    icon: SiLeetcode,
    url: "https://leetcode.com/u/Gayathri_Vasudevan/",
    color: "#FFA116",
    username: "Gayathri_Vasudevan"
  },
  {
    name: "CodeChef",
    icon: SiCodechef,
    url: "https://www.codechef.com/users/gayathri185",
    color: "#1F8ACB",
    username: "gayathri_vasu"
  },
  {
    name: "HackerRank",
    icon: SiHackerrank,
    url: "https://www.hackerrank.com/profile/gayathri_ec22",
    color: "#00EA64",
    username: "gayathri_ec22"
  }
];

const CodingProfiles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="coding-profiles" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Coding <span className="gradient-text-primary">Profiles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with me on various competitive programming platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                scale: 1.1,
                rotateY: 15,
                rotateX: 5
              }}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              <div
                className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 aspect-square flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-primary/50"
                style={{
                  boxShadow: `0 0 0 0 ${profile.color}40`,
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px 0 ${profile.color}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 0 0 ${profile.color}40`;
                }}
              >
                <profile.icon
                  className="w-16 h-16 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                  style={{ color: profile.color }}
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold">{profile.name}</h3>
                  {profile.username && (
                    <p className="text-sm text-muted-foreground">@{profile.username}</p>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;