import Link from "next/link"

const pills = [
  { label: "Consulta Individual",             href: "/servicios/consulta-individual" },
  { label: "Terapia de Pareja",                href: "/servicios/consulta-pareja" },
  { label: "Talleres de Desarrollo Personal",  href: "/servicios/talleres-desarrollo-personal" },
  { label: "Sesiones de Coaching",             href: "/servicios/coaching" },
]

export default function ServicesCTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          ¿En qué puedo ayudarte?
        </h2>

        <p className="text-gray-600 text-xl mb-10">
          Cada proceso es único. Explora las áreas en las que trabajamos juntos.
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
