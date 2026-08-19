"use client";
import React, { useState } from "react";
import { Leaf, FlaskConical, Droplet, Sparkles, ArrowRight } from "lucide-react";

const PRODUCTS = [
  {
    icon: Droplet,
    name: "Essential Oils",
    tagline: "For daily calm and clarity.",
    lot: "JHB-EO-014",
    contents: "Lavender, Eucalyptus, Peppermint",
    method: "Steam-distilled",
  },
  {
    icon: Sparkles,
    name: "Hair Oils",
    tagline: "For strength, root to end.",
    lot: "JHB-HO-032",
    contents: "Castor, Rosemary, Argan",
    method: "Cold-pressed & infused",
  },
  {
    icon: Leaf,
    name: "Natural Remedies",
    tagline: "For everyday relief, plant-first.",
    lot: "JHB-NR-007",
    contents: "Ginger, Turmeric, Clove",
    method: "Slow-extracted",
  },
];

export default function JakurLandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim().length > 3) setSubmitted(true);
  };

  const scrollToNotify = () => {
    document.getElementById("notify")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="jakur-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Public+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

        .jakur-root {
          --cream: #F1EEE4;
          --paper: #FBF9F4;
          --forest: #1F3B2C;
          --forest-soft: #2C4B3A;
          --amber: #B6702E;
          --sage: #7C9070;
          --ink: #23231F;
          --line: #DAD3C0;
          --font-display: 'Fraunces', serif;
          --font-body: 'Public Sans', sans-serif;
          --font-mono: 'IBM Plex Mono', monospace;

          background: var(--cream);
          color: var(--ink);
          font-family: var(--font-body);
          min-height: 100vh;
          width: 100%;
        }

        .jakur-root * { box-sizing: border-box; }

        .container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid var(--line);
        }

        .wordmark {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 20px;
          letter-spacing: 0.02em;
          color: var(--forest);
        }

        .wordmark span {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          color: var(--sage);
          margin-left: 8px;
          letter-spacing: 0.08em;
          vertical-align: middle;
        }

        .btn-primary {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          background: var(--forest);
          color: var(--paper);
          border: none;
          padding: 12px 20px;
          border-radius: 2px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .btn-primary:hover { background: var(--forest-soft); transform: translateY(-1px); }
        .btn-primary:focus-visible { outline: 2px solid var(--amber); outline-offset: 2px; }

        .hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 56px;
          padding: 88px 24px 96px;
          align-items: center;
        }
        @media (max-width: 860px) {
          .hero { grid-template-columns: 1fr; padding: 56px 20px 64px; gap: 40px; }
        }

        .eyebrow {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--amber);
          margin-bottom: 18px;
          display: block;
        }

        .hero h1 {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(36px, 5vw, 56px);
          line-height: 1.08;
          color: var(--forest);
          margin: 0 0 22px;
          letter-spacing: -0.01em;
        }
        .hero h1 em {
          font-style: italic;
          color: var(--amber);
        }

        .hero p.lede {
          font-size: 17px;
          line-height: 1.6;
          color: #4A473E;
          max-width: 480px;
          margin: 0 0 32px;
        }

        .hero-ctas {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .hero-note {
          font-family: var(--font-mono);
          font-size: 12px;
          color: #6B6858;
          letter-spacing: 0.02em;
        }

        .label-plate {
          background: var(--paper);
          border: 1px solid var(--line);
          border-radius: 3px;
          padding: 28px 26px;
          font-family: var(--font-mono);
          font-size: 13px;
          line-height: 1.9;
          color: var(--ink);
          box-shadow: 0 1px 0 var(--line);
          animation: rise 0.7s ease both;
        }
        .label-plate .plate-title {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 18px;
          color: var(--forest);
          margin-bottom: 14px;
          padding-bottom: 12px;
          border-bottom: 1px dashed var(--line);
        }
        .label-plate .row { display: flex; justify-content: space-between; gap: 12px; }
        .label-plate .row .k { color: var(--sage); text-transform: uppercase; letter-spacing: 0.06em; font-size: 11px; }
        .label-plate .row .v { text-align: right; color: var(--ink); }
        .label-plate .seal {
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px dashed var(--line);
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--forest);
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        @keyframes rise {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        section.band {
          padding: 80px 24px;
          border-top: 1px solid var(--line);
        }
        .band-inner { max-width: 1120px; margin: 0 auto; }

        .section-head {
          margin-bottom: 48px;
          max-width: 560px;
        }
        .section-head .eyebrow { margin-bottom: 12px; }
        .section-head h2 {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(26px, 3vw, 34px);
          color: var(--forest);
          margin: 0 0 12px;
          letter-spacing: -0.01em;
        }
        .section-head p {
          color: #4A473E;
          font-size: 15.5px;
          line-height: 1.65;
          margin: 0;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 860px) {
          .products-grid { grid-template-columns: 1fr; }
        }

        .product-card {
          background: var(--paper);
          border: 1px solid var(--line);
          border-radius: 3px;
          padding: 28px 24px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(31, 59, 44, 0.08);
        }
        .product-card .icon-wrap {
          width: 40px; height: 40px;
          border-radius: 50%;
          background: var(--cream);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
          color: var(--forest);
        }
        .product-card h3 {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: 20px;
          color: var(--forest);
          margin: 0 0 6px;
        }
        .product-card p.tagline {
          font-size: 14.5px;
          color: #4A473E;
          margin: 0 0 18px;
        }
        .product-card .mini-label {
          font-family: var(--font-mono);
          font-size: 11.5px;
          line-height: 1.9;
          color: #6B6858;
          border-top: 1px dashed var(--line);
          padding-top: 12px;
        }
        .product-card .mini-label b { color: var(--ink); font-weight: 500; }

        .split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border: 1px solid var(--line);
          border-radius: 3px;
          overflow: hidden;
        }
        @media (max-width: 860px) {
          .split { grid-template-columns: 1fr; }
        }
        .split-col {
          padding: 40px 36px;
          background: var(--paper);
        }
        .split-col:first-child {
          border-right: 1px solid var(--line);
        }
        @media (max-width: 860px) {
          .split-col:first-child { border-right: none; border-bottom: 1px solid var(--line); }
        }
        .split-col .icon-wrap {
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          color: var(--forest);
          margin-bottom: 16px;
        }
        .split-col h3 {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 21px;
          color: var(--forest);
          margin: 0 0 12px;
        }
        .split-col p {
          font-size: 14.5px;
          line-height: 1.7;
          color: #4A473E;
          margin: 0;
        }

        .notify-band {
          background: var(--forest);
          color: var(--paper);
        }
        .notify-inner {
          max-width: 640px;
          margin: 0 auto;
          text-align: center;
        }
        .notify-inner .eyebrow { color: #C9D8C6; }
        .notify-inner h2 {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(26px, 3vw, 32px);
          margin: 0 0 12px;
        }
        .notify-inner p {
          color: #D8E0D4;
          font-size: 15px;
          margin: 0 0 32px;
        }
        .notify-form {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .notify-form input {
          font-family: var(--font-body);
          font-size: 14px;
          padding: 13px 16px;
          border-radius: 2px;
          border: 1px solid rgba(251,249,244,0.3);
          background: rgba(251,249,244,0.06);
          color: var(--paper);
          min-width: 260px;
        }
        .notify-form input::placeholder { color: #A9B8A5; }
        .notify-form input:focus-visible { outline: 2px solid var(--amber); outline-offset: 2px; }
        .notify-form button {
          font-family: var(--font-mono);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          background: var(--amber);
          color: var(--paper);
          border: none;
          padding: 13px 22px;
          border-radius: 2px;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .notify-form button:hover { background: #9E5F27; }
        .notify-confirm {
          font-family: var(--font-mono);
          font-size: 13px;
          color: #C9D8C6;
          letter-spacing: 0.02em;
        }

        footer {
          border-top: 1px solid var(--line);
          padding: 40px 24px;
        }
        .footer-inner {
          max-width: 1120px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }
        .footer-inner .wordmark { font-size: 16px; }
        .footer-links {
          display: flex;
          gap: 24px;
          font-family: var(--font-mono);
          font-size: 12px;
          color: #6B6858;
          letter-spacing: 0.04em;
        }
      `}</style>

      <div className="topbar">
        <div className="wordmark">JAKUR<span>HEALTH &amp; BEAUTY</span></div>
        <button className="btn-primary" onClick={scrollToNotify}>
          Get notified <ArrowRight size={14} />
        </button>
      </div>

      <div className="hero container">
        <div>
          <span className="eyebrow">Nature · Tested</span>
          <h1>
            Plant remedies, <em>held to a higher standard.</em>
          </h1>
          <p className="lede">
            JAKUR blends traditional botanical oils and remedies with modern
            testing, so every drop is exactly what the label says it is.
          </p>
          <div className="hero-ctas">
            <button className="btn-primary" onClick={scrollToNotify}>
              Get notified when we open <ArrowRight size={14} />
            </button>
            <span className="hero-note">Essential oils · Hair oils · Natural remedies</span>
          </div>
        </div>

        <div className="label-plate">
          <div className="plate-title">Specimen Label</div>
          <div className="row"><span className="k">Lot</span><span className="v">JHB-0001</span></div>
          <div className="row"><span className="k">Contents</span><span className="v">Lavender, Eucalyptus, Peppermint</span></div>
          <div className="row"><span className="k">Method</span><span className="v">Steam-distilled</span></div>
          <div className="row"><span className="k">Origin</span><span className="v">Single-source botanicals</span></div>
          <div className="seal"><FlaskConical size={14} /> Purity verified</div>
        </div>
      </div>

      <section className="band">
        <div className="band-inner">
          <div className="section-head">
            <span className="eyebrow">The Collection</span>
            <h2>Three families, one standard.</h2>
            <p>
              Every JAKUR product starts as a traditional botanical remedy,
              then goes through the same testing discipline before it ever
              reaches you.
            </p>
          </div>
          <div className="products-grid">
            {PRODUCTS.map((p) => (
              <div className="product-card" key={p.name}>
                <div className="icon-wrap"><p.icon size={18} /></div>
                <h3>{p.name}</h3>
                <p className="tagline">{p.tagline}</p>
                <div className="mini-label">
                  <div><b>Lot</b> {p.lot}</div>
                  <div><b>Contains</b> {p.contents}</div>
                  <div><b>Method</b> {p.method}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band-inner">
          <div className="section-head">
            <span className="eyebrow">How We Work</span>
            <h2>Rooted in nature. Verified by science.</h2>
            <p>
              We don't treat "natural" and "tested" as a trade-off. One
              informs the other, at every stage.
            </p>
          </div>
          <div className="split">
            <div className="split-col">
              <div className="icon-wrap"><Leaf size={22} /></div>
              <h3>From the earth</h3>
              <p>
                We start with whole botanicals and remedies passed down
                through generations, sourced with attention to origin and
                season rather than volume alone.
              </p>
            </div>
            <div className="split-col">
              <div className="icon-wrap"><FlaskConical size={22} /></div>
              <h3>Through the lab</h3>
              <p>
                Every batch is checked for purity and consistency before it's
                bottled, so the formula you loved last time is the one you
                get again.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band notify-band" id="notify">
        <div className="notify-inner">
          <span className="eyebrow">Coming Soon</span>
          <h2>Be first to shop.</h2>
          <p>Our full store is on its way. Leave your email and we'll let you know the moment it opens.</p>
          {submitted ? (
            <div className="notify-confirm">You're on the list. We'll be in touch.</div>
          ) : (
            <form className="notify-form" onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
              <button type="submit">Notify me</button>
            </form>
          )}
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="wordmark">JAKUR<span>HEALTH &amp; BEAUTY</span></div>
          <div className="footer-links">
            <span>Contact</span>
            <span>Instagram</span>
            <span>© {new Date().getFullYear()} JAKUR Health and Beauty Inc.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
