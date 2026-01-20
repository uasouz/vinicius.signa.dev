import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faGlobe, faDownload, faXmark } from '@fortawesome/free-solid-svg-icons'
import html2canvas from 'html2canvas'
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
  const cardRef = useRef<HTMLDivElement>(null)

  const exportAsPng = async () => {
    if (!cardRef.current) return

    try {
      // Convert profile image to base64 to avoid CORS issues
      const profileImg = cardRef.current.querySelector('img[data-profile]') as HTMLImageElement
      if (profileImg) {
        const imgCanvas = document.createElement('canvas')
        imgCanvas.width = 160
        imgCanvas.height = 160
        const ctx = imgCanvas.getContext('2d')

        // Create a new image with crossOrigin to fetch it properly
        const tempImg = new window.Image()
        tempImg.crossOrigin = 'anonymous'

        await new Promise<void>((resolve) => {
          tempImg.onload = () => {
            ctx?.drawImage(tempImg, 0, 0, 160, 160)
            profileImg.src = imgCanvas.toDataURL('image/png')
            resolve()
          }
          tempImg.onerror = () => resolve()
          tempImg.src = profileImg.src
        })
      }

      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#112240',
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
      })

      const link = document.createElement('a')
      link.download = `${name.replace(/\s+/g, '_')}_contact.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (error) {
      console.error('Error exporting card:', error)
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
        <div
          ref={cardRef}
          data-card
          className="bg-alt-card rounded-2xl overflow-hidden shadow-2xl border border-alt-border"
          style={{ backgroundColor: '#112240' }}
        >
          {/* Header with accent bar */}
          <div className="h-2 bg-gradient-to-r from-alt-accent via-yellow-400 to-alt-accent" style={{ background: 'linear-gradient(to right, #fcd34d, #facc15, #fcd34d)' }} />

          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Left side - Contact info */}
              <div className="flex-1">
                {/* Profile section */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative flex-shrink-0">
                    {/* Use img for better html2canvas compatibility */}
                    <img
                      data-profile
                      src={`${photo}?size=128`}
                      width={80}
                      height={80}
                      alt={name}
                      className="w-20 h-20 rounded-full object-cover ring-2 ring-alt-accent/50"
                      style={{ borderRadius: '9999px', width: '80px', height: '80px' }}
                    />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-alt-accent" style={{ color: '#fcd34d' }}>{name}</h2>
                    <p className="text-alt-muted text-sm" style={{ color: '#8892b0' }}>{title}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-alt-border mb-5" style={{ backgroundColor: '#233554' }} />

                {/* Contact links */}
                <div className="space-y-2">
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-alt-dark/50 hover:bg-alt-card-hover transition-colors group"
                    style={{ backgroundColor: 'rgba(10, 25, 47, 0.5)', borderRadius: '0.5rem' }}
                  >
                    <div className="w-9 h-9 rounded-full bg-alt-accent/10 flex items-center justify-center" style={{ backgroundColor: 'rgba(252, 211, 77, 0.1)', borderRadius: '9999px' }}>
                      <FontAwesomeIcon icon={faEnvelope} className="w-3.5 h-3.5 text-alt-accent" style={{ color: '#fcd34d' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-alt-muted" style={{ color: '#8892b0', fontSize: '0.75rem' }}>Email</p>
                      <p className="text-sm text-alt-light truncate group-hover:text-alt-accent transition-colors" style={{ color: '#ccd6f6', fontSize: '0.875rem' }}>{email}</p>
                    </div>
                  </a>

                  {phone && (
                    <a
                      href={`tel:${phone}`}
                      className="flex items-center gap-3 p-2.5 rounded-lg bg-alt-dark/50 hover:bg-alt-card-hover transition-colors group"
                      style={{ backgroundColor: 'rgba(10, 25, 47, 0.5)', borderRadius: '0.5rem' }}
                    >
                      <div className="w-9 h-9 rounded-full bg-alt-accent/10 flex items-center justify-center" style={{ backgroundColor: 'rgba(252, 211, 77, 0.1)', borderRadius: '9999px' }}>
                        <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5 text-alt-accent" style={{ color: '#fcd34d' }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-alt-muted" style={{ color: '#8892b0', fontSize: '0.75rem' }}>Phone</p>
                        <p className="text-sm text-alt-light truncate group-hover:text-alt-accent transition-colors" style={{ color: '#ccd6f6', fontSize: '0.875rem' }}>{phone}</p>
                      </div>
                    </a>
                  )}

                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-alt-dark/50 hover:bg-alt-card-hover transition-colors group"
                    style={{ backgroundColor: 'rgba(10, 25, 47, 0.5)', borderRadius: '0.5rem' }}
                  >
                    <div className="w-9 h-9 rounded-full bg-alt-accent/10 flex items-center justify-center" style={{ backgroundColor: 'rgba(252, 211, 77, 0.1)', borderRadius: '9999px' }}>
                      <FontAwesomeIcon icon={faGithub} className="w-3.5 h-3.5 text-alt-accent" style={{ color: '#fcd34d' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-alt-muted" style={{ color: '#8892b0', fontSize: '0.75rem' }}>GitHub</p>
                      <p className="text-sm text-alt-light truncate group-hover:text-alt-accent transition-colors" style={{ color: '#ccd6f6', fontSize: '0.875rem' }}>
                        {github.replace('https://github.com/', '@')}
                      </p>
                    </div>
                  </a>

                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-alt-dark/50 hover:bg-alt-card-hover transition-colors group"
                    style={{ backgroundColor: 'rgba(10, 25, 47, 0.5)', borderRadius: '0.5rem' }}
                  >
                    <div className="w-9 h-9 rounded-full bg-alt-accent/10 flex items-center justify-center" style={{ backgroundColor: 'rgba(252, 211, 77, 0.1)', borderRadius: '9999px' }}>
                      <FontAwesomeIcon icon={faLinkedinIn} className="w-3.5 h-3.5 text-alt-accent" style={{ color: '#fcd34d' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-alt-muted" style={{ color: '#8892b0', fontSize: '0.75rem' }}>LinkedIn</p>
                      <p className="text-sm text-alt-light truncate group-hover:text-alt-accent transition-colors" style={{ color: '#ccd6f6', fontSize: '0.875rem' }}>
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
                      style={{ backgroundColor: 'rgba(10, 25, 47, 0.5)', borderRadius: '0.5rem' }}
                    >
                      <div className="w-9 h-9 rounded-full bg-alt-accent/10 flex items-center justify-center" style={{ backgroundColor: 'rgba(252, 211, 77, 0.1)', borderRadius: '9999px' }}>
                        <FontAwesomeIcon icon={faGlobe} className="w-3.5 h-3.5 text-alt-accent" style={{ color: '#fcd34d' }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-alt-muted" style={{ color: '#8892b0', fontSize: '0.75rem' }}>Website</p>
                        <p className="text-sm text-alt-light truncate group-hover:text-alt-accent transition-colors" style={{ color: '#ccd6f6', fontSize: '0.875rem' }}>
                          {website.replace('https://', '').replace('http://', '')}
                        </p>
                      </div>
                    </a>
                  )}
                </div>
              </div>

              {/* Right side - QR Code */}
              <div className="flex flex-col items-center justify-center sm:border-l sm:border-alt-border sm:pl-6" style={{ borderColor: '#233554' }}>
                <div className="bg-white p-3 rounded-xl" style={{ backgroundColor: '#ffffff', borderRadius: '0.75rem', padding: '0.75rem' }}>
                  <QRCodeSVG
                    value={siteUrl}
                    size={140}
                    bgColor="#ffffff"
                    fgColor="#0A192F"
                    level="M"
                  />
                </div>
                <p className="text-alt-muted text-xs mt-3 text-center" style={{ color: '#8892b0', fontSize: '0.75rem', marginTop: '0.75rem' }}>Scan to visit</p>
                <p className="text-alt-accent text-xs font-mono" style={{ color: '#fcd34d', fontSize: '0.75rem' }}>{siteUrl.replace('https://', '')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Export button - outside the card for cleaner export */}
        <button
          onClick={exportAsPng}
          className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 bg-alt-accent text-alt-dark font-semibold rounded-lg hover:bg-alt-accent-hover transition-all duration-300"
        >
          <FontAwesomeIcon icon={faDownload} className="w-4 h-4" />
          Export as PNG
        </button>
      </div>
    </div>
  )
}
