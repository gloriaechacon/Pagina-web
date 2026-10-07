"use client"

import Header from "@/components/header"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import ContactFormSection from "@/components/sections/contact-form-section"
import SiteFooter from "@/components/site-footer"

export default function ConsultaIndividualPage() {
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Consulta Individual</h1>
          <p className="text-xl sm:text-2xl font-semibold text-white text-center mb-8">
            Acompañamiento personalizado en tu proceso de bienestar emocional y crecimiento personal
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">¿Qué es la Consulta Individual?</h2>

            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 mb-12">
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">
                En la primera consulta realizo una entrevista que me permite conocer al paciente, elaborar su historia clínica y explorar en profundidad los motivos de consulta. A partir de este encuentro, se lleva a cabo conjuntamente con el paciente, la definición de los objetivos de intervención.
              </p>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">Mi Enfoque Terapéutico</h2>
            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">
              Según sea el caso a intervenir, aplico técnicas de Terapia Gestáltica, Terapia Cognitivo-Conductual y Análisis Transaccional, integrándolas de manera personalizada para ofrecer las herramientas más efectivas para el cambio cognitivo y/o conductual.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">El Proceso</h2>
            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">
              En cada encuentro, mi propósito es escuchar con atención y respeto la situación que planteas, acompañarte en tu proceso y brindarte herramientas prácticas y efectivas. Esto te permitirá comprender, afrontar y superar la situación que te motivó a buscar asesoramiento, promoviendo tu bienestar emocional y crecimiento personal.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">Modalidades Disponibles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">Online</h3>
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">
                  A través de Zoom o Google Meet. Esta modalidad es perfecta para quienes tienen poca disponibilidad de tiempo o que por razones geográficas prefieren la consulta desde su hogar.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">Presencial</h3>
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">
                  En Belgrano, Buenos Aires. Para quienes prefieren una sesión cara a cara.
                </p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">¿Para quién es útil?</h2>
            <ul className="list-disc list-inside space-y-3 text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">
              <li>Personas atravesando momentos difíciles o cambios vitales importantes</li>
              <li>Aquellos que deseen mejorar su autoestima y confianza en sí mismos</li>
              <li>Personas enfrentando situaciones que les producen ansiedad, estrés o depresión</li>
              <li>Quienes busquen herramientas para mejorar sus relaciones interpersonales</li>
              <li>Emprendedores y profesionales que deseen superar situaciones conflictivas en el área laboral</li>
              <li>Padres o representantes de niños o adolescentes con crisis en los vínculos familiares</li>
              <li>Personas en general que quieran incrementar sus niveles de bienestar adquiriendo herramientas psicológicas</li>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">Otros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/servicios/consulta-pareja" className="block p-6 bg-white rounded-xl hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">Consulta en Pareja</h3>
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">Mejora tu comunicación y fortalece tu relación</p>
              <span className="text-[#1e7a9e] font-semibold flex items-center gap-2">
                Ver servicio <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/servicios/talleres-desarrollo-personal" className="block p-6 bg-white rounded-xl hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">Talleres de Desarrollo Personal</h3>
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">Experiencias vivenciales transformadoras</p>
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
