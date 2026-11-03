import { siteContent } from '../content/siteContent.js'
import { ArrowRightIcon, CheckIcon } from './Icons.jsx'
import HeroPreview from './HeroPreview.jsx'

function Hero() {
  const { eyebrow, headingStart, headingAccent, description, primaryAction, secondaryAction } = siteContent.hero

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-glow hero-glow--left" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> {eyebrow}</p>
          <h1 id="hero-title">{headingStart}<br /><span>{headingAccent}</span></h1>
          <p className="hero-description">{description}</p>
          <div className="hero-actions">
            <a className="button button--primary" href="#problema">
              {primaryAction} <ArrowRightIcon size={19} />
            </a>
            <a className="button button--text" href="#ejemplo">{secondaryAction} <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-points" aria-label="En qué se enfoca Relevo">
            <span><CheckIcon /> Negocios pequeños</span>
            <span><CheckIcon /> Horarios claros</span>
            <span><CheckIcon /> Menos mensajes</span>
          </div>
        </div>
        <HeroPreview />
      </div>
    </section>
  )
}

export default Hero
