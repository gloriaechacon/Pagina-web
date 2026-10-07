"use client"

import Header from "@/components/header"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import ContactFormSection from "@/components/sections/contact-form-section"
import SiteFooter from "@/components/site-footer"

export default function ConsultaParejasPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1e7a9e] to-[#2596be] text-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/servicios" className="inline-flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-4 h-4" />
            Volver a servicios
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Consulta en Pareja</h1>
          <p className="text-xl sm:text-2xl font-semibold text-white text-center mb-8">
            Mejora la comunicación y fortalece los vínculos de pareja
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">¿Qué es la Consulta en Pareja?</h2>

            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 mb-12">
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">
                Cuando uno de los miembros de la pareja solicita terapia conmigo, inicio el proceso explorando de manera individual el punto de vista de cada integrante, brindando un espacio seguro para la expresión personal.
              </p>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">El Proceso Terapéutico</h2>
            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">
              Posteriormente, se realizan encuentros conjuntos con el objetivo de favorecer una comunicación más clara y respetuosa, promover la comprensión mutua y trabajar en la resolución de conflictos. Este espacio es completamente seguro y avalado por profesionalismo.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">Mi Abordaje</h2>
            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">
              El abordaje terapéutico está orientado a diseñar y fortalecer espacios de diálogo que contribuyan al bienestar emocional y el crecimiento de la pareja. No se trata solo de resolver conflictos, sino de construir una relación fundamentada en un proyecto de pareja.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">Beneficios</h2>
            <ul className="list-disc list-inside space-y-3 text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">
              <li>Mejora significativa en la comunicación diaria</li>
              <li>Mayor comprensión mutua y empatía</li>
              <li>Resolución efectiva de conflictos</li>
              <li>Fortalecimiento del vínculo emocional</li>
              <li>Recuperación de la intimidad</li>
              <li>Herramientas prácticas para mantener la armonía</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">Modalidades Disponibles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">Online</h3>
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">
                  A través de Zoom o Google Meet, ideal para parejas que se encuentran en zonas geográficas distantes.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">Presencial</h3>
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">
                  En Belgrano, Buenos Aires, para una experiencia cara a cara.
                </p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">¿Cuándo considerar una Consulta de Pareja?</h2>
            <ul className="list-disc list-inside space-y-3 text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">
              <li>Cuando la comunicación se ha deteriorado</li>
              <li>Enfrentando crisis o conflictos recurrentes</li>
              <li>Antes de tomar decisiones importantes sobre la relación</li>
              <li>Para fortalecer un vínculo ya existente</li>
              <li>Después de eventos traumáticos que afectaron la relación</li>
            </ul>
          </div>

        </div>
      </section>

      <ContactFormSection
        title="Comienza tu proceso hoy"
        description="Contáctame para agendar tu primera consulta y dar el primer paso hacia tu bienestar."
      />

      {/* Related Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Otros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/servicios/consulta-individual" className="block p-6 bg-white rounded-xl hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-4">Consulta Individual</h3>
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-6">Acompañamiento personalizado en tu bienestar</p>
              <span className="text-[#1e7a9e] font-semibold flex items-center gap-2">
                Ver servicio <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/servicios/talleres-desarrollo-personal" className="block p-6 bg-white rounded-xl hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-4">Talleres de Desarrollo Personal</h3>
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-6">Experiencias vivenciales transformadoras</p>
              <span className="text-[#1e7a9e] font-semibold flex items-center gap-2">
                Ver servicio <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
