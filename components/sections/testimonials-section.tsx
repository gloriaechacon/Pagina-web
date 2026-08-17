"use client"

import { useState, useLayoutEffect, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    text: "Tengo meses recibiendo terapia con la psicóloga Carmen Alicia. Me ha sacado de un lugar tan oscuro que llevaba viviendo más de 20 años, ahogado en el sentimiento de la culpa, resignado. Me ha ayudado a convivir con cada emoción que vivo, a establecer límites, y sobre todo, a aprender a cuidar mi salud mental, entender a los demás. He fortalecido mis lazos familiares. Le estaré agradecido eternamente por la ayuda que me ha dado.",
    name: "Vladimir Meléndez",
    role: "",
    initials: "VM",
  },
  {
    text: "Durante las sesiones psicológicas que tuve con la Dra. Alicia podría decir que me fue muy bien con ella. Me ayudó muchísimo a enfrentar mis miedos y temores, a conocerme un poco más, a saber hacia dónde iba en mi vida y elegir los diferentes caminos que tenía que transitar sola, posterior al fallecimiento de mi madre y del divorcio. Aprendí muchísimo de los webinars. La recomiendo ampliamente, ya que transmite mucha confianza, empatía y es una excelente profesional.",
    name: "Natalie",
    role: "Docente",
    initials: "NA",
  },
  {
    text: "Desde hace casi 4 años estoy en terapia con la psicóloga Carmen Alicia, y quiero agradecerle toda la orientación brindada a lo largo del tiempo, pues me ayudó a superar y entender muchas cosas que para mí eran confusas, a evolucionar como persona y mujer. He podido fortalecer mis lazos familiares, laborales y de amistades, valorando quién soy y también a las personas que me rodean. Ha sido una bendición estar en terapia.",
    name: "María Castañeda",
    role: "",
    initials: "MC",
  },
  {
    text: "La Dra. Carmen Tse Kwan es una excelente terapeuta. Me está ayudando mucho con la comunicación asertiva, y me ha dado muchas herramientas para poder expresar mis emociones evitando conflictos. Me está ayudando a cambiar patrones y conductas para mejorar en todos los ámbitos de mi vida. La recomiendo ampliamente y le estoy muy agradecida.",
    name: "Laura M.",
    role: "",
    initials: "LM",
  },
  {
    text: "Asistir a los talleres de la Lic. Carmen Alicia Tse Kwan es una experiencia enriquecedora y transformadora. Posee la habilidad de simplificar y transmitir conceptos actualizados, logrando la participación activa de los integrantes. Quienes adquieren herramientas prácticas e inmediatas que pueden poner en práctica de forma sencilla y eficaz para su desarrollo personal y profesional.",
    name: "Luisa Rodríguez Maneiro",
    role: "Lic. Trabajo Social",
    initials: "LR",
  },
  {
    text: "Muy agradecido por todo el apoyo que me diste para superar el duelo por el fallecimiento de mi papá.",
    name: "Antonio A.",
    role: "Abogado",
    initials: "AA",
  },
  {
    text: "He tenido la oportunidad de formarme y recibir acompañamiento a través de cursos y procesos terapéuticos con la doctora Carmen Alicia y de verdad que la experiencia para mí ha sido muy enriquecedora, ya que te da diversas herramientas para los acontecimientos que puedan ocurrir en la vida. Me encanta su empatía, su compromiso, su forma de enseñar, clara y profesional. La recomiendo ampliamente.",
    name: "Alex",
    role: "Docente",
    initials: "AX",
  },
  {
    text: "Conozco a Carmen desde sus inicios en Venezuela, cuando compartíamos talleres presenciales y conversatorios. A pesar de la distancia, tras su mudanza a Argentina, he seguido conectada a sus talleres online, donde he aprendido herramientas clave de atención plena. Sus orientaciones para mejorar mi diálogo interno han sido un apoyo fundamental en mi vida. Estoy profundamente agradecida por su guía y calidez.",
    name: "Marisol",
    role: "",
    initials: "MS",
  },
  {
    text: "Fui paciente de la Dra. Carmen Alicia por años. Es una gran profesional con una calidez humana única. Me ayudó muchísimo en mi salud mental, fue mi guía en mis momentos oscuros ayudándome a encontrar la luz dentro de mí. A crecer como persona y aceptarme tal como soy, y lo más importante, a entender a mi familia. Afortunados los argentinos por recibir sus conocimientos.",
    name: "Ana Lucía Calcurian",
    role: "Venezolana",
    initials: "AL",
  },
  {
    text: "Recomiendo ampliamente su trabajo. Es una psicóloga muy empática, dedicada y cercana, alguien que transmite la tranquilidad que uno como padre necesita. Gracias a su apoyo, mi hijo ha mostrado avances muy positivos. Sin duda, una gran elección para el bienestar de él.",
    name: "María Teresa",
    role: "",
    initials: "MT",
  },
]

