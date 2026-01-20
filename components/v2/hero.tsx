import { Me } from "../../types/me"
import { HERO_TEXT } from "../../constants/content"

interface HeroV2Props {
  me: Me
  className?: string
  onGetInTouch?: () => void
}

export default function HeroV2({ me, className, onGetInTouch }: HeroV2Props) {
  return (
    <section className={`min-h-[calc(100vh-6rem)] flex flex-col justify-center ${className || ''}`}>
      <div className="max-w-3xl">
        {/* Text content */}
        <p className="text-alt-accent font-mono text-sm md:text-base mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {HERO_TEXT.greeting}
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-alt-accent mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {me.name}
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-alt-muted mb-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {HERO_TEXT.tagline}
        </h2>

        <p className="text-alt-muted text-base md:text-lg max-w-2xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
          {HERO_TEXT.description}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <a
            href="#experience"
            className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-alt-accent text-alt-accent font-semibold rounded hover:bg-alt-accent/10 transition-all duration-300"
          >
            View My Work
          </a>
          <button
            onClick={onGetInTouch}
            className="inline-flex items-center justify-center px-6 py-3 bg-alt-accent text-alt-dark font-semibold rounded hover:bg-alt-accent-hover transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex justify-center mt-16 animate-bounce">
        <a href="#about" className="text-alt-muted hover:text-alt-accent transition-colors duration-200">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
