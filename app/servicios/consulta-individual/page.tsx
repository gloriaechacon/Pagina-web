"use client"

import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import ContactSection from "@/components/sections/contact-section"

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
          <p className="text-xl text-white/90 max-w-2xl">
            Acompañamiento personalizado en tu proceso de bienestar emocional y crecimiento personal
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Qué es la Consulta Individual?</h2>

            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 mb-12">
              <p className="text-gray-700 leading-relaxed">
                En la primera consulta realizo una entrevista que me permite conocer al paciente, elaborar su historia clínica y explorar en profundidad los motivos de consulta. A partir de este encuentro, se lleva a cabo conjuntamente con el paciente, la definición de los objetivos de intervención.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Mi Enfoque Terapéutico</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Según sea el caso a intervenir, aplico técnicas de Programación Neurolingüística (PNL), Terapia Cognitivo-Conductual y Análisis Transaccional, integrándolas de manera personalizada para ofrecerte las herramientas más efectivas.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">El Proceso</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              En cada encuentro, mi propósito es escuchar con atención y respeto la situación que planteas, acompañarte en tu proceso y brindarte herramientas prácticas y efectivas. Esto te permitirá comprender, afrontar y superar la situación que te motivó a buscar asesoramiento, promoviendo tu bienestar emocional y crecimiento personal.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Modalidades Disponibles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Online</h3>
                <p className="text-gray-700">
                  A través de Zoom o Google Meet. Perfecta para quienes tienen disponibilidad limitada o prefieren desde la comodidad de su hogar.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Presencial</h3>
                <p className="text-gray-700">
                  En Belgrano, Buenos Aires. Para quienes prefieren una sesión cara a cara.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">¿Para quién es útil?</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-8">
              <li>Personas atravesando momentos difíciles o cambios importantes</li>
              <li>Aquellos que desean mejorar su autoestima y seguridad personal</li>
              <li>Personas enfrentando ansiedad, estrés o depresión</li>
              <li>Quienes buscan herramientas para mejorar relaciones personales</li>
              <li>Emprendedores y profesionales en búsqueda de equilibrio</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-[#1e7a9e] to-[#2596be] text-white p-12 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Comienza tu proceso hoy</h3>
            <p className="mb-8 text-white/90">
              Contáctame para agendar tu primera consulta y dar el primer paso hacia tu bienestar.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Otros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/servicios/consulta-pareja" className="block p-6 bg-white rounded-xl hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Consulta en Pareja</h3>
              <p className="text-gray-700 mb-4">Mejora tu comunicación y fortalece tu relación</p>
              <span className="text-[#1e7a9e] font-semibold flex items-center gap-2">
                Ver servicio <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/servicios/talleres-desarrollo-personal" className="block p-6 bg-white rounded-xl hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Talleres de Desarrollo Personal</h3>
              <p className="text-gray-700 mb-4">Experiencias vivenciales transformadoras</p>
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
