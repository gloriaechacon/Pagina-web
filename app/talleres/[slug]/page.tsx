"use client"

import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import ContactFormSection from "@/components/sections/contact-form-section"
import SiteFooter from "@/components/site-footer"
import { notFound } from "next/navigation"

interface WorkshopPageProps {
  params: Promise<{ slug: string }>
}

const workshopsData: Record<
  string,
  {
    title: string
    description: string
    fullContent: string
    duration?: string
    modality?: string
    nextWorkshop?: string
    benefits: string[]
  }
> = {
  "planificando-vida-exito": {
    title: "Planificando tu vida para el éxito",
    description: "Descubre tu propósito de vida, clarifica tu visión y valores, y aprende a formular objetivos efectivos",
    fullContent: `Es una experiencia de capacitación vivencial en la que los participantes descubren su propósito de vida, clarifican su visión y valores, y aprenden a formular objetivos efectivos para las distintas áreas de su vida.

Durante el taller se trabajan estrategias motivacionales que permiten iniciar, sostener y concretar los objetivos propuestos, fortaleciendo el compromiso personal y la autoconfianza.

Este taller es especialmente útil para quienes atraviesan momentos de transición, buscan una redirección en sus vidas o desean potenciar sus capacidades para alcanzar sus sueños.`,
    benefits: [
      "Clarificación de tu propósito de vida",
      "Definición de objetivos SMART",
      "Estrategias de motivación práctica",
      "Mayor autoconfianza y compromiso personal",
      "Herramientas para mantener el impulso",
    ],
    duration: "1 día o 4 sesiones",
    modality: "Online y Presencial",
  },
  "canalizar-emociones": {
    title: "Canalizar las emociones de manera efectiva",
    description: "Aprende técnicas prácticas para gestionar el estrés y emociones negativas",
    fullContent: `En este encuentro, los participantes identifican los principales factores estresantes y comprenden cómo el estrés negativo se manifiesta en el cuerpo y en las emociones.

Se enseñan técnicas prácticas y efectivas para gestionar el estrés de forma saludable, favoreciendo el equilibrio emocional, la prevención del desgaste y una mejor calidad de vida.

A través de dinámicas vivenciales, los participantes adquieren herramientas que pueden aplicar inmediatamente en su día a día para transformar su relación con las emociones.`,
    benefits: [
      "Identificación de factores estresantes",
      "Técnicas de relajación y mindfulness",
      "Manejo emocional práctico",
      "Prevención del burnout",
      "Equilibrio mental y físico",
    ],
    duration: "1 día o 3 sesiones",
    modality: "Online y Presencial",
  },
  "comunicacion-asertiva": {
    title: "Comunicación de manera asertiva",
    description: "Expresa tus ideas, emociones y necesidades con claridad y respeto",
    fullContent: `En todo contexto interpersonal, la comunicación es un factor esencial para construir relaciones saludables, mejorar la productividad y aumentar la efectividad, tanto en el ámbito personal como profesional. 

Comunicar de manera asertiva permite expresar ideas, emociones y necesidades con claridad y respeto, favoreciendo la resolución de conflictos.

En este taller, los participantes adquieren herramientas prácticas para desarrollar una comunicación asertiva que fortalezca los vínculos interpersonales y mejore sus relaciones en todos los ámbitos.`,
    benefits: [
      "Desarrollo de comunicación asertiva",
      "Resolución efectiva de conflictos",
      "Mejora en relaciones personales y laborales",
      "Mayor confianza en la expresión personal",
      "Establecimiento de límites saludables",
    ],
    duration: "1 día o 4 sesiones",
    modality: "Online y Presencial",
  },
  "amarse-a-si-mismo": {
    title: "Amarse a sí mismo en amor toda la vida",
    description: "Fortalece tu autoestima y tu relación contigo mismo",
    fullContent: `La autoestima es un pilar fundamental del bienestar y una de las claves principales del éxito en todos los ámbitos de la vida. Conocerse, valorarse y aceptarse de manera sana impacta directamente en la salud mental y física.

En este taller se abordan los pilares fundamentales de la autoestima y se brindan herramientas prácticas para fortalecerla y fomentarla de forma consciente.

Se promueve una relación saludable contigo mismo que perdure a lo largo del tiempo, transformando la autocrítica en autoaceptación y amor.`,
    benefits: [
      "Fortalecimiento de la autoestima",
      "Autoaceptación genuina",
      "Superación de la autocrítica",
      "Amor y compasión hacia ti mismo",
      "Mayor bienestar integral",
    ],
    duration: "1 día o 5 sesiones",
    modality: "Online y Presencial",
  },
  "gestion-tiempo": {
    title: "Gestión y balance del tiempo",
    description: "Aprende a priorizar lo importante y equilibrar todas las áreas de tu vida",
    fullContent: `Uno de los recursos más importantes de la vida es el tiempo, y aprender a utilizarlo de manera consciente y sabia es un objetivo fundamental para el bienestar personal.

En este taller, los participantes identifican los principales desperdiciadores de tiempo, aprenden a priorizar lo verdaderamente importante y a planificar sus actividades en coherencia con su propósito de vida.

Gestionar el tiempo de forma efectiva se convierte así en una de las mejores inversiones para el crecimiento personal y la calidad de vida.`,
    benefits: [
      "Identificación de desperdiciadores de tiempo",
      "Priorización efectiva",
      "Planificación estratégica",
      "Balance vida-trabajo",
      "Mayor productividad y satisfacción",
    ],
    duration: "1 día o 3 sesiones",
    modality: "Online y Presencial",
  },
  "estimulacion-cognitiva": {
    title: "Estimulación cognitiva para adultos mayores",
    description: "Estimula y mantén activos procesos de memoria, atención y creatividad",
    fullContent: `Es un taller en el que se estimulan los procesos de memoria, habilidad verbal, cálculo mental y destrezas visomotrices y artísticas, con actividades lúdicas adaptadas a las necesidades y preferencias de cada participante.

Lo cual permite mayor satisfacción y activación mental, mejorando la calidad de vida y previniendo el deterioro cognitivo.

A través de dinámicas divertidas y desafiantes, los participantes ejercitan su mente mientras disfrutan del proceso y conectan con otros.`,
    benefits: [
      "Estimulación de memoria a corto y largo plazo",
      "Mejora de habilidades verbales",
      "Agilidad mental",
      "Prevención del deterioro cognitivo",
      "Mayor disfrute y conexión social",
    ],
    duration: "Sesiones semanales o modulares",
    modality: "Online y Presencial",
  },
}

