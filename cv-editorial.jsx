// V1 — Editorial. Magazine-style, serif-led, generous leading.
// Newsreader for headlines + serif body, JetBrains Mono for marginalia.

const editorialCss = `
.ed { --ink:#1c1814; --paper:#f3ece0; --paper-2:#ece2d0; --rule:#1c1814;
      --accent:#b6452a; --muted:#6e5e4c; --soft:#d9cdb8;
      background:var(--paper); color:var(--ink); width:1280px; min-height:100%;
      font-family:'Newsreader', 'Source Serif Pro', Georgia, serif;
      font-feature-settings:'liga','dlig','onum'; font-weight:400; }
.ed .mono { font-family:'JetBrains Mono', ui-monospace, monospace; }
.ed .wrap { padding:64px 96px; }

/* Masthead */
.ed-masthead { display:flex; justify-content:space-between; align-items:baseline;
   padding:28px 96px 18px; border-bottom:1px solid var(--ink); }
.ed-masthead .left { font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.18em; text-transform:uppercase; }
.ed-masthead .center { font-family:'Newsreader',serif; font-style:italic; font-size:13px; color:var(--muted); }
.ed-masthead .right { font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.12em; }

/* Hero */
.ed-hero { padding:72px 96px 56px; border-bottom:1px solid var(--ink); position:relative; }
.ed-hero .kicker { font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.22em; text-transform:uppercase; color:var(--accent); margin-bottom:36px; display:flex; align-items:center; gap:12px; }
.ed-hero .kicker::before { content:''; width:36px; height:1px; background:var(--accent); display:inline-block; }
.ed-hero h1 { font-size:104px; line-height:.95; letter-spacing:-0.03em; font-weight:500; margin:0 0 28px; max-width:1000px; }
.ed-hero h1 em { font-style:italic; font-weight:400; color:var(--accent); }
.ed-hero .lede { font-size:24px; line-height:1.45; max-width:760px; color:var(--ink); font-weight:400; }
.ed-hero .lede::first-letter { font-size:1.05em; }
.ed-hero .meta-row { display:flex; gap:48px; margin-top:48px; padding-top:24px; border-top:1px solid var(--soft); }
.ed-hero .meta { font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); }
.ed-hero .meta b { color:var(--ink); font-weight:500; display:block; margin-top:6px; font-size:13px; letter-spacing:.08em; }

/* Section header pattern */
.ed-sec { padding:72px 96px; border-bottom:1px solid var(--ink); }
.ed-sec.alt { background:var(--paper-2); }
.ed-sec-head { display:flex; align-items:baseline; gap:24px; margin-bottom:44px; }
.ed-sec-num { font-family:'JetBrains Mono',monospace; font-size:13px; letter-spacing:.15em; color:var(--accent); }
.ed-sec-title { font-family:'Newsreader',serif; font-size:42px; font-style:italic; font-weight:400; letter-spacing:-0.02em; margin:0; flex:1; }
.ed-sec-dash { flex:1; height:1px; background:var(--ink); margin-bottom:14px; }

/* About — drop cap two-col */
.ed-about { display:grid; grid-template-columns:1fr 1fr; gap:56px; }
.ed-about p { font-size:19px; line-height:1.6; margin:0 0 18px; max-width:520px; }
.ed-about p:first-of-type::first-letter {
  float:left; font-size:88px; line-height:.85; padding:6px 12px 0 0; font-style:italic; color:var(--accent); font-weight:500; }
.ed-about .photo { width:100%; aspect-ratio:4/5;
  background:repeating-linear-gradient(135deg, var(--soft) 0 10px, #cdbfa5 10px 20px);
  display:flex; align-items:flex-end; padding:18px;
  font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:.15em; text-transform:uppercase; color:#6e5e4c; }

/* Experience — left date / right block, hairline divided */
.ed-exp { display:flex; flex-direction:column; }
.ed-row { display:grid; grid-template-columns:200px 1fr; gap:48px; padding:32px 0; border-top:1px solid var(--soft); }
.ed-row:first-child { border-top:1px solid var(--ink); }
.ed-row .when { font-family:'JetBrains Mono',monospace; font-size:12px; letter-spacing:.12em; color:var(--muted); padding-top:6px; }
.ed-row .role { font-size:26px; line-height:1.2; margin:0 0 4px; letter-spacing:-0.01em; font-weight:500; }
.ed-row .role em { font-style:italic; color:var(--accent); font-weight:400; }
.ed-row .where { font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:var(--muted); margin-bottom:14px; }
.ed-row ul { margin:14px 0 0; padding:0; list-style:none; }
.ed-row li { font-size:17px; line-height:1.55; padding-left:22px; position:relative; margin-bottom:8px; max-width:680px; }
.ed-row li::before { content:'§'; position:absolute; left:0; top:0; color:var(--accent); font-style:italic; }

/* Projects — index grid */
.ed-projects { display:grid; grid-template-columns:1fr 1fr; gap:0; border-top:1px solid var(--ink); }
.ed-project { padding:36px 36px 36px 0; border-bottom:1px solid var(--soft); border-right:1px solid var(--soft); }
.ed-project:nth-child(even) { padding-left:36px; padding-right:0; border-right:none; }
.ed-project:nth-last-child(-n+2) { border-bottom:none; }
.ed-project .ptag { font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:.18em; text-transform:uppercase; color:var(--accent); margin-bottom:14px; }
.ed-project h3 { font-size:30px; line-height:1.15; margin:0 0 16px; font-weight:500; letter-spacing:-0.01em; }
.ed-project p { font-size:16px; line-height:1.6; color:var(--ink); margin:0 0 18px; max-width:480px; }
.ed-project .pmetric { font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.12em; color:var(--muted); }

/* Skills — small caps groups */
.ed-skills { display:grid; grid-template-columns:repeat(4,1fr); gap:36px; }
.ed-skill h4 { font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.18em; text-transform:uppercase; color:var(--accent); margin:0 0 18px; padding-bottom:10px; border-bottom:1px solid var(--ink); }
.ed-skill ul { list-style:none; margin:0; padding:0; }
.ed-skill li { font-size:16px; line-height:1.7; font-style:italic; }

/* Writing — list w/ excerpts */
.ed-writing .ed-post { display:grid; grid-template-columns:120px 1fr 140px; gap:40px; padding:28px 0; border-top:1px solid var(--soft); align-items:baseline; }
.ed-writing .ed-post:first-child { border-top:1px solid var(--ink); }
.ed-writing .pdate { font-family:'JetBrains Mono',monospace; font-size:12px; letter-spacing:.1em; color:var(--muted); }
.ed-writing .ptitle { font-size:24px; line-height:1.25; margin:0 0 10px; font-weight:500; letter-spacing:-0.01em; }
.ed-writing .ptitle em { color:var(--accent); font-style:italic; font-weight:400; }
.ed-writing .pex { font-size:16px; line-height:1.55; color:var(--muted); max-width:680px; margin:0; }
.ed-writing .pread { font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.1em; color:var(--muted); text-align:right; }

/* CV CTA */
.ed-cta { padding:88px 96px; text-align:center; background:var(--ink); color:var(--paper); border-bottom:1px solid var(--ink); }
.ed-cta .kicker { font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.22em; text-transform:uppercase; color:var(--accent); margin-bottom:24px; }
.ed-cta h2 { font-size:64px; line-height:1.05; margin:0 0 32px; font-weight:500; letter-spacing:-0.02em; max-width:780px; margin-inline:auto; }
.ed-cta h2 em { font-style:italic; color:var(--accent); }
.ed-cta a.btn { display:inline-flex; align-items:center; gap:14px; padding:18px 36px; border:1px solid var(--paper); color:var(--paper); text-decoration:none;
  font-family:'JetBrains Mono',monospace; font-size:13px; letter-spacing:.18em; text-transform:uppercase; }
.ed-cta a.btn .arr { display:inline-block; transform:translateY(-1px); }
.ed-cta a.btn:hover { background:var(--accent); border-color:var(--accent); }

/* Contact */
.ed-contact-grid { display:grid; grid-template-columns:1fr 1fr; gap:60px; }
.ed-contact-grid .lead { font-size:36px; line-height:1.2; font-style:italic; max-width:480px; margin:0; font-weight:400; letter-spacing:-0.01em; }
.ed-contact-grid .lead em { color:var(--accent); }
.ed-contact-grid ul { list-style:none; margin:0; padding:0; }
.ed-contact-grid li { display:grid; grid-template-columns:120px 1fr; gap:16px; padding:14px 0; border-bottom:1px solid var(--soft); align-items:baseline; }
.ed-contact-grid .clab { font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.15em; text-transform:uppercase; color:var(--muted); }
.ed-contact-grid .cval { font-size:18px; }
.ed-contact-grid .cval a { color:var(--ink); text-decoration:none; border-bottom:1px solid var(--ink); padding-bottom:2px; }
.ed-contact-grid .cval a:hover { color:var(--accent); border-color:var(--accent); }

/* Colophon */
.ed-colophon { padding:32px 96px; display:flex; justify-content:space-between; align-items:center; background:var(--paper-2); }
.ed-colophon .l, .ed-colophon .r { font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:.15em; text-transform:uppercase; color:var(--muted); }
.ed-colophon .c { font-family:'Newsreader',serif; font-style:italic; font-size:13px; color:var(--muted); }
`;

