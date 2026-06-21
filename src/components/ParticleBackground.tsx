import { loadSlim } from "@tsparticles/slim";
import Particles, { ParticlesProvider, useParticlesProvider } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";

const ParticlesInner = (props: any) => {
  const { loaded } = useParticlesProvider();
  if (!loaded) return null;
  return <Particles {...props} />;
};

const ParticleBackground = () => {
  const init = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <ParticlesProvider init={init}>
      <ParticlesInner
        id="tsparticles"
        className="absolute inset-0 z-0"
        options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#9F7AEA", "#06B6D4", "#EC4899"],
          },
          links: {
            color: "#9F7AEA",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      />
    </ParticlesProvider>
  );
};

export default ParticleBackground;
