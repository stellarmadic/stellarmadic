/**
 * Design reminder — Modern Observatory portfolio: evidence-led, editorial, and precise.
 * Christine Urban is positioned as a customer-facing AI product operator who translates
 * technical ambiguity into adopted business outcomes. Observatory blue, paper, and brass.
 */
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  ExternalLink,
  Linkedin,
  MessageSquareText,
  Orbit,
  Sparkles,
  UsersRound,
  Wrench,
  Compass,
} from "lucide-react";

const resumeUrl = "/manus-storage/christine-urban-ai-pm-resume_bd183046.pdf";

const operatingPrinciples = [
  {
    number: "01",
    title: "Start in the client's reality",
    copy: "I get close to the workflow, the friction, and the people who carry the consequences—then turn the signal into a path forward.",
    Icon: UsersRound,
  },
  {
    number: "02",
    title: "Make the abstract tangible",
    copy: "Prompts, prototypes, requirements, demos, and delivery plans turn uncertain conversations into something a team can test and improve.",
    Icon: Wrench,
  },
  {
    number: "03",
    title: "Translate without flattening",
    copy: "Technical detail belongs in the room. My job is to make its implications clear to the executives, operators, and customers who need to act on it.",
    Icon: MessageSquareText,
  },
  {
    number: "04",
    title: "Stay through adoption",
    copy: "A feature is only the beginning. I help teams connect launch, enablement, feedback, and iteration to the outcome that made the work matter.",
    Icon: Compass,
  },
];

const enterpriseWork = [
  {
    number: "01",
    company: "Turnberry Solutions",
    role: "Technical Consultant · 2024—Present",
    title: "Enterprise cloud & AI deployment leadership",
    summary:
      "Own end-to-end cloud and AI platform delivery—from discovery and scoping through launch and post-go-live iteration—while working directly with CTO, VP, and SVP stakeholders.",
    context: "Enterprise AI coding tool deployment",
    action: "Discovery → roadmap → enablement",
    tags: ["AI coding tools", "Enterprise deployment", "Executive alignment"],
    result: "25,000+ users",
  },
  {
    number: "02",
    company: "Pluralsight Flow",
    role: "Technical Product Enablement · 2021—2023",
    title: "From developer workflow to commercial momentum",
    summary:
      "Paired technical demonstrations, workflow optimization, and enablement with the needs of engineering leaders and non-technical executives across enterprise accounts.",
    context: "Developer workflow & complex sales cycles",
    action: "Demo → workflow guidance → adoption",
    tags: ["Pre-sales consulting", "Developer experience", "Technical enablement"],
    result: "30% sales increase",
  },
  {
    number: "03",
    company: "Phenom",
    role: "Technical Product Enablement · 2023—2024",
    title: "AI adoption across complex organizations",
    summary:
      "Aligned stakeholders around AI-driven deployments, created technical learning paths, and helped customer teams turn new capabilities into everyday operating practice.",
    context: "AI adoption across cross-functional teams",
    action: "Alignment → learning paths → activation",
    tags: ["Change management", "AI solution consulting", "Customer activation"],
    result: "400+ sales professionals",
  },
];

