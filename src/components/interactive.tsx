import { motion, useMotionValue, useSpring, useTransform, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";

/** Magnetic button — gently follows the cursor on hover. */
export const Magnetic = ({
  children,
  className,
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
};

/** Tilt card — 3D rotate following the cursor. */
export const Tilt = ({
  children,
  className,
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 180, damping: 20 });
  const sry = useSpring(ry, { stiffness: 180, damping: 20 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * max);
    rx.set(-py * max);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 800 }}
      className={`will-change-transform ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
};

/** Counts up from 0 to a numeric target (extracts digits, preserves prefix/suffix). */
export const CountUp = ({
  value,
  duration = 2,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(value.replace(/\d/g, "0"));

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/(\D*)(\d+(?:\.\d+)?)(.*)/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const isFloat = numStr.includes(".");
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (n) => {
        const formatted = isFloat ? n.toFixed(1) : Math.round(n).toString();
        setDisplay(`${prefix}${formatted}${suffix}`);
      },
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

/** Reveals each word with a stagger as it enters the viewport. */
export const SplitText = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { y: "100%", opacity: 0 },
            show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
          }}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {w}
        </motion.span>
      ))}
    </motion.span>
  );
};

/** Spotlight that follows the cursor over a section. */
export const Spotlight = ({ className }: { className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const bg = useTransform(
    [x, y],
    ([lx, ly]) =>
      `radial-gradient(400px circle at ${lx}px ${ly}px, hsl(var(--gold) / 0.18), transparent 60%)`
  );

  useEffect(() => {
    const el = ref.current?.parentElement;
    if (!el) return;
    const onMove = (e: globalThis.MouseEvent) => {
      const r = el.getBoundingClientRect();
      x.set(e.clientX - r.left);
      y.set(e.clientY - r.top);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return <motion.div ref={ref} style={{ background: bg }} className={`pointer-events-none absolute inset-0 ${className ?? ""}`} />;
};

/** Scroll progress bar (top of page). */
export const ScrollProgress = () => {
  const [scaleX, setScaleX] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setScaleX(total > 0 ? h.scrollTop / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[9998] h-[2px] bg-transparent">
      <div
        className="h-full origin-left bg-gradient-to-r from-gold-soft via-gold to-gold-deep"
        style={{ transform: `scaleX(${scaleX})` }}
      />
    </div>
  );
};
