import { motion } from "framer-motion";

interface FloatingShapesProps {
  variant?: "light" | "dark";
  density?: "low" | "medium" | "high";
}

const FloatingShapes = ({ variant = "light", density = "medium" }: FloatingShapesProps) => {
  const isLight = variant === "light";
  const baseColor = isLight ? "hsl(var(--primary))" : "hsl(var(--primary-foreground))";
  const accentColor = isLight ? "hsl(var(--secondary))" : "hsl(45 100% 70%)";

  const shapes = density === "high" ? 8 : density === "medium" ? 5 : 3;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large circle top-right */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.03]"
        style={{ background: `radial-gradient(circle, ${baseColor}, transparent 70%)` }}
      />

      {/* Small circle left */}
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/4 -left-16 w-64 h-64 rounded-full opacity-[0.04]"
        style={{ background: `radial-gradient(circle, ${accentColor}, transparent 70%)` }}
      />

      {/* Diamond shape center-right */}
      <motion.div
        animate={{ rotate: [45, 50, 45], scale: [1, 1.05, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-1/3 right-[15%] w-24 h-24 rounded-lg opacity-[0.03]"
        style={{ background: baseColor, transform: "rotate(45deg)" }}
      />

      {/* Dots pattern */}
      {shapes >= 5 && (
        <motion.div
          animate={{ opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-[10%]"
        >
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: baseColor }}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Horizontal line accent */}
      <motion.div
        animate={{ scaleX: [0.5, 1, 0.5], x: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[20%] left-[5%] w-48 h-px opacity-[0.06]"
        style={{ background: `linear-gradient(90deg, transparent, ${baseColor}, transparent)` }}
      />

      {/* Circle bottom-left */}
      {shapes >= 5 && (
        <motion.div
          animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 7 }}
          className="absolute -bottom-20 left-[20%] w-72 h-72 rounded-full opacity-[0.03]"
          style={{ background: `radial-gradient(circle, ${accentColor}, transparent 70%)` }}
        />
      )}

      {/* Cross/plus shape */}
      {shapes >= 8 && (
        <motion.div
          animate={{ rotate: [0, 90, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] left-[60%] opacity-[0.04]"
        >
          <div className="relative w-8 h-8">
            <div className="absolute top-1/2 left-0 w-full h-px" style={{ background: baseColor }} />
            <div className="absolute top-0 left-1/2 w-px h-full" style={{ background: baseColor }} />
          </div>
        </motion.div>
      )}

      {/* Curved line */}
      {shapes >= 8 && (
        <motion.svg
          animate={{ opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-[15%] left-[40%] w-48 h-48"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M20 100 Q100 20 180 100"
            stroke={baseColor}
            strokeWidth="1"
            opacity="0.5"
          />
        </motion.svg>
      )}
    </div>
  );
};

export default FloatingShapes;
