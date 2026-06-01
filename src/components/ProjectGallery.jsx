import { useState } from 'react'
import ImageModal from './ImageModal'
import MediaGrid from './MediaGrid'
import VideoGallery from './VideoGallery'

export default function ProjectGallery({ images = [], videos = [], documents = [], diagrams = [] }) {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <>
      <MediaGrid images={images} documents={documents} diagrams={diagrams} onImageOpen={setActiveImage} />
      <VideoGallery videos={videos} />
      <ImageModal images={images} activeIndex={activeImage} onClose={() => setActiveImage(null)} onChange={setActiveImage} />
    </>
  )
}
