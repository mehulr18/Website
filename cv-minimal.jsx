// V2 — Minimal. Narrow column, lots of whitespace, restrained type.
// Instrument Serif for the name moment + Instrument Sans for body.

const minimalCss = `
.mn { --ink:#1a1815; --paper:#f6f1e7; --muted:#8a7e6c; --rule:#d8cdb9; --accent:#a8462a;
      background:var(--paper); color:var(--ink); width:1280px; min-height:100%;
      font-family:'Instrument Sans', 'Manrope', system-ui, sans-serif;
      font-weight:400; font-size:16px; letter-spacing:-0.005em; }
.mn .col { max-width:680px; margin:0 auto; padding:0 32px; }
.mn .mono { font-family:'JetBrains Mono', ui-monospace, monospace; letter-spacing:0; }
.mn .serif { font-family:'Instrument Serif', 'Newsreader', Georgia, serif; font-weight:400; }

/* Corner mark */
.mn-top { padding:40px 56px; display:flex; justify-content:space-between; align-items:center; }
.mn-top .mark { font-family:'Instrument Serif', serif; font-size:24px; line-height:1; letter-spacing:-0.02em; }
.mn-top .mark sup { font-family:'JetBrains Mono', monospace; font-size:9px; letter-spacing:.18em; vertical-align:top; margin-left:6px; color:var(--muted); }
.mn-top nav { display:flex; gap:28px; font-family:'JetBrains Mono', monospace; font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); }
.mn-top nav span { cursor:pointer; }
.mn-top nav span:hover { color:var(--ink); }

/* Hero — single sentence, lots of air */
.mn-hero { padding:200px 0 220px; }
.mn-hero .label { font-family:'JetBrains Mono', monospace; font-size:11px; letter-spacing:.18em; text-transform:uppercase; color:var(--muted); margin-bottom:48px; display:flex; align-items:center; gap:12px; }
.mn-hero .label .dot { width:8px; height:8px; border-radius:50%; background:var(--accent); display:inline-block; }
.mn-hero h1 { font-family:'Instrument Serif', serif; font-size:88px; line-height:1.02; letter-spacing:-0.035em; font-weight:400; margin:0 0 48px; }
.mn-hero h1 em { font-style:italic; color:var(--accent); }
.mn-hero .sub { font-size:21px; line-height:1.5; color:var(--ink); max-width:560px; margin:0; font-weight:400; }
.mn-hero .sub b { font-weight:500; }

/* Generic section */
.mn-sec { padding:80px 0; }
.mn-sec-head { display:grid; grid-template-columns:120px 1fr; gap:32px; margin-bottom:48px; align-items:baseline; }
.mn-sec-head .num { font-family:'JetBrains Mono', monospace; font-size:11px; letter-spacing:.18em; text-transform:uppercase; color:var(--muted); padding-top:4px; }
.mn-sec-head h2 { font-family:'Instrument Serif', serif; font-size:42px; line-height:1; letter-spacing:-0.025em; font-weight:400; margin:0; }
.mn-sec-head h2 em { font-style:italic; color:var(--accent); }

/* About */
.mn-about { display:grid; grid-template-columns:120px 1fr; gap:32px; }
.mn-about .spacer {}
.mn-about p { font-size:18px; line-height:1.65; margin:0 0 22px; max-width:540px; }
.mn-about p:last-child { margin-bottom:0; }
.mn-about p em { font-style:italic; }

/* Experience — minimal entries */
.mn-list { display:grid; grid-template-columns:120px 1fr; gap:32px; }
.mn-list .spacer {}
.mn-list .items { display:flex; flex-direction:column; gap:36px; }
.mn-item .when { font-family:'JetBrains Mono', monospace; font-size:11px; letter-spacing:.14em; color:var(--muted); margin-bottom:10px; }
.mn-item .role { font-size:20px; line-height:1.35; margin:0 0 4px; font-weight:500; letter-spacing:-0.01em; }
.mn-item .role .at { color:var(--muted); font-weight:400; }
.mn-item .role .at b { color:var(--ink); font-weight:500; }
.mn-item .desc { font-size:16px; line-height:1.55; color:var(--ink); max-width:520px; margin:14px 0 0; }
.mn-item .where { font-family:'JetBrains Mono', monospace; font-size:11px; letter-spacing:.1em; color:var(--muted); margin-top:10px; text-transform:uppercase; }

/* Projects — numbered prose */
.mn-projects { display:grid; grid-template-columns:120px 1fr; gap:32px; }
.mn-projects .items { display:flex; flex-direction:column; }
.mn-proj { display:grid; grid-template-columns:48px 1fr; gap:28px; padding:28px 0; border-top:1px solid var(--rule); }
.mn-proj:last-child { border-bottom:1px solid var(--rule); }
.mn-proj .pn { font-family:'Instrument Serif', serif; font-size:32px; line-height:1; letter-spacing:-0.02em; color:var(--accent); font-style:italic; padding-top:2px; }
.mn-proj h3 { font-family:'Instrument Serif', serif; font-size:26px; line-height:1.15; letter-spacing:-0.02em; font-weight:400; margin:0 0 8px; }
.mn-proj p { font-size:15px; line-height:1.6; color:var(--ink); margin:0 0 10px; max-width:480px; }
.mn-proj .pmeta { font-family:'JetBrains Mono', monospace; font-size:10px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); }

/* Skills — inline prose */
.mn-skills { display:grid; grid-template-columns:120px 1fr; gap:32px; }
.mn-skills .group { margin-bottom:24px; max-width:540px; }
.mn-skills .group:last-child { margin-bottom:0; }
.mn-skills .glab { font-family:'JetBrains Mono', monospace; font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); margin-bottom:6px; }
.mn-skills .gval { font-size:17px; line-height:1.6; }
.mn-skills .gval em { font-style:italic; color:var(--muted); }

/* Writing — tightest list */
.mn-writing { display:grid; grid-template-columns:120px 1fr; gap:32px; }
.mn-writing .items { display:flex; flex-direction:column; }
.mn-post { display:grid; grid-template-columns:80px 1fr 60px; gap:24px; padding:22px 0; border-top:1px solid var(--rule); align-items:baseline; }
.mn-post:last-child { border-bottom:1px solid var(--rule); }
.mn-post .pd { font-family:'JetBrains Mono', monospace; font-size:11px; letter-spacing:.1em; color:var(--muted); }
.mn-post .pt { font-size:17px; line-height:1.4; margin:0; font-weight:500; letter-spacing:-0.005em; }
.mn-post .pr { font-family:'JetBrains Mono', monospace; font-size:10px; letter-spacing:.12em; color:var(--muted); text-align:right; }

/* CV — text link */
.mn-cv { padding:160px 0; text-align:center; }
.mn-cv .label { font-family:'JetBrains Mono', monospace; font-size:11px; letter-spacing:.18em; text-transform:uppercase; color:var(--muted); margin-bottom:36px; }
.mn-cv h2 { font-family:'Instrument Serif', serif; font-size:56px; line-height:1.05; letter-spacing:-0.03em; font-weight:400; margin:0 0 40px; max-width:680px; margin-inline:auto; }
.mn-cv h2 em { font-style:italic; color:var(--accent); }
.mn-cv a { font-family:'Instrument Serif', serif; font-style:italic; font-size:28px; color:var(--ink); text-decoration:none; border-bottom:1px solid var(--ink); padding-bottom:6px; }
.mn-cv a:hover { color:var(--accent); border-color:var(--accent); }
.mn-cv a .arr { font-family:'Instrument Sans', sans-serif; font-style:normal; margin-left:8px; }

/* Contact */
.mn-contact { padding:80px 0 60px; }
.mn-contact .lead { font-family:'Instrument Serif', serif; font-size:36px; line-height:1.15; letter-spacing:-0.025em; font-weight:400; margin:0 0 56px; max-width:560px; }
.mn-contact .lead em { font-style:italic; color:var(--accent); }
.mn-contact ul { list-style:none; margin:0; padding:0; max-width:540px; display:grid; grid-template-columns:1fr; gap:0; }
.mn-contact li { display:grid; grid-template-columns:120px 1fr; gap:16px; padding:14px 0; border-top:1px solid var(--rule); align-items:baseline; }
.mn-contact li:last-child { border-bottom:1px solid var(--rule); }
.mn-contact .cl { font-family:'JetBrains Mono', monospace; font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); }
.mn-contact .cv { font-size:16px; }
.mn-contact .cv a { color:var(--ink); text-decoration:none; }
.mn-contact .cv a:hover { color:var(--accent); }

/* Foot */
.mn-foot { padding:60px 0 80px; display:flex; justify-content:space-between; align-items:center; }
.mn-foot .l, .mn-foot .r { font-family:'JetBrains Mono', monospace; font-size:10px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); }
`;