export default function Home() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="portfolio-shell">
      <div className="ambient-grain" aria-hidden="true" />

      <header className="site-nav">
        <a className="wordmark" href="#top" aria-label="Christine Urban portfolio home">
          <img src="/manus-storage/stellarmadic-mark_f7290d17.png" alt="" />
          <span><b>Stellar</b>Madic</span>
        </a>
        <nav aria-label="Primary navigation">
          <button type="button" onClick={() => scrollTo("work")}>Selected work</button>
          <a href="https://www.linkedin.com/in/connectwithchristineurban" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={12} /></a>
        </nav>
        <a className="nav-resume" href={resumeUrl} target="_blank" rel="noreferrer"><Download size={14} /> Résumé</a>
      </header>

      <section className="hero-portfolio" id="top" aria-labelledby="intro-heading">
        <div className="hero-visual" aria-hidden="true" />
        <div className="hero-instrument" aria-hidden="true">
          <span className="instrument-ring ring-a" />
          <span className="instrument-ring ring-b" />
          <span className="instrument-ring ring-c" />
          <span className="instrument-axis axis-a" />
          <span className="instrument-axis axis-b" />
          <span className="instrument-star star-a" />
          <span className="instrument-star star-b" />
          <span className="instrument-star star-c" />
          <div className="instrument-core"><img src="/manus-storage/stellarmadic-mark_f7290d17.png" alt="" /></div>
          <div className="instrument-label label-one">CLIENT REALITY</div>
          <div className="instrument-label label-two">TECHNICAL DEPTH</div>
          <div className="instrument-label label-three">PRACTICAL OUTCOME</div>
        </div>
        <div className="hero-gridline vertical-one" aria-hidden="true" />
        <div className="hero-gridline vertical-two" aria-hidden="true" />
        <div className="hero-content-wrap">
          <p className="kicker hero-kicker"><Sparkles size={14} /> Christine Urban · AI product leader & technical builder</p>
          <h1 id="intro-heading">Helping humans save time for what they do <i>best.</i></h1>
          <p className="hero-intro">
            I turn new technologies into tools people actually use and love.
          </p>
          <div className="hero-actions">
            <button className="primary-action" type="button" onClick={() => scrollTo("work")}>Explore the work <ArrowDownRight size={18} /></button>
            <a className="secondary-action" href={resumeUrl} target="_blank" rel="noreferrer">View résumé <Download size={16} /></a>
          </div>
        </div>
      </section>

      <section className="fit-section" id="fit" aria-labelledby="fit-heading">
        <div className="folio-constellation fit-folio" aria-hidden="true"><span /><span /><span /></div>
        <div className="section-rail"><span>01</span><span className="rail-rule" /><span>HOW I WORK</span></div>
        <div className="fit-heading">
          <p className="kicker">In the room. In the product. In the details.</p>
          <h2 id="fit-heading">Technical enough to build it.<br /><i>Clear enough to move it.</i></h2>
        </div>
        <div className="fit-statement">
          <p>
            The most valuable customer solutions work happens between the technical possibility and the real-world constraint.
            I operate in that space: listening for what a client needs, prototyping a practical answer, aligning the room around
            it, and staying present until it becomes useful.
          </p>
          <div className="statement-sigil"><img src="/manus-storage/stellarmadic-mark_f7290d17.png" alt="" /><Orbit size={25} strokeWidth={1.1} /><span>Translation<br />is a technical skill.</span></div>
        </div>
        <div className="principles">
          {operatingPrinciples.map(({ number, title, copy, Icon }) => (
            <article className="principle-row" key={number}>
              <span className="principle-number">{number}</span>
              <Icon className="principle-icon" size={23} strokeWidth={1.2} aria-hidden="true" />
              <div><h3>{title}</h3><p>{copy}</p></div>
              <ArrowUpRight className="principle-arrow" size={18} strokeWidth={1.3} aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-heading">
        <div className="folio-constellation work-folio" aria-hidden="true"><span /><span /><span /></div>
        <div className="section-rail light"><span>02</span><span className="rail-rule" /><span>SELECTED DELIVERY</span></div>
        <div className="work-header">
          <h2 id="work-heading">Work that earns<br /><i>its adoption.</i></h2>
          <p>Selected enterprise delivery, solution consulting, and enablement work. Each engagement involved translating complex technical capability into a shared customer outcome.</p>
        </div>
        <div className="enterprise-list">
          {enterpriseWork.map((work) => (
            <article className="enterprise-case" key={work.number}>
              <div className="case-number">{work.number}</div>
              <div className="case-company"><p>{work.company}</p><span>{work.role}</span></div>
              <div className="case-main"><div className="case-annotations"><span><b>Context</b>{work.context}</span><span><b>Action</b>{work.action}</span></div><h3>{work.title}</h3><p>{work.summary}</p><div className="case-tags">{work.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              <div className="case-result"><strong>{work.result}</strong><span>documented impact</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-heading">
        <img className="contact-star" src="/manus-storage/stellarmadic-mark_f7290d17.png" alt="" aria-hidden="true" />
        <p className="kicker">03 / LET'S GET PRACTICAL</p>
        <h2 id="contact-heading">Have a complex customer<br />problem worth <i>solving?</i></h2>
        <p>I am at my best with forward-thinking people, ambiguous opportunity, and a tangible outcome to build toward.</p>
        <div className="contact-actions">
          <a className="contact-email" href="mailto:christinesurban@gmail.com">christinesurban@gmail.com <ArrowUpRight size={19} /></a>
          <a className="linkedin-link" href="https://www.linkedin.com/in/connectwithchristineurban" target="_blank" rel="noreferrer"><Linkedin size={17} /> Connect on LinkedIn</a>
        </div>
      </section>

      <footer className="portfolio-footer">
        <a className="wordmark" href="#top" aria-label="Back to top"><img src="/manus-storage/stellarmadic-mark_f7290d17.png" alt="" /><span><b>Stellar</b>Madic</span></a>
        <p>Christine Urban · Technical customer solutions for the AI era.</p>
        <p>© 2026</p>
      </footer>
    </main>
  );
}
