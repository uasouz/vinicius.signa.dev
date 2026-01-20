import Link from 'next/link'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faDownload, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../navbar'
import SocialLinks from '../social-links'
import HeroV2 from '../hero'
import AboutV2 from '../about'
import ExperienceCardV2 from '../experience-card'
import SectionHeadingV2 from '../section-heading'
import VisitCard from '../visit-card'
import { Me } from '../../../types/me'
import { CONTACT_TEXT, CV_PATH, SITE_URL, SOCIAL_LINKS } from '../../../constants/content'

interface DefaultLayoutProps {
  me: Me
  showScrollTop: boolean
  scrollToTop: () => void
  showVisitCard: boolean
  setShowVisitCard: (show: boolean) => void
}

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function DefaultLayout({
  me,
  showScrollTop,
  scrollToTop,
  showVisitCard,
  setShowVisitCard,
}: DefaultLayoutProps) {
  return (
    <main className="bg-alt-dark min-h-screen relative overflow-x-hidden">
      <Head>
        <title>{me.name} | Software Developer</title>
        <meta charSet="utf-8" />
        <meta name="description" content={`${me.name} | Software Developer | Portfolio`} />
      </Head>

      {/* Background gradient glow effect */}
      <div className="fixed inset-0 bg-alt-glow opacity-50 pointer-events-none" />

      <Navbar photo={me.photo} variant="default" navLinks={NAV_LINKS} />

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
              {CONTACT_TEXT.longDescription}
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
                href={CV_PATH}
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
            Designed & Built by {me.name}
          </p>
          <SocialLinks className="justify-center gap-6 mt-4" />
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
        github={SOCIAL_LINKS.github}
        linkedin={SOCIAL_LINKS.linkedin}
        siteUrl={SITE_URL}
        photo={me.photo}
      />
    </main>
  )
}
