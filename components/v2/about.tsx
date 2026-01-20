import { Me } from "../../types/me"
import { ABOUT_TEXT } from "../../constants/content"

export default function AboutV2({ me, className }: { me: Me, className?: string }) {
  return (
    <div className={`mt-8 ${className || ''}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* About text */}
        <div className="lg:col-span-8">
          <div className="space-y-6 text-alt-muted">
            <p className="text-lg leading-relaxed">
              <span className="text-alt-accent text-2xl font-semibold">{ABOUT_TEXT.title}</span>
            </p>
            {ABOUT_TEXT.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base md:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Skills/Tech stack */}
        <div className="lg:col-span-4">
          <div className="bg-alt-card border border-alt-border rounded-lg p-6 hover:border-alt-accent/50 transition-colors duration-300">
            <h3 className="text-alt-light font-semibold mb-4 flex items-center gap-2">
              <span className="text-alt-accent">&#9656;</span>
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {me.about.skills.map((skill, index) => (
                <span
                  key={`skill-${index}`}
                  className="flex items-center gap-2 text-sm text-alt-muted hover:text-alt-accent transition-colors duration-200"
                >
                  <span className="text-alt-accent text-xs">▹</span>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Quick facts card */}
          <div className="mt-6 bg-alt-card border border-alt-border rounded-lg p-6 hover:border-alt-accent/50 transition-colors duration-300">
            <h3 className="text-alt-light font-semibold mb-4 flex items-center gap-2">
              <span className="text-alt-accent">&#9656;</span>
              Quick Facts
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-alt-muted">
                <span className="text-alt-accent">▹</span>
                <span>{me.nationality}</span>
              </li>
              <li className="flex items-center gap-3 text-alt-muted">
                <span className="text-alt-accent">▹</span>
                <span>10+ Years in Software Development</span>
              </li>
              <li className="flex items-center gap-3 text-alt-muted">
                <span className="text-alt-accent">▹</span>
                <span>Passionate Problem Solver</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
