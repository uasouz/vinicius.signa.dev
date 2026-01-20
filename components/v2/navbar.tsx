import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import SocialLinks from './social-links'
import { CV_PATH } from '../../constants/content'

function profilePictureLoader({ src, width }: { src: string, width: number }) {
  return `${src}.png?size=${width}`
}

interface NavbarProps {
  photo: string
  variant?: 'default' | 'widescreen'
  navLinks?: { href: string; label: string }[]
  tabs?: { id: string; label: string; active: boolean; onClick: () => void }[]
}

export default function Navbar({ photo, variant = 'default', navLinks, tabs }: NavbarProps) {
  const isWidescreen = variant === 'widescreen'
  const containerClass = isWidescreen
    ? 'max-w-[1800px] mx-auto px-6 lg:px-12'
    : 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'
  const height = isWidescreen ? 'h-14' : 'h-16'
  const imageSize = isWidescreen ? 36 : 40

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-alt-dark/90 border-b border-alt-border">
      <div className={containerClass}>
        <div className={`flex items-center justify-between ${height}`}>
          {/* Logo/Avatar */}
          <div className="flex items-center gap-3">
            <Image
              loader={profilePictureLoader}
              src={`${photo}?size=128`}
              width={imageSize}
              height={imageSize}
              alt="me"
              className="rounded-full ring-2 ring-alt-accent/30 hover:ring-alt-accent transition-all duration-300"
            />
            <span className={`text-alt-light font-semibold ${!isWidescreen ? 'hidden sm:block' : ''}`}>VL</span>
          </div>

          {/* Section tabs (widescreen) */}
          {tabs && (
            <div className="flex items-center gap-1 bg-alt-card rounded-lg p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={tab.onClick}
                  className={`px-4 py-1.5 text-sm font-medium rounded transition-all duration-200 ${
                    tab.active
                      ? 'bg-alt-accent text-alt-dark'
                      : 'text-alt-muted hover:text-alt-light'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}

          {/* Navigation links (default) */}
          {navLinks && (
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-alt-muted hover:text-alt-accent transition-colors duration-200 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          {/* Social links + CV Download */}
          <div className="flex items-center gap-4">
            <SocialLinks />
            <Link
              aria-label="Download CV"
              href={CV_PATH}
              target="_blank"
              className="flex items-center gap-2 px-3 py-1.5 border border-alt-accent text-alt-accent text-sm font-medium rounded hover:bg-alt-accent/10 transition-all duration-200"
            >
              <FontAwesomeIcon icon={faDownload} className="w-3.5 h-3.5" />
              <span className={isWidescreen ? '' : 'hidden sm:inline'}>CV</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
