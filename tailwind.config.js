/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      },
      colors: {
        'navy-blue': '#0A192F',
        // V2 modern color palette
        'v2-dark': '#0f0f0f',
        'v2-darker': '#080808',
        'v2-card': '#1a1a1a',
        'v2-card-hover': '#242424',
        'v2-accent': '#60a5fa',
        'v2-accent-hover': '#93c5fd',
        'v2-muted': '#a3a3a3',
        'v2-border': '#2a2a2a',
        // V2 Alt - Original colors modernized
        'alt-dark': '#0A192F',
        'alt-darker': '#071224',
        'alt-card': '#112240',
        'alt-card-hover': '#1d3461',
        'alt-accent': '#fcd34d',
        'alt-accent-hover': '#fde68a',
        'alt-muted': '#8892b0',
        'alt-border': '#233554',
        'alt-light': '#ccd6f6',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'v2-gradient': 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)',
        'v2-glow': 'radial-gradient(ellipse at center, rgba(96, 165, 250, 0.15) 0%, transparent 70%)',
        'alt-glow': 'radial-gradient(ellipse at center, rgba(252, 211, 77, 0.1) 0%, transparent 70%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
