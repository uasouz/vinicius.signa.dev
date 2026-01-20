import Link from 'next/link'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../navbar'
import SocialLinks from '../social-links'
import VisitCard from '../visit-card'
import { Me } from '../../../types/me'
import { HERO_TEXT, ABOUT_TEXT, CONTACT_TEXT, CV_PATH, SITE_URL, SOCIAL_LINKS } from '../../../constants/content'

interface WidescreenLayoutProps {
  me: Me
  activeSection: 'about' | 'experience'
  setActiveSection: (section: 'about' | 'experience') => void
  selectedExp: number
  setSelectedExp: (index: number) => void
  showVisitCard: boolean
  setShowVisitCard: (show: boolean) => void
}

export default function WidescreenLayout({
  me,
  activeSection,
  setActiveSection,
  selectedExp,
  setSelectedExp,
  showVisitCard,
  setShowVisitCard,
}: WidescreenLayoutProps) {
  const tabs = [
    { id: 'about', label: 'About', active: activeSection === 'about', onClick: () => setActiveSection('about') },
    { id: 'experience', label: 'Experience', active: activeSection === 'experience', onClick: () => setActiveSection('experience') },
  ]

  return (
    <main className="bg-alt-dark h-screen overflow-hidden">
      <Head>
        <title>{me.name} | Software Developer</title>
        <meta charSet="utf-8" />
        <meta name="description" content={`${me.name} | Software Developer | Portfolio`} />
      </Head>

      {/* Background gradient glow effect */}
      <div className="fixed inset-0 bg-alt-glow opacity-50 pointer-events-none" />

      <Navbar photo={me.photo} variant="widescreen" tabs={tabs} />

      {/* Main content - full height minus navbar */}
      <div className="h-full pt-14">
        {/* About Section - Two column layout */}
        <div className={`h-full transition-opacity duration-300 ${activeSection === 'about' ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <div className="h-full flex">
            {/* Left panel - Hero */}
            <div className="w-1/2 h-full flex flex-col justify-center px-12 lg:px-16 xl:px-24 border-r border-alt-border">
              <p className="text-alt-accent font-mono text-sm mb-3">
                {HERO_TEXT.greeting}
              </p>
              <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold text-alt-accent mb-4">
                {me.name}
              </h1>
              <h2 className="text-xl xl:text-2xl 2xl:text-3xl font-semibold text-alt-muted mb-4">
                {HERO_TEXT.tagline}
              </h2>
              <p className="text-alt-muted text-base xl:text-lg max-w-xl leading-relaxed">
                {HERO_TEXT.description}
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
                <h2 className="text-2xl xl:text-3xl font-bold text-alt-light mb-6">{ABOUT_TEXT.title}</h2>

                <div className="space-y-4 text-alt-muted text-base leading-relaxed mb-8">
                  {ABOUT_TEXT.paragraphs.map((p, i) => (
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
                    {CONTACT_TEXT.shortDescription}
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
                      href={CV_PATH}
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
                <SocialLinks className="justify-center pt-4 border-t border-alt-border" />
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
        github={SOCIAL_LINKS.github}
        linkedin={SOCIAL_LINKS.linkedin}
        siteUrl={SITE_URL}
        photo={me.photo}
      />
    </main>
  )
}
