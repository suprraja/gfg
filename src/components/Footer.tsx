import { Link } from "react-router-dom";
import gfgLogo from "@/assets/gfg-logo.png";

const links = [
  { label: "Events", href: "/events" },
  { label: "Leaderboard", href: "/leaderboard" },
  { label: "Resources", href: "/resources" },
  { label: "Team", href: "/team" },
  { label: "About", href: "/about" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={gfgLogo} alt="GfG" className="h-8 w-auto" />
            <div>
              <p className="font-display font-bold text-sm text-foreground">GeeksforGeeks Campus Club</p>
              <p className="text-xs text-muted-foreground">RIT Chennai</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} GeeksforGeeks Campus Club – RIT Chennai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
