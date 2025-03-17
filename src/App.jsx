import { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { getImages } from './utils/getImages'
import Loader from './components/Loader/Loader'
import SeacrhBar from './components/SeacrhBar/SeacrhBar'
import ImageModal from './components/ImageModal/ImageModal'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import ImageGallery from './components/ImageGallery/ImageGallery'

import styles from './App.module.scss'

export default function App() {
  const [images, setImages] = useState([])
  const [query, setQuery] = useState('')
  const [page, setPage] = useState('1')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageUrl, setModalImageUrl] = useState('')

  const onSearch = (query) => {
    setImages([])
    setQuery(query)
    setPage(1)
  }

  const onLoadMore = () => {
    setPage(page + 1)
  }

  const onImageClick = (imageUrl) => {
    setModalImageUrl(imageUrl)
    setIsModalOpen(true)
  }

  const onModalClose = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    if (!query) return

    const searchImages = async () => {
      try {
        setIsError(false)
        setIsLoading(true)
        const images = await getImages(query, page)
        setImages((prevImages) => [...prevImages, ...images])
      } catch {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    searchImages()
  }, [query, page])

  return (
    <div className={styles.container}>
      <Toaster position="top-right" />
      <SeacrhBar onSearch={onSearch} />
      {images.length > 0 && <ImageGallery images={images} onImageClick={onImageClick} />}
      {!isLoading && images.length > 0 && <LoadMoreBtn onLoadMore={onLoadMore} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}

      <ImageModal isOpen={isModalOpen} setIsOpen={onModalClose} image={modalImageUrl} />
    </div>
  )
}
