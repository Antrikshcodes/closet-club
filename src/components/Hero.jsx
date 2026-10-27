import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero" id="discover">
      <div className="hero-copy">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          THE NEW GENERATION OF FASHION
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Wear your
          <br />
          <span>own story.</span>
        </motion.h1>

        <p className="hero-description">
          Discover rare finds, timeless pieces, and everyday
          essentials from a community that gets your style.
        </p>

        <div className="hero-actions">
          <a href="#products" className="primary-button">
            Explore collection <ArrowUpRight size={18} />
          </a>

          <a href="#sell" className="secondary-button">
            Sell your pieces <ArrowDownRight size={18} />
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <strong>01.</strong>
            <span>Find your fit</span>
          </div>

          <div>
            <strong>02.</strong>
            <span>Give it a story</span>
          </div>

          <div>
            <strong>03.</strong>
            <span>Wear it your way</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85"
            alt="Contemporary streetwear fashion editorial"
          />

          <div className="image-overlay">
            <span>CURATED FOR YOU</span>
            <span>COLLECTION Nº 001</span>
          </div>
        </div>

        <div className="floating-glass-card">
          <span className="glass-label">THE DAILY EDIT</span>
          <h3>Less ordinary.</h3>
          <p>Pieces with personality.</p>
          <ArrowUpRight size={20} />
        </div>

        <div className="hero-index">CC — 001 / 026</div>
      </div>
    </section>
  );
}