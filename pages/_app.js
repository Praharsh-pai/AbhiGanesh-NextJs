import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/js/bootstrap';
import { useEffect } from "react";
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
}

export default MyApp
{/*developed by praharsh*/}
