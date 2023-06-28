import AboutMe from './about'
import Hero from './hero'
import { me } from './me'
import GHLogo from './components/GHLogo/logo'
import StyledLinks from './styled-links'
import XPCard from './components/xp-card'
import NumberedHeading from './components/NumberedHeading'
import Link from 'next/link'

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

export default function Home() {
  return (
    <main className="bg-navy-blue max-h-screen h-screen overflow-x-hidden flex flex-col md:flex-row">
      <div className="flex flex-row md:flex-col items-center p-3 border-b-2 md:border-b-0 md:border-r-2 border-yellow-300 h-[64px] md:h-full">
        <img src={me.photo} className="rounded-full w-[48px] md:w-[64px] mr-8 md:mr-0 md:mb-8" loading='lazy' />
        <Link className="mr-8 md:mr-0 md:mb-8" target='_blank' href="https://github.com/uasouz" ><GHLogo width={32} height={32} fill='rgb(253 224 71)' /></Link>
        <Link className='border-2 rounded border-yellow-300 p-2 text-yellow-300 hover:text-gray-300' target='_blank' href=''>Resume</Link>
      </div>
      <div className="relative flex flex-col w-screen mx-auto font-sans text-base max-w-1440 text-dawn md:flex-row">

        <div className="static flex flex-col w-full md:w-[50vw] p-8 md:p-16">
          {/* Add hero section */}
          <Hero me={me} className="h-200" />

          <nav>
            <StyledLinks links={links} listClassName="flex flex-col w-full" linkClassName="text-xl p-2 font-bold text-yellow-300" />
          </nav>
        </div>
        <div className="static p-5 md:p-16 w-full md:max-w-[50vw] h-screen md:right-0 lg:py-88 lg:pr-88 md:pl-0">
          <div className="h-full md:overflow-y-scroll md:no-scrollbar">
            {/* Add about me section */}
            <AboutMe me={me} />

            <section id="experience">
              <NumberedHeading headingText="Experience" headingNumber={2} />
              {
                me.experience.map((experience, index) => {
                  return (
                    <XPCard key={index} title={experience.title} achievements={experience.achievements}
                      company={experience.company} startDate={experience.startDate} endDate={experience.endDate} />
                  )
                })
              }
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
