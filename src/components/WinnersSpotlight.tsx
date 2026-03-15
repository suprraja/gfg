import { motion } from "framer-motion";
import { Trophy, Users, IndianRupee } from "lucide-react";

const winners = [
  {
    team: "Team CodeStorm",
    event: "GfG RIT Hackathon 2025",
    prize: "₹50,000",
    project: "EduFlow – AI Study Planner",
    members: ["Arjun K", "Priya S", "Rohit M"],
  },
  {
    team: "Team ByteForce",
    event: "DSA Challenge Sprint",
    prize: "₹25,000",
    project: "AlgoViz – Algorithm Visualizer",
    members: ["Sneha R", "Karthik V"],
  },
];

export function WinnersSpotlight() {
  return (
    <section className="py-20">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Hall of Fame</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-foreground">
            Hackathon <span className="gradient-text">Winners</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {winners.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card-hover p-8 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <Trophy size={32} className="text-primary/20" />
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                <Trophy size={12} /> Winners
              </span>
              <h3 className="font-display font-bold text-xl text-foreground">{w.team}</h3>
              <p className="text-sm text-muted-foreground mt-1">{w.event}</p>
              <p className="text-sm text-foreground mt-3 font-medium">{w.project}</p>
              <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <IndianRupee size={14} className="text-primary" />
                  {w.prize}
                </span>
                <span className="flex items-center gap-1">
                  <Users size={14} className="text-primary" />
                  {w.members.length} members
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
