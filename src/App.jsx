import React, { useMemo, useState } from "react";

const regions = {
  "North America": ["North", "East", "West", "South"],
  "South America": ["North", "East", "West", "South"],
  Europe: ["North", "East", "West", "South"],
  "Middle East": ["North", "East", "West", "South"],
  Asia: ["North", "East", "West", "South"],
  Africa: ["North", "East", "West", "South"],
  Oceania: ["North", "East", "West", "South"],
};

const projectTypes = [
  "Data Center",
  "Commercial",
  "Mixed-use",
  "Industrial / Logistics",
  "Residential",
  "Office",
];

const structures = [
  "Steel",
  "Reinforced Concrete",
  "Hybrid (S+C)",
  "Timber",
];

const leedTargets = ["None", "Certified", "Silver", "Gold", "Platinum"];

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);
}

function calculateScenario({
  projectType,
  geography,
  subregion,
  structure,
  area,
  leedTarget,
}) {
  const baseCostPerSf = {
    "Data Center": 365,
    Commercial: 285,
    "Mixed-use": 305,
    "Industrial / Logistics": 225,
    Residential: 255,
    Office: 295,
  };

  const baseCarbonPerSf = {
    "Data Center": 82,
    Commercial: 58,
    "Mixed-use": 66,
    "Industrial / Logistics": 49,
    Residential: 54,
    Office: 61,
  };

  const geographyCostFactor = {
    "North America": 1.0,
    "South America": 0.82,
    Europe: 1.08,
    "Middle East": 0.94,
    Asia: 0.9,
    Africa: 0.78,
    Oceania: 1.1,
  };

  const structureCostFactor = {
    Steel: 1.03,
    "Reinforced Concrete": 1.0,
    "Hybrid (S+C)": 1.06,
    Timber: 0.97,
  };

  const structureCarbonFactor = {
    Steel: 1.12,
    "Reinforced Concrete": 1.0,
    "Hybrid (S+C)": 0.95,
    Timber: 0.72,
  };

  const leedCostFactor = {
    None: 1.0,
    Certified: 1.015,
    Silver: 1.03,
    Gold: 1.05,
    Platinum: 1.08,
  };

  const leedCarbonFactor = {
    None: 1.0,
    Certified: 0.985,
    Silver: 0.97,
    Gold: 0.94,
    Platinum: 0.9,
  };

  const subregionAdjustment =
    subregion === "North"
      ? 1.02
      : subregion === "East"
      ? 1.03
      : subregion === "West"
      ? 1.01
      : 0.99;

  const areaNumber = Number(area) || 100000;
  const costBase =
    areaNumber *
    baseCostPerSf[projectType] *
    geographyCostFactor[geography] *
    structureCostFactor[structure] *
    leedCostFactor[leedTarget] *
    subregionAdjustment;

  const carbonBase =
    areaNumber *
    baseCarbonPerSf[projectType] *
    structureCarbonFactor[structure] *
    leedCarbonFactor[leedTarget];

  const costLow = costBase * 0.92;
  const costHigh = costBase * 1.1;

  const carbonLow = carbonBase * 0.93;
  const carbonHigh = carbonBase * 1.09;

  let leedImpact = "Moderate pathway support";
  if (leedTarget === "Gold" || leedTarget === "Platinum") {
    leedImpact = "Strong early LEED alignment needed";
  } else if (leedTarget === "Silver") {
    leedImpact = "Balanced LEED pathway";
  } else if (leedTarget === "None") {
    leedImpact = "No certification target selected";
  }

  const decisionSummary =
    structure === "Timber"
      ? "Lower embodied carbon direction with feasibility and supply-chain diligence recommended."
      : structure === "Hybrid (S+C)"
      ? "Balanced system direction with trade-off benefits across constructability, cost, and carbon."
      : structure === "Steel"
      ? "Potential schedule and flexibility advantages, but carbon exposure should be reviewed early."
      : "Conventional baseline direction with predictable delivery profile and moderate optimization opportunity.";

  return {
    costRange: `${formatCurrency(costLow)} – ${formatCurrency(costHigh)}`,
    carbonRange: `${formatNumber(carbonLow)} – ${formatNumber(carbonHigh)} kgCO₂e`,
    leedImpact,
    decisionSummary,
  };
}

