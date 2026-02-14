import React from 'react'
import Hero from './components/Hero'
import Journey from './components/Journey'
import TechnicalMap from './components/TechnicalMap'
import Projects from './components/Projects'
import Explorer from './components/Explorer'
import Gallery from './components/Gallery'
import Creative from './components/Creative'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import WorldMap from './components/WorldMap'

function App() {
  return (
    <div className="relative">
      <WorldMap />
      <Navigation />
      <Hero />
      <Journey />
      <TechnicalMap />
      <Projects />
      <Explorer />
      <Gallery />
      <Creative />
      <Timeline />
      <Contact />
    </div>
  )
}

export default App
