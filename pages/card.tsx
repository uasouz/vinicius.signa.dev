import { me } from '../me'
import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faGlobe, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { QRCodeSVG } from 'qrcode.react'
import ContactLink from '../components/v2/contact-link'
import { SITE_URL, SOCIAL_LINKS } from '../constants/content'

const cardUrl = `${SITE_URL}/card`
const ogImageUrl = `${SITE_URL}/api/og-card`

export default function CardPage() {
  return (
    <main className="bg-alt-dark min-h-screen flex flex-col items-center justify-center p-4">
      <Head>
        <title>{me.name} | Contact Card</title>
        <meta charSet="utf-8" />
        <meta name="description" content={`${me.name} - Software Developer | Contact Card`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={cardUrl} />
        <meta property="og:title" content={`${me.name} | Software Developer`} />
        <meta property="og:description" content="Software Developer with 10+ years of experience. Get in touch!" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={cardUrl} />
        <meta name="twitter:title" content={`${me.name} | Software Developer`} />
        <meta name="twitter:description" content="Software Developer with 10+ years of experience. Get in touch!" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>

      {/* Back to main site link */}
      <Link
        href="/"
        className="absolute top-4 left-4 flex items-center gap-2 text-alt-muted hover:text-alt-accent transition-colors"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
        Back to site
      </Link>

      {/* Card */}
      <div className="w-full max-w-2xl bg-alt-card rounded-2xl overflow-hidden shadow-2xl border border-alt-border">
        {/* Header with accent bar */}
        <div className="h-2 bg-gradient-to-r from-alt-accent via-yellow-400 to-alt-accent" />

        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Left side - Contact info */}
            <div className="flex-1">
              {/* Profile section */}
              <div className="flex items-center gap-4 mb-5">
                <div className="relative flex-shrink-0">
                  <img
                    src={`${me.photo}?size=128`}
                    width={80}
                    height={80}
                    alt={me.name}
                    className="w-20 h-20 rounded-full object-cover ring-2 ring-alt-accent/50"
                  />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-alt-accent">{me.name}</h1>
                  <p className="text-alt-muted text-sm">Software Developer</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-alt-border mb-5" />

              {/* Contact links */}
              <div className="space-y-2">
                <ContactLink
                  href={`mailto:${me.contact.email}`}
                  icon={faEnvelope}
                  label="Email"
                  value={me.contact.email}
                />
                <ContactLink
                  href={SOCIAL_LINKS.github}
                  icon={faGithub}
                  label="GitHub"
                  value="@uasouz"
                  external
                />
                <ContactLink
                  href={SOCIAL_LINKS.linkedin}
                  icon={faLinkedinIn}
                  label="LinkedIn"
                  value="/in/vlopes45"
                  external
                />
                <ContactLink
                  href={SITE_URL}
                  icon={faGlobe}
                  label="Website"
                  value="vinicius.signa.dev"
                  external
                />
              </div>
            </div>

            {/* Right side - QR Code */}
            <div className="flex flex-col items-center justify-center sm:border-l sm:border-alt-border sm:pl-6">
              <div className="bg-white p-3 rounded-xl">
                <QRCodeSVG
                  value={SITE_URL}
                  size={140}
                  bgColor="#ffffff"
                  fgColor="#0A192F"
                  level="M"
                />
              </div>
              <p className="text-alt-muted text-xs mt-3 text-center">Scan to visit</p>
              <p className="text-alt-accent text-xs font-mono">vinicius.signa.dev</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
