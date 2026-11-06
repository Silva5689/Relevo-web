import { siteContent } from '../content/siteContent.js'

function VideoSection() {
  const { eyebrow, heading, description, placeholder } = siteContent.video

  return (
    <section className="video-section" id="video" aria-labelledby="video-title">
      <div className="container video-layout">
        <div className="video-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> {eyebrow}</p>
          <h2 id="video-title">{heading}</h2>
          <p>{description}</p>
        </div>
        <div className="video-placeholder" aria-label="Espacio reservado para el vídeo conceptual">
          <span className="video-placeholder__play" aria-hidden="true">▶</span>
          <p>{placeholder}</p>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
