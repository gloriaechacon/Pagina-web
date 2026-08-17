"use client"

import { useState, useEffect, useLayoutEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

// Add or remove paths here — everything else adapts automatically
export const IMAGES = [
  "/images/Imagen1.jpeg",
  "/images/Imagen2.jpeg",
  "/images/Imagen3.jpeg",
  "/images/Imagen4.jpeg",
  "/images/Imagen6.jpeg",
  "/images/Imagen7.jpeg",
  "/images/20170128_170110.jpg",
  "/images/20170128_174836.jpg",
  "/images/20170215_165552.jpg",
  "/images/20170225_175136.jpg",
  "/images/20170312_124104.jpg",
  "/images/20170331_120930.jpg",
  "/images/20220827_001222.jpg",
  "/images/20230429_104804.jpg",
  "/images/20241026_112302.jpg",
  "/images/20241027_103640.jpg",
  "/images/20241130_154905.jpg",
  "/images/20241130_155456.jpg",
  "/images/20251206_161722.jpg",
  "/images/20251206_180248.jpg",
  "/images/20260129_171603.jpg",
  "/images/20260328_154951.jpg",
  "/images/20260328_174156.jpg",
  "/images/IMG_20230923_100441435.jpg",
  "/images/IMG_20230928_171115840.jpg",
  "/images/IMG_20230928_175435283.jpg",
  "/images/IMG_20230928_180030867.jpg",
  "/images/IMG_20250109_181814502.jpg",
  "/images/IMG_20250114_181154696.jpg",
]

const N = IMAGES.length
const EXTENDED = [...IMAGES, ...IMAGES, ...IMAGES]

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

// Scale and opacity per offset and breakpoint
function getItemStyle(
  offset: number,
  isMobile: boolean,
  isDesktop: boolean,
): { scale: number; opacity: number } {
  const abs = Math.abs(offset)
  if (abs === 0) return { scale: 1, opacity: 1 }
  if (isMobile) return { scale: 1, opacity: 0 }
  if (isDesktop) {
    if (abs === 1) return { scale: 0.82, opacity: 0.5 }
    return { scale: 1, opacity: 0 }
  }
  // tablet
  if (abs === 1) return { scale: 0.8, opacity: 0.5 }
  return { scale: 1, opacity: 0 }
}

export default function GalleryCarousel() {
  const [activeIndex, setActiveIndex] = useState(N)
  const [animate, setAnimate] = useState(true)

  const viewportRef = useRef<HTMLDivElement>(null)
  const [viewportWidth, setViewportWidth] = useState(0)
  const touchStartX = useRef(0)

  // Lightbox state — lightboxIndex is a "real" index into IMAGES (0..N-1)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const lightboxTouchStartX = useRef(0)

  // Measure before first paint to avoid layout flash
  useIsomorphicLayoutEffect(() => {
    const update = () => {
      if (viewportRef.current) setViewportWidth(viewportRef.current.offsetWidth)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  // After sliding into a clone section, snap silently back to the middle copy
  useEffect(() => {
    if (activeIndex >= 2 * N) {
      const t = setTimeout(() => { setAnimate(false); setActiveIndex(activeIndex - N) }, 600)
      return () => clearTimeout(t)
    }
    if (activeIndex < N) {
      const t = setTimeout(() => { setAnimate(false); setActiveIndex(activeIndex + N) }, 600)
      return () => clearTimeout(t)
    }
  }, [activeIndex])

  // Re-enable transitions two frames after the instant snap
  useEffect(() => {
    if (!animate) {
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)))
      return () => cancelAnimationFrame(id)
    }
  }, [animate])

  // Lock background scroll and support Escape / arrow keys while the lightbox is open
  useEffect(() => {
    if (!lightboxOpen) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxOpen(false)
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i + 1) % N)
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i - 1 + N) % N)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener("keydown", onKey)
    }
  }, [lightboxOpen])

  const isMobile  = viewportWidth > 0 && viewportWidth < 640
  const isDesktop = viewportWidth >= 1024

  // Item slot width per breakpoint:
  //   desktop  → vw/2  (center occupies 50%, each side peeks at 25%)
  //   tablet   → vw/3  (3 equal items, sides faded by mask)
  //   mobile   → vw    (1 item full width)
  const itemWidth = viewportWidth > 0
    ? (isMobile ? viewportWidth : isDesktop ? viewportWidth / 2 : viewportWidth / 3)
    : 0

  // General centering formula — correct for every itemWidth ratio:
  //   translateX = (vw − itemWidth) / 2 − activeIndex × itemWidth
  // Works because it places activeIndex's left edge at (vw−itemWidth)/2,
  // which centers it exactly. Previous formula (1−activeIndex)×itemWidth
  // only holds when itemWidth = vw/3.
  const translateX = itemWidth > 0
    ? (viewportWidth - itemWidth) / 2 - activeIndex * itemWidth
    : 0

  const tx = animate ? "0.6s ease-in-out" : "none"

  function navigate(delta: 1 | -1) {
    setAnimate(true)
    setActiveIndex((i) => i + delta)
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }
  function handleTouchEnd(e: React.TouchEvent) {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 40) navigate(dx < 0 ? 1 : -1)
  }

  function openLightbox(index: number) {
    setLightboxIndex(((index % N) + N) % N)
    setLightboxOpen(true)
  }
  function closeLightbox() {
    setLightboxOpen(false)
  }
  function showPrev() {
    setLightboxIndex((i) => (i - 1 + N) % N)
  }
  function showNext() {
    setLightboxIndex((i) => (i + 1) % N)
  }
  function handleLightboxTouchStart(e: React.TouchEvent) {
    lightboxTouchStartX.current = e.touches[0].clientX
  }
  function handleLightboxTouchEnd(e: React.TouchEvent) {
    const dx = e.changedTouches[0].clientX - lightboxTouchStartX.current
    if (Math.abs(dx) > 40) (dx < 0 ? showNext() : showPrev())
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Galería
        </h2>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            aria-label="Imagen anterior"
            className="hidden sm:flex w-11 h-11 items-center justify-center rounded-full border-2 border-[#1e7a9e] text-[#1e7a9e] transition-colors shrink-0 hover:bg-[#1e7a9e] hover:text-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/*
            Explicit height fixes the empty-render bug:
            Previously the viewport had no height, so overflow-hidden collapsed to 0
            when children hadn't resolved their own dimensions yet.
            The track is absolute+h-full so it never contributes to parent height.
          */}
          <div
            ref={viewportRef}
            className={`flex-1 relative h-[220px] sm:h-[300px] lg:h-[380px] overflow-hidden${
              viewportWidth === 0 ? " invisible" : ""
            }`}
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Sliding track — absolute so its width never affects the viewport's height */}
            <div
              className="flex"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: `transform ${tx}`,
                willChange: "transform",
              }}
            >
              {EXTENDED.map((src, index) => {
                const offset = index - activeIndex
                const { scale, opacity } = getItemStyle(offset, isMobile, isDesktop)
                const isCenter = offset === 0
                // The three copies of IMAGES share the same URLs, so eager-loading every
                // tile costs only N real network requests (browser cache dedupes the rest).
                // Without this, the clones near the loop boundary are still lazy the first
                // time the silent index-reset reveals them, producing a brief blank flash.
                const isInitiallyVisible = index >= N - 1 && index <= N + 1

                return (
                  <div
                    key={index}
                    className="flex-shrink-0 px-2"
                    style={{
                      width: itemWidth > 0 ? `${itemWidth}px` : "33.33%",
                      transition: `transform ${tx}, opacity ${tx}`,
                      transform: `scale(${scale})`,
                      transformOrigin: "center center",
                      opacity,
                      zIndex: isCenter ? 10 : 5,
                      cursor: "pointer",
                    }}
                    onClick={() => openLightbox(index)}
                  >
                    {/* h-full fills the explicit viewport height — fixes Next/Image fill rendering */}
                    <div
                      className={`relative aspect-video rounded-2xl overflow-hidden${
                        isCenter ? " shadow-lg" : ""
                      }`}
                    >
                      <Image
                        src={src}
                        alt="Galería"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                        {...(isInitiallyVisible ? { priority: true } : { loading: "eager" as const })}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <button
            onClick={() => navigate(1)}
            aria-label="Siguiente imagen"
            className="hidden sm:flex w-11 h-11 items-center justify-center rounded-full border-2 border-[#1e7a9e] text-[#1e7a9e] transition-colors shrink-0 hover:bg-[#1e7a9e] hover:text-white"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Lightbox — click outside the photo or the X to close; arrows loop seamlessly */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-8"
          onClick={closeLightbox}
          onTouchStart={handleLightboxTouchStart}
          onTouchEnd={handleLightboxTouchEnd}
        >
          <button
            onClick={closeLightbox}
            aria-label="Cerrar"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); showPrev() }}
            aria-label="Imagen anterior"
            className="absolute left-2 sm:left-6 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); showNext() }}
            aria-label="Siguiente imagen"
            className="absolute right-2 sm:right-6 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/*
            key={lightboxIndex} remounts this wrapper on every image change, replaying the
            fade-in animation. Since we simply swap the image (no sliding track here), moving
            from the last photo to the first — or back — never visually scrolls through the
            others; it just appears, already in place.
          */}
          <div
            key={lightboxIndex}
            className="relative w-full max-w-4xl max-h-[85vh] aspect-video animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={IMAGES[lightboxIndex]}
              alt="Galería"
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </section>
  )
}
