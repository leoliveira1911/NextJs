import '../styles/globals.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
