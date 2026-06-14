import { motion } from "framer-motion";

/**
 * Decorative animated forest scene built with SVG + Framer Motion.
 * GPU-accelerated, ~10KB, no WebGL. Pure decoration — aria-hidden.
 */
export function ForestScene() {
  const leaves = Array.from({ length: 14 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* sun glow */}
      <div className="absolute -top-32 right-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

      {/* light rays */}
      <svg className="absolute inset-0 h-full w-full opacity-40" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ray" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--lime)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--lime)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[10, 25, 45, 65, 85].map((x, i) => (
          <motion.rect
            key={i}
            x={`${x}%`}
            y="0"
            width="60"
            height="100%"
            fill="url(#ray)"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.15, 0.45, 0.15] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
            style={{ transform: "skewX(-20deg)" }}
          />
        ))}
      </svg>

      {/* swaying trees silhouette bottom */}
      <svg
        viewBox="0 0 1200 200"
        className="absolute bottom-0 left-0 w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="hill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--forest)" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <path d="M0,140 C200,80 400,180 600,120 C800,60 1000,160 1200,110 L1200,200 L0,200 Z" fill="url(#hill)" />
      </svg>

      {/* trees */}
      <div className="absolute bottom-4 left-0 right-0 flex items-end justify-around px-4">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <motion.div
            key={i}
            className="origin-bottom"
            initial={{ rotate: 0 }}
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
          >
            <svg width={40 + (i % 3) * 14} height={70 + (i % 3) * 20} viewBox="0 0 40 90">
              <rect x="18" y="55" width="4" height="35" fill="var(--forest)" />
              <polygon points="20,5 5,40 35,40" fill="var(--primary)" opacity="0.9" />
              <polygon points="20,20 8,55 32,55" fill="var(--secondary)" opacity="0.95" />
              <polygon points="20,35 10,65 30,65" fill="var(--lime)" opacity="0.9" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* floating leaves */}
      {leaves.map((_, i) => {
        const left = (i * 73) % 100;
        const delay = (i * 1.3) % 10;
        const dur = 14 + (i % 6);
        return (
          <motion.span
            key={i}
            className="absolute bottom-0 text-primary"
            style={{ left: `${left}%` }}
            initial={{ y: 0, x: 0, opacity: 0, rotate: 0 }}
            animate={{ y: "-110vh", x: [0, 40, -20, 30, 0], opacity: [0, 0.8, 0.8, 0], rotate: 360 }}
            transition={{ duration: dur, repeat: Infinity, delay, ease: "linear" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 3c-7 0-12 5-12 12 0 3 1 5 1 5s2 1 5 1c7 0 12-5 12-12 0-3-1-5-1-5s-2-1-5-1z" opacity="0.7" />
            </svg>
          </motion.span>
        );
      })}
    </div>
  );
}
