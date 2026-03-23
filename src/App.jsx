import React from "react";
import "./index.css";

function App() {
  return (
    <div>
      <header className="site-header">
        <div className="container nav-shell">
          <a href="#top" className="brand-ecoflow">
            EcoFlow
          </a>

          <nav className="main-nav">
            <a href="#what-it-does">What it does</a>
            <a href="#calculator">Live Calculator</a>
            <a href="#benefits">Benefits</a>
            <a href="#pricing">Pricing</a>
            <a href="#insights">Insights</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">
            <a href="#" className="login-link">Login</a>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            Quantify cost, carbon, and certification risk before design begins.
          </h1>
        </div>
      </section>
    </div>
  );
}

export default App;