interface ExperienceCardAltProps {
  title: string
  company: string
  achievements: string[]
  technologies: string[]
  startDate: string
  endDate: string
  index: number
}

export default function ExperienceCardAlt({
  title,
  company,
  achievements,
  technologies,
  startDate,
  endDate,
  index
}: ExperienceCardAltProps) {
  return (
    <div
      className="group relative bg-alt-card border border-alt-border rounded-lg p-6 hover:border-alt-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-alt-accent/5"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Accent line on left */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-alt-border rounded-l-lg group-hover:bg-alt-accent transition-colors duration-300" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4 pl-4">
        <div>
          <h3 className="text-xl font-semibold text-alt-light group-hover:text-alt-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-alt-accent font-medium">
            @ {company}
          </p>
        </div>
        <span className="text-sm text-alt-muted font-mono whitespace-nowrap">
          {startDate} — {endDate}
        </span>
      </div>

      {/* Achievements */}
      <ul className="space-y-3 mb-6 pl-4">
        {achievements.map((achievement, idx) => (
          <li key={`${title}-achievement-${idx}`} className="flex gap-3 text-alt-muted">
            <span className="text-alt-accent mt-0.5 flex-shrink-0">▹</span>
            <span className="text-sm leading-relaxed">{achievement}</span>
          </li>
        ))}
      </ul>

      {/* Technologies */}
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 pl-4 pt-4 border-t border-alt-border">
          {technologies.map((tech, idx) => (
            <span
              key={`${title}-tech-${idx}`}
              className="px-2.5 py-1 text-xs font-mono text-alt-accent bg-alt-dark border border-alt-border rounded hover:border-alt-accent/50 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
