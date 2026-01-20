import AboutMe from '../components/about'
import Hero from '../components/hero'
import { me } from '../me'
import StyledLinks from '../components/styled-links'
import XPCard from '../components/xp-card'
import NumberedHeading from '../components/NumberedHeading'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faSheetPlastic } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Head from 'next/head'

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

function profilePictureLoader({ src, width}: {src: string, width: number, quality?: number | undefined}) {
  return `${src}.png?size=${width}`
}

export default function Home() {
  return (
    <main className="bg-navy-blue max-h-screen h-screen overflow-x-hidden flex flex-col md:flex-row">
       <Head >
        <title>Vinícius Lopes | Software Developer</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Vinícius Lopes | Software Developer | Portifolio" />
      </Head>
      <div className="flex flex-row md:flex-col items-center p-3 border-b-2 md:border-b-0 md:border-r-2 border-yellow-300 h-[64px] md:min-h-full md:h-full">
        <Image loader={profilePictureLoader} src={`${me.photo}?size=128`} width={64} height={64} alt="me" className="rounded-full w-[32px] md:w-[64px] mr-8 md:mr-0 md:mb-8" />
        <Link aria-label={"Github link"} className="p-2 mr-8 md:mr-0 md:mb-8" target='_blank' href="https://github.com/uasouz" ><FontAwesomeIcon size="2x" className="text-yellow-300 hover:text-gray-300 text-xl md:text-3xl" icon={faGithub} /></Link>
        <Link aria-label={"Linkedin link"} className="p-2 mr-8 md:mr-0 md:mb-8" target='_blank' href="https://linkedin.com/in/vlopes45" ><FontAwesomeIcon size="2x" className="text-yellow-300 hover:text-gray-300 text-xl md:text-3xl" icon={faLinkedinIn} /></Link>
        <Link aria-label='Mail to' className="p-2 mr-8 md:mr-0 md:mb-8" target='_blank' href="mailto:vlopes45@gmail.com" ><FontAwesomeIcon size="2x" className="text-yellow-300 hover:text-gray-300 text-xl md:text-3xl" icon={faEnvelope} /></Link>
        <Link aria-label="Resume Download" className='border-2 rounded border-yellow-300 p-2 text-yellow-300 hover:text-gray-300' target='_blank' href='Vinícius%20Lopes%20-%20Software%20Developer.pdf'><FontAwesomeIcon size="2x" className="text-yellow-300 hover:text-gray-300 text-xl md:text-3xl" icon={faSheetPlastic} /></Link>
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
