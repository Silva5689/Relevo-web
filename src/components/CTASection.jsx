import { siteContent } from '../content/siteContent.js'
import { ArrowRightIcon } from './Icons.jsx'

function CTASection() {
  const { eyebrow, description, action, demoUrl } = siteContent.cta
  const { slogan } = siteContent

  return (
    <section className="cta-section" id="contacto" aria-labelledby="cta-title">
      <div className="container cta-panel">
        <div>
          <p className="cta-eyebrow">{eyebrow}</p>
          <h2 id="cta-title">{slogan}</h2>
          <p className="cta-description">{description}</p>
        </div>
        <a
          className="button button--primary"
          href={demoUrl}
          target="_blank"
          rel="noreferrer"
        >
          {action} <ArrowRightIcon size={19} />
        </a>
      </div>
    </section>
  )
}

export default CTASection
