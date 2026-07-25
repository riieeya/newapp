"use client";

import { useMemo, useState } from "react";

const dishes = [
  { id: 1, name: "Garden Pesto Pasta", category: "Pasta", price: 14, rating: 4.9, emoji: "🍝", color: "mint", note: "Basil pesto · cherry tomato" },
  { id: 2, name: "Hot Honey Pizza", category: "Pizza", price: 16, rating: 4.8, emoji: "🍕", color: "peach", note: "Mozzarella · chili honey" },
  { id: 3, name: "Sunshine Bowl", category: "Healthy", price: 12, rating: 4.9, emoji: "🥗", color: "lemon", note: "Avocado · quinoa · greens" },
  { id: 4, name: "Crispy Stack Burger", category: "Burgers", price: 15, rating: 4.7, emoji: "🍔", color: "lavender", note: "Smash patty · house sauce" },
  { id: 5, name: "Berry Cloud Pancakes", category: "Breakfast", price: 11, rating: 4.9, emoji: "🥞", color: "rose", note: "Berries · maple · cream" },
  { id: 6, name: "Mango Glow Smoothie", category: "Drinks", price: 8, rating: 4.8, emoji: "🥭", color: "sky", note: "Mango · coconut · lime" }
];

const categories = ["All", "Pasta", "Pizza", "Healthy", "Burgers", "Breakfast", "Drinks"];

export default function Home() {
  const [active, setActive] = useState("All");
  const [cart, setCart] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const visible = useMemo(
    () => active === "All" ? dishes : dishes.filter((dish) => dish.category === active),
    [active]
  );

  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#home" aria-label="FreshBite home">
          <span className="brand-mark">F</span> Fresh<span>Bite</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#menu">Menu</a>
          <a href="#story">Our story</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="cart" aria-label={`${cart} items in cart`}>
          <span>Bag</span> <b>{cart}</b>
        </button>
      </nav>

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow">FAST, FRESH & FULL OF JOY</p>
          <h1>Good food.<br/><em>Good mood.</em></h1>
          <p className="intro">Colorful comfort food made with honest ingredients, delivered warm to your door.</p>
          <div className="hero-actions">
            <a className="primary" href="#menu">Explore the menu <span>→</span></a>
            <div className="social-proof">
              <div className="faces"><span>🧑🏽</span><span>👩🏻</span><span>👨🏿</span></div>
              <p><b>4.9 ★</b><small>2,000+ happy foodies</small></p>
            </div>
          </div>
        </div>
        <div className="hero-art">
          <div className="orbit orbit-one">✦</div>
          <div className="orbit orbit-two">♥</div>
          <div className="plate">
            <span className="plate-food">🥗</span>
            <i className="leaf leaf-one">🌿</i>
            <i className="leaf leaf-two">🍅</i>
          </div>
          <div className="floating-note">
            <span>🔥</span><p><b>Fresh today</b><small>Made after you order</small></p>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="FreshBite benefits">
        <div>FRESH INGREDIENTS <b>✦</b> MADE WITH LOVE <b>✦</b> AT YOUR DOOR IN 30 MIN <b>✦</b> FRESH INGREDIENTS <b>✦</b></div>
      </section>

      <section className="menu-section wrap" id="menu">
        <div className="section-heading">
          <div><p className="eyebrow">OUR CROWD FAVORITES</p><h2>Pick your happy.</h2></div>
          <p>Bright flavors, generous portions, zero boring bites.</p>
        </div>
        <div className="filters" role="group" aria-label="Filter menu">
          {categories.map((category) => (
            <button key={category} className={active === category ? "active" : ""} onClick={() => setActive(category)}>
              {category}
            </button>
          ))}
        </div>
        <div className="dish-grid">
          {visible.map((dish) => (
            <article className="dish-card" key={dish.id}>
              <div className={`dish-image ${dish.color}`}>
                <span>{dish.emoji}</span>
                <b className="rating">★ {dish.rating}</b>
              </div>
              <div className="dish-info">
                <p className="category">{dish.category}</p>
                <h3>{dish.name}</h3>
                <p>{dish.note}</p>
                <div><strong>${dish.price}</strong><button onClick={() => setCart(cart + 1)} aria-label={`Add ${dish.name} to cart`}>+</button></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="story wrap" id="story">
        <div className="story-card">
          <div>
            <p className="eyebrow">DINNER, SORTED</p>
            <h2>Take 20% off<br/>your first feast.</h2>
            <p>Use code <b>FIRSTBITE</b> at checkout. Your future self will thank you.</p>
            <a className="secondary" href="#menu">Choose your favorites →</a>
          </div>
          <div className="story-visual"><span>🍽️</span><i>20%<small>OFF</small></i></div>
        </div>
      </section>

      <footer id="contact">
        <div className="wrap footer-grid">
          <a className="brand light" href="#home"><span className="brand-mark">F</span> Fresh<span>Bite</span></a>
          <p>Made for hungry people<br/>and brighter days.</p>
          <div><a href="mailto:hello@freshbite.example">hello@freshbite.example</a><small>Open daily · 10am–10pm</small></div>
        </div>
      </footer>
      <div className={`toast ${cart > 0 ? "show" : ""}`}>Added to your bag · {cart} {cart === 1 ? "item" : "items"}</div>
    </main>
  );
}
