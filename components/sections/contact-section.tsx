"use client"

import { useState, type FormEvent } from "react"
import { Facebook, Instagram, Linkedin, Send } from "lucide-react"

// Consultations submitted through the form are emailed here via the
// Formspree form connected to gtsekwan@gmail.com — no backend or API key
// needed on this end.
const CONTACT_EMAIL = "gtsekwan@gmail.com"
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrpzypeg"

// Countries most relevant to the practice (Argentina/Venezuela first),
// plus other common Spanish-speaking + reference countries.
const COUNTRIES = [
  { code: "AR", name: "Argentina", dial: "+54", flag: "🇦🇷" },
  { code: "VE", name: "Venezuela", dial: "+58", flag: "🇻🇪" },
  { code: "ES", name: "España", dial: "+34", flag: "🇪🇸" },
  { code: "MX", name: "México", dial: "+52", flag: "🇲🇽" },
  { code: "CO", name: "Colombia", dial: "+57", flag: "🇨🇴" },
  { code: "CL", name: "Chile", dial: "+56", flag: "🇨🇱" },
  { code: "UY", name: "Uruguay", dial: "+598", flag: "🇺🇾" },
  { code: "PY", name: "Paraguay", dial: "+595", flag: "🇵🇾" },
  { code: "BO", name: "Bolivia", dial: "+591", flag: "🇧🇴" },
  { code: "PE", name: "Perú", dial: "+51", flag: "🇵🇪" },
  { code: "EC", name: "Ecuador", dial: "+593", flag: "🇪🇨" },
  { code: "BR", name: "Brasil", dial: "+55", flag: "🇧🇷" },
  { code: "US", name: "Estados Unidos", dial: "+1", flag: "🇺🇸" },
  { code: "IT", name: "Italia", dial: "+39", flag: "🇮🇹" },
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

// Requires a leading "+" (country code) followed by 8–15 digits total —
// enough to catch obviously fake/incomplete numbers while accepting real
// international formats (e.g. +54 9 11 1234 5678, +58 412 1234567).
function isValidPhone(fullPhone: string) {
  return /^\+\d{8,15}$/.test(fullPhone)
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (values.name.trim().length < 3) {
    errors.name = "Ingresá tu nombre (mínimo 3 caracteres)."
  }

  if (values.reason.trim().length < 10) {
    errors.reason = "Contame brevemente el motivo de tu consulta (mínimo 10 caracteres)."
  }

  if (!isValidPhone(buildFullPhone(values.countryDial, values.localPhone))) {
    errors.phone = "Ingresá un número de teléfono completo y válido."
  }

  return errors
}

export default function ContactSection() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    reason: "",
    countryDial: COUNTRIES[0].dial,
    localPhone: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  function handleChange(field: keyof FormValues, value: string) {
    setValues((v) => ({ ...v, [field]: value }))
    const errorKey = field === "localPhone" || field === "countryDial" ? "phone" : field
    if (errors[errorKey]) setErrors((e) => ({ ...e, [errorKey]: undefined }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus("submitting")
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: "Nueva consulta desde la web — Alicia Tse Kwan",
          Nombre: values.name.trim(),
          Teléfono: buildFullPhone(values.countryDial, values.localPhone),
          "Motivo de consulta": values.reason.trim(),
        }),
      })

      if (res.ok) {
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
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1e7a9e] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Contacto</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-10">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white text-left mb-8">Ubicación</h3>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed text-left mb-6">Belgrano, Buenos Aires</p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white text-left mb-8">Sígueme en redes sociales</h3>
              <div className="flex gap-4 justify-start">
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
            </div>
          </div>

          {/* Contact form — replaces the old public WhatsApp link. Submissions
              are validated here and then emailed straight to gtsekwan@gmail.com
              via Formspree, so only real, complete requests reach the inbox. */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-6">
              Escribime tu consulta
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
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Tu nombre completo"
                    className={`w-full rounded-lg border px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e7a9e] ${
                      errors.name ? "border-red-400" : "border-gray-300"
                    }`}
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
                    onChange={(e) => handleChange("reason", e.target.value)}
                    placeholder="Contame brevemente en qué puedo ayudarte"
                    rows={4}
                    className={`w-full rounded-lg border px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e7a9e] resize-none ${
                      errors.reason ? "border-red-400" : "border-gray-300"
                    }`}
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
                      onChange={(e) => handleChange("countryDial", e.target.value)}
                      className={`w-[110px] shrink-0 rounded-lg border px-2 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1e7a9e] ${
                        errors.phone ? "border-red-400" : "border-gray-300"
                      }`}
                    >
                      {COUNTRIES.map((c) => (
                        <option key={c.code} value={c.dial}>
                          {c.flag} {c.dial}
                        </option>
                      ))}
                    </select>
                    <input
                      id="contact-phone"
                      type="tel"
                      inputMode="numeric"
                      value={values.localPhone}
                      onChange={(e) => handleChange("localPhone", e.target.value)}
                      placeholder="11 1234 5678"
                      className={`flex-1 min-w-0 rounded-lg border px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e7a9e] ${
                        errors.phone ? "border-red-400" : "border-gray-300"
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1e7a9e] to-[#2596be] hover:from-[#2596be] hover:to-[#1e7a9e] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar consulta <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {status === "error" && (
                  <p className="text-red-600 text-sm text-center">
                    Hubo un problema al enviar. Probá de nuevo o escribime a {CONTACT_EMAIL}.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Psicóloga Alicia Tse Kwan. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  )
}