const N = testimonials.length
const TRANSITION_MS = 500

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type Testimonial = (typeof testimonials)[number]

function TestimonialCard({ text, name, role, initials }: Testimonial) {
  return (
    // h-full + flex-col lets the card fill the fixed track height.
    // flex-1 overflow-y-auto on the text lets long quotes scroll internally
    // instead of being clipped, while flex-shrink-0 on the author row keeps
    // it always visible at the bottom of the card.
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-8 h-full flex flex-col overflow-hidden">
      <span className="text-[#1e7a9e] text-3xl font-bold leading-none block mb-2">❝</span>
      <p className="testimonial-scroll text-gray-800 text-lg leading-relaxed flex-1 overflow-y-auto overscroll-contain pr-2">
        {text}
      </p>
      <div className="border-t border-gray-100 mt-4 pt-4 flex items-center gap-3 flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1e7a9e] to-[#2596be] text-white font-bold text-sm flex items-center justify-center shrink-0">
          {initials}
        </div>
        <div>
          <p className="text-base font-semibold text-gray-900">{name}</p>
          {role && <p className="text-gray-600 text-sm">{role}</p>}
        </div>
      </div>
    </div>
  )
}

const MASK: React.CSSProperties = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
  maskImage:
    "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const viewportRef = useRef<HTMLDivElement>(null)
  const [viewportWidth, setViewportWidth] = useState(0)
  const touchStartX = useRef(0)

  useIsomorphicLayoutEffect(() => {
    const update = () => {
      if (viewportRef.current) setViewportWidth(viewportRef.current.offsetWidth)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  function navigate(delta: 1 | -1) {
    if (isAnimating) return
    const next = activeIndex + delta
    if (next < 0 || next >= N) return
    setIsAnimating(true)
    setActiveIndex(next)
    setTimeout(() => setIsAnimating(false), TRANSITION_MS)
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }
  function handleTouchEnd(e: React.TouchEvent) {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 40) navigate(dx < 0 ? 1 : -1)
  }

  const atFirst = activeIndex === 0
  const atLast = activeIndex === N - 1
  const isMobile = viewportWidth > 0 && viewportWidth < 640

  // desktop + tablet both show 3 cards (vw/3 each); mobile shows 1 full-width card
  const itemWidth = viewportWidth > 0
    ? (isMobile ? viewportWidth : viewportWidth / 3)
    : 0

  // Same general centering formula as gallery:
  //   translateX = (vw − itemWidth) / 2 − activeIndex × itemWidth
  const translateX = itemWidth > 0
    ? (viewportWidth - itemWidth) / 2 - activeIndex * itemWidth
    : 0

  const tx = `${TRANSITION_MS}ms ease-in-out`

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1e7a9e]/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Testimonios
        </h2>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            disabled={atFirst || isAnimating}
            aria-label="Testimonio anterior"
            className={`hidden sm:flex w-11 h-11 items-center justify-center rounded-full border-2 border-[#1e7a9e] text-[#1e7a9e] transition-colors shrink-0${
              atFirst
                ? " opacity-30 cursor-not-allowed"
                : " hover:bg-[#1e7a9e] hover:text-white"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/*
            Explicit height is the core fix — prevents the viewport from
            collapsing to 0 while children are still resolving their dimensions.
            Track is absolute so it never feeds back into parent height.
          */}
          <div
            ref={viewportRef}
            className={`flex-1 relative h-[420px] sm:h-[480px] lg:h-[520px] overflow-hidden${
              viewportWidth === 0 ? " invisible" : ""
            }`}
            style={MASK}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="absolute top-0 left-0 h-full flex"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: `transform ${tx}`,
                willChange: "transform",
              }}
            >
              {testimonials.map((t, index) => {
                const offset = index - activeIndex
                const abs = Math.abs(offset)
                const isCenter = abs === 0
                const scale = isCenter ? 1 : 0.85
                const opacity = isCenter ? 1 : !isMobile && abs === 1 ? 0.4 : 0

                return (
                  <div
                    key={index}
                    className="flex-shrink-0 h-full px-2"
                    style={{
                      width: itemWidth > 0 ? `${itemWidth}px` : "33.33%",
                      transition: `transform ${tx}, opacity ${tx}`,
                      transform: `scale(${scale})`,
                      transformOrigin: "top center",
                      opacity,
                      zIndex: isCenter ? 10 : 5,
                    }}
                  >
                    <TestimonialCard {...t} />
                  </div>
                )
              })}
            </div>
          </div>

          <button
            onClick={() => navigate(1)}
            disabled={atLast || isAnimating}
            aria-label="Siguiente testimonio"
            className={`hidden sm:flex w-11 h-11 items-center justify-center rounded-full border-2 border-[#1e7a9e] text-[#1e7a9e] transition-colors shrink-0${
              atLast
                ? " opacity-30 cursor-not-allowed"
                : " hover:bg-[#1e7a9e] hover:text-white"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
