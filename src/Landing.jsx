// src/Landing.jsx
import { motion } from "framer-motion";
import Slider from "react-slick";

export default function Landing() {
  // ---- DATA ----
  const services = [
    {
      img: "/media/serv1.png",
      title: "Videos Corporativos",
      desc: "Comunica cultura, procesos y logros. Ideal para marca empleadora y stakeholders."
    },
    {
      img: "/media/serv2.png",
      title: "Publicidad",
      desc: "Piezas para TV/Redes. Guion, rodaje y post para campañas que convierten."
    },
    {
      img: "/media/serv3.png",
      title: "Eventos / Streaming",
      desc: "Cobertura multicámara, overlays, RTMP y versiones para plataformas."
    },
    {
      img: "/media/serv4.png",
      title: "Cobertura Industrial",
      desc: "Seguridad, ergonomía e inducciones. Enfocado en maquila/procesos."
    },
    {
      img: "/media/serv5.png",
      title: "Postproducción",
      desc: "Edición, color, motion graphics y audio. Entregas optimizadas."
    },
    {
      img: "/media/serv6.png",
      title: "Fotografía",
      desc: "Producto, retrato corporativo e instalaciones."
    }
  ];

  const certifications = [
    "/media/cert1.png",
    "/media/cert2.png",
    "/media/cert3.png",
    "/media/cert4.png",
    "/media/cert5.png",
    "/media/cert6.png"
  ];

  const clients = [
    "/media/cliente1.png",
    "/media/cliente2.png",
    "/media/cliente3.png",
    "/media/cliente4.png",
    "/media/cliente5.png",
    "/media/cliente6.png",
    "/media/cliente7.png",
    "/media/cliente8.png"
  ];

  const projects = [
    { title: "Video Corporativo",  thumb: "/media/imagen1.jpg", url: "#" },
    { title: "Publicidad 15s",     thumb: "/media/imagen2.jpg", url: "#" },
    { title: "Spot Industrial",    thumb: "/media/imagen3.jpg", url: "#" },
    { title: "Evento / Conferencia", thumb: "/media/imagen4.jpg", url: "#" },
    { title: "Producto eCommerce", thumb: "/media/imagen5.jpg", url: "#" },
    { title: "Testimonial Cliente", thumb: "/media/imagen6.jpg", url: "#" },
    { title: "Branding Video",     thumb: "/media/imagen7.jpg", url: "#" },
    { title: "Contenido Social",   thumb: "/media/imagen8.jpg", url: "#" }
  ];

  const testimonials = [
    {
      logo: "/media/cliente1.png",
      text: "Resultados medibles y alto nivel de producción.",
      author: "María López · Marketing"
    },
    {
      logo: "/media/cliente2.png",
      text: "Captaron exactamente lo que necesitábamos.",
      author: "Juan Pérez · Operaciones"
    }
  ];

  // ---- SLIDER SETTINGS ----
  const settingsLogos = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1800,
    slidesToShow: 6,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768,  settings: { slidesToShow: 3 } },
      { breakpoint: 480,  settings: { slidesToShow: 2 } }
    ]
  };

  const settingsPortfolio = {
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640,  settings: { slidesToShow: 1 } }
    ]
  };

  // ---- UI ----
  return (
    <div className="font-sans text-gray-900">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur text-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-bold tracking-tight text-lg">Smart 3D / Audiovisual</a>
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li><a href="#services" className="hover:text-blue-300">Servicios</a></li>
            <li><a href="#certs" className="hover:text-blue-300">Certificaciones</a></li>
            <li><a href="#clients" className="hover:text-blue-300">Clientes</a></li>
            <li><a href="#portfolio" className="hover:text-blue-300">Portafolio</a></li>
            <li><a href="#process" className="hover:text-blue-300">Proceso</a></li>
            <li><a href="#about" className="hover:text-blue-300">Nosotros</a></li>
            <li><a href="#testimonials" className="hover:text-blue-300">Testimonios</a></li>
            <li><a href="#contact" className="px-3 py-2 rounded-lg bg-white text-gray-900">Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO (VIDEO) */}
      <section className="relative h-[85vh] sm:h-screen flex items-center justify-center text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/media/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45 z-0" />
        <div className="relative z-10 text-center mt-16 px-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-bold drop-shadow"
          >
            Producción Audiovisual Profesional
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
          >
            Historias que impactan a tu público y mueven indicadores de negocio.
          </motion.p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="#portfolio" className="px-5 py-3 rounded-xl bg-white text-gray-900 font-medium">Ver portafolio</a>
            <a href="#contact" className="px-5 py-3 rounded-xl border border-white/70 font-medium">Solicitar cotización</a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="services" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="rounded-2xl border p-6 hover:shadow-lg transition bg-white text-center"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-16 h-16 object-contain mx-auto mb-4"
                />
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICACIONES */}
      <section id="certs" className="py-12 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Certificaciones</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {certifications.map((src, i) => (
              <div key={i} className="flex items-center justify-center">
                <img
                  src={src}
                  alt={`Cert ${i + 1}`}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTES (CARRUSEL LOGOS) */}
      <section id="clients" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Nuestros Clientes</h2>
          <Slider {...settingsLogos}>
            {clients.map((logo, i) => (
              <div key={i} className="px-3">
                <div className="h-16 flex items-center justify-center border rounded-xl">
                  <img src={logo} alt={`Cliente ${i+1}`} className="max-h-10 object-contain grayscale hover:grayscale-0 transition" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* PORTAFOLIO (CARRUSEL) */}
      <section id="portfolio" className="py-16 sm:py-20 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-3xl font-bold">Portafolio</h2>
            <a href="/portfolio" className="text-sm underline underline-offset-4">Ver más</a>
          </div>
          <Slider {...settingsPortfolio}>
            {projects.map((p, i) => (
              <div key={i} className="px-3">
                <article className="rounded-2xl overflow-hidden border bg-white">
                  <a href={p.url} target="_blank" rel="noreferrer">
                    <div
                      className="aspect-video bg-gray-200 bg-cover bg-center"
                      style={{ backgroundImage: `url('${p.thumb}')` }}
                      aria-label={p.title}
                    />
                  </a>
                  <div className="p-4">
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm text-gray-600">2025 · Caso destacado</p>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* PROCESO */}
      <section id="process" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Nuestro Proceso</h2>
          <ol className="grid md:grid-cols-5 gap-4">
            {[
              { k: "01", t: "Brief", d: "Objetivos claros y KPIs." },
              { k: "02", t: "Pre", d: "Guion técnico, casting y logística." },
              { k: "03", t: "Producción", d: "Rodaje con equipo y crew." },
              { k: "04", t: "Post", d: "Edición, color, motion y audio." },
              { k: "05", t: "Entrega", d: "Versionado por plataforma y medición." }
            ].map((p, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl border p-5 bg-white text-center"
              >
                <span className="text-xs uppercase tracking-widest text-gray-500">{p.k}</span>
                <h3 className="font-semibold">{p.t}</h3>
                <p className="text-sm text-gray-600">{p.d}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="about" className="py-16 bg-gray-50 border-y">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">Quiénes somos</h2>
            <p className="mt-4 text-gray-700">
              Equipo audiovisual con base en Nogales, Sonora. Impulsamos marcas y procesos
              industriales con contenido que tiene propósito.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="px-5 py-3 rounded-xl bg-black text-white">Agendar llamada</a>
              <a href="#services" className="px-5 py-3 rounded-xl border">Ver servicios</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-video rounded-xl bg-cover bg-center" style={{backgroundImage:"url('/media/imagen5.jpg')"}} />
            <div className="aspect-video rounded-xl bg-cover bg-center" style={{backgroundImage:"url('/media/imagen6.jpg')"}} />
            <div className="aspect-video rounded-xl bg-cover bg-center" style={{backgroundImage:"url('/media/imagen7.jpg')"}} />
            <div className="aspect-video rounded-xl bg-cover bg-center" style={{backgroundImage:"url('/media/imagen8.jpg')"}} />
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Testimonios</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl border p-6 bg-white flex gap-4 items-start"
              >
                <img src={t.logo} alt="logo" className="w-12 h-12 object-contain rounded-md" />
                <div>
                  <p className="text-gray-700">“{t.text}”</p>
                  <footer className="mt-3 text-sm text-gray-600">{t.author}</footer>
                </div>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contact" className="py-16 bg-gray-50 border-t">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Hablemos de tu proyecto</h2>
          <p className="mt-2 text-gray-700">Cuéntanos objetivos, tipo de video y fecha ideal. Respondemos en 24 h.</p>
          <form className="mt-8 grid grid-cols-1 gap-4" onSubmit={(e)=>e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-4">
              <input className="w-full rounded-xl border px-4 py-3" placeholder="Nombre" />
              <input className="w-full rounded-xl border px-4 py-3" placeholder="Email o WhatsApp" />
            </div>
            <input className="w-full rounded-xl border px-4 py-3" placeholder="Empresa (opcional)" />
            <textarea className="w-full rounded-xl border px-4 py-3 min-h-[120px]" placeholder="Breve descripción del proyecto" />
            <div className="flex items-center justify-between">
              <label className="text-sm text-gray-600 flex items-center gap-2">
                <input type="checkbox" className="rounded" /> Acepto el aviso de privacidad
              </label>
              <button type="submit" className="px-5 py-3 rounded-xl bg-black text-white">Enviar</button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
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