const EdMasthead = () => (
  <div className="ed-masthead">
    <div className="left">Vol. VII · No. 04 · MMXXVI</div>
    <div className="center">A working portfolio of notes, models, and trades of mind</div>
    <div className="right">№ 026</div>
  </div>
);

const EdHero = ({d}) => (
  <header className="ed-hero">
    <div className="kicker">Portfolio of {d.name}</div>
    <h1>{d.name}.<br/><em>{d.title.toLowerCase()}.</em></h1>
    <p className="lede">{d.intro}</p>
    <div className="meta-row">
      <div className="meta">Now <b>{d.title}</b></div>
      <div className="meta">Based <b>{d.location}</b></div>
      <div className="meta">Coverage <b>{d.short}</b></div>
      <div className="meta">Experience <b>{d.yearsExp} years</b></div>
    </div>
  </header>
);

const EdSecHead = ({num, title}) => (
  <div className="ed-sec-head">
    <div className="ed-sec-num">§ {num}</div>
    <h2 className="ed-sec-title">{title}</h2>
    <div className="ed-sec-dash"></div>
  </div>
);

const EdAbout = ({d}) => (
  <section className="ed-sec">
    <EdSecHead num="01" title="The brief" />
    <div className="ed-about">
      <div>
        {d.about.map((p,i) => <p key={i}>{p}</p>)}
      </div>
      <div className="photo">[ portrait — drop a 4:5 photo here ]</div>
    </div>
  </section>
);

