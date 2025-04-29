import { useEffect, useState } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import CustomCursor from './components/ui/CustomCursor'
import LoadingScreen from './components/ui/LoadingScreen'
import { useTheme } from './context/ThemeContext'

function App() {
  const { scrollYProgress } = useScroll()
  const { theme } = useTheme()
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={theme}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <>
            {/* Progress bar */}
            <motion.div
              className="progress-bar"
              style={{ scaleX: scrollYProgress }}
            />
            
            {/* Custom cursor (only on desktop) */}
            {!isMobile && <CustomCursor />}
            
            <Header />
            
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
            
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App