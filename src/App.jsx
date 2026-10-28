import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Check,
  ChevronLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  GraduationCap,
  Heart,
  Lightbulb,
  Mail,
  Menu,
  MessageCircle,
  Network,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { certifications, education, experience } from "./data/experience.js";
import { projects } from "./data/projects.js";
import { skills } from "./data/skills.js";

const contactLinks = [
  { label: "Email", value: "joforge19@gmail.com", href: "mailto:joforge19@gmail.com", icon: Mail },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/josephnjoroge-problemsolver",
    href: "https://linkedin.com/in/josephnjoroge-problemsolver",
    icon: BriefcaseBusiness,
  },
  { label: "GitHub", value: "github.com/Josebrown92", href: "https://github.com/Josebrown92", icon: Code2 },
  { label: "WhatsApp", value: "Message on WhatsApp", href: "https://wa.me/254114169307", icon: MessageCircle },
];

const navigation = [
  { label: "Home", to: "/#home" },
  { label: "Projects", to: "/#projects" },
  { label: "Skills & Tools", to: "/#skills" },
  { label: "About Me", to: "/about" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
];

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
}

function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const projectId = pathname.startsWith("/projects/") ? pathname.split("/")[2] : null;
    const project = projects.find((item) => item.id === projectId);
    const pageTitle = project
      ? `${project.name} Case Study | TechStrategist`
      : ({
          "/": "TechStrategist | Joseph Njoroge",
          "/about": "About Me | TechStrategist",
          "/projects": "Projects | TechStrategist",
          "/experience": "Experience | TechStrategist",
          "/contact": "Contact | TechStrategist",
        }[pathname] || "Page Not Found | TechStrategist");
    const description = project
      ? project.description
      : "TechStrategist — Joseph Njoroge's portfolio in technology, practical digital solutions, and digital marketing.";
    document.title = pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [pathname]);

  return null;
}

