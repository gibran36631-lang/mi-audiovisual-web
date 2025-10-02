import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="font-sans text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
          <h1 className="text-xl font-bold">Smart 3D / Audiovisual</h1>
          <ul className="flex space-x-6">
            <li><a href="#portfolio" className="hover:text-blue-400">Portafolio</a></li>
            <li><a href="#services" className="hover:text-blue-400">Servicios</a></li>
            <li><a href="#process" className="hover:text-blue-400">Proceso</a></li>
            <li><a href="#about" className="hover:text-blue-400">Nosotros</a></li>
            <li><a href="#testimonials" className="hover:text-blue-400">Testimonios</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero con video de fondo */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/media/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

        <div className="relative z-10 text-center mt-16">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold drop-shadow-lg"
          >
            Producción Audiovisual Profesional
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 text-lg md:text-xl drop-shadow"
          >
            Historias que impactan a tu público
          </motion.p>
        </div>
      </section>

      {/* Portafolio */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Portafolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
              >
                <img
                  src={`/media/${img}`}
                  alt={`Proyecto ${i + 1}`}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="font-bold">Proyecto {i + 1}</h3>
                  <p className="text-sm text-gray-600">Cliente destacado</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Videos Corporativos", "Publicidad", "Eventos"].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <h3 className="text-xl font-semibold">{s}</h3>
                <p className="text-gray-600 mt-2">
                  Producción audiovisual de calidad para tu marca.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Nuestro Proceso</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Pre-Producción", "Producción", "Post-Producción"].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.3 }}
                className="p-6 rounded-xl shadow-md bg-gray-50"
              >
                <h3 className="font-semibold text-xl">{step}</h3>
                <p className="text-gray-600 mt-2">
                  Detalles clave de la etapa {i + 1}.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Quiénes Somos?</h2>
          <p className="text-gray-700 leading-relaxed">
            Somos un equipo creativo especializado en producción audiovisual,
            ofreciendo soluciones innovadoras para marcas y empresas.
          </p>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Testimonios</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Gran calidad en video y trato profesional.",
              "Captaron exactamente lo que necesitábamos.",
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.3 }}
                className="bg-gray-100 p-6 rounded-xl shadow-md"
              >
                <p className="italic">"{t}"</p>
                <span className="block mt-2 font-semibold">
                  – Cliente {i + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
          <form
            action="https://formspree.io/f/tu-form-id"
            method="POST"
            className="grid gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              className="p-3 rounded-lg border"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu correo"
              className="p-3 rounded-lg border"
              required
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              rows="4"
              className="p-3 rounded-lg border"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Smart 3D / Audiovisual. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
