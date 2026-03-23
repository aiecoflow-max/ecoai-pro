import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";

function Orb() {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(t * 0.25) * 0.18;
    meshRef.current.rotation.y += 0.0035;
    meshRef.current.position.y = Math.sin(t * 0.7) * 0.08;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.7}>
      <mesh ref={meshRef} scale={2.05}>
        <icosahedronGeometry args={[1, 48]} />
        <MeshDistortMaterial
          distort={0.28}
          speed={1.6}
          roughness={0.12}
          metalness={0.65}
          clearcoat={1}
          clearcoatRoughness={0.08}
          transmission={0.08}
          thickness={1.4}
          color="#7c5cff"
        />
      </mesh>
    </Float>
  );
}

function OrbScene() {
  return (
    <div className="orb-wrap" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 4.8], fov: 42 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 3, 3]} intensity={2.2} />
        <pointLight position={[-3, -2, 2]} intensity={1.3} />
        <Suspense fallback={null}>
          <Environment preset="city" />
          <Orb />
        </Suspense>
      </Canvas>
      <div className="orb-glow orb-glow-1" />
      <div className="orb-glow orb-glow-2" />
    </div>
  );
}

function Nav() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a href="#top" className="brand" aria-label="EcoFlow home">
          <span className="brand-ecoflow">EcoFlow</span>
        </a>

        <nav className="main-nav" aria-label="Primary">
          <a href="#what-it-does">What it does</a>
          <a href="#calculator">Live Calculator</a>
          <a href="#benefits">Benefits</a>
          <a href="#pricing">Pricing</a>
          <a href="#insights">Insights</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <a href="#login" className="login-link">
            Login
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">Early-stage decision intelligence for capital projects</div>

          <h1 className="hero-title">
            Quantify cost, carbon, and certification risk before design begins.
          </h1>

          <p className="hero-subtitle">
            EcoFlow helps owners, developers, and project teams evaluate early building
            scenarios with sharper commercial logic before assumptions become expensive.
          </p>

          <div className="hero-cta-row">
            <a href="#calculator" className="btn btn-primary">
              Try Live Calculator
            </a>
            <a href="#pricing" className="btn btn-secondary">
              View Pricing
            </a>
          </div>

          <div className="hero-meta">
            <span>Cost range</span>
            <span>Embodied carbon range</span>
            <span>LEED impact</span>
            <span>Decision summary</span>
          </div>
        </div>

        <div className="hero-visual">
          <OrbScene />
        </div>
      </div>
    </section>
  );
}

