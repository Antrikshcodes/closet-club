import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import products from "./data/products";
import { ArrowUpRight } from "lucide-react";
import "./index.css";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((currentCart) => [...currentCart, product]);
  }

  return (
    <>
      <Navbar cartCount={cart.length} />

      <main>
        <Hero />

        <section className="products-section" id="products">
          <div className="section-heading">
            <div>
              <p className="eyebrow">HANDPICKED FOR YOUR CLOSET</p>
              <h2>Good finds. <span>Great fits.</span></h2>
            </div>

            <a href="#products" className="view-all">
              Explore all <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>

          <p className="cart-status" aria-live="polite">
            Shopping bag: {cart.length} {cart.length === 1 ? "item" : "items"}
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <a href="/" className="logo">
          CLOSET<span>CLUB.</span>
        </a>
        <p>Good clothes deserve a second story.</p>
        <span>© 2026 CLOSET CLUB</span>
      </footer>
    </>
  );
}