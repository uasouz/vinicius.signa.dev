import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faGlobe, faShare, faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'
import { QRCodeSVG } from 'qrcode.react'

interface VisitCardProps {
  isOpen: boolean
  onClose: () => void
  name: string
  title: string
  email: string
  phone?: string
  github: string
  linkedin: string
  website?: string
  siteUrl: string
  photo: string
}

export default function VisitCard({
  isOpen,
  onClose,
  name,
  title,
  email,
  phone,
  github,
  linkedin,
  website,
  siteUrl,
  photo
}: VisitCardProps) {
  const [copied, setCopied] = useState(false)
  const shareUrl = `${siteUrl}/card`

  const handleShare = async () => {
    // Try native share API first (works on mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${name} | Software Developer`,
          text: 'Check out my contact card!',
          url: shareUrl,
        })
        return
      } catch (err) {
        // User cancelled or share failed, fall back to copy
      }
    }

    // Fall back to copying to clipboard
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative z-10 w-full max-w-2xl animate-slide-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
          aria-label="Close"
        >
          <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
        </button>

        {/* Card */}
        <div className="bg-alt-card rounded-2xl overflow-hidden shadow-2xl border border-alt-border">
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
                      src={`${photo}?size=128`}
                      width={80}
                      height={80}
                      alt={name}
                      className="w-20 h-20 rounded-full object-cover ring-2 ring-alt-accent/50"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-alt-accent">{name}</h2>
                    <p className="text-alt-muted text-sm">{title}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-alt-border mb-5" />

                {/* Contact links */}
                <div className="space-y-2">
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-alt-dark/50 hover:bg-alt-card-hover transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-full bg-alt-accent/10 flex items-center justify-center">
                      <FontAwesomeIcon icon={faEnvelope} className="w-3.5 h-3.5 text-alt-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-alt-muted">Email</p>
                      <p className="text-sm text-alt-light truncate group-hover:text-alt-accent transition-colors">{email}</p>
                    </div>
                  </a>

                  {phone && (
                    <a
                      href={`tel:${phone}`}
                      className="flex items-center gap-3 p-2.5 rounded-lg bg-alt-dark/50 hover:bg-alt-card-hover transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-full bg-alt-accent/10 flex items-center justify-center">
                        <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5 text-alt-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-alt-muted">Phone</p>
                        <p className="text-sm text-alt-light truncate group-hover:text-alt-accent transition-colors">{phone}</p>
                      </div>
                    </a>
                  )}

                  <a
                    href={github}
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
                        {github.replace('https://github.com/', '@')}
                      </p>
                    </div>
                  </a>

                  <a
                    href={linkedin}
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
                        {linkedin.replace('https://linkedin.com/in/', '/in/')}
                      </p>
                    </div>
                  </a>

                  {website && (
                    <a
                      href={website}
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
                          {website.replace('https://', '').replace('http://', '')}
                        </p>
                      </div>
                    </a>
                  )}
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
                <p className="text-alt-accent text-xs font-mono">{siteUrl.replace('https://', '')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Share button */}
        <button
          onClick={handleShare}
          className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 bg-alt-accent text-alt-dark font-semibold rounded-lg hover:bg-alt-accent-hover transition-all duration-300"
        >
          <FontAwesomeIcon icon={copied ? faCheck : faShare} className="w-4 h-4" />
          {copied ? 'Link Copied!' : 'Share Card'}
        </button>
      </div>
    </div>
  )
}
