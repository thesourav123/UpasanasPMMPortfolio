const assets = {
  paper: "/assets/canva/30b05471682a44dd724bb7be39717a2e.png",
  portrait: "/assets/canva/e14874acecbd19da7a345b35a0eb1969.png",
  cake: "/assets/canva/b637b3b20d10202de921067bf2ebf302.png",
  ibm: "/assets/canva/99c218a0461e74da2c44d34e28efc529.png",
  chase: "/assets/canva/17252937e8c46e453e8a59ea178ee70a.png",
  bank: "/assets/canva/1b77fee1346f85bee7aaf77da0e560a5.png",
  sparkle: "/assets/canva/a4f9a6b9-eb75-4e2a-b402-843493e45884.png",
  yumi: "/assets/canva/810d54257b2ec6ac576b960dfbdb862f.png",
};

const topLinks = ["WRITING", "CASE STUDIES", "FRAMEWORKS", "PROCESS", "WORK @ A GLANCE"];

const capabilities = [
  ["B2B", "ENTERPRISE SAAS"],
  ["PLG", "STRATEGY AND GROWTH"],
  ["DEV-FIRST", "GTM"],
  ["AI -NATIVE", "PLATFORMS"],
];

const framework = [
  {
    phase: "Phase 1",
    title: "Category Positioning and Narrative",
    items: ["Category narrative", "Accuracy guardrails", "Risk mitigation story", "Procurement narrative"],
  },
  {
    phase: "Phase 2",
    title: "Sales Infrastructure (Dual Track)",
    items: ["Technical Battlecards", "Procurement Battlecards", "POC Success framework", "Buyer Journey Map"],
  },
  {
    phase: "Phase 3",
    title: "Launch and Demand Program",
    items: ["ICP Definition", "Use case Guide", "Technical Whitepapers", "ROI Case Studies"],
  },
  {
    phase: "Phase 4",
    title: "Feedback Loop and Refinement",
    items: ["Weekly GTM Syncs", "Monthly Battlecard Refresh", "Quarterly Strategy Review", "Competitive Monitoring"],
  },
];

const stats = [
  ["Win Rate", "20-30%", "40-50%"],
  ["Launch Cycle", "14-18 mon", "10-12 mon"],
  ["Pipeline Influence", "-10mn-25mn"],
];

const work = [
  {
    status: "OPEN",
    title: "GTM Foundation for an enterprise AI platform - built 0 to 1",
    tags: ["AI/ML", "Positioning", "Launch", "Enterprise"],
  },
  {
    status: "CLOSED",
    title: "Sales Motion rebuild that unstuck a stalled enterprise pipeline",
    tags: ["Fintech", "sales Enablement", "Launch", "Enterprise"],
  },
  {
    status: "OPEN",
    title: "rpositioned a cloud data product for enterprise buyer",
    tags: ["Cloud", "Data and Analytics", "Launch", "Enterprise"],
  },
  {
    status: "CLOSED",
    title: "Competitive Program fr an AI platform entering a crowded market",
    tags: ["AI/ML", "cOMP Intel", "Category", "Enterprise"],
  },
];

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="top-links">
        {topLinks.map((item) => (
          <a href={`#${item.toLowerCase().replaceAll(" ", "-").replace("@", "")}`} key={item}>
            {item}
          </a>
        ))}
      </div>

      <h1 className="display hero-title">
        HI, I&apos;M UPASANA
        <img className="sparkle" src={assets.sparkle} alt="" />
      </h1>

      <div className="hero-grid">
        <div className="portrait-stack" aria-hidden="true">
          <img className="paper" src={assets.paper} alt="" />
          <img className="portrait" src={assets.portrait} alt="Upasana portrait" />
        </div>
        <article className="about-copy">
          <h2>A LITTLE ABOUT ME</h2>
          <p className="lede display">The best campaigns don&apos;t just sell, they belong.</p>
          <ul>
            <li>Senior PMM with a strategist&apos;s brain, a designer&apos;s eye and a bias for campaigns that move the needle.</li>
            <li>Leads GTM strategy, positioning, messaging, and data-led storytelling across fintech, AI-native products and cybersecurity.</li>
            <li>Pragmatic optimist. Occasional writer. Polyglot.</li>
            <li>Currently learning perfumery, because great fragrance, like great marketing, is all about what stays with you.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience section">
      <div className="experience-main">
        <div>
          <h2 className="display">My work experience.</h2>
          <p className="years">8 years of practicing as a product strategist and marketer</p>
          <div className="capability-grid">
            {capabilities.map(([title, subtitle]) => (
              <div className="capability" key={title}>
                <strong>{title}</strong>
                <span>{subtitle}</span>
              </div>
            ))}
          </div>
        </div>
        <aside className="resume-cake">
          <img src={assets.cake} alt="Product marketing cake" />
          <a href="#download">Download Resume</a>
        </aside>
      </div>
      <div className="worked-at">
        <div className="logo-row" aria-label="Companies worked at">
          <img src={assets.ibm} alt="IBM" />
          <img src={assets.chase} alt="JPMorgan Chase" />
          <img src={assets.bank} alt="Standard Bank" />
        </div>
        <div>
          <h2 className="display">Worked at</h2>
          <p>+ AI Native Startups (Stealth Mode)</p>
        </div>
      </div>
    </section>
  );
}

