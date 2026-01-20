interface SectionHeadingAltProps {
  number: number
  title: string
  className?: string
}

export default function SectionHeadingAlt({ number, title, className }: SectionHeadingAltProps) {
  return (
    <div className={`flex items-center gap-4 ${className || ''}`}>
      <span className="text-alt-accent font-mono text-sm md:text-base">
        {number.toString().padStart(2, '0')}.
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-alt-light whitespace-nowrap">
        {title}
      </h2>
      <div className="hidden sm:block flex-grow h-px bg-alt-border max-w-xs" />
    </div>
  )
}
