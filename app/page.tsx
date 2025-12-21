"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Facebook, Instagram, ArrowRight, Menu, X } from "lucide-react"
import Image from "next/image"

export default function PsychologistPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "acerca", "especialidades", "servicios", "galeria", "contacto"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1e7a9e] to-[#2596be] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">AT</span>
              </div>
              <span className="font-semibold text-gray-900 hidden sm:block">Psicóloga</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { id: "inicio", label: "Inicio" },
                { id: "acerca", label: "Acerca de mí" },
                { id: "especialidades", label: "Especialidades" },
                { id: "servicios", label: "Servicios" },
                { id: "galeria", label: "Galería" },
                { id: "contacto", label: "Contacto" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-[#1e7a9e] ${
                    activeSection === item.id ? "text-[#1e7a9e]" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              {[
                { id: "inicio", label: "Inicio" },
                { id: "acerca", label: "Acerca de mí" },
                { id: "especialidades", label: "Especialidades" },
                { id: "servicios", label: "Servicios" },
                { id: "galeria", label: "Galería" },
                { id: "contacto", label: "Contacto" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-50 ${
                    activeSection === item.id ? "text-[#1e7a9e] bg-blue-50" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 text-balance">Psicóloga</h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e7a9e] text-balance">Alicia Tse Kwan</h2>
          </div>

          <div className="relative inline-block mb-8">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-[#2596be] to-[#1e7a9e] overflow-hidden relative">
              <Image src="/images/image.png" alt="Psicóloga Alicia Tse Kwan" fill className="object-cover" priority />
            </div>

            {/* Experience Badge */}
            <div className="absolute -top-4 -right-4 sm:-right-8 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 mt-1">30 Años</p>
              <p className="text-xs text-gray-600">de experiencia</p>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-2 italic">"Bienvenidos a mi página personal"</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button
              onClick={() => scrollToSection("servicios")}
              className="bg-gradient-to-r from-[#9fd63e] to-[#88c930] hover:from-[#88c930] hover:to-[#9fd63e] text-gray-900 font-semibold px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Servicios <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("contacto")}
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 font-semibold px-8 py-6 rounded-full text-lg hover:bg-gray-50"
            >
              Contáctame
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="acerca" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Acerca de mí</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              <span className="font-semibold text-gray-900">Psicologa/ Facilitadora de Talleres/ Coach Ontológico</span>
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Carmen Alicia Tse Kwan cursó estudios de Psicología en la Universidad Central de Venezuela, se graduó en
              el año 1994, con Especialidad en Organización de Empresas y Especialidad en Dinámica de Grupos en la misma
              institución. Obtuvo un Diplomado en Componente Docente en la Universidad Nacional Abierta y Diplomado en
              Diagnóstico y Evaluación Psicológica en SOVEPSSA. Ha realizado estudios avanzados en el Instituto
              Venezolano de Análisis Transaccional Eric Berne y en el Instituto Venezolano de Gestalt. Laboró por 21
              años en la Universidad Nacional Abierta desempeñándose en cargos Supervisorios en el Área de Recursos
              Humanos, específicamente en Evaluación del Desempeño y Reclutamiento y Selección de Personal, así como
              Jefe de Organización y Sistemas, elaborando estudios organizacionales. Paralelamente, ha ejercido
              libremente la Psicología.
            </p>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="especialidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Especialidades</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-center">
              En mi trayectoria profesional he tenido la maravillosa oportunidad de trabajar en el campo
              psicoterapéutico y laboral, sin embargo, mi gran fortaleza es asesorar los procesos de pareja y
              familiares, así mismo el diseño y facilitación de talleres de crecimiento personal.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="servicios"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1e7a9e] to-[#2596be] text-white"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Consulta Individual */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Consulta Individual</h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    Se procede a realizar entrevista para elaborar la historia clínica, diagnóstico y luego se
                    interviene mediante técnicas de enfoque guestáltico, PNL, TSC y análisis transaccional.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold">Modalidad:</p>
                    <p className="text-white/90">Online (Zoom o Google Meet)</p>
                    <p className="text-white/90">Presencial (Belgrano)</p>
                  </div>
                </div>
                <div className="w-full md:w-32 h-32 bg-white/20 rounded-2xl flex-shrink-0"></div>
              </div>
            </Card>

            {/* Consulta Familiar */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Consulta Familiar</h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    Se realiza entrevista inicial a cada miembro y posteriormente se aborda al grupo familiar completo
                    aplicando técnicas psicoterapeúticas.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold">Modalidad:</p>
                    <p className="text-white/90">Online (Zoom o Google Meet)</p>
                    <p className="text-white/90">Presencial (Belgrano)</p>
                  </div>
                </div>
                <div className="w-full md:w-32 h-32 bg-white/20 rounded-2xl flex-shrink-0"></div>
              </div>
            </Card>

            {/* Consulta de Pareja */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Consulta de Pareja</h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    Se realiza entrevista individual a cada miembro y se procede a el encuentro terapéutico con la
                    pareja la cual se aplica las técnicas psicoterapeúticas, de acuerdo a la fase.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold">Modalidad:</p>
                    <p className="text-white/90">Online (Zoom o Google Meet)</p>
                    <p className="text-white/90">Presencial (Belgrano)</p>
                  </div>
                </div>
                <div className="w-full md:w-32 h-32 bg-white/20 rounded-2xl flex-shrink-0"></div>
              </div>
            </Card>

            {/* Talleres */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Talleres de desarrollo personal</h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    Se abordan en el diseño y facilitación de talleres de crecimiento personal cuya objetivos son
                    invitar a la reflexión sobre determinadas tópicos y temas de conducta con el fin de lograr el
                    bienestar psicológico de los participantes.
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold">Modalidad:</p>
                    <p className="text-white/90">Online (Zoom o Google Meet)</p>
                    <p className="text-white/90">Presencial (Belgrano)</p>
                  </div>
                </div>
                <div className="w-full md:w-32 h-32 bg-white/20 rounded-2xl flex-shrink-0"></div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Galería</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span className="text-sm">Imagen {i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Ubicación</h3>
                <p className="text-gray-300">Belgrano, Buenos Aires</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300">contacto@aliciatsekwan.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
                <p className="text-gray-300">+54 11 XXXX-XXXX</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Sígueme en redes sociales</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/carmenalicia.tsekwan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com/talleresparacrecer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>

              <div className="mt-8">
                <Button
                  onClick={() => alert("Contact form will be implemented here")}
                  className="bg-gradient-to-r from-[#9fd63e] to-[#88c930] hover:from-[#88c930] hover:to-[#9fd63e] text-gray-900 font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Aquí <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Psicóloga Alicia Tse Kwan. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
