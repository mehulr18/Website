// V3 — Terminal. Monospace-led, data-forward, warm. Bloomberg-by-way-of-Linear.

const terminalCss = `
.tm { --ink:#1f1a14; --paper:#efe6d3; --paper-2:#e7dcc4; --rule:#3c2f20; --soft:#cfc1a5;
      --accent:#b94823; --green:#3d6b3d; --muted:#7a6a52;
      background:var(--paper); color:var(--ink); width:1280px; min-height:100%;
      font-family:'JetBrains Mono', 'IBM Plex Mono', ui-monospace, monospace;
      font-weight:400; font-size:14px; letter-spacing:0; line-height:1.5; }
.tm .serif { font-family:'Newsreader', Georgia, serif; }
.tm .wrap { padding:32px 56px; }

/* Status bar */
.tm-bar { background:var(--ink); color:var(--paper);
  padding:8px 24px; display:flex; justify-content:space-between; font-size:11px; letter-spacing:.06em; }
.tm-bar .l { display:flex; gap:24px; }
.tm-bar .l span { color:var(--soft); }
.tm-bar .l span b { color:var(--paper); font-weight:400; }
.tm-bar .r { display:flex; gap:24px; }
.tm-bar .r span { color:var(--soft); }
.tm-bar .dot { width:7px; height:7px; border-radius:50%; background:#9bbf6e; display:inline-block; margin-right:6px; vertical-align:middle; }

/* Header path */
.tm-path { padding:14px 24px; border-bottom:1px solid var(--ink); display:flex; align-items:center; gap:16px; font-size:12px; }
.tm-path .prompt { color:var(--accent); font-weight:600; }
.tm-path .file { color:var(--ink); }
.tm-path .file .dim { color:var(--muted); }
.tm-path .right { margin-left:auto; color:var(--muted); font-size:11px; }

/* Hero — ASCII frame */
.tm-hero { padding:48px 56px 56px; border-bottom:1px solid var(--ink); position:relative; }
.tm-hero pre.frame { font-size:12px; line-height:1.2; color:var(--ink); margin:0 0 32px; white-space:pre; }
.tm-hero h1 { font-size:96px; line-height:.95; letter-spacing:-0.03em; margin:0 0 24px; font-weight:500; font-family:'JetBrains Mono', monospace; }
.tm-hero h1 .acc { color:var(--accent); }
.tm-hero h1 .blink { color:var(--accent); animation:tm-blink 1.06s steps(1) infinite; }
@keyframes tm-blink { 50% { opacity:0; } }
.tm-hero .title { font-size:16px; color:var(--ink); margin:0 0 32px; max-width:780px; font-family:'Newsreader', serif; font-style:italic; line-height:1.4; font-weight:400; font-size:22px; }
.tm-hero .meta { display:grid; grid-template-columns:repeat(5,1fr); gap:1px; background:var(--ink); border:1px solid var(--ink); margin-top:16px; }
.tm-hero .meta .cell { background:var(--paper); padding:14px 18px; }
.tm-hero .meta .lab { font-size:10px; letter-spacing:.12em; color:var(--muted); margin-bottom:6px; text-transform:uppercase; }
.tm-hero .meta .val { font-size:18px; font-weight:500; color:var(--ink); }
.tm-hero .meta .val.acc { color:var(--accent); }

/* Section header */
.tm-sec { padding:56px 56px; border-bottom:1px solid var(--ink); }
.tm-sec.alt { background:var(--paper-2); }
.tm-sec-head { display:flex; align-items:center; gap:16px; margin-bottom:36px; }
.tm-sec-head .tag { background:var(--ink); color:var(--paper); padding:4px 10px; font-size:11px; letter-spacing:.1em; }
.tm-sec-head h2 { font-size:32px; margin:0; font-weight:500; letter-spacing:-0.02em; flex:0 0 auto; }
.tm-sec-head .rule { flex:1; height:0; border-top:1px dashed var(--ink); margin-bottom:0; }
.tm-sec-head .count { font-size:11px; color:var(--muted); letter-spacing:.08em; }

/* About */
.tm-about { display:grid; grid-template-columns:1fr 320px; gap:48px; }
.tm-about p { font-size:15px; line-height:1.7; max-width:680px; margin:0 0 16px; font-family:'JetBrains Mono', monospace; }
.tm-about p::before { content:'>  '; color:var(--accent); }
.tm-about .card { border:1px solid var(--ink); padding:18px; background:var(--paper); align-self:start; }
.tm-about .card .h { font-size:10px; letter-spacing:.16em; text-transform:uppercase; color:var(--muted); margin-bottom:10px; padding-bottom:8px; border-bottom:1px dashed var(--ink); }
.tm-about .card dl { margin:0; display:grid; grid-template-columns:90px 1fr; row-gap:8px; column-gap:12px; font-size:12px; }
.tm-about .card dt { color:var(--muted); }
.tm-about .card dd { margin:0; color:var(--ink); }

/* Experience — tabular */
.tm-table { width:100%; border-collapse:collapse; font-size:13px; }
.tm-table thead th { text-align:left; padding:10px 12px; font-size:10px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); border-bottom:1px solid var(--ink); font-weight:500; }
.tm-table tbody tr { border-bottom:1px dashed var(--ink); }
.tm-table tbody tr:last-child { border-bottom:1px solid var(--ink); }
.tm-table tbody td { padding:18px 12px; vertical-align:top; }
.tm-table .when { color:var(--muted); white-space:nowrap; }
.tm-table .role { font-weight:500; font-size:15px; color:var(--ink); }
.tm-table .role .at { color:var(--accent); }
.tm-table .loc { color:var(--muted); font-size:11px; letter-spacing:.08em; text-transform:uppercase; margin-top:4px; }
.tm-table .desc { font-size:13px; line-height:1.6; color:var(--ink); max-width:540px; }
.tm-table .desc ul { margin:0; padding:0; list-style:none; }
.tm-table .desc li { padding-left:14px; position:relative; margin-bottom:4px; }
.tm-table .desc li::before { content:'·'; position:absolute; left:0; color:var(--accent); }

/* Projects */
.tm-grid { display:grid; grid-template-columns:1fr 1fr; gap:0; border-top:1px solid var(--ink); border-left:1px solid var(--ink); }
.tm-proj { border-right:1px solid var(--ink); border-bottom:1px solid var(--ink); padding:24px; background:var(--paper); display:flex; flex-direction:column; min-height:240px; }
.tm-proj .head { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:14px; gap:12px; }
.tm-proj .ix { font-size:11px; color:var(--muted); letter-spacing:.1em; }
.tm-proj .tag { font-size:10px; letter-spacing:.12em; padding:3px 8px; border:1px solid var(--ink); color:var(--ink); text-transform:uppercase; }
.tm-proj h3 { font-size:22px; line-height:1.2; letter-spacing:-0.015em; margin:0 0 12px; font-weight:500; font-family:'JetBrains Mono', monospace; }
.tm-proj p { font-size:13px; line-height:1.6; color:var(--ink); margin:0 0 16px; max-width:480px; }
.tm-proj .foot { margin-top:auto; padding-top:14px; border-top:1px dashed var(--ink); display:flex; justify-content:space-between; align-items:baseline; }
.tm-proj .foot .mt { font-size:11px; color:var(--muted); letter-spacing:.08em; }
.tm-proj .foot .mv { font-size:18px; color:var(--accent); font-weight:500; }

/* Skills — chip grid */
.tm-skills { display:grid; grid-template-columns:repeat(4, 1fr); gap:20px; }
.tm-sk { border:1px solid var(--ink); padding:18px; background:var(--paper); }
.tm-sk h4 { font-size:10px; letter-spacing:.16em; text-transform:uppercase; color:var(--accent); margin:0 0 14px; padding-bottom:10px; border-bottom:1px dashed var(--ink); }
.tm-sk ul { margin:0; padding:0; list-style:none; display:flex; flex-direction:column; gap:6px; }
.tm-sk li { font-size:12px; padding:5px 8px; background:var(--paper-2); border:1px solid var(--soft); color:var(--ink); }

/* Writing — feed */
.tm-feed { font-size:13px; }
.tm-feed .post { display:grid; grid-template-columns:110px 1fr 80px; gap:24px; padding:18px 0; border-bottom:1px dashed var(--ink); align-items:baseline; }
.tm-feed .post:first-child { border-top:1px solid var(--ink); }
.tm-feed .post:last-child { border-bottom:1px solid var(--ink); }
.tm-feed .d { color:var(--muted); font-size:11px; letter-spacing:.06em; }
.tm-feed .t { font-size:16px; font-weight:500; letter-spacing:-0.01em; line-height:1.3; margin:0 0 6px; }
.tm-feed .e { color:var(--muted); font-size:12px; line-height:1.55; max-width:620px; }
.tm-feed .r { color:var(--accent); text-align:right; font-size:11px; letter-spacing:.06em; }

/* CV ticker */
.tm-cv { padding:64px 56px; background:var(--ink); color:var(--paper); border-bottom:1px solid var(--ink); }
.tm-cv .ticker { font-size:11px; color:var(--soft); letter-spacing:.18em; text-transform:uppercase; margin-bottom:24px; display:flex; align-items:center; gap:12px; }
.tm-cv .ticker .dot { width:8px; height:8px; border-radius:50%; background:#9bbf6e; }
.tm-cv h2 { font-size:48px; line-height:1.1; letter-spacing:-0.03em; margin:0 0 32px; font-weight:500; max-width:840px; }
.tm-cv h2 .acc { color:var(--accent); }
.tm-cv .row { display:flex; align-items:center; gap:20px; flex-wrap:wrap; }
.tm-cv a.dl { display:inline-flex; align-items:center; gap:16px; padding:14px 28px; background:var(--accent); color:#fff; text-decoration:none;
  font-family:'JetBrains Mono', monospace; font-size:13px; letter-spacing:.06em; }
.tm-cv a.dl:hover { background:#a13c1f; }
.tm-cv a.dl .arr { font-size:16px; }
.tm-cv .hint { font-size:12px; color:var(--soft); letter-spacing:.06em; }
.tm-cv .hint .kbd { display:inline-block; padding:2px 6px; border:1px solid var(--soft); border-radius:3px; margin:0 3px; color:var(--paper); }

/* Contact form-like */
.tm-contact { display:grid; grid-template-columns:1fr 1fr; gap:48px; }
.tm-contact .lead { font-size:22px; line-height:1.4; font-family:'Newsreader', serif; font-style:italic; max-width:440px; margin:0; font-weight:400; }
.tm-contact .lead .acc { color:var(--accent); font-style:normal; font-family:'JetBrains Mono', monospace; font-size:14px; padding:2px 6px; border:1px solid var(--accent); font-style:normal; margin:0 2px; }
.tm-contact .lines { font-size:13px; }
.tm-contact .line { display:grid; grid-template-columns:100px 1fr; gap:16px; padding:12px 0; border-bottom:1px dashed var(--ink); align-items:baseline; }
.tm-contact .line:first-child { border-top:1px solid var(--ink); }
.tm-contact .line:last-child { border-bottom:1px solid var(--ink); }
.tm-contact .cl { color:var(--muted); font-size:11px; letter-spacing:.1em; text-transform:uppercase; }
.tm-contact .cv { color:var(--ink); }
.tm-contact .cv a { color:var(--ink); text-decoration:none; border-bottom:1px solid var(--soft); }
.tm-contact .cv a:hover { color:var(--accent); border-color:var(--accent); }
.tm-contact .cv .cur { color:var(--accent); margin-right:6px; }

/* Foot */
.tm-foot { padding:18px 24px; background:var(--ink); color:var(--paper); display:flex; justify-content:space-between; font-size:10px; letter-spacing:.1em; }
.tm-foot span { color:var(--soft); }
`;

