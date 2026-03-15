import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-hero)" }} />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Ready to level up your{" "}
              <span className="gradient-text">coding journey</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Join 850+ students building their tech careers through the GeeksforGeeks Campus Club at RIT Chennai.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/join"
                className="group flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all shadow-lg shadow-primary/20"
              >
                Join the Club
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-secondary transition-colors"
              >
                Join Discord
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
