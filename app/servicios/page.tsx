"use client"

import Header from "@/components/header"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactSection from "@/components/sections/contact-section"

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Consulta Individual",
      shortDescription:
        "Sesiones personalizadas diseñadas para afrontar desafíos emocionales y personales con herramientas prácticas.",
      href: "/servicios/consulta-individual",
      fullDescription:
        "En la primera consulta realizo una entrevista que me permite conocer al paciente, elaborar su historia clínica y explorar en profundidad los motivos de consulta.",
    },
    {
      id: 2,
      title: "Consulta en Pareja",
      shortDescription:
        "Espacios seguros para mejorar la comunicación y fortalecer la relación de pareja.",
      href: "/servicios/consulta-pareja",
      fullDescription:
        "Cuando uno de los miembros de la pareja solicita terapia conmigo, inicio el proceso explorando de manera individual el punto de vista de cada integrante.",
    },
    {
      id: 3,
      title: "Talleres de Desarrollo Personal",
      shortDescription:
        "Talleres vivenciales para potenciar habilidades y alcanzar objetivos de crecimiento personal.",
      href: "/servicios/talleres-desarrollo-personal",
      fullDescription:
        "Experiencias de capacitación vivencial diseñadas para el crecimiento integral en distintas áreas de la vida.",
    },
    {
      id: 4,
      title: "Sesiones de Coaching",
      shortDescription:
        "Acompañamiento enfocado en objetivos para potenciar tu desarrollo personal y profesional.",
      href: "/servicios/coaching",
      fullDescription:
        "Un proceso centrado en el presente y el futuro, orientado a que definas objetivos claros y desarrolles las herramientas necesarias para alcanzarlos.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 text-balance">
            Servicios Profesionales
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">
            Acompañamiento integral en tu proceso de bienestar emocional y crecimiento personal
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-shadow flex flex-col">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">{service.title}</h3>
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6 flex-grow">{service.shortDescription}</p>
                <Link href={service.href} className="inline-block">
                  <Button className="bg-gradient-to-r from-[#1e7a9e] to-[#2596be] hover:from-[#2596be] hover:to-[#1e7a9e] text-white font-semibold px-6 py-3 rounded-full w-full">
                    Más información <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose These Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">¿Por qué elegir nuestros servicios?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl font-bold text-[#1e7a9e] mb-2">30+</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">Años de Experiencia</h3>
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">Trayectoria profesional comprobada en psicoterapia y desarrollo personal</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl font-bold text-[#1e7a9e] mb-2">100%</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">Personalizado</h3>
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">Cada sesión es adaptada a tus necesidades específicas y contexto</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl font-bold text-[#1e7a9e] mb-2">Flexible</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">Modalidades</h3>
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">Online y presencial para tu comodidad y accesibilidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