const EdExperience = ({d}) => (
  <section className="ed-sec alt">
    <EdSecHead num="02" title="Experience" />
    <div className="ed-exp">
      {d.experience.map((e,i) => (
        <div className="ed-row" key={i}>
          <div className="when">{e.dates}</div>
          <div>
            <h3 className="role">{e.role} <em>at {e.company}</em></h3>
            <div className="where">{e.location}</div>
            <ul>{e.bullets.map((b,j) => <li key={j}>{b}</li>)}</ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const EdEducation = ({d}) => (
  <section className="ed-sec">
    <EdSecHead num="03" title="Education" />
    <div className="ed-exp">
      {d.education.map((e,i) => (
        <div className="ed-row" key={i}>
          <div className="when">{e.dates}</div>
          <div>
            <h3 className="role">{e.school}</h3>
            <div className="where" style={{marginBottom:0, fontFamily:'Newsreader, serif', fontStyle:'italic', fontSize:18, textTransform:'none', letterSpacing:0, color:'var(--ink)', marginTop:6}}>{e.degree}</div>
            {e.detail && <div className="where" style={{marginTop:8}}>{e.detail}</div>}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const EdProjects = ({d}) => (
  <section className="ed-sec alt">
    <EdSecHead num="04" title="Selected work" />
    <div className="ed-projects">
      {d.projects.map((p,i) => (
        <div className="ed-project" key={i}>
          <div className="ptag">{p.tag}</div>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <div className="pmetric">→ {p.metric}</div>
        </div>
      ))}
    </div>
  </section>
);

const EdSkills = ({d}) => (
  <section className="ed-sec">
    <EdSecHead num="05" title="Toolkit" />
    <div className="ed-skills">
      {Object.entries(d.skills).map(([k,v]) => (
        <div className="ed-skill" key={k}>
          <h4>{k}</h4>
          <ul>{v.map((s,i) => <li key={i}>{s}</li>)}</ul>
        </div>
      ))}
    </div>
  </section>
);

const EdWriting = ({d}) => (
  <section className="ed-sec alt">
    <EdSecHead num="06" title="Recent writing" />
    <div className="ed-writing">
      {d.blog.map((b,i) => (
        <div className="ed-post" key={i}>
          <div className="pdate">{b.date}</div>
          <div>
            <h3 className="ptitle">{b.title.includes("'") ? <>{b.title.split("'")[0]}<em>'{b.title.split("'")[1]}'</em>{b.title.split("'")[2]}</> : b.title}</h3>
            <p className="pex">{b.excerpt}</p>
          </div>
          <div className="pread">{b.read} read →</div>
        </div>
      ))}
    </div>
  </section>
);

const EdCTA = () => (
  <section className="ed-cta">
    <div className="kicker">The document itself</div>
    <h2>The full CV, in <em>one tidy PDF</em>.</h2>
    <a className="btn" href="cv.pdf" download>
      Download CV <span className="arr">→</span>
    </a>
  </section>
);

const EdContact = ({d}) => (
  <section className="ed-sec">
    <EdSecHead num="07" title="Get in touch" />
    <div className="ed-contact-grid">
      <p className="lead">If you'd like to talk about <em>consumer markets,</em> a role, or a paragraph in something I wrote — I usually reply within a day.</p>
      <ul>
        {d.social.map((s,i) => (
          <li key={i}>
            <span className="clab">{s.label}</span>
            <span className="cval"><a href={s.href}>{s.handle}</a></span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const EdColophon = ({d}) => (
  <footer className="ed-colophon">
    <div className="l">© {d.name} · MMXXVI</div>
    <div className="c">Set in Newsreader and JetBrains Mono</div>
    <div className="r">Hand-built · No frameworks</div>
  </footer>
);

const CVEditorial = () => {
  const d = window.profileData;
  return (
    <div className="ed">
      <style>{editorialCss}</style>
      <EdMasthead />
      <EdHero d={d} />
      <EdAbout d={d} />
      <EdExperience d={d} />
      <EdEducation d={d} />
      <EdProjects d={d} />
      <EdSkills d={d} />
      <EdWriting d={d} />
      <EdCTA />
      <EdContact d={d} />
      <EdColophon d={d} />
    </div>
  );
};

window.CVEditorial = CVEditorial;
