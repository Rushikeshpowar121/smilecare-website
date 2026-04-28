import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-brand-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="w-24 h-24 rounded-full bg-brand-accent/50 flex items-center justify-center mx-auto mb-6">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2C7873"
            strokeWidth="1.5"
            className="w-12 h-12"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
        </div>
        <h1 className="font-heading font-bold text-6xl text-brand-primary mb-4">404</h1>
        <h2 className="font-heading font-semibold text-2xl text-brand-dark mb-3">
          Page Not Found
        </h2>
        <p className="text-brand-body mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved. Let us get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-brand-primary text-white font-medium px-7 py-3.5 rounded-full hover:bg-brand-primary-dark transition-colors"
        >
          <Home size={18} />
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
