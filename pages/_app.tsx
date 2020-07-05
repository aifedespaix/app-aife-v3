import {AppProps} from 'next/app';
import '../styles.css';
import Header from '../components/header';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <div>
      <Header/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
