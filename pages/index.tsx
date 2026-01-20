import { useState, useEffect } from 'react'
import { me } from '../me'
import WidescreenLayout from '../components/v2/layouts/widescreen-layout'
import DefaultLayout from '../components/v2/layouts/default-layout'
import { WIDESCREEN } from '../constants/content'

export default function Home() {
  const [isWidescreen, setIsWidescreen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState<'about' | 'experience'>('about')
  const [selectedExp, setSelectedExp] = useState(0)
  const [showVisitCard, setShowVisitCard] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      const isWide = window.innerWidth >= WIDESCREEN.minWidth && window.innerHeight >= WIDESCREEN.minHeight
      setIsWidescreen(isWide)
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    // Initial check
    checkScreenSize()

    // Listen for resize and scroll
    window.addEventListener('resize', checkScreenSize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', checkScreenSize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (isWidescreen) {
    return (
      <WidescreenLayout
        me={me}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        selectedExp={selectedExp}
        setSelectedExp={setSelectedExp}
        showVisitCard={showVisitCard}
        setShowVisitCard={setShowVisitCard}
      />
    )
  }

  return (
    <DefaultLayout
      me={me}
      showScrollTop={showScrollTop}
      scrollToTop={scrollToTop}
      showVisitCard={showVisitCard}
      setShowVisitCard={setShowVisitCard}
    />
  )
}
