"use client"

import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import ContactSection from "@/components/sections/contact-section"

export default function TalleresDesarrolloPersonalPage() {
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Talleres de Desarrollo Personal</h1>
          <p className="text-xl sm:text-2xl font-semibold text-white text-center mb-8">
            Experiencias vivenciales diseñadas para tu crecimiento integral
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">¿Qué son los Talleres de Desarrollo Personal?</h2>

            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 mb-12">
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">
                Son experiencias de capacitación vivencial diseñadas para facilitar el crecimiento integral en distintas áreas de la vida. A través de dinámicas prácticas y reflexiones profundas, los participantes descubren nuevas perspectivas y adquieren herramientas para transformar su realidad.
              </p>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">Mi Metodología</h2>
            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">
              Combino teoría y práctica en espacios seguros y contenedores donde cada participante puede ser auténtico. Utilizo técnicas de Programación Neurolingüística, Análisis Transaccional y Gestalt para facilitar aprendizajes profundos que generan cambios reales.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">Beneficios de los Talleres</h2>
            <ul className="list-disc list-inside space-y-3 text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">
              <li>Autoconocimiento profundo y reflexión personal</li>
              <li>Desarrollo de habilidades emocionales y sociales</li>
              <li>Clarificación de objetivos y propósito de vida</li>
              <li>Adquisición de herramientas prácticas aplicables inmediatamente</li>
              <li>Conexión significativa con otros participantes</li>
              <li>Recuperación de la motivación y energía vital</li>
              <li>Mayor confianza y seguridad personal</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">Talleres Disponibles</h2>
            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">
              Ofrecemos una variedad de talleres temáticos que abordan diferentes áreas del desarrollo personal:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <Link href="/talleres/planificando-vida-exito" className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-4">Planificando tu vida para el éxito</h3>
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-6">Descubre tu propósito y formula objetivos efectivos</p>
              </Link>
              <Link href="/talleres/canalizar-emociones" className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-4">Canalizar las emociones de manera efectiva</h3>
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-6">Gestiona el estrés y mejora tu equilibrio emocional</p>
              </Link>
              <Link href="/talleres/comunicacion-asertiva" className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-4">Comunicación de manera asertiva</h3>
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-6">Expresa tus necesidades con claridad y respeto</p>
              </Link>
              <Link href="/talleres/amarse-a-si-mismo" className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-4">Amarse a sí mismo en amor toda la vida</h3>
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-6">Fortalece tu autoestima y relación contigo mismo</p>
              </Link>
              <Link href="/talleres/gestion-tiempo" className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-4">Gestión y balance del tiempo</h3>
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-6">Prioriza lo importante y organiza tu vida</p>
              </Link>
              <Link href="/talleres/estimulacion-cognitiva" className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-4">Estimulación cognitiva para adultos mayores</h3>
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-6">Mantén tu mente activa y estimulada</p>
              </Link>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">Formato de los Talleres</h2>
            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">
              Los talleres pueden ser:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">
              <li><strong>Intensivos:</strong> Talleres de un día o fin de semana</li>
              <li><strong>Modulares:</strong> Talleres que se desarrollan en varias sesiones</li>
              <li><strong>Cerrados:</strong> Para grupos organizados o empresas</li>
              <li><strong>Abiertos:</strong> Para el público general</li>
              <li><strong>Online o Presencial:</strong> Según tu preferencia y comodidad</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-[#9fd63e] to-[#88c930] text-gray-900 p-12 rounded-2xl text-center">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">Comienza tu transformación hoy</h3>
            <p className="text-lg sm:text-xl text-gray-900 leading-relaxed text-center mb-6">
              Inscríbete en uno de nuestros talleres y experimenta el cambio que buscas.
            </p>
            <Link href="/#contacto">
              <Button className="bg-white text-[#1e7a9e] hover:bg-gray-100 font-semibold px-8 py-3 rounded-full">
                Contactar ahora <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Otros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/servicios/consulta-individual" className="block p-6 bg-white rounded-xl hover:shadow-lg transition-shadow border border-gray-200 text-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-4">Consulta Individual</h3>
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-6">Acompañamiento personalizado en tu bienestar</p>
              <span className="text-[#1e7a9e] font-semibold flex items-center gap-2">
                Ver servicio <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/servicios/consulta-pareja" className="block p-6 bg-white rounded-xl hover:shadow-lg transition-shadow border border-gray-200 text-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-4">Consulta en Pareja</h3>
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-6">Mejora tu comunicación y fortalece tu relación</p>
              <span className="text-[#1e7a9e] font-semibold flex items-center gap-2">
                Ver servicio <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
