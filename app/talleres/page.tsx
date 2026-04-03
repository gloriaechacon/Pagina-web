"use client"

import Header from "@/components/header"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactSection from "@/components/sections/contact-section"

export default function WorkshopsPage() {
  const workshops = [
    {
      id: 1,
      title: "Planificando tu vida para el éxito",
      shortDescription:
        "Descubre tu propósito de vida, clarifica tu visión y valores.",
      href: "/talleres/planificando-vida-exito",
    },
    {
      id: 2,
      title: "Canalizar las emociones de manera efectiva",
      shortDescription:
        "Aprende técnicas para gestionar el estrés y emociones negativas.",
      href: "/talleres/canalizar-emociones",
    },
    {
      id: 3,
      title: "Comunicación de manera asertiva",
      shortDescription:
        "Expresa tus ideas y necesidades con claridad y respeto.",
      href: "/talleres/comunicacion-asertiva",
    },
    {
      id: 4,
      title: "Amarse a sí mismo en amor toda la vida",
      shortDescription:
        "Fortalece tu autoestima y tu relación contigo mismo.",
      href: "/talleres/amarse-a-si-mismo",
    },
    {
      id: 5,
      title: "Gestión y balance del tiempo",
      shortDescription:
        "Prioriza lo importante y equilibra tus responsabilidades.",
      href: "/talleres/gestion-tiempo",
    },
    {
      id: 6,
      title: "Estimulación cognitiva para adultos mayores",
      shortDescription:
        "Estimula memoria, habilidades verbales y creatividad.",
      href: "/talleres/estimulacion-cognitiva",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 text-balance">
            Talleres de Transformación
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experiencias vivenciales diseñadas para tu crecimiento integral y desarrollo personal
          </p>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop) => (
              <Card key={workshop.id} className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-shadow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{workshop.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow">{workshop.shortDescription}</p>
                <Link href={workshop.href} className="inline-block">
                  <Button className="bg-gradient-to-r from-[#88c930] to-[#9fd63e] hover:from-[#9fd63e] hover:to-[#88c930] text-gray-900 font-semibold px-6 py-3 rounded-full w-full">
                    Más información <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Workshops Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">¿Por qué asistir a nuestros talleres?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl font-bold text-[#88c930] mb-2">Vivencial</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Experiencias Prácticas</h3>
              <p className="text-gray-700">Dinámicas y ejercicios diseñados para aprendizajes profundos y transformadores</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl font-bold text-[#88c930] mb-2">Colectivo</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Conexión Meaningful</h3>
              <p className="text-gray-700">Comparte con otros participantes en espacios seguros y contenedores</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl font-bold text-[#88c930] mb-2">Integral</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Crecimiento Completo</h3>
              <p className="text-gray-700">Aborda múltiples dimensiones de tu desarrollo personal y profesional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Formatos Disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-gradient-to-br from-[#88c930]/10 to-[#9fd63e]/10 rounded-xl border border-[#88c930]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Intensivos</h3>
              <p className="text-sm text-gray-700">Un día o fin de semana</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#88c930]/10 to-[#9fd63e]/10 rounded-xl border border-[#88c930]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Modulares</h3>
              <p className="text-sm text-gray-700">Varias sesiones</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#88c930]/10 to-[#9fd63e]/10 rounded-xl border border-[#88c930]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Online</h3>
              <p className="text-sm text-gray-700">Desde cualquier lugar</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#88c930]/10 to-[#9fd63e]/10 rounded-xl border border-[#88c930]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Presencial</h3>
              <p className="text-sm text-gray-700">En Belgrano</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
