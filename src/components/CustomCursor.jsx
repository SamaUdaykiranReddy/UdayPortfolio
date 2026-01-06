import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Number of trailing circles
  const circlesCount = 3;

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.classList.contains("cursor-hover")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Trailing circles */}
      {[...Array(circlesCount)].map((_, i) => {
        const size = 8 + i * 6; // 8, 14, 20px
        const delay = i * 0.1; // staggered animation
        const scaleHover = 1 + i * 0.5; // larger when hovering
        return (
          <motion.div
            key={i}
            className="fixed top-0 left-0 border-2 border-primary rounded-full pointer-events-none z-[90] mix-blend-difference hidden md:block"
            style={{ width: size, height: size }}
            animate={{
              x: mousePosition.x - size / 2,
              y: mousePosition.y - size / 2,
              scale: isHovering ? scaleHover : 1,
              opacity: 0.6 - i * 0.15, // fade out
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              delay: delay,
            }}
          />
        );
      })}
    </>
  );
}
