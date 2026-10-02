import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowUp, ArrowUpRight, BrainCircuit, BriefcaseBusiness,
  ChevronRight, CircleDot, Code2, Database, Download, Github, Globe2,
  Layers3, Linkedin, Mail, MapPin, Menu, Moon, Network, Sparkles, Sun, ShieldCheck,
  X
} from "lucide-react";
import "./styles.css";

const experience = [
  {
    company: "Aarhus University, Denmark",
    role: "IT Engineer (part time)",
    period: "August 2024 - Present",
    bullets: [
      "Developing and maintaining university's self-hosted Overleaf platform using React, TypeScript and JavaScript.",
      "Building and shipping features such as internal dashboards, tracking, templates using React and TypeScript.",
      "Creating and maintaining GitLab CI/CD pipelines with build and test stages to support development and deployment.",
      "Developing Python automation scripts supporting recurring infrastructure and platform tasks.",
      "Developing automated unit tests to improve reliability and support continuous development",
      "Integrated Microsoft Entra ID (OIDC) Single Sign-On (SSO), configuring OAuth/OIDC authentication and implementing the authentication flow in code.",
    ]
  },
  {
    company: "Aarhus University, Denmark",
    role: "Student Assistant - Marketing & Communications (part time)",
    period: "August 2024 - Present",
    bullets: [
      "Produced guides, figures, and structured summaries for reports and presentations, translating technical work for non-technical stakeholders.",
      "Delivered presentations and guidance sessions to a wide range of audiences, both in-person and online.",
      "Helped students navigate university systems and resources.",
      "Developed and maintained Aarhus University web pages for international audience using Typo3, HTML, JavaScript and CSS - with a focus on usability, accessibility, SEO, and consistent UX. "
    ]
  },
  {
    company: "Schneider Electric, India",
    role: "Software, Senior Design Engineer (full time)",
    period: "Dec 2023 - Aug 2024",
    bullets: [
      "Built energy management web applications using Angular, TypeScript, RxJS, JavaScript, HTML and CSS.",
      "Developed and migrated 20+ legacy AngularJS components to modern Angular while preserving existing functionality.",
      "Improved frontend architecture, responsiveness and performance across key application modules.",
      "Achieved up to 100% unit test coverage across key modules using Jest and Karma.",
      "Applied reusable component patterns and frontend engineering best practices to improve maintainability."
    ]
  },
  {
    company: "Tata Elxsi, India",
    role: "Senior Software Engineer (full time)",
    period: "Jan 2022 - Dec 2023",
    bullets: [
      "Developed enterprise healthcare operations web applications using Angular and .NET.",
      "Built reusable Angular components and implemented frontend features for large-scale enterprise applications.",
      "Collaborated with cross-functional teams to deliver features and resolve technical issues."
    ]
  },
  {
    company: "H&R Block, India",
    role: "Software Engineer (full time)",
    period: "July 2019 - Jan 2022",
    bullets: [
      "Developed frontend features for a modernised cloud-native taxation web application using Angular and related technologies.",
      "Contributed to the transition from a legacy client-server platform to Angular microapps with server-side and client-side rendering.",
      "Contributed to Nx Workspace and Angular upgrades and multiple application feature implementations.",
      "Implemented SonarQube and contributed to Karma and TSLint migrations to improve code quality and development workflows.",
      "Mentored teammates, conducted internal technical sessions and participated in client demos and sprint reviews."
    ]
  }
];


const projects = [
  {
    title: "Overleaf AU Edition",
    tags: ["React", "TypeScript", "Node.js"],
    text: "Built features for an internal dashboard and self-hosted Overleaf platform focused on usage and platform health.",
    icon: Globe2
  },
  {
    title: "MLHCA - MSc Thesis",
    tags: ["Python", "PyTorch", "OR-Tools"],
    text: "Reproduced and evaluated MLHCA research results, achieving 42% fewer queries than BOCA in the evaluated setup.",
    icon: BrainCircuit
  },
  {
    title: "AI Assist",
    tags: ["OpenAI", "Azure", "Python"],
    text: "Designed an AI gateway architecture for AI Assist and Error Assist with multiple provider options and a kill switch.",
    icon: Sparkles
  }
];

const skills = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      "Angular",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS/SCSS",
      "SASS",
      "Bootstrap",
      "Tailwind",
      "RxJS"
    ]
  },
  {
    title: "Backend & APIs",
    icon: Layers3,
    items: [
      "Java",
      "Spring Boot",
      "C#",
      ".NET Core",
      "Node.js",
      "REST APIs",
      "Swagger",
      "Postman"
    ]
  },
  {
    title: "Data & AI",
    icon: BrainCircuit,
    items: [
      "Python",
      "Machine Learning",
      "PyTorch",
      "AI/LLMs",
      "Jupyter Notebook",
      "Data Analysis",
      "Plotly",
      "Dash"
    ]
  },
  {
    title: "Databases",
    icon: Database,
    items: [
      "SQL",
      "MongoDB",
      "PostgreSQL"
    ]
  },
  {
    title: "Testing & Code Quality",
    icon: ShieldCheck,
    items: [
      "Vitest",
      "Jest",
      "Karma",
      "ESLint",
      "TSLint",
      "SonarQube"
    ]
  },
  {
    title: "DevOps & Tools",
    icon: Network,
    items: [
      "Git",
      "GitLab",
      "CI/CD",
      "Docker",
      "AWS",
      "Azure",
      "Jenkins",
      "Jira",
      "Figma"
    ]
  }
];

