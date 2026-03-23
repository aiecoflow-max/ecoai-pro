import React, { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";

/* =========================
   CALC ENGINE
========================= */

function formatCurrency(value) {
  return "$" + (value / 1000000).toFixed(2) + "M";
}

function formatNumber(value) {
  return value.toLocaleString();
}

function calculateScenario(area) {
  const costLow = area * 260;
  const costHigh = area * 317;

  const carbonLow = area * 38;
  const carbonHigh = area * 46;

  return {
    costRange: `${formatCurrency(costLow)} – ${formatCurrency(costHigh)}`,
    carbonRange: `${formatNumber(carbonLow)} – ${formatNumber(carbonHigh)} kgCO₂e`,
  };
}

/* =========================
   PDF GENERATOR
========================= */

function downloadPDF(data) {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("EcoFlow Decision Report", 20, 20);

  doc.setFontSize(12);
  doc.text(`Cost Range: ${data.cost}`, 20, 40);
  doc.text(`Carbon: ${data.carbon}`, 20, 50);
  doc.text(`LEED: ${data.leed}`, 20, 60);

  doc.text("Decision Summary:", 20, 80);
  doc.text(data.summary, 20, 90, { maxWidth: 170 });

  doc.save("EcoFlow_Report.pdf");
}

/* =========================
   NAVBAR
========================= */

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-inner">
        <div className="logo">EcoFlow</div>

        <div className="nav-links">
          <a href="#what">What it does</a>
          <a href="#calculator">Live Calculator</a>
          <a href="#benefits">Benefits</a>
          <a href="#pricing">Pricing</a>
          <a href="#insights">Insights</a>
          <a href="#contact">Contact</a>
        </div>

        <Link to="/login" className="login-btn">
          Login
        </Link>
      </div>
    </div>
  );
}

/* =========================
   HERO
========================= */

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="eyebrow">
          EARLY-STAGE DECISION INTELLIGENCE FOR CAPITAL PROJECTS
        </div>

        <h1>
          Quantify cost, carbon, and certification risk before design begins.
        </h1>

        <p>
          Evaluate real cost impact, embodied carbon, and certification exposure
          before decisions lock in millions in risk.
        </p>

        <div className="hero-buttons">
          <a href="#calculator" className="btn-primary">
            Run a scenario
          </a>
          <a href="#insights" className="btn-secondary">
            View output
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="orb"></div>
      </div>
    </section>
  );
}

/* =========================
   PREMIUM CALCULATOR
========================= */

function Calculator() {
  const [area, setArea] = useState(100000);
  const [leed, setLeed] = useState("Gold");

  const results = useMemo(() => calculateScenario(area), [area]);

  const leedPoints = {
    Certified: "4–8 pts",
    Silver: "6–12 pts",
    Gold: "8–19 pts",
    Platinum: "12–24 pts",
  };

  const summary = {
    Gold: "Balanced optimization across cost, carbon, and achievable credits.",
    Silver: "Balanced cost and sustainability approach.",
    Certified: "Minimal sustainability alignment.",
    Platinum: "High sustainability ambition with higher complexity.",
  };

  return (
    <section className="calculator" id="calculator">
      <div className="calc-container">
        <div className="calc-header">
          <div>
            <div className="calc-label">LIVE CALCULATION</div>
            <h2>Test a project scenario</h2>
          </div>

          <div className="badge">Scenario model</div>
        </div>

        <div className="inputs">
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
          />
        </div>

        <div className="leed-row">
          {["Certified", "Silver", "Gold", "Platinum"].map((item) => (
            <button
              key={item}
              className={`pill ${leed === item ? "active" : ""}`}
              onClick={() => setLeed(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="results">
          <div className="card">
            <div className="label">COST RANGE</div>
            <div className="value">{results.costRange}</div>
          </div>

          <div className="card">
            <div className="label">EMBODIED CARBON</div>
            <div className="value">{results.carbonRange}</div>
          </div>

          <div className="card">
            <div className="label">LEED IMPACT</div>
            <div className="value">{leedPoints[leed]}</div>
          </div>

          <div className="card wide">
            <div className="label">DECISION SUMMARY</div>
            <div>{summary[leed]}</div>
          </div>
        </div>

        <div className="actions">
          <button
            className="btn-primary"
            onClick={() =>
              downloadPDF({
                cost: results.costRange,
                carbon: results.carbonRange,
                leed: leedPoints[leed],
                summary: summary[leed],
              })
            }
          >
            Download PDF
          </button>
        </div>
      </div>
    </section>
  );
}

/* =========================
   LOGIN PAGE
========================= */

function Login() {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <button className="btn-primary">Login</button>
    </div>
  );
}

/* =========================
   MAIN APP
========================= */

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Calculator />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}