"use client"

import { useState, useEffect, useLayoutEffect, useRef } from "react"
import Image from "next/image"

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
  const [direction, setDirection] = useState<1 | -1>(1)

  const viewportRef = useRef<HTMLDivElement>(null)
  const [viewportWidth, setViewportWidth] = useState(0)
  const touchStartX = useRef(0)

  // Measure before first paint to avoid layout flash
  useIsomorphicLayoutEffect(() => {
    const update = () => {
      if (viewportRef.current) setViewportWidth(viewportRef.current.offsetWidth)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  // Auto-play — direction controls which way the next tick goes
  useEffect(() => {
    const id = setInterval(() => {
      setAnimate(true)
      setActiveIndex((i) => i + direction)
    }, 5000)
    return () => clearInterval(id)
  }, [direction])

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

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }
  function handleTouchEnd(e: React.TouchEvent) {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 40) {
      setAnimate(true)
      setActiveIndex((i) => i + (dx < 0 ? 1 : -1))
    }
  }

  return (
    <section className="pt-20 pb-0 mb-0 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Galería
        </h2>

        {/*
          Explicit height fixes the empty-render bug:
          Previously the viewport had no height, so overflow-hidden collapsed to 0
          when children hadn't resolved their own dimensions yet.
          The track is absolute+h-full so it never contributes to parent height.
        */}
        <div
          ref={viewportRef}
          className={`relative h-[420px] sm:h-[500px] lg:h-[600px] overflow-hidden${
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

              const hoverHandlers =
                !isMobile && Math.abs(offset) === 1
                  ? { onMouseEnter: () => setDirection(offset > 0 ? 1 : -1) }
                  : {}

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
                    cursor: !isMobile && Math.abs(offset) === 1 ? "pointer" : "default",
                  }}
                  {...hoverHandlers}
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
                      priority={index <= 2}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
