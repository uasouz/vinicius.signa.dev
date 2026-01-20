import { me } from '../me'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faDownload, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Head from 'next/head'
import HeroV2 from '../components/v2/hero'
import AboutV2 from '../components/v2/about'
import ExperienceCardV2 from '../components/v2/experience-card'
import SectionHeadingV2 from '../components/v2/section-heading'
import VisitCard from '../components/v2/visit-card'
import { useState, useEffect } from 'react'

function profilePictureLoader({ src, width }: { src: string, width: number, quality?: number | undefined }) {
  return `${src}.png?size=${width}`
}

const introPartOne = "Hi, my name is"
const introPartTwo = "I enjoy creating and delivering digital products that make people's lives easier."
const introPartThree = "I'm a Software Developer with knowledge in multiple languages and platforms, who had the opportunity to work in various areas of software development, from mobile to backend, and have also led great development teams."

const aboutParagraphs = [
  `My name is Vinícius Lopes, and I am passionate about creating innovative solutions and solving complex problems. From a young age, I immersed myself in the digital world, delving into the realms of PHP, JavaScript, SQL, and HTML when I was just 11 years old.`,
  `As my skills grew, I became increasingly fascinated by the fields of Cybersecurity and Game Development, which paved my path towards a career in IT. Since then I found opportunities to learn and work with many technologies and impact the life of hundreds of thousands of people.`,
  `I believe in the power of continuous learning and strive to enhance my expertise in order to deliver cutting-edge solutions that meet the ever-evolving demands of the digital landscape in a scalable, responsible and safe way.`
]

// Widescreen breakpoint: 1440px width AND 800px height minimum
const WIDE_MIN_WIDTH = 1440
const WIDE_MIN_HEIGHT = 800

