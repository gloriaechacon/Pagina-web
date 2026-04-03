"use client"

import Header from "@/components/header"
import { Card } from "@/components/ui/card"
import GalleryCarousel from "@/components/gallery-carousel"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import SpecialtiesSection from "@/components/sections/specialties-section"
import ContactSection from "@/components/sections/contact-section"

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

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
