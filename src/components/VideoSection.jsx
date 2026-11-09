import { siteContent } from '../content/siteContent.js'

function VideoSection() {
  const { eyebrow, heading, description } = siteContent.video

  return (
    <section className="video-section" id="video" aria-labelledby="video-title">
      <div className="container video-layout">
        <div className="video-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> {eyebrow}</p>
          <h2 id="video-title">{heading}</h2>
          <p>{description}</p>
        </div>
        <video
          className="video-player"
          controls
          muted={false}
          playsInline
          preload="metadata"
          aria-label="Vídeo conceptual de Relevo"
        >
          <source
            src={`${import.meta.env.BASE_URL}RELEVO_antes_despues_FullHD.mp4`}
            type="video/mp4"
          />
          Tu navegador no puede reproducir este vídeo.
        </video>
      </div>
    </section>
  )
}

export default VideoSection
