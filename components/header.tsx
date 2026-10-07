"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [workshopsDropdownOpen, setWorkshopsDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileWorkshopsOpen, setMobileWorkshopsOpen] = useState(false)

  const pathname = usePathname()

  const services = [
    { label: "Consulta individual", href: "/servicios/consulta-individual" },
    { label: "Consulta en pareja", href: "/servicios/consulta-pareja" },
    { label: "Talleres de desarrollo personal", href: "/servicios/talleres-desarrollo-personal" },
    { label: "Coaching", href: "/servicios/coaching" },
  ]

  const workshops = [
    { label: "Planificando tu vida para el éxito", href: "/talleres/planificando-vida-exito" },
    { label: "Canalizar las emociones de manera efectiva", href: "/talleres/canalizar-emociones" },
    { label: "Comunicación asertiva: la clave de las relaciones interpersonales efectivas", href: "/talleres/comunicacion-asertiva" },
    { label: "Autoestima: la base fundamental del éxito personal", href: "/talleres/amarse-a-si-mismo" },
    { label: "Gestionar el tiempo de manera efectiva", href: "/talleres/gestion-tiempo" },
    { label: "Estimulación cognitiva para adultos mayores", href: "/talleres/estimulacion-cognitiva" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-gradient-to-br from-[#1e7a9e] to-[#2596be] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">AT</span>
            </div>
            <span className="text-lg font-semibold text-gray-900 hidden sm:block">Psicóloga Alicia Tse Kwan</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-base font-medium transition-colors ${
                isActive("/") ? "text-[#1e7a9e]" : "text-gray-600 hover:text-[#1e7a9e]"
              }`}
            >
              Inicio
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`text-base font-medium transition-colors flex items-center gap-1 ${
                  pathname.includes("/servicios") ? "text-[#1e7a9e]" : "text-gray-600 group-hover:text-[#1e7a9e]"
                }`}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                Servicios
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-200 ${
                  servicesDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-3 text-base text-gray-700 hover:bg-blue-50 hover:text-[#1e7a9e] transition-colors border-b last:border-b-0"
                  >
                    {service.label}
                  </Link>
                ))}
                <Link
                  href="/servicios"
                  className="block px-4 py-3 text-base font-semibold text-[#1e7a9e] hover:bg-blue-50 transition-colors"
                >
                  Ver todos los servicios →
                </Link>
              </div>
            </div>

            {/* Workshops Dropdown */}
            <div className="relative group">
              <button
                className={`text-base font-medium transition-colors flex items-center gap-1 ${
                  pathname.includes("/talleres") ? "text-[#1e7a9e]" : "text-gray-600 group-hover:text-[#1e7a9e]"
                }`}
                onMouseEnter={() => setWorkshopsDropdownOpen(true)}
                onMouseLeave={() => setWorkshopsDropdownOpen(false)}
              >
                Talleres
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-200 ${
                  workshopsDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
                onMouseEnter={() => setWorkshopsDropdownOpen(true)}
                onMouseLeave={() => setWorkshopsDropdownOpen(false)}
              >
                {workshops.map((workshop) => (
                  <Link
                    key={workshop.href}
                    href={workshop.href}
                    className="block px-4 py-3 text-base text-gray-700 hover:bg-blue-50 hover:text-[#1e7a9e] transition-colors border-b last:border-b-0"
                  >
                    {workshop.label}
                  </Link>
                ))}
                <Link
                  href="/talleres"
                  className="block px-4 py-3 text-base font-semibold text-[#1e7a9e] hover:bg-blue-50 transition-colors"
                >
                  Ver todos los talleres →
                </Link>
              </div>
            </div>

            <Link
              href="/#contacto"
              className={`text-base font-medium transition-colors ${
                isActive("/#contacto") ? "text-[#1e7a9e]" : "text-gray-600 hover:text-[#1e7a9e]"
              }`}
            >
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white">
            <Link
              href="/"
              className={`block w-full text-left px-4 py-3 text-base font-medium transition-colors ${
                isActive("/") ? "text-[#1e7a9e] bg-blue-50" : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`w-full text-left px-4 py-3 text-base font-medium transition-colors flex items-center justify-between ${
                  pathname.includes("/servicios") ? "text-[#1e7a9e] bg-blue-50" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                Servicios
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="bg-gray-50">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block w-full text-left px-8 py-2 text-base text-gray-700 hover:text-[#1e7a9e] hover:bg-blue-50 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                  <Link
                    href="/servicios"
                    className="block w-full text-left px-8 py-2 text-base font-semibold text-[#1e7a9e] hover:bg-blue-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Ver todos los servicios →
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Workshops Dropdown */}
            <div>
              <button
                onClick={() => setMobileWorkshopsOpen(!mobileWorkshopsOpen)}
                className={`w-full text-left px-4 py-3 text-base font-medium transition-colors flex items-center justify-between ${
                  pathname.includes("/talleres") ? "text-[#1e7a9e] bg-blue-50" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                Talleres
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileWorkshopsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileWorkshopsOpen && (
                <div className="bg-gray-50">
                  {workshops.map((workshop) => (
                    <Link
                      key={workshop.href}
                      href={workshop.href}
                      className="block w-full text-left px-8 py-2 text-base text-gray-700 hover:text-[#1e7a9e] hover:bg-blue-50 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {workshop.label}
                    </Link>
                  ))}
                  <Link
                    href="/talleres"
                    className="block w-full text-left px-8 py-2 text-base font-semibold text-[#1e7a9e] hover:bg-blue-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Ver todos los talleres →
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/#contacto"
              className={`block w-full text-left px-4 py-3 text-base font-medium transition-colors ${
                isActive("/#contacto") ? "text-[#1e7a9e] bg-blue-50" : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