export default async function WorkshopDetailPage({ params }: WorkshopPageProps) {
  const { slug } = await params
  const workshop = workshopsData[slug]

  if (!workshop) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#88c930] to-[#9fd63e] text-gray-900">
        <div className="max-w-4xl mx-auto">
          <Link href="/talleres" className="inline-flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity text-gray-900">
            <ArrowLeft className="w-4 h-4" />
            Volver a talleres
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">{workshop.title}</h1>
          <p className="text-xl sm:text-2xl font-semibold text-gray-800 text-center mb-8">{workshop.description}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 mb-12 whitespace-pre-wrap">
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">{workshop.fullContent}</p>
            </div>

            {workshop.benefits && (
              <>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">Beneficios del Taller</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {workshop.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#88c930] font-bold text-xl mt-1">✓</span>
                      <span className="text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {workshop.duration && workshop.modality && (
              <div className="grid grid-cols-2 gap-4 text-center mt-4 mb-8">
                <div>
                  <p className="text-lg sm:text-xl font-semibold text-gray-900">Duración</p>
                  <p className="text-lg sm:text-xl text-gray-800 mt-1">{workshop.duration}</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-semibold text-gray-900">Modalidad</p>
                  <p className="text-lg sm:text-xl text-gray-800 mt-1">{workshop.modality}</p>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      <ContactFormSection
        title="¿Te interesa este taller?"
        description="Contáctame para conocer las próximas fechas, horarios y modalidades disponibles."
      />

      {/* Other Workshops */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Otros Talleres</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(workshopsData)
              .filter(([key]) => key !== slug)
              .slice(0, 2)
              .map(([key, data]) => (
                <Link key={key} href={`/talleres/${key}`} className="block p-6 bg-white rounded-xl hover:shadow-lg transition-shadow border border-gray-200 text-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-4">{data.title}</h3>
                  <p className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-6">{data.description}</p>
                  <span className="text-[#88c930] font-semibold flex items-center gap-2">
                    Ver taller <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/talleres">
              <Button className="bg-[#88c930] hover:bg-[#9fd63e] text-gray-900 font-semibold px-10 py-4 rounded-full text-lg">
                Ver todos los talleres <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
