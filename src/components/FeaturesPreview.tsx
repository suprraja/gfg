import { motion } from "framer-motion";
import { Bot, Award, BarChart3, Calendar } from "lucide-react";

const features = [
  { icon: Bot, title: "AI DSA Mentor", desc: "Get personalized learning roadmaps and problem recommendations." },
  { icon: Award, title: "Proof-to-Points", desc: "Upload achievements, earn points, and climb the leaderboard." },
  { icon: BarChart3, title: "Skill Dashboard", desc: "Visualize your strengths with radar graphs and progress charts." },
  { icon: Calendar, title: "Smart Events", desc: "Get event recommendations tailored to your coding interests." },
];

export function FeaturesPreview() {
  return (
    <section className="py-20 relative">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Platform Features</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-foreground">
            More than just a club{" "}
            <span className="gradient-text">website</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-8 flex gap-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <f.icon size={26} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