function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand">
          EcoFlow
        </a>

        <nav className="nav-links">
          <a href="#what-it-does">What it does</a>
          <a href="#calculator">Live Calculator</a>
          <a href="#benefits">Benefits</a>
          <a href="#pricing">Pricing</a>
          <a href="#insights">Insights</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#login" className="login-link">
          Login
        </a>
      </div>
    </header>
  );
}

function FloatingOrb() {
  return (
    <div className="orb-stage" aria-hidden="true">
      <div className="orb-glow" />
      <div className="orb-shell">
        <div className="orb-ring ring-1" />
        <div className="orb-ring ring-2" />
        <div className="orb-ring ring-3" />
        <div className="orb-beam beam-1" />
        <div className="orb-beam beam-2" />
        <div className="orb-beam beam-3" />
        <div className="orb-beam beam-4" />
        <div className="orb-core" />
      </div>

      <div className="floating-card card-a">
        <div className="mini-label">Cost</div>
        <div className="mini-value">Scenario range</div>
      </div>

      <div className="floating-card card-b">
        <div className="mini-label">Carbon</div>
        <div className="mini-value">Embodied impact</div>
      </div>

      <div className="floating-card card-c">
        <div className="mini-label">LEED</div>
        <div className="mini-value">Pathway exposure</div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section-pad" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Early-stage decision intelligence for capital projects</p>
        <h1>
          Quantify cost, carbon, and certification risk before design begins.
        </h1>
        <p className="hero-lead">
          Evaluate real cost impact, embodied carbon, and certification exposure
          across multiple scenarios — before design decisions lock in millions
          in risk.
        </p>
        <p className="hero-sub">
          EcoFlow helps capital project teams validate early-stage decisions—so
          cost, carbon, and certification risks are understood before design
          teams commit.
        </p>
        <p className="hero-sub">
          Test multiple project scenarios, align stakeholders early, and move
          into design with clarity—not assumptions.
        </p>

        <div className="cta-row">
          <a href="#calculator" className="btn btn-primary">
            Run a scenario analysis
          </a>
          <a href="#insights" className="btn btn-secondary">
            View sample output
          </a>
        </div>

        <div className="micro-note">Free preview — no signup required</div>

        <div className="hero-validation-grid">
          <div className="info-card">
            <h3>Project direction</h3>
            <p>
              Validate whether your strategy aligns with cost, carbon, and
              delivery goals.
            </p>
          </div>
          <div className="info-card">
            <h3>Cost vs carbon trade-offs</h3>
            <p>
              Understand how early decisions shift both budget and embodied
              carbon outcomes.
            </p>
          </div>
          <div className="info-card">
            <h3>Delivery / procurement risk</h3>
            <p>
              Identify strategies that may introduce complexity, delay, or cost
              escalation.
            </p>
          </div>
          <div className="info-card">
            <h3>Sustainability / LEED pathway</h3>
            <p>
              Support certification targets across MR, EA, IP, and LT from the
              start.
            </p>
          </div>
          <div className="info-card">
            <h3>Stakeholder alignment</h3>
            <p>
              Create a shared baseline before design teams diverge.
            </p>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <FloatingOrb />
      </div>
    </section>
  );
}

