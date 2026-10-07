"use client"

import Header from "@/components/header"
import { Card } from "@/components/ui/card"
import GalleryCarousel from "@/components/gallery-carousel"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import SpecialtiesSection from "@/components/sections/specialties-section"
import ContactFormSection from "@/components/sections/contact-form-section"
import SiteFooter from "@/components/site-footer"
import TestimonialsSection from "@/components/sections/testimonials-section"
import ServicesCTASection from "@/components/sections/services-cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Specialties Section */}
      <SpecialtiesSection />

      {/* Gallery Carousel */}
      <GalleryCarousel />

      {/* Services CTA Section */}
      <ServicesCTASection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      <ContactFormSection description="Escríbeme para agendar una consulta o solicitar información sobre los talleres." />
      <SiteFooter />
    </div>
  )
}