function Brand({ compact = false }) {
  return (
    <Link className="brand" to="/" aria-label="TechStrategist home">
      <span className="brand-mark" aria-hidden="true">TS</span>
      <span className="brand-copy">
        <strong>TechStrategist</strong>
        {!compact && <small>Technology meets strategy.</small>}
      </span>
    </Link>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setMenuOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <nav className="nav-wrap page-width" aria-label="Main navigation">
        <Brand compact />
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div id="primary-navigation" className={`nav-content${menuOpen ? " is-open" : ""}`}>
          <div className="nav-links">
            {navigation.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className={location.pathname === to || (to === "/#home" && location.pathname === "/") ? "nav-link is-current" : "nav-link"}
                aria-current={location.pathname === to ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
          <Link className="button button-outline nav-cta" to="/contact" onClick={() => setMenuOpen(false)}>
            Get in touch <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Eyebrow({ children }) {
  return <p className="eyebrow"><span aria-hidden="true" />{children}</p>;
}

function PortraitCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const frames = [
    { src: "/profile.jpeg", position: "50% 34%" },
    { src: "/portrait-main.jpeg", position: "50% 32%" },
    { src: "/portrait-monochrome.webp", position: "50% 24%" },
  ];

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (paused || reducedMotion.matches) return undefined;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((current) => (current + 1) % frames.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [paused, active, frames.length]);

  const move = (offset) => {
    setActive((current) => (current + offset + frames.length) % frames.length);
  };

  return (
    <div
      className="portrait-carousel"
      aria-label="Portrait carousel with three supplied photos."
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="hero-lightning carousel-bolt-top-left" aria-hidden="true"><LightningBranches /></div>
      <div className="hero-lightning carousel-bolt-top-right" aria-hidden="true"><LightningBranches /></div>
      <div className="hero-lightning carousel-bolt-bottom-left" aria-hidden="true"><LightningBranches /></div>
      <div className="hero-lightning carousel-bolt-bottom-right" aria-hidden="true"><LightningBranches /></div>
      <div className="portrait-orbit orbit-one" aria-hidden="true" />
      <div className="portrait-orbit orbit-two" aria-hidden="true" />
      <div className="portrait-frame">
        {frames.map((frame, index) => (
          <img
            key={frame.src}
            className={`portrait-photo${index === active ? " is-active" : ""}`}
            src={frame.src}
            alt={index === active ? "Portrait of Joseph Njoroge" : ""}
            aria-hidden={index !== active}
            style={{ objectPosition: frame.position }}
            fetchpriority={index === 0 ? "high" : "low"}
          />
        ))}
        <div className="portrait-caption">
          <span>Joseph Njoroge</span>
          <small>Technology meets strategy.</small>
        </div>
        <button className="carousel-control carousel-prev" type="button" onClick={() => move(-1)} aria-label="Show previous portrait">
          <ChevronLeft size={20} />
        </button>
        <button className="carousel-control carousel-next" type="button" onClick={() => move(1)} aria-label="Show next portrait">
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="carousel-dots" aria-label={`Portrait ${active + 1} of ${frames.length}`}>
        {frames.map((frame, index) => (
          <button
            key={frame.src}
            className={`carousel-dot${index === active ? " is-active" : ""}`}
            type="button"
            aria-label={`Show portrait ${index + 1}`}
            aria-pressed={index === active}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
}

function LightningBranches() {
  return (
    <svg className="lightning-branches" viewBox="0 0 150 330" preserveAspectRatio="none">
      <path d="M75 91 45 70 60 91 26 104M78 127 112 112 96 132 124 144M64 184 35 171 48 190 20 207" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="hero-light-trails" />
      </div>
      <div className="hero-grid page-width">
        <div className="hero-copy">
          <Eyebrow>Technology meets strategy</Eyebrow>
          <h1>Turning ideas into <span>digital solutions.</span></h1>
          <p className="hero-intro">
            I'm a technology and digital marketing professional in development, focused on building practical solutions, improving online visibility, and helping businesses grow in the digital space.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/#projects">Explore my work <ArrowRight size={17} /></Link>
            <Link className="button button-quiet" to="/contact">Contact me <Mail size={16} /></Link>
          </div>
          <div className="capability-line" aria-label="Build, Market, Grow">
            <span><Code2 size={17} />Build</span>
            <i aria-hidden="true" />
            <span><ChartNoAxesCombined size={17} />Market</span>
            <i aria-hidden="true" />
            <span><ArrowUpRight size={17} />Grow</span>
          </div>
        </div>
        <PortraitCarousel />
      </div>
      <a className="scroll-cue" href="#projects" aria-label="Scroll to featured projects"><ArrowDown size={16} /></a>
    </section>
  );
}

function ProjectPreview({ project }) {
  const PreviewIcon = project.id === "ict-quest" ? GraduationCap : project.id === "image-to-pdf" ? Sparkles : Network;
  return (
    <div className={`project-preview preview-${project.id}`} role="img" aria-label="Illustrative project preview; an actual screenshot was not supplied">
      <div className="preview-toolbar"><span /><span /><span /><b>{project.name}</b></div>
      <div className="preview-art">
        <div className="preview-symbol"><PreviewIcon size={34} strokeWidth={1.5} /></div>
        <div className="preview-lines"><i /><i /><i /></div>
        <div className="preview-dots"><i /><i /><i /></div>
      </div>
      <span className="preview-disclaimer">Illustrative preview · screenshot not supplied</span>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectPreview project={project} />
      <div className="project-content">
        <div className="project-heading">
          <span className="project-number">{project.number}</span>
          <span className="project-category">{project.category}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="project-status"><span className="status-dot" />{project.status}</div>
        <div className="project-actions">
          <Link className="text-link" to={`/projects/${project.id}`}>View case study <ArrowRight size={15} /></Link>
          <a className="icon-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} website`}>
            <ExternalLink size={17} />
          </a>
        </div>
      </div>
    </article>
  );
}

function ProjectsSection() {
  return (
    <section className="section-block" id="projects">
      <div className="page-width">
        <div className="section-heading">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2>Real projects. <span>Practical solutions.</span></h2>
          </div>
          <p>Work in technology and digital strategy, with project status and details presented transparently.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  );
}

function SkillIcon({ name }) {
  const icons = {
    code: Code2,
    megaphone: MessageCircle,
    chart: ChartNoAxesCombined,
    lightbulb: Lightbulb,
  };
  const Icon = icons[name] || BrainCircuit;
  return <Icon size={20} aria-hidden="true" />;
}

function SkillsSection() {
  return (
    <section className="section-block section-tint" id="skills">
      <div className="page-width">
        <div className="section-heading">
          <div>
            <Eyebrow>Skills & tools</Eyebrow>
            <h2>Tools & skills <span>I use.</span></h2>
          </div>
          <p>A growing mix of technology, digital strategy, and problem-solving skills. No proficiency scores—just a clear view of where I'm learning and practising.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.title}>
              <div className="skill-card-heading"><span className="skill-icon"><SkillIcon name={skill.icon} /></span><span>{skill.status}</span></div>
              <h3>{skill.title}</h3>
              <ul>{skill.items.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="section-block" id="about-preview">
      <div className="page-width about-preview">
        <div className="about-preview-photo">
          <img src="/profile.jpeg" alt="Portrait of Joseph Njoroge" loading="lazy" />
          <span className="photo-caption">Curiosity into capability.</span>
        </div>
        <div className="about-preview-copy">
          <Eyebrow>About me</Eyebrow>
          <h2>Curiosity into <span>capability.</span></h2>
          <p>I'm a technology and digital marketing professional in development, focused on turning ideas and everyday challenges into practical digital solutions.</p>
          <p>My journey brings together ongoing ICT studies, hands-on project building, and an interest in helping businesses make better use of digital tools.</p>
          <div className="focus-panel">
            <strong><Sparkles size={16} /> Current focus</strong>
            <span>Diploma in ICT <i>·</i> Practical projects <i>·</i> Digital marketing</span>
          </div>
          <Link className="text-link" to="/about">More about my journey <ArrowRight size={15} /></Link>
        </div>
      </div>
    </section>
  );
}

function FocusStrip() {
  const values = [
    { title: "Continuous learning", description: "Build skills. Create opportunities.", icon: Lightbulb },
    { title: "Problem solving", description: "Turn challenges into solutions.", icon: BrainCircuit },
    { title: "Digital growth", description: "Build brands. Create value.", icon: ChartNoAxesCombined },
    { title: "Community impact", description: "Support others. Grow together.", icon: Heart },
  ];
  return (
    <section className="values-section">
      <div className="page-width values-grid">
        <div className="values-intro"><Eyebrow>My values</Eyebrow><h2>What drives me</h2><p>Learning, practical problem-solving, and using technology to create real value—while growing alongside others.</p></div>
        {values.map(({ title, description, icon: Icon }) => (
          <div className="value-item" key={title}><span><Icon size={20} /></span><strong>{title}</strong><small>{description}</small></div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-main">
        <div className="footer-brand"><Brand /><p>Practical digital solutions and thoughtful strategy for a connected world.</p></div>
        <div className="footer-nav"><strong>Explore</strong>{navigation.slice(0, 5).map((item) => <Link key={item.label} to={item.to}>{item.label}</Link>)}</div>
        <div className="footer-social"><strong>Connect</strong>{contactLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}><Icon size={15} />{label}</a>)}</div>
      </div>
      <div className="page-width footer-bottom"><span>© {new Date().getFullYear()} Joseph Njoroge. All rights reserved.</span><span>Turning ideas into digital solutions.</span></div>
    </footer>
  );
}

function PageIntro({ label, title, lead }) {
  return <div className="page-width page-intro"><Eyebrow>{label}</Eyebrow><h1>{title}</h1>{lead && <p>{lead}</p>}</div>;
}

function Home() {
  return <><Hero /><ProjectsSection /><SkillsSection /><AboutPreview /><FocusStrip /><ExperienceSummary /><ContactSection /></>;
}

function AboutPage() {
  return (
    <main className="inner-page">
      <PageIntro label="About me" title={<>Curiosity into <span>capability.</span></>} lead="I'm a technology and digital marketing professional in development, focused on turning ideas and everyday challenges into practical digital solutions." />
      <div className="page-width about-page-grid">
        <div className="about-page-image"><img src="/profile.jpeg" alt="Portrait of Joseph Njoroge" /><div className="image-caption">Joseph Njoroge <span>TechStrategist</span></div></div>
        <div className="about-story">
          <h2>The journey behind TechStrategist</h2>
          <p>My journey brings together ongoing ICT studies, hands-on project building, and an interest in helping businesses make better use of digital tools.</p>
          <p>I'm pursuing a Diploma in ICT at Jolearn Training College. Alongside my studies, I build practical projects and explore how technology and digital marketing can work together.</p>
          <p>TechStrategist represents the professional direction I'm building: combining technical understanding with digital strategy to solve practical problems and create useful outcomes.</p>
          <div className="focus-panel focus-panel-large"><strong><Sparkles size={17} /> Current focus</strong><ul><li>Diploma in ICT — Module 1</li><li>Practical project building</li><li>Digital marketing and business visibility</li></ul></div>
          <Link className="button button-primary" to="/projects">Explore my projects <ArrowRight size={16} /></Link>
        </div>
      </div>
      <FocusStrip />
    </main>
  );
}

function ProjectsPage() {
  return (
    <main className="inner-page">
      <PageIntro label="Projects" title={<>Work in progress.<br /><span>Built with purpose.</span></>} lead="A closer look at technology and digital strategy projects. Details are kept to what can be verified; missing outcomes and implementation notes are clearly marked." />
      <ProjectsSection />
    </main>
  );
}

function ProjectCaseStudy() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return <main className="inner-page"><PageIntro label="Case study" title="Project not found" lead="That project does not exist in this portfolio." /><div className="page-width"><Link className="text-link" to="/projects"><ArrowLeft size={15} /> Back to projects</Link></div></main>;
  }

  return (
    <main className="inner-page case-study-page">
      <div className="page-width">
        <Link className="back-link" to="/projects"><ArrowLeft size={15} /> All projects</Link>
        <PageIntro label={`${project.number} · ${project.category}`} title={<>{project.name}<span>.</span></>} lead={project.description} />
        <div className="case-study-layout">
          <article className="case-study-content">
            <section><h2>Problem</h2><p>{project.problem}</p></section>
            <section><h2>Objective</h2><p>Present the purpose of this project clearly and make its current public status easy to review.</p></section>
            <section><h2>Approach & implementation</h2><p>{project.approach}</p><ul>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></section>
            <section><h2>Outcome</h2><p>{project.outcome}</p></section>
            <section className="details-pending"><h2>Details to complete</h2><p>Confirm project requirements, individual contributions, implementation details, and any measurable outcomes before adding them to this case study.</p></section>
          </article>
          <aside className="case-study-aside"><span className="status-label"><span className="status-dot" />{project.status}</span><p>{project.statusDetail}</p><a className="button button-primary" href={project.url} target="_blank" rel="noopener noreferrer">Visit project <ExternalLink size={16} /></a><ProjectPreview project={project} /></aside>
        </div>
      </div>
    </main>
  );
}

function ExperienceSummary() {
  return (
    <section className="section-block section-tint" id="experience">
      <div className="page-width">
        <div className="section-heading"><div><Eyebrow>Experience & education</Eyebrow><h2>Learning, building <span>& contributing.</span></h2></div><Link className="text-link" to="/experience">View background <ArrowRight size={15} /></Link></div>
        <div className="summary-grid">
          <article className="summary-card"><span className="summary-icon"><BriefcaseBusiness size={19} /></span><div><h3>Lead Marketing Strategist</h3><p>JoForge Studio · dates and responsibilities to confirm</p></div></article>
          <article className="summary-card"><span className="summary-icon"><GraduationCap size={19} /></span><div><h3>Diploma in ICT — Module 1</h3><p>Jolearn Training College · ongoing</p></div></article>
        </div>
      </div>
    </section>
  );
}

function ExperiencePage() {
  return (
    <main className="inner-page">
      <PageIntro label="Experience" title={<>A foundation for <span>what's next.</span></>} lead="An honest overview of current professional direction, ongoing education, and details still to be confirmed." />
      <div className="page-width experience-page-grid">
        <section className="content-panel"><div className="panel-title"><BriefcaseBusiness size={19} /><h2>Experience</h2></div><div className="timeline">{experience.map((role) => <article className="timeline-item" key={role.title}><span className="timeline-marker" /><h3>{role.title}</h3><p className="timeline-place">{role.organization} · {role.dates}</p><p>{role.description}</p></article>)}</div></section>
        <section className="content-panel"><div className="panel-title"><GraduationCap size={19} /><h2>Education</h2></div>{education.map((item) => <article className="education-item" key={item.title}><span className="timeline-marker" /><h3>{item.title}</h3><p>{item.institution}</p><span className="education-status">{item.status}</span></article>)}</section>
        <section className="content-panel credential-panel"><div className="panel-title"><ShieldCheck size={19} /><h2>Certifications & training</h2></div>{certifications.length ? certifications.map((item) => <p key={item.name}>{item.name} — {item.status}</p>) : <p>No credentials are listed yet. Add only official titles, providers, and completion statuses after they have been confirmed.</p>}</section>
      </div>
    </main>
  );
}

function ContactDetails() {
  return (
    <div className="contact-details">
      <h2>Let's start a conversation.</h2>
      <p>Whether you're hiring, looking for digital solutions, or interested in collaborating, get in touch.</p>
      {contactLinks.map(({ label, value, href, icon: Icon }) => (
        <a className="contact-detail" key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
          <span><Icon size={18} /></span><span><small>{label}</small><strong>{value}</strong></span><ArrowUpRight size={15} />
        </a>
      ))}
    </div>
  );
}

function ContactForm() {
  const [feedback, setFeedback] = useState("");

  function submitEnquiry(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const enquiry = formData.get("enquiry");
    const message = formData.get("message");
    const subject = encodeURIComponent(`${enquiry}: enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:joforge19@gmail.com?subject=${subject}&body=${body}`;
    setFeedback("Your email app should open with a draft. Review and send it there; this website does not send or store messages.");
  }

  return (
    <form className="contact-form" onSubmit={submitEnquiry}>
      <div className="form-heading"><Eyebrow>Contact</Eyebrow><h2>Have a project or opportunity?</h2><p>Share a little context and choose how you'd like to get in touch.</p></div>
      <label>Name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
      <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
      <label>Enquiry type<select name="enquiry" defaultValue="" required><option value="" disabled>Select an enquiry type</option><option>Employment opportunity</option><option>Business services</option><option>Project collaboration</option><option>Other enquiry</option></select></label>
      <label>Message<textarea name="message" rows="4" placeholder="Tell me what you have in mind..." required /></label>
      <p className="privacy-note">Your details are used only to prepare an email draft in your own email app. This website does not store submissions.</p>
      <button className="button button-primary form-submit" type="submit">Prepare email <Send size={16} /></button>
      {feedback && <p className="form-feedback" role="status">{feedback}</p>}
      <p className="form-fallback">Prefer WhatsApp? <a href="https://wa.me/254114169307" target="_blank" rel="noopener noreferrer">Send a message <ArrowUpRight size={13} /></a></p>
    </form>
  );
}

function ContactSection() {
  return (
    <section className="section-block contact-section" id="contact">
      <div className="page-width contact-grid"><ContactDetails /><ContactForm /></div>
    </section>
  );
}

function ContactPage() {
  return <main className="inner-page"><PageIntro label="Contact" title={<>Let's build something <span>useful together.</span></>} lead="For employment opportunities, business services, project collaboration, or another enquiry." /><ContactSection /></main>;
}

function NotFound() {
  return <main className="inner-page"><PageIntro label="404" title={<>This page isn't <span>here.</span></>} lead="The link may have changed, or the page may not exist." /><div className="page-width"><Link className="button button-primary" to="/">Back to home <ArrowRight size={15} /></Link></div></main>;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <RouteMetadata />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectCaseStudy />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
