// src/Landing.jsx
import React from "react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-bold tracking-tight text-xl">Smart 3D / Audiovisual</a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#portfolio" className="hover:opacity-80">Portafolio</a>
            <a href="#services" className="hover:opacity-80">Servicios</a>
            <a href="#process" className="hover:opacity-80">Proceso</a>
            <a href="#about" className="hover:opacity-80">Nosotros</a>
            <a href="#testimonials" className="hover:opacity-80">Testimonios</a>
            <a href="#contact" className="px-4 py-2 rounded-2xl bg-black text-white hover:opacity-90">Cotizar</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        <div className="relative h-[60vh] sm:h-[70vh] flex items-center">
          <div className="absolute inset-0">
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0.6),transparent_50%),url('https://images.unsplash.com/photo-1485841890310-6a055c88698a?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-3xl">
              <p className="uppercase tracking-[0.25em] text-xs mb-4 opacity-90">Productora audiovisual</p>
              <h1 className="text-3xl sm:text-5xl font-bold leading-tight">Video que convierte: ideas en <span className="underline decoration-white/60">resultados</span>.</h1>
              <p className="mt-4 text-white/90 max-w-xl">Creamos piezas audiovisuales con propósito: comerciales, corporativos, capacitación y contenido social para marcas que quieren crecer.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#portfolio" className="px-5 py-3 rounded-xl bg-white text-gray-900 font-medium">Ver portafolio</a>
                <a href="#contact" className="px-5 py-3 rounded-xl border border-white/70 font-medium">Solicitar cotización</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-6 justify-between text-xs uppercase tracking-wide text-gray-500">
          <span>Clientes: <strong className="text-gray-800">Marca A</strong>, Marca B, Marca C, Maquila D</span>
          <span className="hidden sm:block">Producción en: Nogales · Hermosillo · CDMX</span>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">Portafolio</h2>
            <a href="#" className="text-sm underline underline-offset-4">Ver todos</a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <article key={i} className="group rounded-2xl overflow-hidden border hover:shadow-lg transition">
                <div className="aspect-video bg-gray-200" />
                <div className="p-4">
                  <h3 className="font-semibold">Proyecto {i + 1}</h3>
                  <p className="text-sm text-gray-600">Cliente · Rol · 2025</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 sm:py-20 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10">Servicios</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Producción de Video", desc: "Comerciales, corporativos, social y capacitación. Guion → rodaje → post." },
              { title: "Video Marketing", desc: "Estrategia de contenido, campañas, piezas orientadas a conversión." },
              { title: "Postproducción", desc: "Edición, color, motion graphics, sound design y master para múltiples formatos." },
              { title: "Cobertura Industrial", desc: "Seguridad, ergonomía, inducciones y procesos para maquila." },
              { title: "Fotografía", desc: "Producto, retrato corporativo, instalaciones y lifestyle." },
              { title: "Streaming / Eventos", desc: "Cobertura multicámara, overlays, rótulos y RTMP a plataformas." },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl bg-white border p-6 hover:shadow-md transition">
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
                <ul className="mt-4 text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Brief y guion</li>
                  <li>Plan de rodaje</li>
                  <li>Entrega optimizada</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10">Nuestro proceso</h2>
          <ol className="grid md:grid-cols-5 gap-4">
            {[
              { k: "01", t: "Brief", d: "Objetivos claros y KPIs." },
              { k: "02", t: "Pre", d: "Guion técnico, casting y logística." },
              { k: "03", t: "Producción", d: "Rodaje con equipo y crew." },
              { k: "04", t: "Post", d: "Edición, color, motion y audio." },
              { k: "05", t: "Entrega", d: "Versionado por plataforma y medición." },
            ].map((p, i) => (
              <li key={i} className="rounded-2xl border p-5 bg-white">
                <span className="text-xs uppercase tracking-widest text-gray-500">{p.k}</span>
                <h3 className="font-semibold">{p.t}</h3>
                <p className="text-sm text-gray-600">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 sm:py-20 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Quiénes somos</h2>
            <p className="mt-4 text-gray-700">Equipo audiovisual con base en Nogales, Sonora, enfocado en contenido que impulsa marcas y procesos industriales. Mezclamos comunicación, creatividad y operación para entregar videos con propósito.</p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="px-5 py-3 rounded-xl bg-black text-white">Agendar llamada</a>
              <a href="#services" className="px-5 py-3 rounded-xl border">Ver servicios</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-video rounded-xl bg-gray-200" />
            <div className="aspect-video rounded-xl bg-gray-200" />
            <div className="aspect-video rounded-xl bg-gray-200" />
            <div className="aspect-video rounded-xl bg-gray-200" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10">Testimonios</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <blockquote key={i} className="rounded-2xl border p-6 bg-white">
                <p className="text-gray-700">“Texto del testimonio. Resultados medibles y experiencia de trabajo.”</p>
                <footer className="mt-4 text-sm text-gray-600">Nombre · Cargo, Empresa</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 sm:py-20 bg-gray-50 border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Hablemos de tu proyecto</h2>
          <p className="mt-2 text-gray-700">Cuéntanos objetivos, tipo de video y fecha ideal. Respondemos en 24 h.</p>
          <form className="mt-8 grid grid-cols-1 gap-4" onSubmit={(e)=>e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-4">
              <input className="w-full rounded-xl border px-4 py-3" placeholder="Nombre" />
              <input className="w-full rounded-xl border px-4 py-3" placeholder="Email o WhatsApp" />
            </div>
            <input className="w-full rounded-xl border px-4 py-3" placeholder="Empresa (opcional)" />
            <textarea className="w-full rounded-xl border px-4 py-3 min-h-[120px]" placeholder="Breve descripción del proyecto" />
            <div className="flex items-center justify-between">
              <label className="text-sm text-gray-600 flex items-center gap-2"><input type="checkbox" className="rounded"/> Acepto el aviso de privacidad</label>
              <button type="submit" className="px-5 py-3 rounded-xl bg-black text-white">Enviar</button>
            </div>
          </form>
          <div className="mt-6 text-sm text-gray-600">
            <p>Operamos en Nogales · Hermosillo · CDMX · Guadalajara</p>
            <p>Correo: hola@tuempresa.mx · WhatsApp: +52 (###) ### ####</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Tu Empresa Audiovisual. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="underline underline-offset-4">Aviso de privacidad</a>
            <a href="#" className="underline underline-offset-4">Política de cookies</a>
            <a href="#" className="underline underline-offset-4">Términos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
