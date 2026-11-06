import { siteContent } from '../content/siteContent.js'

function BenefitsSection() {
  const { eyebrow, heading, introduction, cards } = siteContent.benefits

  return (
    <section className="benefits-section" id="beneficios" aria-labelledby="benefits-title">
      <div className="container">
        <div className="proposal-heading">
          <p className="eyebrow"><span className="eyebrow-dot" /> {eyebrow}</p>
          <h2 id="benefits-title">{heading}</h2>
          <p className="proposal-introduction">{introduction}</p>
        </div>

        <div className="benefits-grid">
          {cards.map((card) => (
            <article className="benefit-card" key={card.audience}>
              <p className="benefit-card__audience">{card.audience}</p>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