const TmBar = ({d}) => (
  <div className="tm-bar">
    <div className="l">
      <span><span className="dot"></span><b>OPEN TO INTROS</b></span>
      <span>SECTOR <b>{d.short.toUpperCase()}</b></span>
      <span>EXP <b>{d.yearsExp} YRS</b></span>
      <span>LOC <b>{d.location.toUpperCase()}</b></span>
    </div>
    <div className="r">
      <span>26.04.30 · 09:42 EST</span>
      <span>v.2026.04</span>
    </div>
  </div>
);

const TmPath = ({d}) => (
  <div className="tm-path">
    <span className="prompt">~ $</span>
    <span className="file">cat <span className="dim">/profile/</span>{d.initials.toLowerCase()}<span className="dim">.md</span></span>
    <span className="right">↑ markdown · 380 lines · UTF-8</span>
  </div>
);

const TmHero = ({d}) => {
  const ascii = `┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│   PROFILE · ${d.name.toUpperCase()}${' '.repeat(60 - d.name.length)}│
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘`;
  return (
    <section className="tm-hero">
      <pre className="frame">{ascii}</pre>
      <h1>{d.name.split(' ')[0].toLowerCase()}<span className="acc">.</span>{d.name.split(' ')[1].toLowerCase()}<span className="blink">▌</span></h1>
      <p className="title">{d.intro}</p>
      <div className="meta">
        <div className="cell"><div className="lab">Role</div><div className="val">Research</div></div>
        <div className="cell"><div className="lab">Sector</div><div className="val">Consumer</div></div>
        <div className="cell"><div className="lab">Experience</div><div className="val acc">{d.yearsExp} YRS</div></div>
        <div className="cell"><div className="lab">Coverage</div><div className="val">14 names</div></div>
        <div className="cell"><div className="lab">Status</div><div className="val">Open</div></div>
      </div>
    </section>
  );
};

