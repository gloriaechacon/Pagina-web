import { Button } from "@/components/ui/button"
import { Facebook, Instagram, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  return (
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
  )
}
