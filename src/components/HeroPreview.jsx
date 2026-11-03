import { AlertIcon, CalendarIcon, CheckIcon } from './Icons.jsx'

/** Visual ilustrativo. No es una pantalla real de una aplicación funcionando. */
function HeroPreview() {
  return (
    <div className="preview-shell">
      <div className="preview-orbit preview-orbit--one" aria-hidden="true" />
      <div className="preview-orbit preview-orbit--two" aria-hidden="true" />

      <div className="preview-window">
        <div className="preview-topbar">
          <div className="preview-topbar__title">
            <span className="preview-topbar__icon"><CalendarIcon size={19} /></span>
            <span>Planificación semanal</span>
          </div>
          <span className="preview-topbar__pill">Vista ilustrativa</span>
        </div>

        <div className="preview-body">
          <div className="preview-date">
            <div>
              <span className="preview-date__overline">EJEMPLO · GIMNASIO</span>
              <h2>Martes</h2>
            </div>
            <span className="preview-date__month">Clases del día</span>
          </div>

          <div className="preview-timeslot preview-timeslot--faded" aria-hidden="true">
            <span className="preview-timeslot__time">17:00</span>
            <span className="preview-timeslot__bar" />
            <span className="preview-timeslot__label">Turno anterior</span>
          </div>

          <div className="preview-timeslot preview-timeslot--focus">
            <span className="preview-timeslot__time">18:00</span>
            <div className="preview-class">
              <div className="preview-class__heading">
                <span className="preview-class__dot" />
                <strong>Clase de boxeo</strong>
                <span>60 min</span>
              </div>
              <div className="preview-class__detail">¿Quién puede cubrirla?</div>
            </div>
          </div>

          <div className="preview-timeslot preview-timeslot--faded" aria-hidden="true">
            <span className="preview-timeslot__time">19:30</span>
            <span className="preview-timeslot__bar" />
            <span className="preview-timeslot__label">Siguiente turno</span>
          </div>

          <div className="preview-bottom-note">
            <span className="preview-bottom-note__icon"><CheckIcon size={14} /></span>
            Un solo lugar para consultar horarios
          </div>
        </div>
      </div>

      <div className="preview-alert" role="note">
        <span className="preview-alert__icon"><AlertIcon size={21} /></span>
        <div>
          <strong>Surge un imprevisto</strong>
          <span>El monitor no puede dar la clase.</span>
        </div>
      </div>
      <p className="preview-caption">Ejemplo conceptual · No representa una funcionalidad ya implementada</p>
    </div>
  )
}

export default HeroPreview
