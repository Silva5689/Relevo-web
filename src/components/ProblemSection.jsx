import { siteContent } from '../content/siteContent.js'
import { ArrowRightIcon, CalendarIcon, MessageIcon, QuestionIcon } from './Icons.jsx'

const iconMap = {
  calendar: CalendarIcon,
  messages: MessageIcon,
  question: QuestionIcon,
}

function ProblemSection() {
  const { eyebrow, headingStart, headingAccent, introduction, cards } = siteContent.problem

  return (
    <section className="problem-section" id="problema" aria-labelledby="problem-title">
      <div className="container">
        <div className="problem-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> {eyebrow}</p>
            <h2 id="problem-title">{headingStart}<br /><span>{headingAccent}</span></h2>
          </div>
          <p>{introduction}</p>
        </div>

        <div className="story-intro" id="ejemplo">
          <div className="story-intro__left">
            <span className="story-tag">UN EJEMPLO COTIDIANO</span>
            <p>Una clase de <strong>boxeo</strong> está programada. El monitor no puede venir. <strong>¿Y ahora qué?</strong></p>
          </div>
          <div className="story-intro__right">
            <span className="story-intro__symbol" aria-hidden="true">↗</span>
            <p>Un caso ilustrativo para mostrar el tipo de descoordinación que Relevo busca resolver.</p>
          </div>
        </div>

        <div className="problem-grid">
          {cards.map((card) => {
            const Icon = iconMap[card.icon]
            return (
              <article className="problem-card" key={card.number}>
                <div className="problem-card__top">
                  <span className="problem-card__icon"><Icon size={27} /></span>
                  <span className="problem-card__number">{card.number} / 03</span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="problem-card__line" aria-hidden="true" />
              </article>
            )
          })}
        </div>

        <div className="problem-conclusion">
          <div>
            <span className="problem-conclusion__label">EL CAMBIO QUE BUSCAMOS</span>
            <p>Menos incertidumbre. <strong>Un horario que todos puedan consultar.</strong></p>
          </div>
          <span className="problem-conclusion__arrow"><ArrowRightIcon size={27} /></span>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
