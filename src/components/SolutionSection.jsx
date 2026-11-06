import { siteContent } from '../content/siteContent.js'

function SolutionSection() {
  const { eyebrow, headingStart, headingAccent, introduction, steps, note } =
    siteContent.solution

  return (
    <section className="solution-section" id="solucion" aria-labelledby="solution-title">
      <div className="container">
        <div className="proposal-heading">
          <p className="eyebrow"><span className="eyebrow-dot" /> {eyebrow}</p>
          <h2 id="solution-title">
            {headingStart} <span>{headingAccent}</span>
          </h2>
          <p className="proposal-introduction">{introduction}</p>
        </div>

        <ol className="solution-steps">
          {steps.map((step) => (
            <li className="solution-step" key={step.number}>
              <span className="solution-step__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
        <p className="proposal-note">{note}</p>
      </div>
    </section>
  )
}

export default SolutionSection
