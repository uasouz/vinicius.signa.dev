import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface ContactLinkProps {
  href: string
  icon: IconDefinition
  label: string
  value: string
  external?: boolean
}

export default function ContactLink({ href, icon, label, value, external = false }: ContactLinkProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-3 p-2.5 rounded-lg bg-alt-dark/50 hover:bg-alt-card-hover transition-colors group"
    >
      <div className="w-9 h-9 rounded-full bg-alt-accent/10 flex items-center justify-center">
        <FontAwesomeIcon icon={icon} className="w-3.5 h-3.5 text-alt-accent" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-alt-muted">{label}</p>
        <p className="text-sm text-alt-light truncate group-hover:text-alt-accent transition-colors">{value}</p>
      </div>
    </a>
  )
}