function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const closeMenu = () => setMenu(false);

  return (
    <div className="site">
      <header className="nav">
        <a href="#home" className="brand" onClick={closeMenu}>Sayana <span>Raju</span></a>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          {["Home", "About", "Experience", "Projects", "Thesis", "Skills", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="icon-button" onClick={() => setDark(v => !v)} aria-label="Toggle theme">
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          {/* <a className="cv-button" href="/Sayana__Raju__CV.pdf" download>
            <Download size={15} /> Download CV
          </a> */}
          <button className="menu-button" onClick={() => setMenu(v => !v)} aria-label="Open menu">
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Software Developer <i>•</i> Typescript <i>•</i> JavaScript <i>•</i> Angular & React <i>•</i> AI Enthusiast <i>•</i> MSc in AI & Data Science</div>
            <h1>Hi, I am <em>Sayana</em> <span className="wave">👋</span></h1>
            <p className="hero-text">
              I enjoy building meaningful software, exploring how AI and data can solve
              real-world problems, turning ideas into solutions, and having a good conversation along the way.
            </p>
            <div className="hero-buttons">
              <a className="primary-button" href="#experience">View My Experience <ArrowUpRight size={17} /></a>
              <a className="secondary-button" href="#contact">Get in Touch</a>
            </div>
            <div className="socials">
              <a href="https://www.linkedin.com/in/sayana-raju" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
              <a href="https://github.com/sayana97" target="_blank" rel="noreferrer"><Github size={18} /></a>
              <a href="mailto:sayanaraju97@gmail.com"><Mail size={18} /></a>
            </div>
          </div>

          <div className="hero-art">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-image-wrap">
              <img src="/portfolio-hero.JPG" alt="Sayana" />
            </div>
          </div>
        </section>

        <section id="skills" className="tech-strip section">
          <div className="section-intro">
            <span className="small-label">WHAT I WORK WITH</span>
            <h2>Tech I Work With</h2>
            <p>A mix of frontend, backend, data and AI tools - always learning, always building.</p>
          </div>
          <div className="skill-grid">
            {skills.map(({ title, icon: Icon, items }) => (
              <div className="skill-card" key={title}>
                <div className="skill-title"><Icon size={15} /> {title}</div>
                <div className="skill-items">{items.map(i => <span key={i}>{i}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section split-section">
          <div className="section-copy">
            <span className="small-label">MY JOURNEY</span>
            <h2>Experience</h2>
            <p>Building software, working with great teams, and contributing to impactful products.</p>
            {/* <a className="secondary-button" href="/Sayana__Raju__CV.pdf" download>View Full CV <ArrowUpRight size={16} /></a> */}
          </div>
          <div className="timeline">
            {experience.map((item, i) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-dot">
                  <CircleDot size={13} />
                </div>

                <div>
                  <h3>{item.role}</h3>

                  <div className="company">
                    {item.company} <span>·</span> {item.period}
                  </div>

                  <ul className="experience-bullets">
                    {item.bullets.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* <section id="projects" className="section projects-section">
          <div className="section-copy">
            <span className="small-label">FEATURED PROJECTS</span>
            <h2>Things I’ve Built</h2>
            <p>From developer tools to AI experiments - here are a few projects I am proud of.</p>
            <a className="secondary-button" href="#contact">View All Projects <ArrowUpRight size={16} /></a>
          </div>
          <div className="project-grid">
            {projects.map(({ title, tags, text, icon: Icon }) => (
              <article className="project-card" key={title}>
                <div className="project-visual"><Icon size={38} /></div>
                <h3>{title}</h3>
                <div className="tags">{tags.map(t => <span key={t}>{t}</span>)}</div>
                <p>{text}</p>
                <a href="#contact">View Project <ArrowUpRight size={14} /></a>
              </article>
            ))}
          </div>
        </section> */}

        <section id="thesis" className="section thesis">
          <div className="thesis-art">
            <div className="wave-art">
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>

          <div className="thesis-copy">
            <span className="small-label">EDUCATION</span>

            <h2>MSc in Computer Science (AI & Data Science)</h2>
            <h3>Aarhus University, Denmark</h3>

            <h3>
              Thesis: Machine Learning-Powered Hybrid Combinatorial Auctions (MLHCA)
            </h3>

            <p>
              Independent implementation, reproduction, and empirical evaluation of
              an ML-powered iterative combinatorial auction mechanism.
            </p>

            <ul>
              <li>
                Reimplemented MLHCA from first principles using PyTorch and
                Google OR-Tools with SCIP
              </li>
              <li>
                Evaluated the mechanism on the Spectrum Auction Test Suite (SATS)
                across multiple benchmark domains
              </li>
              <li>
                Achieved 0.23 ± 0.15% mean efficiency loss on LSVM and
                1.60 ± 1.01% on SRVM
              </li>
              <li>
                Reproduced the paper's core empirical claims using an open-source
                stack and modest hardware
              </li>
            </ul>

            <p className="thesis-meta">
              Based on Soumalias et al. · ICML 2025 Oral · arXiv: 2308.10226
            </p>

            <a
              className="secondary-button"
              href="https://gitlab.au.dk/au777931/mlhca"
              target="_blank"
              rel="noreferrer"
            >
              View Thesis Project <ArrowUpRight size={16} />
            </a>

            <div className="education-divider" />

            <h2>BTech in Information Technology</h2>
            <h3>
              Government Engineering College Barton Hill,
              Kerala Technological University, India
            </h3>

            <p>
              Built a strong foundation in software engineering, algorithms,
              databases, web development, and computer science.
            </p>
          </div>

          <div className="thesis-skills">
            {[
              "Machine Learning",
              "Optimization",
              "PyTorch",
              "Python",
              "Data Analysis",
              "Research"
            ].map(x => (
              <span key={x}>
                <Sparkles size={13} /> {x}
              </span>
            ))}
          </div>
        </section>
             <section className="personal section">
          <div className="personal-layout">

            {/* Left - Photo collage */}
            <div className="personal-collage">

              <div className="collage-image collage-dancing">
                <img
                  src="/personal/image1.JPG"
                  alt="Dancing"
                />
              </div>

              <div className="collage-image collage-nature">
                <img
                  src="/personal/image2.JPG"
                  alt="Exploring nature"
                />
              </div>

              <div className="collage-image collage-volunteering">
                <img
                  src="/personal/image5.JPG"
                  alt="Volunteering"
                />
              </div>

              <div className="collage-image collage-travel">
                <img
                  src="/personal/image4.jpeg"
                  alt="Travel"
                />
              </div>

            </div>

            {/* Right - Personal details */}
            <div className="personal-copy">

              <span className="small-label">A LITTLE BIT MORE ABOUT ME</span>

              <p className="personal-intro">
                {/* Here’s what I get up to when I am not glued to my laptop. */}
              </p>

              <div className="personal-details">

               

                <div className="personal-detail">
                  <h3>✈️ Travel & Photography</h3>
                  <p>
                    Exploring new places, cultures, and capturing moments along the way.
                  </p>
                </div>

                <div className="personal-detail">
                  <h3>🪴 Aspiring Plant Mom</h3>
                  <p>
                    Slowly building my little plant collection and trying my
                    best to keep everything alive.
                  </p>
                </div>

                <div className="personal-detail">
                  <h3>🎉 Social & Community</h3>
                  <p>
                    I enjoy social gatherings, community events, and meeting
                    new people. Good conversations and good company go a long way.
                  </p>
                </div>

                 <div className="personal-detail">
                  <h3>💃 Dancing</h3>
                  <p>
                    I enjoy dancing. No framework, no Git branch,
                    and definitely no code review.
                  </p>
                </div>

                <div className="personal-detail">
                  <h3>🌿 Nature</h3>
                  <p>
                    I love spending time in nature - A disconnect from the digital world.
                  </p>
                </div>

                

                <div className="personal-detail">
                  <h3>🏃 Staying Active</h3>
                  <p>
                    I try to be active, whether it’s running, yoga,
                    or simply going for a walk in nature.
                  </p>
                </div>

                <div className="personal-detail">
                  <h3>👗 Food & Fashion</h3>
                  <p>
                    I enjoy fashion, putting together outfits, and trying new foods.
                  </p>
                </div>
                <div className="personal-detail">
                  <h3>🌍 Volunteering</h3>
                  <p>
                    Giving back, sharing what I know, and helping where I can.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>
        <section id="contact" className="contact section">
          <div>
            <span className="small-label">GET IN TOUCH</span>
            <h2>Let’s work together!</h2>
            <p>I am always open to discussing new opportunities, collaborations or just a friendly chat.</p>
          </div>
          <div className="contact-details">
            <a href="mailto:sayanaraju97@gmail.com"><Mail /> <span><b>Email</b>sayanaraju97@gmail.com</span></a>
            <div><MapPin /> <span><b>Location</b>Aarhus, Denmark</span></div>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin /> <span><b>LinkedIn</b>linkedin.com/in/sayana-raju</span></a>
          </div>
          <a className="primary-button" href="mailto:sayanaraju97@gmail.com">Send a Message <ArrowUpRight size={17} /></a>
        </section>
      </main>

      <footer>
        <strong>Sayana <span>Raju</span></strong>
        <span>Built with <span className="heart">♥</span> using React</span>
        <a href="#home" aria-label="Back to top"><ArrowUp size={16} /></a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
