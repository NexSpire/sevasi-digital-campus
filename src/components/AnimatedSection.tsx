import { motion } from "framer-motion";
import { forwardRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(
  ({ children, className = "", delay = 0 }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }
);

AnimatedSection.displayName = "AnimatedSection";

export default AnimatedSection;
