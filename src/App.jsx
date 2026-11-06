import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProblemSection from './components/ProblemSection.jsx'
import SolutionSection from './components/SolutionSection.jsx'
import BenefitsSection from './components/BenefitsSection.jsx'
import VideoSection from './components/VideoSection.jsx'
import CTASection from './components/CTASection.jsx'

function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <VideoSection />
        <CTASection />
      </main>
    </>
  )
}

export default App
