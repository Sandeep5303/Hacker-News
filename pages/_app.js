import '../styles/globals.css';
import HackerState from '@context/HackerState';

function MyApp({ Component, pageProps }) {
  return (
    <HackerState>
      <Component {...pageProps} />
    </HackerState>
  );
}

export default MyApp;
