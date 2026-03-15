import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Users, TrendingUp } from "lucide-react";

const values = [
  { icon: BookOpen, title: "Learning", desc: "Master DSA, competitive programming, and real-world tech skills." },
  { icon: Lightbulb, title: "Innovation", desc: "Build projects, explore new technologies, and push boundaries." },
  { icon: Users, title: "Community", desc: "Collaborate with passionate coders and grow together." },
  { icon: TrendingUp, title: "Growth", desc: "Track progress, earn achievements, and prepare for careers." },
];

export function AboutSection() {
  return (
    <section className="py-20 relative">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">About the Club</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-foreground">
            Building the next generation of{" "}
            <span className="gradient-text">developers</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            We promote coding culture, improve problem-solving skills, prepare students for technical interviews, and encourage collaborative learning.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <v.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
