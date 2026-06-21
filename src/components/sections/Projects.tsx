import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FiExternalLink, FiGithub, FiPlay, FiGrid } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  galleryImages?: string[];
}

const getYouTubeEmbedUrl = (url: string) => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^&?/]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0` : url;
};

const isYouTubeUrl = (url: string) => /youtube\.com|youtu\.be/.test(url);

const galleryUrl = (folder: string, filename: string) =>
  `/${folder}/${encodeURIComponent(filename)}`;

const farmGallery = [
  "Screenshot 2026-06-20 214216.png",
  "Screenshot 2026-06-20 214237.png",
  "Screenshot 2026-06-20 214343.png",
  "Screenshot 2026-06-20 214820.png",
  "Screenshot 2026-06-20 214836.png",
  "Screenshot 2026-06-20 215131.png",
  "Screenshot 2026-06-20 215238.png",
  "Screenshot 2026-06-20 215300.png",
  "Screenshot 2026-06-20 215330.png",
  "Screenshot 2026-06-20 215355.png",
  "Screenshot 2026-06-20 215433.png",
  "Screenshot 2026-06-20 215501.png",
  "Screenshot 2026-06-20 215548.png",
  "Screenshot 2026-06-20 215623.png",
  "Screenshot 2026-06-20 215639.png",
].map((name) => galleryUrl("farm", name));

const medikartGallery = [
  "Screenshot 2026-06-20 213451.png",
  "Screenshot 2026-06-20 213509.png",
  "Screenshot 2026-06-20 213548.png",
  "Screenshot 2026-06-20 213738.png",
  "Screenshot 2026-06-20 213757.png",
  "Screenshot 2026-06-20 214041.png",
].map((name) => galleryUrl("medikart", name));

const objectGallery = [
  "Screenshot 2026-06-20 213218.png",
  "Screenshot 2026-06-20 213245.png",
  "Screenshot 2026-06-20 213305.png",
  "Screenshot 2026-06-20 213340.png",
].map((name) => galleryUrl("obj", name));

const projects: Project[] = [
  {
    title: "Assured Contract Farming System for Stable Market Access",
    description:
      "A full-stack web application that directly connects farmers and buyers, enabling transparent agricultural trade without middlemen. It features role-based dashboards, a common marketplace with live product listings and market prices, and real-time messaging for negotiation. Farmers can list crops, buyers can post requirements, and both can send requests and finalize agreements through a structured workflow to ensure trust and efficiency.\n\nDemo Login: farmer@gmail.com / buyer@gmail.com / admin@gmail.com (Password: 123456) to explore the system.",
    image: "farm.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Full Stack"],
    liveUrl: "https://contract-farming-website-1afterlivebvdf.onrender.com",
    githubUrl: "https://github.com/Gayathri-Vasu/Contract_Farming_Website",
    videoUrl: "farmv.mp4",
    galleryImages: farmGallery,
  },
  {
    title: "Medikart",
    description: "A responsive e-commerce web application that simulates an online medical store, allowing users to browse and explore healthcare products and medicines through a clean and intuitive interface. The platform focuses on smooth user experience, modern UI design, and mobile responsiveness, providing a structured product browsing system with engaging animations and seamless navigation.",
    image: "MediKart_img.png",
    tags: ["React", "E-commerce", "Framer Motion"],
    liveUrl: "https://medikart-2r6714u0m-gayathris-projects-be5d0b10.vercel.app/",
    githubUrl: "https://github.com/Gayathri-Vasu/Medikart",
    videoUrl: "medikartv.mp4",
    galleryImages: medikartGallery,
  },
  {
    title: "Object-Detection",
    description: "A real-time object detection application built using Streamlit and OpenCV with a pre-trained SSD MobileNet model. It detects and labels objects from images, videos, or live webcam input using bounding boxes. This was my first-ever college project, developed to explore computer vision and AI concepts through hands-on implementation. It reflects my early-stage experimentation with real-time detection systems and understanding of model behavior and practical limitations of AI-based applications.",
    image: "objdec.png",
    tags: ["Streamlit", "OpenCV", "Python", "Deep Learning", "Computer Vision"],
    liveUrl: "https://objectdetection-plzcp2mk8w9jmpbmttwyfw.streamlit.app/",
    githubUrl: "https://github.com/Gayathri-Vasu/Object_Detection",
    videoUrl: "objectv.mp4",
    galleryImages: objectGallery,
  },
];

const ProjectCard = ({ project, index, initialSpeed = 1 }: { project: Project; index: number; initialSpeed?: number }) => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const forceMuteRef = useRef<(() => void) | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(initialSpeed);
  const [showSpeedTip, setShowSpeedTip] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const galleryImages = project.galleryImages ?? [];

  useEffect(() => {
    if (videoOpen && videoRef.current) {
      const el = videoRef.current;
      el.muted = true;
      el.volume = 0;
      el.playbackRate = playbackSpeed;

      const forceMute = () => {
        el.muted = true;
        el.volume = 0;
      };

      el.addEventListener('volumechange', forceMute);
      forceMuteRef.current = forceMute;

      return () => {
        el.removeEventListener('volumechange', forceMute);
        forceMuteRef.current = null;
      };
    }
  }, [videoOpen, playbackSpeed]);

  const handleVideoOpenChange = (open: boolean) => {
    setVideoOpen(open);
    if (open) {
      setShowSpeedTip(true);
      setTimeout(() => setShowSpeedTip(false), 5000);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.playbackRate = playbackSpeed;
          console.log("Setting video playback rate to:", playbackSpeed, "for:", project.title);
        }
      }, 100);
    } else {
      setShowSpeedTip(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="group flex flex-col md:flex-row md:items-stretch rounded-2xl overflow-hidden border border-border bg-card/50 hover:border-primary/40 transition-colors"
    >
      <div className="flex flex-col w-full md:w-[44%] lg:w-[42%] shrink-0">
        <div className="relative h-[260px] sm:h-[300px] md:h-[360px] lg:h-[400px] bg-muted/15 overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-contain p-1.5"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Image coming soon</span>
            </div>
          )}
        </div>

        <Button
          variant="ghost"
          className="w-full rounded-none border-t border-border/50 bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10 hover:from-primary/20 hover:via-accent/10 hover:to-secondary/20 text-foreground hover:text-primary transition-all py-5 h-auto font-medium"
          onClick={() => setGalleryOpen(true)}
        >
          <FiGrid className="mr-2 h-4 w-4 text-accent" />
          Visual Gallery
          {galleryImages.length > 0 && (
            <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-accent/20 text-accent">
              {galleryImages.length}
            </span>
          )}
        </Button>

        <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
          <DialogContent className="max-w-7xl w-[98vw] h-[95vh] max-h-[95vh] p-0 gap-0 flex flex-col overflow-hidden border-border bg-card">
            <DialogHeader className="px-6 py-4 border-b border-border/50 shrink-0 text-left">
              <DialogTitle>{project.title} — Visual Gallery</DialogTitle>
              <p className="text-sm text-muted-foreground pt-1">
                {galleryImages.length} project screenshot{galleryImages.length !== 1 ? "s" : ""}
              </p>
            </DialogHeader>

            <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {galleryImages.map((img, i) => (
                  <div
                    key={`${img}-${i}`}
                    className="rounded-xl overflow-hidden border border-border/50 bg-muted/10 flex items-center justify-center p-2 sm:p-3"
                  >
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col justify-between p-5 md:p-6 flex-1">
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-2 gradient-text-primary">{project.title}</h3>
          <p className="text-sm md:text-base text-muted-foreground mb-3 leading-relaxed whitespace-pre-line">{project.description}</p>
          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {(project.liveUrl || project.githubUrl || project.videoUrl) && (
          <div className="flex flex-wrap gap-2 mt-4 md:mt-5">
            {project.liveUrl && (
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                <FiExternalLink className="mr-2" />
                Live Demo
              </Button>
            )}
            {project.videoUrl && (
              <>
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setVideoOpen(true)}
                >
                  <FiPlay className="mr-2" />
                  Watch in Action
                </Button>
                <Dialog open={videoOpen} onOpenChange={handleVideoOpenChange}>
                  <DialogContent className="max-w-4xl w-[95vw] p-0 gap-0 overflow-hidden border-border bg-card">
                    <DialogHeader className="p-4 pb-2 flex flex-row items-center justify-between relative">
                      <DialogTitle>{project.title}</DialogTitle>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">Speed:</span>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4].map((speed) => (
                            <Button
                              key={speed}
                              variant={playbackSpeed === speed ? "default" : "outline"}
                              size="sm"
                              className={`h-8 px-3 text-xs ${playbackSpeed === speed ? "bg-primary" : ""}`}
                              onClick={() => {
                                setPlaybackSpeed(speed);
                                if (videoRef.current) {
                                  videoRef.current.playbackRate = speed;
                                }
                              }}
                            >
                              {speed}x
                            </Button>
                          ))}
                        </div>
                      </div>
                      {showSpeedTip && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] bg-gradient-to-r from-primary to-accent text-primary-foreground px-5 py-3 rounded-xl shadow-2xl text-sm font-bold z-[100] whitespace-nowrap"
                        >
                          You can adjust video speed..! ⚡
                        </motion.div>
                      )}
                    </DialogHeader>
                    <div className="aspect-video w-full bg-black">
                      {isYouTubeUrl(project.videoUrl) ? (
                        <iframe
                          src={getYouTubeEmbedUrl(project.videoUrl)}
                          title={`${project.title} demo video`}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <video
                          ref={videoRef}
                          src={project.videoUrl}
                          controls
                          controlsList="nodownload"
                          autoPlay
                          muted
                          className="w-full h-full"
                          onPlay={() => {
                            if (videoRef.current) {
                              videoRef.current.playbackRate = playbackSpeed;
                              videoRef.current.muted = true;
                              videoRef.current.volume = 0;
                              console.log("Video play event, setting speed to:", playbackSpeed);
                            }
                            setShowSpeedTip(true);
                            setTimeout(() => setShowSpeedTip(false), 5000);
                          }}
                        />
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                <FiGithub className="mr-2" />
                Code
              </Button>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text-accent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I have built and contributed to
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} initialSpeed={index === 0 ? 3 : 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