export default function HomeV2() {
  const [isWidescreen, setIsWidescreen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState<'about' | 'experience'>('about')
  const [selectedExp, setSelectedExp] = useState(0)
  const [showVisitCard, setShowVisitCard] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      const isWide = window.innerWidth >= WIDE_MIN_WIDTH && window.innerHeight >= WIDE_MIN_HEIGHT
      setIsWidescreen(isWide)
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    // Initial check
    checkScreenSize()

    // Listen for resize
    window.addEventListener('resize', checkScreenSize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', checkScreenSize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Widescreen Layout
  if (isWidescreen) {
    return (
      <main className="bg-alt-dark h-screen overflow-hidden">
        <Head>
          <title>Vinícius Lopes | Software Developer</title>
          <meta charSet="utf-8" />
          <meta name="description" content="Vinícius Lopes | Software Developer | Portfolio" />
        </Head>

        {/* Background gradient glow effect */}
        <div className="fixed inset-0 bg-alt-glow opacity-50 pointer-events-none" />

        {/* Fixed navigation bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-alt-dark/90 border-b border-alt-border">
          <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between h-14">
              {/* Logo/Avatar */}
              <div className="flex items-center gap-3">
                <Image
                  loader={profilePictureLoader}
                  src={`${me.photo}?size=128`}
                  width={36}
                  height={36}
                  alt="me"
                  className="rounded-full ring-2 ring-alt-accent/30 hover:ring-alt-accent transition-all duration-300"
                />
                <span className="text-alt-light font-semibold">VL</span>
              </div>

              {/* Section tabs */}
              <div className="flex items-center gap-1 bg-alt-card rounded-lg p-1">
                <button
                  onClick={() => setActiveSection('about')}
                  className={`px-4 py-1.5 text-sm font-medium rounded transition-all duration-200 ${
                    activeSection === 'about'
                      ? 'bg-alt-accent text-alt-dark'
                      : 'text-alt-muted hover:text-alt-light'
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => setActiveSection('experience')}
                  className={`px-4 py-1.5 text-sm font-medium rounded transition-all duration-200 ${
                    activeSection === 'experience'
                      ? 'bg-alt-accent text-alt-dark'
                      : 'text-alt-muted hover:text-alt-light'
                  }`}
                >
                  Experience
                </button>
              </div>

              {/* Social links + CV Download */}
              <div className="flex items-center gap-4">
                <Link
                  aria-label="Github link"
                  target="_blank"
                  href="https://github.com/uasouz"
                  className="text-alt-muted hover:text-alt-accent transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                </Link>
                <Link
                  aria-label="Linkedin link"
                  target="_blank"
                  href="https://linkedin.com/in/vlopes45"
                  className="text-alt-muted hover:text-alt-accent transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
                </Link>
                <Link
                  aria-label="Email"
                  href="mailto:vlopes45@gmail.com"
                  className="text-alt-muted hover:text-alt-accent transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                </Link>
                <Link
                  aria-label="Download CV"
                  href="Vinícius%20Lopes%20-%20Software%20Developer.pdf"
                  target="_blank"
                  className="flex items-center gap-2 px-3 py-1.5 border border-alt-accent text-alt-accent text-sm font-medium rounded hover:bg-alt-accent/10 transition-all duration-200"
                >
                  <FontAwesomeIcon icon={faDownload} className="w-3.5 h-3.5" />
                  CV
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content - full height minus navbar */}
        <div className="h-full pt-14">
          {/* About Section - Two column layout */}
          <div className={`h-full transition-opacity duration-300 ${activeSection === 'about' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <div className="h-full flex">
              {/* Left panel - Hero */}
              <div className="w-1/2 h-full flex flex-col justify-center px-12 lg:px-16 xl:px-24 border-r border-alt-border">
                <p className="text-alt-accent font-mono text-sm mb-3">
                  {introPartOne}
                </p>
                <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold text-alt-accent mb-4">
                  {me.name}
                </h1>
                <h2 className="text-xl xl:text-2xl 2xl:text-3xl font-semibold text-alt-muted mb-4">
                  {introPartTwo}
                </h2>
                <p className="text-alt-muted text-base xl:text-lg max-w-xl leading-relaxed">
                  {introPartThree}
                </p>

                {/* CTA buttons */}
                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setActiveSection('experience')}
                    className="px-5 py-2.5 bg-transparent border-2 border-alt-accent text-alt-accent font-semibold rounded hover:bg-alt-accent/10 transition-all duration-300"
                  >
                    View My Work
                  </button>
                  <button
                    onClick={() => setShowVisitCard(true)}
                    className="px-5 py-2.5 bg-alt-accent text-alt-dark font-semibold rounded hover:bg-alt-accent-hover transition-all duration-300"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>

              {/* Right panel - About & Skills */}
              <div className="w-1/2 h-full flex flex-col justify-center px-12 lg:px-16 xl:px-24 overflow-y-auto">
                <div className="max-w-xl">
                  <h3 className="text-alt-accent font-mono text-sm mb-2">01. About Me</h3>
                  <h2 className="text-2xl xl:text-3xl font-bold text-alt-light mb-6">Olá!</h2>

                  <div className="space-y-4 text-alt-muted text-base leading-relaxed mb-8">
                    {aboutParagraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  {/* Skills grid */}
                  <div className="bg-alt-card border border-alt-border rounded-lg p-5">
                    <h4 className="text-alt-light font-semibold mb-3 flex items-center gap-2">
                      <span className="text-alt-accent">▹</span>
                      Tech Stack
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {me.about.skills.map((skill, index) => (
                        <span
                          key={`skill-${index}`}
                          className="flex items-center gap-2 text-sm text-alt-muted"
                        >
                          <span className="text-alt-accent text-xs">▹</span>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section - Three column layout */}
          <div className={`h-full transition-opacity duration-300 ${activeSection === 'experience' ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <div className="h-full flex">
              {/* Left panel - Experience list */}
              <div className="w-1/4 min-w-[280px] h-full border-r border-alt-border overflow-y-auto">
                <div className="p-4">
                  <h3 className="text-alt-accent font-mono text-sm mb-2 px-3">02. Experience</h3>
                  <div className="space-y-1">
                    {me.experience.map((exp, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedExp(index)}
                        className={`w-full text-left px-3 py-3 rounded-lg transition-all duration-200 ${
                          selectedExp === index
                            ? 'bg-alt-card border-l-2 border-alt-accent'
                            : 'hover:bg-alt-card/50 border-l-2 border-transparent'
                        }`}
                      >
                        <p className={`font-medium text-sm ${selectedExp === index ? 'text-alt-accent' : 'text-alt-light'}`}>
                          {exp.title}
                        </p>
                        <p className="text-alt-muted text-xs mt-0.5">@ {exp.company}</p>
                        <p className="text-alt-muted/70 text-xs mt-1 font-mono">
                          {exp.startDate} — {exp.endDate}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Middle panel - Experience details */}
              <div className="flex-1 h-full overflow-y-auto px-8 py-6">
                <div className="max-w-2xl">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-alt-light">
                      {me.experience[selectedExp].title}
                    </h2>
                    <p className="text-alt-accent text-lg font-medium">
                      @ {me.experience[selectedExp].company}
                    </p>
                    <p className="text-alt-muted text-sm font-mono mt-1">
                      {me.experience[selectedExp].startDate} — {me.experience[selectedExp].endDate}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-alt-light font-medium text-sm uppercase tracking-wide">Achievements</h4>
                    {me.experience[selectedExp].achievements.map((achievement, idx) => (
                      <div key={idx} className="flex gap-3 text-alt-muted">
                        <span className="text-alt-accent mt-1 flex-shrink-0">▹</span>
                        <span className="text-sm leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  {me.experience[selectedExp].technologies && me.experience[selectedExp].technologies.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-alt-border">
                      <h4 className="text-alt-light font-medium text-sm uppercase tracking-wide mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {me.experience[selectedExp].technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 text-xs font-mono text-alt-accent bg-alt-dark border border-alt-border rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right panel - Contact & Quick nav */}
              <div className="w-1/4 min-w-[280px] h-full border-l border-alt-border flex flex-col justify-center px-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-alt-accent font-mono text-sm mb-2">03. Get In Touch</h3>
                    <p className="text-alt-muted text-sm leading-relaxed mb-4">
                      I'm always open to discussing new opportunities or interesting projects.
                    </p>
                    <div className="space-y-2">
                      <button
                        onClick={() => setShowVisitCard(true)}
                        className="w-full flex items-center gap-2 px-4 py-2 bg-alt-accent text-alt-dark font-semibold rounded hover:bg-alt-accent-hover transition-all duration-300 text-sm justify-center"
                      >
                        <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                        Say Hello
                      </button>
                      <Link
                        href="Vinícius%20Lopes%20-%20Software%20Developer.pdf"
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 border border-alt-accent text-alt-accent font-semibold rounded hover:bg-alt-accent/10 transition-all duration-300 text-sm justify-center"
                      >
                        <FontAwesomeIcon icon={faDownload} className="w-4 h-4" />
                        Download Resume
                      </Link>
                    </div>
                  </div>

                  {/* Quick stats */}
                  <div className="bg-alt-card border border-alt-border rounded-lg p-4">
                    <h4 className="text-alt-light font-semibold text-sm mb-3">Quick Facts</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-alt-muted">
                        <span className="text-alt-accent">▹</span>
                        {me.nationality}
                      </div>
                      <div className="flex items-center gap-2 text-alt-muted">
                        <span className="text-alt-accent">▹</span>
                        10+ Years Experience
                      </div>
                      <div className="flex items-center gap-2 text-alt-muted">
                        <span className="text-alt-accent">▹</span>
                        {me.experience.length} Positions
                      </div>
                    </div>
                  </div>

                  {/* Social links */}
                  <div className="flex items-center justify-center gap-4 pt-4 border-t border-alt-border">
                    <Link
                      href="https://github.com/uasouz"
                      target="_blank"
                      className="text-alt-muted hover:text-alt-accent transition-colors duration-200"
                    >
                      <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                    </Link>
                    <Link
                      href="https://linkedin.com/in/vlopes45"
                      target="_blank"
                      className="text-alt-muted hover:text-alt-accent transition-colors duration-200"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
                    </Link>
                    <Link
                      href="mailto:vlopes45@gmail.com"
                      className="text-alt-muted hover:text-alt-accent transition-colors duration-200"
                    >
                      <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visit Card Modal */}
        <VisitCard
          isOpen={showVisitCard}
          onClose={() => setShowVisitCard(false)}
          name={me.name}
          title="Software Developer"
          email={me.contact.email}
          github="https://github.com/uasouz"
          linkedin="https://linkedin.com/in/vlopes45"
          siteUrl="https://vinicius.signa.dev"
          photo={me.photo}
        />
      </main>
    )
  }

  // Default Layout (scrolling)
  return (
    <main className="bg-alt-dark min-h-screen relative overflow-x-hidden">
      <Head>
        <title>Vinícius Lopes | Software Developer</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Vinícius Lopes | Software Developer | Portfolio" />
      </Head>

      {/* Background gradient glow effect */}
      <div className="fixed inset-0 bg-alt-glow opacity-50 pointer-events-none" />

      {/* Floating navigation bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-alt-dark/90 border-b border-alt-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Avatar */}
            <div className="flex items-center gap-3">
              <Image
                loader={profilePictureLoader}
                src={`${me.photo}?size=128`}
                width={40}
                height={40}
                alt="me"
                className="rounded-full ring-2 ring-alt-accent/30 hover:ring-alt-accent transition-all duration-300"
              />
              <span className="text-alt-light font-semibold hidden sm:block">VL</span>
            </div>

            {/* Navigation links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-alt-muted hover:text-alt-accent transition-colors duration-200 text-sm font-medium">
                About
              </a>
              <a href="#experience" className="text-alt-muted hover:text-alt-accent transition-colors duration-200 text-sm font-medium">
                Experience
              </a>
              <a href="#contact" className="text-alt-muted hover:text-alt-accent transition-colors duration-200 text-sm font-medium">
                Contact
              </a>
            </div>

            {/* Social links + CV Download */}
            <div className="flex items-center gap-4">
              <Link
                aria-label="Github link"
                target="_blank"
                href="https://github.com/uasouz"
                className="text-alt-muted hover:text-alt-accent transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              </Link>
              <Link
                aria-label="Linkedin link"
                target="_blank"
                href="https://linkedin.com/in/vlopes45"
                className="text-alt-muted hover:text-alt-accent transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
              </Link>
              <Link
                aria-label="Email"
                href="mailto:vlopes45@gmail.com"
                className="text-alt-muted hover:text-alt-accent transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
              </Link>
              <Link
                aria-label="Download CV"
                href="Vinícius%20Lopes%20-%20Software%20Developer.pdf"
                target="_blank"
                className="flex items-center gap-2 px-3 py-1.5 border border-alt-accent text-alt-accent text-sm font-medium rounded hover:bg-alt-accent/10 transition-all duration-200"
              >
                <FontAwesomeIcon icon={faDownload} className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">CV</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Hero Section */}
        <HeroV2 me={me} onGetInTouch={() => setShowVisitCard(true)} />

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <SectionHeadingV2 number={1} title="About Me" />
          <AboutV2 me={me} />
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24">
          <SectionHeadingV2 number={2} title="Experience" />
          <div className="mt-8 space-y-6">
            {me.experience.map((experience, index) => (
              <ExperienceCardV2
                key={index}
                title={experience.title}
                company={experience.company}
                achievements={experience.achievements}
                technologies={experience.technologies}
                startDate={experience.startDate}
                endDate={experience.endDate}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <SectionHeadingV2 number={3} title="Get In Touch" />
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <p className="text-alt-muted text-lg mb-8">
              I'm always open to discussing new opportunities, interesting projects,
              or just having a chat about technology. Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setShowVisitCard(true)}
                className="group flex items-center gap-2 px-6 py-3 bg-alt-accent text-alt-dark font-semibold rounded-lg hover:bg-alt-accent-hover transition-all duration-300 hover:scale-105"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                Say Hello
              </button>
              <Link
                href="Vinícius%20Lopes%20-%20Software%20Developer.pdf"
                target="_blank"
                className="group flex items-center gap-2 px-6 py-3 border border-alt-accent text-alt-accent font-semibold rounded-lg hover:bg-alt-accent/10 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faDownload} className="w-4 h-4" />
                Download Resume
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-alt-border text-center">
          <p className="text-alt-muted text-sm">
            Designed & Built by Vinícius Lopes
          </p>
          <div className="flex items-center justify-center gap-6 mt-4">
            <Link
              href="https://github.com/uasouz"
              target="_blank"
              className="text-alt-muted hover:text-alt-accent transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/vlopes45"
              target="_blank"
              className="text-alt-muted hover:text-alt-accent transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
            </Link>
          </div>
        </footer>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-alt-card border border-alt-border rounded-full text-alt-accent hover:bg-alt-card-hover hover:scale-110 transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <FontAwesomeIcon icon={faArrowUp} className="w-5 h-5" />
      </button>

      {/* Visit Card Modal */}
      <VisitCard
        isOpen={showVisitCard}
        onClose={() => setShowVisitCard(false)}
        name={me.name}
        title="Software Developer"
        email={me.contact.email}
        github="https://github.com/uasouz"
        linkedin="https://linkedin.com/in/vlopes45"
        siteUrl="https://vinicius.signa.dev"
        photo={me.photo}
      />
    </main>
  )
}
