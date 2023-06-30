import { useState } from 'react';
import StyledLinks from '../styled-links'
import GHLogo from '../GHLogo/logo';

const links = [
  {
    linkText: 'About Me',
    link: '#about',
  },
  {
    linkText: 'Experience',
    link: '#experience',
  },
  {
    linkText: 'Contact',
    link: '#contact',
  }
]


export default function Header() {

  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className='sticky top-0 z-30 bg-navy-blue shadow-xl'>
      <nav className="flex md:flex-row flex-col md:items-center justify-between w-full p-5">
        <div className="flex items-center flex-shrink-0 text-yellow-300 justify-between">
          <div className="flex items-center flex-shrink-0 text-yellow-300 text-5xl mr-6">
            VL
          </div>
          <div className="flex flex-row items-center gap-5">
            {/* add github logo  */}
            <GHLogo width={24} height={24} fill='rgb(253 224 71)' />
            <div className={`text-3xl md:hidden transform duration-300 ${isExpanded ? "rotate-45" : ""}`} onClick={
              () => {
                toggleExpansion(!isExpanded)
              }
            }><span>+</span></div>
          </div>
        </div>
        <div className="block lg:hidden">
        </div>
        <div className={`transform duration-300 ease-in overflow-hidden transition-height ${isExpanded ? "max-sm:h-[200px]" : "max-sm:h-0"}`}>
          <StyledLinks links={links} />
        </div>
      </nav>
    </header>
  )
}