function CalculatorSection() {
  const [projectType, setProjectType] = useState("Data Center");
  const [geography, setGeography] = useState("North America");
  const [subregion, setSubregion] = useState("North");
  const [structure, setStructure] = useState("Reinforced Concrete");
  const [area, setArea] = useState("250000");
  const [leedTarget, setLeedTarget] = useState("Gold");

  const results = useMemo(
    () =>
      calculateScenario({
        projectType,
        geography,
        subregion,
        structure,
        area,
        leedTarget,
      }),
    [projectType, geography, subregion, structure, area, leedTarget]
  );

  return (
    <section className="section-pad" id="calculator">
      <div className="section-heading">
        <p className="section-kicker">Live Calculator</p>
        <h2>Test a project scenario</h2>
        <p>
          Preview how early strategic choices can influence cost, embodied
          carbon, and certification direction before design begins.
        </p>
      </div>

      <div className="calculator-shell">
        <div className="calculator-form">
          <div className="field">
            <label>Project Type</label>
            <select value={projectType} onChange={(e) => setProjectType(e.target.value)}>
              {projectTypes.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>Geography</label>
            <select
              value={geography}
              onChange={(e) => {
                const nextRegion = e.target.value;
                setGeography(nextRegion);
                setSubregion(regions[nextRegion][0]);
              }}
            >
              {Object.keys(regions).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>Subregion</label>
            <select value={subregion} onChange={(e) => setSubregion(e.target.value)}>
              {regions[geography].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>Structure</label>
            <select value={structure} onChange={(e) => setStructure(e.target.value)}>
              {structures.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>Area (SF)</label>
            <input
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="250000"
            />
          </div>

          <div className="field">
            <label>LEED Target</label>
            <select value={leedTarget} onChange={(e) => setLeedTarget(e.target.value)}>
              {leedTargets.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="calculator-results">
          <div className="result-card">
            <div className="result-label">Cost Range</div>
            <div className="result-value">{results.costRange}</div>
          </div>

          <div className="result-card">
            <div className="result-label">Embodied Carbon</div>
            <div className="result-value">{results.carbonRange}</div>
          </div>

          <div className="result-card">
            <div className="result-label">LEED Impact</div>
            <div className="result-value result-text">{results.leedImpact}</div>
          </div>

          <div className="result-card result-card-wide">
            <div className="result-label">Decision Summary</div>
            <div className="result-value result-text">{results.decisionSummary}</div>
          </div>

          <div className="upgrade-strip">
            Upgrade to Tier 2 or Tier 3 to unlock project-specific inputs,
            deeper cost and carbon modeling, and a fully detailed decision
            report.
          </div>
        </div>
      </div>
    </section>
  );
}

function DataBasisSection() {
  return (
    <section className="section-pad" id="data-basis">
      <div className="section-heading narrow">
        <p className="section-kicker">Data Basis</p>
        <h2>Directional decision support — not final construction estimating</h2>
        <p>
          EcoFlow is a decision validation layer before design begins. It is
          intended to help teams compare scenario directions early, not replace
          detailed estimating, engineering analysis, or issued-for-construction
          documentation.
        </p>
      </div>

      <div className="three-col-grid">
        <div className="glass-panel">
          <h3>Early-stage logic</h3>
          <p>
            Outputs are structured to support concept-stage comparison across
            cost, carbon, delivery risk, and certification pathway.
          </p>
        </div>
        <div className="glass-panel">
          <h3>Scenario-based comparisons</h3>
          <p>
            The calculator is designed to show directional ranges and trade-offs
            so stakeholders can align before design divergence.
          </p>
        </div>
        <div className="glass-panel">
          <h3>Upgradeable depth</h3>
          <p>
            Paid tiers add fuller decision reporting, advanced comparison logic,
            and LEED-oriented strategy support.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhatItDoesSection() {
  return (
    <section className="section-pad" id="what-it-does">
      <div className="section-heading">
        <p className="section-kicker">What it does</p>
        <h2>Validate project direction before design begins</h2>
        <p>
          EcoFlow allows capital project teams to test early-stage scenarios
          before design teams commit to a direction.
        </p>
      </div>

      <div className="two-col-layout">
        <div className="glass-panel large-panel">
          <h3>Overview</h3>
          <p>
            Instead of relying on assumptions, teams can evaluate how different
            strategies impact cost, embodied carbon, LEED certification
            outcomes, delivery risk, and stakeholder alignment.
          </p>

          <h3 className="sub-block-title">What it actually does</h3>
          <ul className="clean-list">
            <li>Compare strategic directions</li>
            <li>Understand implications early</li>
            <li>Align stakeholders before divergence</li>
            <li>Reduce downstream redesign</li>
          </ul>

          <div className="output-box">
            <div className="output-title">Output</div>
            <p>
              Each scenario produces cost range, embodied carbon range, LEED
              impact, and a decision summary.
            </p>
          </div>
        </div>

        <div className="stack-col">
          <div className="glass-panel">
            <h3>What EcoFlow is</h3>
            <p>
              A structured evaluation layer that helps teams clarify major
              project assumptions before design effort compounds.
            </p>
          </div>

          <div className="glass-panel">
            <h3>What EcoFlow is not</h3>
            <p>
              EcoFlow does not replace architects, engineers, or detailed
              project delivery workflows. It informs direction; it does not
              produce final design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  const audience = [
    {
      title: "Owners / Developers / Funds",
      copy: "Validate major project assumptions before committing capital.",
    },
    {
      title: "Program Managers / PMO",
      copy: "Align stakeholders early and reduce risk of redesign and delay.",
    },
    {
      title: "Capital Project Teams",
      copy: "Establish a shared decision baseline before design development begins.",
    },
    {
      title: "Sustainability / ESG Leads",
      copy: "Ensure early decisions support carbon targets and LEED pathways.",
    },
  ];

  const notFor = [
    {
      title: "Small residential builders",
      copy: "This is not designed for single-project or low-complexity developments.",
    },
    {
      title: "Design-only workflows",
      copy: "EcoFlow does not produce drawings or replace architects/engineers.",
    },
    {
      title: "Late-stage projects",
      copy: "EcoFlow is most valuable before design is fixed, not after.",
    },
  ];

  return (
    <section className="section-pad" id="who-this-is-for">
      <div className="section-heading">
        <p className="section-kicker">Who this is for</p>
        <h2>Built for early capital decision-making</h2>
        <p>
          EcoFlow is most valuable when the project direction is still fluid and
          strategic choices can still be changed with minimal rework.
        </p>
      </div>

      <div className="audience-grid">
        {audience.map((item) => (
          <div className="glass-panel" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </div>
        ))}
      </div>

      <div className="not-for-block">
        <div className="section-kicker danger-kicker">Who this is not for</div>
        <div className="three-col-grid">
          {notFor.map((item) => (
            <div className="glass-panel danger-panel" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    "Validate Project Direction Before Design Begins",
    "Quantify Trade-offs, Not Just Options",
    "Align Stakeholders Early",
    "Reduce Risk of Late-Stage Redesign",
    "Protect Sustainability Strategy from Day One",
    "LEED Documentation & GBCI Submission Support",
  ];

  const descriptions = [
    "Test early-stage assumptions so cost, carbon, and certification risks are understood before design teams commit.",
    "See how different strategies impact cost, embodied carbon, and LEED outcomes simultaneously—before design diverges.",
    "Provide a shared decision baseline across owners, architects, and consultants at concept stage.",
    "Identify high-risk directions early—before they trigger scope changes, delays, or cost escalation.",
    "Support LEED pathways across MR, EA, IP, and LT categories from the beginning.",
    "Generate audit-ready, credit-specific documentation structures aligned with LEED v4 / v4.1 BD+C workflows.",
  ];

  return (
    <section className="section-pad" id="benefits">
      <div className="section-heading">
        <p className="section-kicker">Benefits</p>
        <h2>Key benefits</h2>
        <p>
          EcoFlow is designed to reduce ambiguity at the exact moment when
          decisions are still cheap to change.
        </p>
      </div>

      <div className="benefits-grid">
        {benefits.map((title, index) => (
          <div className="benefit-card" key={title}>
            <div className="benefit-index">0{index + 1}</div>
            <h3>{title}</h3>
            <p>{descriptions[index]}</p>
          </div>
        ))}
      </div>

      <div className="points-banner">
        Influences approximately 10–20 LEED points through early-stage decisions
        across MR, EA, IP, and LT categories.
      </div>
    </section>
  );
}

function PricingSection() {
  const tiers = [
    {
      name: "FREE",
      price: "$0",
      accent: "green",
      features: [
        "Preview scenario",
        "Basic recommendation",
        "No PDF",
      ],
    },
    {
      name: "DECISION",
      price: "$299",
      accent: "blue",
      features: [
        "Executive summary",
        "Project inputs",
        "Key metrics",
        "Detailed cost breakdown",
        "Embodied carbon breakdown",
        "Baseline comparison",
        "Delivery / risk note",
        "System-level recommendation",
        "Key trade-offs summary",
        "Downloadable PDF report",
      ],
    },
    {
      name: "COMPARATIVE",
      price: "$499",
      accent: "purple",
      features: [
        "Everything in $299",
        "Trade-off matrix (cost vs carbon vs system)",
        "Multi-system comparison (structure / envelope)",
        "Delivery strategy insight",
        "LEED-aligned carbon direction support",
        "Carbon reduction strategy suggestions",
        "Advanced downloadable PDF report",
      ],
    },
  ];

  return (
    <section className="section-pad" id="pricing">
      <div className="section-heading">
        <p className="section-kicker">Pricing</p>
        <h2>A small investment to avoid multi-million dollar mistakes</h2>
        <p>
          EcoFlow is not a design tool. It is a decision validation layer before
          design begins.
        </p>
      </div>

      <div className="pricing-grid">
        {tiers.map((tier) => (
          <div className={`pricing-card ${tier.accent}`} key={tier.name}>
            <div className="tier-name">{tier.name}</div>
            <div className="tier-price">{tier.price}</div>
            <ul className="pricing-list">
              {tier.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-secondary pricing-btn">
              Choose {tier.name}
            </a>
          </div>
        ))}
      </div>

      <div className="leed-upgrade">
        <div>
          <h3>Need submission-ready LEED documentation?</h3>
          <p>
            Upgrade to a full GBCI-aligned credit package with narratives,
            templates, and audit-ready structure.
          </p>
        </div>
        <a href="#contact" className="btn btn-primary">
          Upgrade to Full LEED Package →
        </a>
      </div>
    </section>
  );
}

function ComparisonTableSection() {
  const rows = [
    ["Preview scenario", "Yes", "Yes", "Yes"],
    ["Basic recommendation", "Yes", "Yes", "Yes"],
    ["Detailed cost breakdown", "No", "Yes", "Yes"],
    ["Embodied carbon breakdown", "No", "Yes", "Yes"],
    ["Baseline comparison", "No", "Yes", "Yes"],
    ["System-level recommendation", "No", "Yes", "Yes"],
    ["Trade-off matrix", "No", "No", "Yes"],
    ["Multi-system comparison", "No", "No", "Yes"],
    ["LEED-aligned strategy layer", "No", "No", "Yes"],
    ["PDF report", "No", "Yes", "Advanced"],
  ];

  return (
    <section className="section-pad" id="comparison-table">
      <div className="section-heading narrow">
        <p className="section-kicker">Comparison Table</p>
        <h2>Choose the right level of output</h2>
      </div>

      <div className="table-wrap">
        <table className="compare-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Free</th>
              <th>Decision</th>
              <th>Comparative</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td>{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function InsightsSection() {
  const insights = [
    {
      title: "Scenario direction",
      copy: "Compare which structural or delivery assumptions create the strongest balance across cost, carbon, and delivery.",
    },
    {
      title: "Carbon exposure",
      copy: "Identify which early choices are likely to increase embodied carbon before the design team locks them in.",
    },
    {
      title: "Certification pathway",
      copy: "Review whether a scenario supports LEED direction across MR, EA, IP, and LT categories.",
    },
    {
      title: "Stakeholder alignment",
      copy: "Use a shared baseline to reduce concept-stage disagreement before redesign becomes expensive.",
    },
  ];

  return (
    <section className="section-pad" id="insights">
      <div className="section-heading">
        <p className="section-kicker">Insights</p>
        <h2>Scenario insights</h2>
        <p>
          The goal is not just output — it is earlier clarity, better
          alignment, and fewer avoidable downstream reversals.
        </p>
      </div>

      <div className="insights-grid">
        {insights.map((item) => (
          <div className="insight-card" key={item.title}>
            <div className="insight-line" />
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="section-pad" id="contact">
      <div className="contact-shell">
        <div className="contact-copy">
          <p className="section-kicker">Contact</p>
          <h2>For enterprise use, partnerships, or custom applications</h2>
          <p className="contact-email">hello@ecoflow-ai.com</p>
          <p>
            Reach out for enterprise workflows, custom scenario logic, LEED
            package upgrades, or platform partnerships.
          </p>
        </div>

        <form className="contact-form">
          <div className="field">
            <label>Name</label>
            <input type="text" placeholder="Your name" />
          </div>

          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="you@company.com" />
          </div>

          <div className="field">
            <label>Message</label>
            <textarea rows="5" placeholder="Tell us about your project or request" />
          </div>

          <button type="button" className="btn btn-primary">
            Send inquiry
          </button>
        </form>
      </div>
    </section>
  );
}

function LoginPlaceholder() {
  return (
    <section className="section-pad login-placeholder" id="login">
      <div className="section-heading narrow">
        <p className="section-kicker">Login</p>
        <h2>Simple, clean, no clutter</h2>
        <p>
          This placeholder keeps the section in the information architecture.
          The actual auth flow can be connected later to Supabase, Firebase, or
          a custom backend.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>© 2026 EcoFlow</div>
      <div>Decision intelligence for capital projects</div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="page-shell">
      <div className="frame-line-top" />
      <div className="frame-line-left" />
      <Navbar />
      <main>
        <Hero />
        <CalculatorSection />
        <DataBasisSection />
        <WhatItDoesSection />
        <AudienceSection />
        <BenefitsSection />
        <PricingSection />
        <ComparisonTableSection />
        <InsightsSection />
        <ContactSection />
        <LoginPlaceholder />
      </main>
      <Footer />
    </div>
  );
}