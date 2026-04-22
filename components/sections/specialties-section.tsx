export default function SpecialtiesSection() {
  const specialties = [
    "Autoestima",
    "Gestión emocional",
    "Bullying",
    "Crianza y educación",
    "Motivación al logro",
    "Resolución de conflictos",
    "Proyecto de vida",
    "Técnicas de estudio",
    "Déficit de atención e hiperactividad",
    "Estimulación cognitiva para Adultos Mayores",
    "Estimulación temprana",
    "Comunicación asertiva",
    "Gestión del tiempo",
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Especialidades</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">
            En mi trayectoria profesional he tenido la maravillosa oportunidad de trabajar en el campo
            psicoterapéutico y laboral, sin embargo, mi gran fortaleza es asesorar los procesos de pareja y
            familiares, así mismo el diseño y facilitación de talleres de crecimiento personal.
          </p>

          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">Me dedico a estos temas:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg sm:text-xl text-gray-800 leading-relaxed text-justify mb-6">
              {specialties.map((specialty, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-[#1e7a9e] font-bold">•</span>
                  <span>{specialty}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