const TmSecHead = ({tag, title, count}) => (
  <div className="tm-sec-head">
    <span className="tag">{tag}</span>
    <h2>{title}</h2>
    <div className="rule"></div>
    {count && <span className="count">[{count}]</span>}
  </div>
);

const TmAbout = ({d}) => (
  <section className="tm-sec">
    <TmSecHead tag="01 / ABOUT" title="The brief" />
    <div className="tm-about">
      <div>{d.about.map((p,i) => <p key={i}>{p}</p>)}</div>
      <div className="card">
        <div className="h">// vitals</div>
        <dl>
          <dt>Name</dt><dd>{d.name}</dd>
          <dt>Title</dt><dd>{d.title}</dd>
          <dt>Sector</dt><dd>{d.short}</dd>
          <dt>Years</dt><dd>{d.yearsExp}</dd>
          <dt>Location</dt><dd>{d.location}</dd>
          <dt>Email</dt><dd style={{color:'var(--accent)'}}>{d.email}</dd>
          <dt>Status</dt><dd style={{color:'var(--green)'}}>● Open</dd>
        </dl>
      </div>
    </div>
  </section>
);

const TmExperience = ({d}) => (
  <section className="tm-sec alt">
    <TmSecHead tag="02 / EXPERIENCE" title="Where I've been" count={`${d.experience.length} roles`} />
    <table className="tm-table">
      <thead>
        <tr>
          <th style={{width:160}}>Period</th>
          <th style={{width:280}}>Role / Firm</th>
          <th>What I did</th>
        </tr>
      </thead>
      <tbody>
        {d.experience.map((e,i) => (
          <tr key={i}>
            <td className="when">{e.dates}</td>
            <td>
              <div className="role">{e.role}<br/><span className="at">@ {e.company}</span></div>
              <div className="loc">{e.location}</div>
            </td>
            <td>
              <div className="desc">
                <ul>{e.bullets.map((b,j) => <li key={j}>{b}</li>)}</ul>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

const TmEducation = ({d}) => (
  <section className="tm-sec">
    <TmSecHead tag="03 / EDUCATION" title="Where I learned" />
    <table className="tm-table">
      <thead>
        <tr>
          <th style={{width:160}}>Period</th>
          <th style={{width:380}}>Institution</th>
          <th>Programme</th>
        </tr>
      </thead>
      <tbody>
        {d.education.map((e,i) => (
          <tr key={i}>
            <td className="when">{e.dates}</td>
            <td><div className="role">{e.school}</div></td>
            <td><div className="desc">{e.degree}{e.detail && <div style={{color:'var(--muted)', marginTop:6}}>{e.detail}</div>}</div></td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

const TmProjects = ({d}) => (
  <section className="tm-sec alt">
    <TmSecHead tag="04 / PROJECTS" title="Selected work" count={`${d.projects.length} items`} />
    <div className="tm-grid">
      {d.projects.map((p,i) => (
        <div className="tm-proj" key={i}>
          <div className="head">
            <span className="ix">PROJ_{String(i+1).padStart(3,'0')}</span>
            <span className="tag">{p.tag}</span>
          </div>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <div className="foot">
            <span className="mt">Output</span>
            <span className="mv">{p.metric}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const TmSkills = ({d}) => (
  <section className="tm-sec">
    <TmSecHead tag="05 / TOOLKIT" title="What I use" />
    <div className="tm-skills">
      {Object.entries(d.skills).map(([k,v]) => (
        <div className="tm-sk" key={k}>
          <h4>{k}</h4>
          <ul>{v.map((s,i) => <li key={i}>[ {s} ]</li>)}</ul>
        </div>
      ))}
    </div>
  </section>
);

const TmWriting = ({d}) => (
  <section className="tm-sec alt">
    <TmSecHead tag="06 / WRITING" title="Recent posts" count={`${d.blog.length} posts · feed`} />
    <div className="tm-feed">
      {d.blog.map((b,i) => (
        <div className="post" key={i}>
          <div className="d">{b.date}</div>
          <div>
            <h3 className="t">{b.title}</h3>
            <div className="e">{b.excerpt}</div>
          </div>
          <div className="r">[ {b.read} ] →</div>
        </div>
      ))}
    </div>
  </section>
);

const TmCV = () => (
  <section className="tm-cv">
    <div className="ticker"><span className="dot"></span> CV.PDF · 412 KB · UPDATED 2026.04.22</div>
    <h2>The whole résumé, <span className="acc">in one file.</span></h2>
    <div className="row">
      <a className="dl" href="cv.pdf" download>
        $ download cv.pdf <span className="arr">↓</span>
      </a>
      <span className="hint">or press <span className="kbd">⌘</span><span className="kbd">D</span> from anywhere on the page</span>
    </div>
  </section>
);

const TmContact = ({d}) => (
  <section className="tm-sec">
    <TmSecHead tag="07 / CONTACT" title="Reach out" />
    <div className="tm-contact">
      <p className="lead">Reply within a day — typically. <span className="acc">$ ping avery</span> for markets talk, roles, or a paragraph you wanted to argue with.</p>
      <div className="lines">
        {d.social.map((s,i) => (
          <div className="line" key={i}>
            <span className="cl">{s.label}</span>
            <span className="cv"><span className="cur">▸</span><a href={s.href}>{s.handle}</a></span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TmFoot = ({d}) => (
  <footer className="tm-foot">
    <div>© {d.name} · 2026</div>
    <div><span>built static · no tracking · 0 cookies</span></div>
    <div><span>EOF</span></div>
  </footer>
);

const CVTerminal = () => {
  const d = window.profileData;
  return (
    <div className="tm">
      <style>{terminalCss}</style>
      <TmBar d={d} />
      <TmPath d={d} />
      <TmHero d={d} />
      <TmAbout d={d} />
      <TmExperience d={d} />
      <TmEducation d={d} />
      <TmProjects d={d} />
      <TmSkills d={d} />
      <TmWriting d={d} />
      <TmCV />
      <TmContact d={d} />
      <TmFoot d={d} />
    </div>
  );
};

window.CVTerminal = CVTerminal;