function Section({ id, label, title, text, children }) {
  return (
    <section id={id} className="content-section">
      <div className="container">
        <div className="section-intro">
          <div className="section-label">{label}</div>
          <h2>{title}</h2>
          {text && <p>{text}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function WhatItDoes() {
  return (
    <Section
      id="what-it-does"
      label="What it does"
      title="A decision-validation layer before design begins"
      text="EcoFlow is not a design tool. It helps teams compare early options through structured scenario logic, cost/carbon signals, and certification-aware tradeoff review."
    >
      <div className="cards three">
        <div className="glass-card">
          <h3>Scenario input</h3>
          <p>Program type, geography, building intent, and system-level assumptions.</p>
        </div>
        <div className="glass-card">
          <h3>Quantified output</h3>
          <p>Cost range, embodied carbon range, LEED impact, and baseline comparison.</p>
        </div>
        <div className="glass-card">
          <h3>Decision signal</h3>
          <p>A sharper summary of what is likely viable before full design spend begins.</p>
        </div>
      </div>
    </Section>
  );
}

function CalculatorPreview() {
  return (
    <Section
      id="calculator"
      label="Live Calculator"
      title="Fast scenario preview"
      text="This section is styled as a wide premium block so you can drop your working calculator directly underneath the hero."
    >
      <div className="calculator-shell">
        <div className="calculator-toolbar">
          <span>Free version preview</span>
          <span>Tier 2 and Tier 3 include more detailed options</span>
        </div>

        <div className="calculator-grid">
          <div className="field">
            <label>Project type</label>
            <select>
              <option>Office</option>
              <option>Commercial</option>
              <option>Mixed-use</option>
              <option>Hospitality</option>
            </select>
          </div>

          <div className="field">
            <label>Geography</label>
            <select>
              <option>North America</option>
              <option>South America</option>
              <option>Europe</option>
              <option>Middle East</option>
              <option>Asia</option>
              <option>Africa</option>
              <option>Oceania</option>
            </select>
          </div>

          <div className="field">
            <label>Subregion</label>
            <select>
              <option>US</option>
              <option>UK</option>
              <option>UAE</option>
              <option>Other</option>
            </select>
          </div>

          <div className="field">
            <label>Project size</label>
            <input type="text" placeholder="e.g. 250,000 SF" />
          </div>
        </div>

        <div className="results-preview">
          <div className="metric-card">
            <span>Cost range</span>
            <strong>$185–$235 / SF</strong>
          </div>
          <div className="metric-card">
            <span>Embodied carbon</span>
            <strong>310–420 kgCO₂e/m²</strong>
          </div>
          <div className="metric-card">
            <span>LEED impact</span>
            <strong>Moderate opportunity</strong>
          </div>
          <div className="metric-card">
            <span>Decision summary</span>
            <strong>Viable with targeted optimization</strong>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Benefits() {
  return (
    <Section
      id="benefits"
      label="Benefits"
      title="Better decisions before design lock-in"
      text="The value is not just speed. The value is reducing early ambiguity when budget, carbon, and certification strategy are still fluid."
    >
      <div className="cards three">
        <div className="glass-card">
          <h3>Reduce expensive early assumptions</h3>
          <p>See likely scenario implications before deeper consultant and design spend.</p>
        </div>
        <div className="glass-card">
          <h3>Align stakeholders faster</h3>
          <p>Give owners and teams a structured decision summary instead of vague discussion.</p>
        </div>
        <div className="glass-card">
          <h3>Support premium advisory upsell</h3>
          <p>Use EcoFlow as the front-end qualification layer for deeper technical review.</p>
        </div>
      </div>
    </Section>
  );
}

function Pricing() {
  return (
    <Section
      id="pricing"
      label="Pricing"
      title="Simple entry, higher-value upgrade path"
      text="Start with lightweight scenario validation, then move into more detailed decision support."
    >
      <div className="cards three pricing-cards">
        <div className="glass-card pricing-card">
          <div className="price-tier">FREE</div>
          <div className="price">$0</div>
          <ul>
            <li>Preview scenario</li>
            <li>Basic recommendation</li>
            <li>No PDF</li>
          </ul>
        </div>

        <div className="glass-card pricing-card featured">
          <div className="price-tier">DECISION</div>
          <div className="price">$299</div>
          <ul>
            <li>Executive summary</li>
            <li>Project inputs</li>
            <li>Key metrics</li>
            <li>Detailed cost breakdown</li>
            <li>Embodied carbon breakdown</li>
            <li>Baseline comparison</li>
            <li>Delivery/risk note</li>
          </ul>
        </div>

        <div className="glass-card pricing-card">
          <div className="price-tier">STRATEGY</div>
          <div className="price">$499</div>
          <ul>
            <li>Everything in Decision</li>
            <li>More detailed options</li>
            <li>More scenario depth</li>
            <li>Stronger decision framing</li>
            <li>Premium report positioning</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Insights() {
  const items = useMemo(
    () => [
      "Why early carbon assumptions distort capital planning",
      "How to position scenario intelligence before schematic design",
      "What makes a paid decision PDF feel credible"
    ],
    []
  );

  return (
    <Section
      id="insights"
      label="Insights"
      title="Decision intelligence, not generic content"
      text="Use this section for articles that make the platform feel credible, specialized, and worth paying for."
    >
      <div className="cards three">
        {items.map((item) => (
          <div className="glass-card" key={item}>
            <h3>{item}</h3>
            <p>Structured insight for developers, owners, and project teams making early-stage decisions.</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section
      id="contact"
      label="Contact"
      title="Get in touch"
      text="For platform access, partnerships, or premium advisory inquiries."
    >
      <div className="contact-panel">
        <p>hello@ecoflow-ai.com</p>
      </div>
    </Section>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Nav />
      <Hero />
      <WhatItDoes />
      <CalculatorPreview />
      <Benefits />
      <Pricing />
      <Insights />
      <Contact />
    </div>
  );
}
