import { FileText, Image, Network } from 'lucide-react'
import { Reveal } from './UI'

export default function MediaGrid({ images, documents, diagrams, onImageOpen }) {
  return (
    <div className="media-grid">
      {images.map((image, index) => (
        <Reveal className="media-card" key={image.id}>
          <button className="media-card__image" type="button" onClick={() => onImageOpen(index)} aria-label={`Open ${image.title}`}>
            <img src={image.src} alt={image.title} />
            <span><Image /> View image</span>
          </button>
          <div className="media-card__body"><h3>{image.title}</h3><p>{image.description}</p></div>
        </Reveal>
      ))}
      {diagrams.map((diagram) => (
        <Reveal className="media-card media-card--diagram" key={diagram.id}>
          <div className="media-diagram">
            {diagram.blocks.map((block) => <span key={block}>{block}</span>)}
          </div>
          <div className="media-card__body"><Network /><div><h3>{diagram.title}</h3><p>{diagram.description}</p></div></div>
        </Reveal>
      ))}
      {documents.map((document) => (
        <Reveal className="media-card media-card--document" key={document.id}>
          <a className="media-document" href={document.src} target="_blank" rel="noreferrer"><FileText /><span>Open PDF document</span></a>
          <div className="media-card__body"><h3>{document.title}</h3><p>{document.description}</p></div>
        </Reveal>
      ))}
    </div>
  )
}
