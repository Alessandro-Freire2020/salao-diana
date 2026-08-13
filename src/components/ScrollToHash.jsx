import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const sectionId = decodeURIComponent(hash.slice(1))
    let attempts = 0

    const scrollToSection = () => {
      const section = document.getElementById(sectionId)

      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }

      attempts += 1
      if (attempts < 10) window.setTimeout(scrollToSection, 50)
    }

    scrollToSection()
  }, [pathname, hash])

  return null
}

export default ScrollToHash
