import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 bg-[#165f7b] text-white">
      <div className="max-w-6xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Psicóloga Carmen Alicia Tse Kwan</h2>
          <p className="text-white/80">Psicología, talleres y coaching ontológico</p>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">Ubicación</h2>
          <p className="text-white/80">Belgrano, Buenos Aires</p>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Sígueme en redes sociales</h2>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/psico.aliciatsekwan/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/psico.aliciatsekwan/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/asesoramientoalicia69/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-6 border-t border-white/20 text-center">
        <p className="text-white/70 text-sm">
          © {new Date().getFullYear()} Psicóloga Carmen Alicia Tse Kwan. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
