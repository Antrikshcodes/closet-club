import { Search, Heart, ShoppingBag, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="logo">
        CLOSET<span>CLUB.</span>
      </a>

      <nav className="nav-links">
        <a href="#discover">Discover</a>
        <a href="#men">Men</a>
        <a href="#women">Women</a>
        <a href="#vintage">Vintage</a>
      </nav>

      <div className="nav-actions">
        <button aria-label="Search">
          <Search size={20} />
        </button>

        <button aria-label="Wishlist">
          <Heart size={20} />
        </button>

        <button className="bag-button" aria-label="Shopping bag">
          <ShoppingBag size={20} />
          <span>0</span>
        </button>
      </div>

      <button className="mobile-menu" aria-label="Open menu">
        <Menu size={24} />
      </button>
    </header>
  );
}