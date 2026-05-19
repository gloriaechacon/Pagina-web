import Link from "next/link"

const pills = [
  { label: "Consulta Individual",     href: "/servicios/consulta-individual" },
  { label: "Terapia de Pareja",       href: "/servicios/consulta-pareja" },
  { label: "Talleres de Crecimiento", href: "/servicios/talleres-desarrollo-personal" },
  { label: "Manejo de Ansiedad",      href: "/servicios" },
  { label: "Duelo y Pérdida",         href: "/servicios" },
  { label: "Desarrollo Personal",     href: "/servicios" },
  { label: "Comunicación Asertiva",   href: "/servicios" },
  { label: "Mindfulness",             href: "/servicios" },
]

export default function ServicesCTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 text-center">
          ¿En qué puedo ayudarte?
        </h2>

        <p className="text-gray-600 text-xl mb-10">
          Cada proceso es único. Explorá las áreas en las que trabajamos juntos.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {pills.map((pill) => (
            <Link
              key={pill.label}
              href={pill.href}
              className="px-5 py-2 rounded-full border border-[#1e7a9e] text-[#1e7a9e] text-base font-medium hover:bg-[#1e7a9e] hover:text-white transition-colors duration-200"
            >
              {pill.label}
            </Link>
          ))}
        </div>

        <Link
          href="/servicios"
          className="inline-block bg-gradient-to-r from-[#9fd63e] to-[#88c930] text-gray-900 text-lg font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all"
        >
          Ver todos los servicios
        </Link>
      </div>
    </section>
  )
}
