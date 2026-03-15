import { motion } from "framer-motion";
import { ArrowRight, Code2, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";

const floatingItems = [
  { icon: "{ }", x: "10%", y: "20%", delay: 0 },
  { icon: "< />", x: "85%", y: "15%", delay: 0.5 },
  { icon: "( )", x: "75%", y: "70%", delay: 1 },
  { icon: "[ ]", x: "15%", y: "75%", delay: 1.5 },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Floating code elements */}
      {floatingItems.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/15 font-mono text-2xl font-bold select-none"
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div className="container relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
        >
          <span className="glow-dot" />
          Campus Coding Community
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.1] mb-6"
        >
          <span className="text-foreground">GeeksforGeeks</span>
          <br />
          <span className="gradient-text">Campus Club</span>
          <br />
          <span className="text-muted-foreground text-2xl sm:text-3xl md:text-4xl font-medium">
            RIT Chennai
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
        >
          Empowering students through coding, innovation, and collaborative
          learning. Build skills. Win hackathons. Land jobs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/join"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            Join Community
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/events"
            className="px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-secondary transition-colors"
          >
            Explore Events
          </Link>
          <Link
            to="/resources"
            className="px-6 py-3 rounded-xl text-muted-foreground font-medium hover:text-foreground transition-colors"
          >
            Start Learning →
          </Link>
        </motion.div>

        {/* Quick stats pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mt-16"
        >
          {[
            { icon: Users, label: "850+ Members" },
            { icon: Code2, label: "25K+ Problems Solved" },
            { icon: Zap, label: "120+ Events" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <stat.icon size={16} className="text-primary" />
              {stat.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
