import { Play } from 'lucide-react'
import { Reveal } from './UI'

export default function VideoGallery({ videos }) {
  if (!videos.length) return null

  return (
    <div className="video-gallery">
      {videos.map((video) => (
        <Reveal className="video-card" key={video.id}>
          {video.src ? (
            <div className="video-wrapper">
              <video
                controls
                preload="metadata"
                poster={video.thumbnail}
                src={video.src}
              />
            </div>
          ) : (
            <div
              className="video-card__placeholder"
              style={{ backgroundImage: `url(${video.thumbnail})` }}
            >
              <Play />
              <span>Video placeholder</span>
            </div>
          )}

          <div className="media-card__body">
            <h3>{video.title}</h3>
            {video.description && <p>{video.description}</p>}
          </div>
        </Reveal>
      ))}
    </div>
  )
}