function WhatIDo() {
  return (
    <section className="what section" id="work-glance">
      <div className="what-copy">
        <h2 className="display">What I do</h2>
        <p>I translate enterprise complexity into narratives that move revenue. I lead GTM models specializing in fintech, AI-native platforms, and infrastructure.</p>
      </div>
      <div className="what-list">
        <p><b>What I deliver :</b> Clear Positioning, Growth Strategy Actionable GTM</p>
        <p><b>Best For :</b> Enterprise, Category Creation</p>
        <p><b>Speciality :</b> AI & Infrastructure, SaaS, Dev-First</p>
        <p><b>Open to :</b> Senior PMM, Founding PMM, Enterprise GTM Manager Series A-D, Remote/Hybrid, Enterprise</p>
      </div>
    </section>
  );
}

function Framework() {
  return (
    <section className="framework-section section" id="frameworks">
      <h2 className="display">AI-Native<br />Enterprise GTM Framework</h2>
      <div className="phase-grid">
        {framework.map((phase) => (
          <article className="phase-card" key={phase.phase}>
            <h3>{phase.phase}</h3>
            <h4>{phase.title}</h4>
            <ul>
              {phase.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
      <div className="stat-row">
        {stats.map(([label, ...values]) => (
          <div className="stat-card" key={label}>
            <strong>{label}</strong>
            <span>{values.join("    ")}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section className="selected" id="case-studies">
      <div className="selected-inner">
        <h2 className="display">Selected Work</h2>
        <div className="work-grid">
          {work.map((item) => (
            <article className="work-card" key={item.title}>
              <div className={`status ${item.status.toLowerCase()}`}>
                <span />
                {item.status}
              </div>
              <h3>{item.title}</h3>
              <div className="tag-row">
                {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="download">
      <div>
        <h2 className="display">Contact</h2>
        <p>Email : upasanapatnaikd@gmail.com</p>
        <p>Linkedin : upasanapatnaikd@gmail.com</p>
        <p>Substack: upasanapatnaikd@gmail.com</p>
      </div>
      <div>
        <h2 className="display">Download</h2>
        <p>Resume</p>
      </div>
      <div className="yumi">
        <svg className="yumi-arc" viewBox="0 0 180 90" aria-hidden="true">
          <path id="yumi-text-arc" d="M 22 74 A 70 70 0 0 1 158 74" />
          <text>
            <textPath href="#yumi-text-arc" startOffset="50%" textAnchor="middle">
              Yumi says hi!
            </textPath>
          </text>
        </svg>
        <img src={assets.yumi} alt="Yumi says hi" />
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <Experience />
        <WhatIDo />
        <Framework />
        <SelectedWork />
      </main>
      <Footer />
    </>
  );
}
