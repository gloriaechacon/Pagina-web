import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react"

export default function ContactSection() {
  const whatsappNumber = "5491122503604"
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white text-center mb-8">Ubicación</h3>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed text-justify mb-6">Belgrano, Buenos Aires</p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white text-center mb-8">WhatsApp</h3>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl text-gray-300 leading-relaxed text-justify mb-6 hover:text-[#9fd63e] transition-colors block"
              >
                +54 9 11 2250 3604
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white text-center mb-8">Sígueme en redes sociales</h3>
            <div className="flex gap-4 justify-center">
              <a
                href="https://www.facebook.com/psico.aliciatsekwan/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/psico.aliciatsekwan/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/asesoramientoalicia69/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            <div className="mt-8 text-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#9fd63e] to-[#88c930] hover:from-[#88c930] hover:to-[#9fd63e] text-gray-900 font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Escribirme por WhatsApp
              </a>
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
