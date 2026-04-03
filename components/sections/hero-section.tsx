"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
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
          <Link href="/servicios">
            <Button className="bg-gradient-to-r from-[#9fd63e] to-[#88c930] hover:from-[#88c930] hover:to-[#9fd63e] text-gray-900 font-semibold px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all">
              Servicios <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/#contacto">
            <Button variant="outline" className="border-2 border-gray-300 text-gray-700 font-semibold px-8 py-6 rounded-full text-lg hover:bg-gray-50">
              Contáctame
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
