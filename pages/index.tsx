import AboutMe from './about'
import Hero from './hero'
import { me } from './me'
import StyledLinks from './styled-links'
import XPCard from './components/xp-card'
import NumberedHeading from './components/NumberedHeading'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faSheetPlastic } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const links = [
  {
    linkText: 'About Me',
    link: '#about',
  },
  {
    linkText: 'Experience',
    link: '#experience',
  }
]

export default function Home() {
  return (
    <main className="bg-navy-blue max-h-screen h-screen overflow-x-hidden flex flex-col md:flex-row">
      <div className="flex flex-row md:flex-col items-center p-3 border-b-2 md:border-b-0 md:border-r-2 border-yellow-300 h-[64px] md:min-h-full md:h-full">
        <Image src={me.photo} width={64} height={64} alt="me" className="rounded-full w-[32px] md:w-[64px] mr-8 md:mr-0 md:mb-8" />
        <Link className="mr-8 md:mr-0 md:mb-8" target='_blank' href="https://github.com/uasouz" ><FontAwesomeIcon size="2x" className="text-yellow-300 hover:text-gray-300 text-xl md:text-3xl" icon={faGithub} /></Link>
        <Link className="mr-8 md:mr-0 md:mb-8" target='_blank' href="https://linkedin.com/in/vlopes45" ><FontAwesomeIcon size="2x" className="text-yellow-300 hover:text-gray-300 text-xl md:text-3xl" icon={faLinkedinIn} /></Link>
        <Link className="mr-8 md:mr-0 md:mb-8" target='_blank' href="mailto:vlopes45@gmail.com" ><FontAwesomeIcon size="2x" className="text-yellow-300 hover:text-gray-300 text-xl md:text-3xl" icon={faEnvelope} /></Link>
        <Link className='border-2 rounded border-yellow-300 p-2 text-yellow-300 hover:text-gray-300' target='_blank' href=''><FontAwesomeIcon size="2x" className="text-yellow-300 hover:text-gray-300 text-xl md:text-3xl" icon={faSheetPlastic} /></Link>
      </div>
      <div className="relative flex flex-col w-screen mx-auto font-sans text-base max-w-1440 text-dawn lg:flex-row">

        <div className="static flex flex-col w-full lg:w-[50vw] p-8 md:p-16">
          {/* Add hero section */}
          <Hero me={me} className="h-200" />

          <nav>
            <StyledLinks links={links} listClassName="flex flex-col w-full" linkClassName="text-xl p-2 font-bold text-yellow-300" />
          </nav>
        </div>
        <div className="static p-5 md:p-16 w-full lg:max-w-[50vw] h-screen">
          <div className="h-full lg:overflow-y-scroll lg:no-scrollbar">
            {/* Add about me section */}
            <AboutMe me={me} />

            <section id="experience">
              <NumberedHeading headingText="Experience" headingNumber={2} />
              <br />
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
