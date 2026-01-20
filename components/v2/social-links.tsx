import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { SOCIAL_LINKS } from '../../constants/content'

interface SocialLinksProps {
  className?: string
  iconSize?: string
}

export default function SocialLinks({ className = '', iconSize = 'w-5 h-5' }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Link
        aria-label="Github link"
        target="_blank"
        href={SOCIAL_LINKS.github}
        className="text-alt-muted hover:text-alt-accent transition-colors duration-200"
      >
        <FontAwesomeIcon icon={faGithub} className={iconSize} />
      </Link>
      <Link
        aria-label="Linkedin link"
        target="_blank"
        href={SOCIAL_LINKS.linkedin}
        className="text-alt-muted hover:text-alt-accent transition-colors duration-200"
      >
        <FontAwesomeIcon icon={faLinkedinIn} className={iconSize} />
      </Link>
      <Link
        aria-label="Email"
        href={`mailto:${SOCIAL_LINKS.email}`}
        className="text-alt-muted hover:text-alt-accent transition-colors duration-200"
      >
        <FontAwesomeIcon icon={faEnvelope} className={iconSize} />
      </Link>
    </div>
  )
}
