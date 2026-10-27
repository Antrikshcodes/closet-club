import { useState } from "react";
import { Heart, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductCard({ product, onAddToCart }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.article
      className="product-card"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <div className="product-image">
        <img src={product.image} alt={product.name} />

        <span className="condition-badge">
          {product.condition}
        </span>

        <button
          className={`wishlist-button ${isLiked ? "liked" : ""}`}
          onClick={() => setIsLiked(!isLiked)}
          aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={isLiked}
        >
          <Heart
            size={19}
            fill={isLiked ? "currentColor" : "none"}
          />
        </button>

        <button
          className="quick-add-button"
          onClick={() => onAddToCart(product)}
        >
          Add to bag <ArrowUpRight size={17} />
        </button>
      </div>

      <div className="product-info">
        <div className="product-heading">
          <div>
            <p className="product-brand">{product.brand}</p>
            <h3>{product.name}</h3>
          </div>

          <span className="product-size">{product.size}</span>
        </div>

        <div className="product-bottom">
          <div className="product-pricing">
            <strong>₹{product.price.toLocaleString("en-IN")}</strong>
            <del>
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </del>
          </div>

          <span className="seller-name">@{product.seller}</span>
        </div>
      </div>
    </motion.article>
  );
}
