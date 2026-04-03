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

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1e7a9e] to-[#2596be] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Consulta Individual */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all">
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Consulta Individual</h3>
                  <div className="space-y-4 text-white/90 leading-relaxed">
                    <p>
                      En la primera consulta realizo una entrevista que me permite conocer al paciente, elaborar su historia clínica y explorar en profundidad los motivos de consulta. A partir de este encuentro, se lleva a cabo conjuntamente con el paciente, la definición de los objetivos de intervención.
                    </p>
                    <p>
                      Según sea el caso a intervenir, aplico técnicas de Programación Neurolingüística (PNL), Terapia Cognitivo-Conductual y Análisis Transaccional, integrándolas de manera personalizada.
                    </p>
                    <p>
                      En cada encuentro, mi propósito es escuchar con atención y respeto la situación que el paciente plantea, acompañarlo en su proceso y brindarle herramientas prácticas y efectivas que le permitan comprender, afrontar y adquirir herramientas para superar la situación que lo motivó a buscar asesoramiento, promoviendo su bienestar emocional y crecimiento personal.
                    </p>
                  </div>
                  <div className="space-y-2 mt-6">
                    <p className="font-semibold">Modalidad:</p>
                    <p className="text-white/90">Online (Zoom o Google Meet)</p>
                    <p className="text-white/90">Presencial (Belgrano)</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Consulta de Pareja */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all">
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Consulta en Pareja</h3>
                  <div className="space-y-4 text-white/90 leading-relaxed">
                    <p>
                      Cuando uno de los miembros de la pareja solicita terapia conmigo, inicio el proceso explorando de manera individual el punto de vista de cada integrante, brindando un espacio seguro para la expresión personal.
                    </p>
                    <p>
                      Posteriormente, se realizan encuentros conjuntos con el objetivo de favorecer una comunicación más clara y respetuosa, promover la comprensión mutua y trabajar en la resolución de conflictos.
                    </p>
                    <p>
                      El abordaje terapéutico está orientado a diseñar y fortalecer espacios de diálogo que contribuyan al bienestar emocional y el crecimiento de la pareja.
                    </p>
                  </div>
                  <div className="space-y-2 mt-6">
                    <p className="font-semibold">Modalidad:</p>
                    <p className="text-white/90">Online (Zoom o Google Meet)</p>
                    <p className="text-white/90">Presencial (Belgrano)</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Talleres de Desarrollo Personal */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-all">
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Talleres de Desarrollo Personal</h3>
                  <div className="space-y-4 text-white/90 leading-relaxed">
                    <p>
                      Cuando uno de los miembros de la pareja solicita terapia conmigo, inicio el proceso explorando de manera individual el punto de vista de cada integrante, brindando un espacio seguro para la expresión personal.
                    </p>
                    <p>
                      Posteriormente, se realizan encuentros conjuntos con el objetivo de favorecer una comunicación más clara y respetuosa, promover la comprensión mutua y trabajar en la resolución de conflictos.
                    </p>
                    <p>
                      El abordaje terapéutico está orientado a diseñar y fortalecer espacios de diálogo que contribuyan al bienestar emocional y el crecimiento de la pareja.
                    </p>
                  </div>
                  <div className="space-y-2 mt-6">
                    <p className="font-semibold">Modalidad:</p>
                    <p className="text-white/90">Online (Zoom o Google Meet)</p>
                    <p className="text-white/90">Presencial (Belgrano)</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-16 text-center">Talleres</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Taller 1 */}
            <Card className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Planificando tu vida para el éxito</h3>
              <p className="text-gray-700 leading-relaxed">
                Es una experiencia de capacitación vivencial en la que los participantes descubren su propósito de vida, clarifican su visión y valores, y aprenden a formular objetivos efectivos para las distintas áreas de su vida.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Durante el taller se trabajan estrategias motivacionales que permiten iniciar, sostener y concretar los objetivos propuestos, fortaleciendo el compromiso personal y la autoconfianza.
              </p>
            </Card>

            {/* Taller 2 */}
            <Card className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cómo canalizar las emociones de manera efectiva</h3>
              <p className="text-gray-700 leading-relaxed">
                En este encuentro, los participantes identifican los principales factores estresantes y comprenden cómo el estrés negativo se manifiesta en el cuerpo y en las emociones.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Se enseñan técnicas prácticas y efectivas para gestionar el estrés de forma saludable, favoreciendo el equilibrio emocional, la prevención del desgaste y una mejor calidad de vida.
              </p>
            </Card>

            {/* Taller 3 */}
            <Card className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">La comunicación asertiva: una herramienta para reafirmarse</h3>
              <p className="text-gray-700 leading-relaxed">
                En todo contexto interpersonal, la comunicación es un factor esencial para construir relaciones saludables, mejorar la productividad y aumentar la efectividad, tanto en el ámbito personal como profesional. Comunicar de manera asertiva permite expresar ideas, emociones y necesidades con claridad y respeto, favoreciendo la resolución de conflictos.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                En este taller, los participantes adquieren herramientas prácticas para desarrollar una comunicación asertiva que fortalezca los vínculos interpersonales.
              </p>
            </Card>

            {/* Taller 4 */}
            <Card className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Amarse a sí mismo: un amor que dura toda la vida</h3>
              <p className="text-gray-700 leading-relaxed">
                La autoestima es un pilar fundamental del bienestar y una de las claves principales del éxito en todos los ámbitos de la vida. Conocerse, valorarse y aceptarse de manera sana impacta directamente en la salud mental y física.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                En este taller se abordan los pilares fundamentales de la autoestima y se brindan herramientas prácticas para fortalecerla y fomentarla de forma consciente, promoviendo una relación saludable con uno mismo que perdure a lo largo del tiempo.
              </p>
            </Card>

            {/* Taller 5 */}
            <Card className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Gestión del valioso tiempo</h3>
              <p className="text-gray-700 leading-relaxed">
                Uno de los recursos más importantes de la vida es el tiempo, y aprender a utilizarlo de manera consciente y sabia, es un objetivo fundamental para el bienestar personal.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                En este taller, los participantes identifican los principales desperdiciadores de tiempo, aprenden a priorizar lo verdaderamente importante y a planificar sus actividades en coherencia con su propósito de vida. Gestionar el tiempo de forma efectiva se convierte así en una de las mejores inversiones para el crecimiento personal y la calidad de vida.
              </p>
            </Card>

            {/* Taller 6 */}
            <Card className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Estimulación cognitiva para adultos mayores</h3>
              <p className="text-gray-700 leading-relaxed">
                Es un taller, en el que se estimulan los procesos de memoria, habilidad verbal, cálculo mental y destrezas viso motrices y artísticas, con actividades lúdicas adaptadas a las necesidades y preferencias de cada participante, lo cual le permitirá mayor satisfacción y activación mental.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Carousel */}
      <GalleryCarousel />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
