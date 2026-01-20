import { me } from '../me'
import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faGlobe, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { QRCodeSVG } from 'qrcode.react'

const siteUrl = 'https://vinicius.signa.dev'
const cardUrl = `${siteUrl}/card`
const ogImageUrl = `${siteUrl}/api/og-card`

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
                <a
                  href={`mailto:${me.contact.email}`}
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-alt-dark/50 hover:bg-alt-card-hover transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-alt-accent/10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faEnvelope} className="w-3.5 h-3.5 text-alt-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-alt-muted">Email</p>
                    <p className="text-sm text-alt-light truncate group-hover:text-alt-accent transition-colors">{me.contact.email}</p>
                  </div>
                </a>

                <a
                  href="https://github.com/uasouz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-alt-dark/50 hover:bg-alt-card-hover transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-alt-accent/10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faGithub} className="w-3.5 h-3.5 text-alt-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-alt-muted">GitHub</p>
                    <p className="text-sm text-alt-light truncate group-hover:text-alt-accent transition-colors">
                      @uasouz
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/vlopes45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-alt-dark/50 hover:bg-alt-card-hover transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-alt-accent/10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faLinkedinIn} className="w-3.5 h-3.5 text-alt-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-alt-muted">LinkedIn</p>
                    <p className="text-sm text-alt-light truncate group-hover:text-alt-accent transition-colors">
                      /in/vlopes45
                    </p>
                  </div>
                </a>

                <a
                  href={siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-alt-dark/50 hover:bg-alt-card-hover transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-alt-accent/10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faGlobe} className="w-3.5 h-3.5 text-alt-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-alt-muted">Website</p>
                    <p className="text-sm text-alt-light truncate group-hover:text-alt-accent transition-colors">
                      vinicius.signa.dev
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right side - QR Code */}
            <div className="flex flex-col items-center justify-center sm:border-l sm:border-alt-border sm:pl-6">
              <div className="bg-white p-3 rounded-xl">
                <QRCodeSVG
                  value={siteUrl}
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
