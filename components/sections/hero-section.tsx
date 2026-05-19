"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="pt-20">
      <div className="relative min-h-[70vh] px-4 sm:px-6 lg:px-8 overflow-hidden">

        <div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url('/images/Banner mama pagina web.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url('/images/Banner mama telefono.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto min-h-[70vh] flex flex-col">

          <div className="sticky top-16 md:top-14 z-20 flex justify-center pt-4">
            <div className="flex flex-wrap items-center justify-center gap-3 text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Psicóloga Alicia Tse Kwan
              </h1>

              <span className="inline-flex items-center rounded-full bg-white/85 px-4 py-1.5 text-sm sm:text-base font-medium text-black border border-white/50 shadow-sm">
                +30 años de experiencia
              </span>
            </div>
          </div>

          <div className="flex-1 min-h-[300px]" />

          <div className="flex flex-row justify-center items-center gap-3 w-full pb-10">
            <Link href="/servicios">
              <Button className="bg-gradient-to-r from-[#9fd63e] to-[#88c930] text-gray-900 text-lg font-semibold px-5 py-3 sm:px-8 sm:py-6 rounded-full">
                Servicios <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            <Link href="/#contacto">
              <Button className="bg-white/85 text-black border text-lg font-semibold px-5 py-3 sm:px-8 sm:py-6 rounded-full">
                Contáctame
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}