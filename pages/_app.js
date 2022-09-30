import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap');
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
{/*developed by praharsh*/}
