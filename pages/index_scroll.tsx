import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './header'
import AboutMe from './about'
import Hero from './hero'
import Experience from './experience'
import { me } from './me'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-navy-blue min-h-screen p-5">
      <Header />
      <div className="flex flex-col items-center">
        {/* Add hero section */}
        <Hero me={me} className="lg:w-1/2 xl:w-1/2 flex flex-col items-left py-9" />
        {/* Add about me section */}
        <AboutMe me={me} className="max-w-m rounded shadow-lg lg:w-1/2 lg:max-w-full lg:flex lg:flex-col"/>
        {/* Add experience section */}
        <Experience me={me} />
        {/* Add contact section */}
        <div className="flex flex-col items-center">
        </div>
        {/* Add footer */}
        <div className="flex flex-row justify-between w-full">
        </div>
      </div>
    </main>
  )
}
