// Shared placeholder data for all 3 CV variants.
// User content was gibberish — using a realistic finance-profile placeholder.
// All names, firms, dates, and copy are fictional and intended to be swapped.

window.profileData = {
  name: "Avery Whitman",
  initials: "AW",
  title: "Senior Equity Research Associate",
  short: "Consumer & retail equities",
  location: "New York, NY",
  yearsExp: 7,
  email: "avery@whitman.co",

  intro: "I cover consumer and retail equities at a global investment bank, with a focus on grocers, dollar stores, and the awkward middle of department retail. I model carefully, write a lot, and try to hold conviction longer than the average sell-side note.",

  about: [
    "Seven years across investment banking and the buy-side-adjacent sell-side. Before research I executed M&A and equity capital markets transactions across food, beverage, and specialty retail — about $14B in announced deal value across 22 transactions.",
    "These days my work is split between the model and the page: building quarterly forecasts, going to channel checks, and writing the kind of three-page note I'd actually want to read. I publish a public market journal on the side."
  ],

  experience: [
    {
      dates: "2022 — Present",
      role: "Senior Equity Research Associate",
      company: "Pinegrove Capital",
      location: "New York, NY",
      bullets: [
        "Cover 14 names in consumer staples and discretionary; lead author on 80+ published notes",
        "Built the desk's inventory-days tracker — now used across three sector teams",
        "Initiated coverage on two specialty grocers; both calls outperformed the sub-index by >12% YTD"
      ]
    },
    {
      dates: "2019 — 2022",
      role: "Investment Banking Analyst",
      company: "Halberd & Co.",
      location: "New York, NY",
      bullets: [
        "Executed 11 announced M&A and ECM transactions in food & beverage and specialty retail",
        "Built operating models, comp sets, and DCF valuations for clients ranging from $400M to $9B",
        "Promoted to Senior Analyst at the end of year two (one of three in the class)"
      ]
    },
    {
      dates: "2017 — 2019",
      role: "Summer Analyst → Analyst",
      company: "Marsh Ridge Advisors",
      location: "Boston, MA",
      bullets: [
        "Boutique M&A advisory; staffed on six sell-side mandates in middle-market consumer",
        "Wrote the CIM for what became the firm's largest-ever sale ($740M closing value)"
      ]
    }
  ],

  education: [
    {
      dates: "2015 — 2019",
      school: "University of Pennsylvania — The Wharton School",
      degree: "B.S. in Economics, concentrations in Finance & Statistics",
      detail: "Magna cum laude · GPA 3.82 · Joseph Wharton Scholar"
    },
    {
      dates: "Summer 2018",
      school: "London School of Economics",
      degree: "Visiting student — Behavioral Finance, Microeconomics",
      detail: ""
    }
  ],

  projects: [
    {
      title: "QSR Pricing Power Study",
      tag: "Sector deep-dive",
      desc: "Cross-sectional analysis of menu pricing elasticity across eight quick-service chains, 2019–2025. Pulled scanner data and reconciled to reported same-store sales.",
      metric: "8 chains · 6 years"
    },
    {
      title: "DTC Cohort Unwind",
      tag: "Modeling project",
      desc: "Decomposed retention curves for twelve direct-to-consumer names and modeled CAC payback under three recession scenarios. Findings drove a downgrade on two covered names.",
      metric: "12 names · 3 scenarios"
    },
    {
      title: "Inventory-Days Tracker",
      tag: "Internal tool",
      desc: "Python tool that ingests 10-Q filings, parses inventory and revenue line items, and flags multi-quarter build-ups across the covered universe. Now used by three sector teams.",
      metric: "Python · weekly cron"
    },
    {
      title: "Grocer Channel Check Program",
      tag: "Primary research",
      desc: "Ran a quarterly store-visit program across 40 stores in six MSAs over two years. Findings front-ran two earnings beats and one miss within a meaningful margin.",
      metric: "40 stores · 8 quarters"
    }
  ],

  skills: {
    "Modeling": ["Three-statement models", "DCF / LBO", "Merger models", "Sensitivity & scenario"],
    "Tools": ["Bloomberg Terminal", "FactSet", "Capital IQ", "Excel / VBA", "Python (pandas, requests)", "SQL"],
    "Writing": ["Initiating coverage", "Quarterly previews", "Industry primers", "Earnings notes"],
    "Other": ["Series 7 / 63 / 87", "CFA Level III candidate", "Conversational French"]
  },

  blog: [
    {
      date: "2026 · 04",
      title: "Why the 'recession-proof' grocer is anything but",
      excerpt: "The category is doing fine. The leader is doing better than fine. But the moat looks different up close than it does from the cover of the annual report — and three things are quietly changing.",
      read: "8 min"
    },
    {
      date: "2026 · 02",
      title: "Reading footnotes for a living",
      excerpt: "Three patterns I look for in MD&A that I think most sell-side misses. The most useful is also the dullest, which is probably why it works.",
      read: "5 min"
    },
    {
      date: "2025 · 12",
      title: "Notes on dollar-store unit economics",
      excerpt: "DG vs. DLTR — same shelf, very different math. A short piece on what the four-wall economics actually look like when you back out the corporate allocations.",
      read: "11 min"
    },
    {
      date: "2025 · 10",
      title: "On conviction",
      excerpt: "A short essay on holding a name through a forty-percent drawdown. Half about the model, half about the meeting where you have to defend it.",
      read: "4 min"
    }
  ],

  social: [
    { label: "Email",    handle: "avery@whitman.co",          href: "mailto:avery@whitman.co" },
    { label: "LinkedIn", handle: "linkedin.com/in/averywhitman", href: "#" },
    { label: "Twitter",  handle: "@averywhitman",             href: "#" },
    { label: "GitHub",   handle: "github.com/averywhitman",   href: "#" },
    { label: "Substack", handle: "averywhitman.substack.com", href: "#" }
  ]
};