const MnTop = ({d}) => (
  <div className="mn-top">
    <div className="mark">{d.initials}<sup>2026</sup></div>
    <nav>
      <span>about</span><span>work</span><span>writing</span><span>contact</span>
    </nav>
  </div>
);

const MnHero = ({d}) => (
  <section className="mn-hero">
    <div className="col">
      <div className="label"><span className="dot"></span> Available for new conversations</div>
      <h1>{d.name}.<br/><em>{d.title.toLowerCase()}.</em></h1>
      <p className="sub"><b>I cover consumer and retail equities.</b> {d.intro.split('.').slice(1).join('.').trim()}</p>
    </div>
  </section>
);

const MnSecHead = ({num, title, accent}) => (
  <div className="mn-sec-head">
    <div className="num">— {num}</div>
    <h2>{accent ? <>{title.split(accent)[0]}<em>{accent}</em>{title.split(accent)[1]}</> : title}</h2>
  </div>
);

const MnAbout = ({d}) => (
  <section className="mn-sec">
    <div className="col">
      <MnSecHead num="01" title="About" />
      <div className="mn-about">
        <div className="spacer"></div>
        <div>{d.about.map((p,i) => <p key={i}>{p}</p>)}</div>
      </div>
    </div>
  </section>
);

const MnExperience = ({d}) => (
  <section className="mn-sec">
    <div className="col">
      <MnSecHead num="02" title="Experience" />
      <div className="mn-list">
        <div className="spacer"></div>
        <div className="items">
          {d.experience.map((e,i) => (
            <div className="mn-item" key={i}>
              <div className="when">{e.dates}</div>
              <h3 className="role">{e.role} <span className="at">at <b>{e.company}</b></span></h3>
              <div className="where">{e.location}</div>
              <p className="desc">{e.bullets[0]}.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const MnEducation = ({d}) => (
  <section className="mn-sec">
    <div className="col">
      <MnSecHead num="03" title="Education" />
      <div className="mn-list">
        <div className="spacer"></div>
        <div className="items">
          {d.education.map((e,i) => (
            <div className="mn-item" key={i}>
              <div className="when">{e.dates}</div>
              <h3 className="role">{e.school}</h3>
              <p className="desc" style={{marginTop:8}}>{e.degree}{e.detail ? ` — ${e.detail}` : ''}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const MnProjects = ({d}) => (
  <section className="mn-sec">
    <div className="col">
      <MnSecHead num="04" title="Selected work" accent="work" />
      <div className="mn-projects">
        <div></div>
        <div className="items">
          {d.projects.map((p,i) => (
            <div className="mn-proj" key={i}>
              <div className="pn">{String(i+1).padStart(2,'0')}</div>
              <div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="pmeta">{p.tag} — {p.metric}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const MnSkills = ({d}) => (
  <section className="mn-sec">
    <div className="col">
      <MnSecHead num="05" title="Toolkit" />
      <div className="mn-skills">
        <div></div>
        <div>
          {Object.entries(d.skills).map(([k,v]) => (
            <div className="group" key={k}>
              <div className="glab">{k}</div>
              <div className="gval">{v.join(', ')}.</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const MnWriting = ({d}) => (
  <section className="mn-sec">
    <div className="col">
      <MnSecHead num="06" title="Writing" />
      <div className="mn-writing">
        <div></div>
        <div className="items">
          {d.blog.map((b,i) => (
            <div className="mn-post" key={i}>
              <div className="pd">{b.date}</div>
              <h3 className="pt">{b.title}</h3>
              <div className="pr">{b.read} →</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const MnCV = () => (
  <section className="mn-cv">
    <div className="col">
      <div className="label">— 07 ——— The full document</div>
      <h2>Everything on one page, <em>nicely set.</em></h2>
      <a href="cv.pdf" download>Download CV<span className="arr">→</span></a>
    </div>
  </section>
);

const MnContact = ({d}) => (
  <section className="mn-contact">
    <div className="col">
      <MnSecHead num="08" title="Get in touch" accent="touch" />
      <p className="lead">Reply within a day, usually. <em>Markets, roles, or paragraphs</em> — all welcome.</p>
      <ul>
        {d.social.map((s,i) => (
          <li key={i}>
            <span className="cl">{s.label}</span>
            <span className="cv"><a href={s.href}>{s.handle}</a></span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const MnFoot = ({d}) => (
  <footer className="mn-foot">
    <div className="col" style={{display:'flex', justifyContent:'space-between', padding:'0 32px'}}>
      <div className="l">© {d.name}</div>
      <div className="r">26 / 04</div>
    </div>
  </footer>
);

const CVMinimal = () => {
  const d = window.profileData;
  return (
    <div className="mn">
      <style>{minimalCss}</style>
      <MnTop d={d} />
      <MnHero d={d} />
      <MnAbout d={d} />
      <MnExperience d={d} />
      <MnEducation d={d} />
      <MnProjects d={d} />
      <MnSkills d={d} />
      <MnWriting d={d} />
      <MnCV />
      <MnContact d={d} />
      <MnFoot d={d} />
    </div>
  );
};

window.CVMinimal = CVMinimal;
