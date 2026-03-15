import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ComingSoon = ({ title }: { title: string }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Coming Soon</span>
          <h1 className="text-4xl font-display font-bold mt-3 text-foreground">{title}</h1>
          <p className="text-muted-foreground mt-4 mb-8">This section is under development.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComingSoon;
