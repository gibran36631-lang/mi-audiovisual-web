// pages/_app.js
import '../styles/globals.css';

// Estilos de react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
