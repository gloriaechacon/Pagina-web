"use client"

import { useState, type FormEvent } from "react"
import { Send } from "lucide-react"

const CONTACT_EMAIL = "gtsekwan@gmail.com"
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrpzypeg"

const COUNTRIES = [
  { code: "AR", dial: "+54", flag: "🇦🇷" },
  { code: "VE", dial: "+58", flag: "🇻🇪" },
  { code: "ES", dial: "+34", flag: "🇪🇸" },
  { code: "MX", dial: "+52", flag: "🇲🇽" },
  { code: "CO", dial: "+57", flag: "🇨🇴" },
  { code: "CL", dial: "+56", flag: "🇨🇱" },
  { code: "UY", dial: "+598", flag: "🇺🇾" },
  { code: "PY", dial: "+595", flag: "🇵🇾" },
  { code: "BO", dial: "+591", flag: "🇧🇴" },
  { code: "PE", dial: "+51", flag: "🇵🇪" },
  { code: "EC", dial: "+593", flag: "🇪🇨" },
  { code: "BR", dial: "+55", flag: "🇧🇷" },
  { code: "US", dial: "+1", flag: "🇺🇸" },
  { code: "IT", dial: "+39", flag: "🇮🇹" },
] as const

type FormValues = {
  name: string
  reason: string
  countryDial: string
  localPhone: string
}

type FormErrors = Partial<Record<"name" | "reason" | "phone", string>>

function normalizeDigits(value: string) {
  return value.replace(/[^\d]/g, "")
}

function buildFullPhone(countryDial: string, localPhone: string) {
  return `${countryDial}${normalizeDigits(localPhone)}`
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (values.name.trim().length < 3) {
    errors.name = "Ingresá tu nombre (mínimo 3 caracteres)."
  }

  if (values.reason.trim().length < 10) {
    errors.reason = "Contame brevemente el motivo de tu consulta (mínimo 10 caracteres)."
  }

  if (!/^\+\d{8,15}$/.test(buildFullPhone(values.countryDial, values.localPhone))) {
    errors.phone = "Ingresá un número de teléfono completo y válido."
  }

  return errors
}

function ContactForm() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    reason: "",
    countryDial: COUNTRIES[0].dial,
    localPhone: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  function handleChange(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    const errorKey = field === "localPhone" || field === "countryDial" ? "phone" : field
    if (errors[errorKey]) setErrors((current) => ({ ...current, [errorKey]: undefined }))
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus("submitting")
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: "Nueva consulta desde la web — Alicia Tse Kwan",
          Nombre: values.name.trim(),
          Teléfono: buildFullPhone(values.countryDial, values.localPhone),
          "Motivo de consulta": values.reason.trim(),
        }),
      })

      if (response.ok) {
        setStatus("success")
        setValues({ name: "", reason: "", countryDial: COUNTRIES[0].dial, localPhone: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-6">
        Escríbeme tu consulta
      </h3>

      {status === "success" ? (
        <div className="text-center py-8">
          <p className="text-lg text-gray-900 font-semibold mb-2">¡Listo! Recibí tu mensaje.</p>
          <p className="text-gray-600">Me voy a contactar contigo a la brevedad.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 text-[#1e7a9e] font-semibold hover:underline"
          >
            Enviar otra consulta
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              id="contact-name"
              type="text"
              value={values.name}
              onChange={(event) => handleChange("name", event.target.value)}
              placeholder="Tu nombre completo"
              className={`w-full rounded-lg border px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e7a9e] ${errors.name ? "border-red-400" : "border-gray-300"}`}
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="contact-reason" className="block text-sm font-medium text-gray-700 mb-1">
              Motivo de consulta
            </label>
            <textarea
              id="contact-reason"
              value={values.reason}
              onChange={(event) => handleChange("reason", event.target.value)}
              placeholder="Contame brevemente en qué puedo ayudarte"
              rows={4}
              className={`w-full rounded-lg border px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e7a9e] resize-none ${errors.reason ? "border-red-400" : "border-gray-300"}`}
            />
            {errors.reason && <p className="text-red-600 text-sm mt-1">{errors.reason}</p>}
          </div>

          <div>
            <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono
            </label>
            <div className="flex gap-2">
              <label className="sr-only" htmlFor="contact-country">País</label>
              <select
                id="contact-country"
                value={values.countryDial}
                onChange={(event) => handleChange("countryDial", event.target.value)}
                className={`w-[110px] shrink-0 rounded-lg border px-2 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1e7a9e] ${errors.phone ? "border-red-400" : "border-gray-300"}`}
              >
                {COUNTRIES.map((country) => (
                  <option key={country.code} value={country.dial}>
                    {country.flag} {country.dial}
                  </option>
                ))}
              </select>
              <input
                id="contact-phone"
                type="tel"
                inputMode="numeric"
                value={values.localPhone}
                onChange={(event) => handleChange("localPhone", event.target.value)}
                placeholder="11 1234 5678"
                className={`flex-1 min-w-0 rounded-lg border px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e7a9e] ${errors.phone ? "border-red-400" : "border-gray-300"}`}
              />
            </div>
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1e7a9e] to-[#2596be] hover:from-[#2596be] hover:to-[#1e7a9e] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Enviando..." : <><span>Enviar consulta</span><Send className="w-4 h-4" /></>}
          </button>

          {status === "error" && (
            <p className="text-red-600 text-sm text-center">
              Hubo un problema al enviar. Probá de nuevo o escribime a {CONTACT_EMAIL}.
            </p>
          )}
        </form>
      )}
    </div>
  )
}

type ContactFormSectionProps = {
  title?: string
  description?: string
}

export default function ContactFormSection({
  title = "Contacto",
  description,
}: ContactFormSectionProps) {
  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1e7a9e] to-[#2596be] text-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">{title}</h2>
        {description && (
          <p className="max-w-3xl text-lg sm:text-xl text-white/95 leading-relaxed text-center mb-10">
            {description}
          </p>
        )}
        <ContactForm />
      </div>
    </section>
  )
}
