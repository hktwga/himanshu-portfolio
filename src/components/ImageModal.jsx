import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function ImageModal({ images, activeIndex, onClose, onChange }) {
  const isOpen = activeIndex !== null

  useEffect(() => {
    if (!isOpen) return undefined

    const showPrevious = () => onChange((activeIndex - 1 + images.length) % images.length)
    const showNext = () => onChange((activeIndex + 1) % images.length)
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex, images.length, isOpen, onChange, onClose])

  if (!isOpen || !images[activeIndex]) return null

  const image = images[activeIndex]
  const showPrevious = () => onChange((activeIndex - 1 + images.length) % images.length)
  const showNext = () => onChange((activeIndex + 1) % images.length)

  return (
    <div className="image-modal" role="dialog" aria-modal="true" aria-label={image.title} onClick={onClose}>
      <button className="image-modal__close" type="button" onClick={onClose} aria-label="Close image gallery"><X /></button>
      <button className="image-modal__nav image-modal__nav--previous" type="button" onClick={(event) => { event.stopPropagation(); showPrevious() }} aria-label="Previous image"><ChevronLeft /></button>
      <figure className="image-modal__content" onClick={(event) => event.stopPropagation()}>
        <img src={image.src} alt={image.title} />
        <figcaption><strong>{image.title}</strong><span>{image.description}</span><small>{activeIndex + 1} / {images.length}</small></figcaption>
      </figure>
      <button className="image-modal__nav image-modal__nav--next" type="button" onClick={(event) => { event.stopPropagation(); showNext() }} aria-label="Next image"><ChevronRight /></button>
    </div>
  )
}
