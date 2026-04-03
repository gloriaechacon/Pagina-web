"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function GalleryCarousel() {
  // 6 imágenes válidas seleccionadas (excluida image.png)
  const images = [
    '/images/Imagen1.jpeg',
    '/images/Imagen2.jpeg',
    '/images/Imagen3.jpeg',
    '/images/Imagen4.jpeg',
    '/images/Imagen6.jpeg',
    '/images/Imagen7.jpeg'
  ]

  const [currentPage, setCurrentPage] = useState(0)
  const imagesPerView = 3
  const totalPages = Math.ceil(images.length / imagesPerView)

  // Obtener las imágenes para la página actual
  const currentImages = images.slice(
    currentPage * imagesPerView,
    (currentPage + 1) * imagesPerView
  )

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Galería</h2>

        {/* Galería */}
        <div className="relative">
          {/* Contenedor de imágenes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentImages.map((image, index) => (
              <div
                key={`${currentPage}-${index}`}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-gray-100"
              >
                <Image
                  src={image}
                  alt={`Galería imagen ${currentPage * imagesPerView + index + 1}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={currentPage === 0}
                />
              </div>
            ))}
          </div>

          {/* Botones de navegación */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={handlePrevious}
              className="p-3 bg-white border-2 border-gray-200 hover:border-[#1e7a9e] text-gray-900 hover:text-[#1e7a9e] rounded-full transition-colors shadow-md hover:shadow-lg"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Indicador de página */}
            <div className="text-center min-w-[120px]">
              <span className="text-sm font-medium text-gray-600">
                {currentPage + 1} de {totalPages}
              </span>
            </div>

            <button
              onClick={handleNext}
              className="p-3 bg-white border-2 border-gray-200 hover:border-[#1e7a9e] text-gray-900 hover:text-[#1e7a9e] rounded-full transition-colors shadow-md hover:shadow-lg"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Información */}
          <div className="text-center mt-8 text-gray-600">
            <p className="text-sm">
              Mostrando {currentImages.length} de {images.length} imágenes • Navegación manual
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
