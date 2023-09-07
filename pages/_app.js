import '@/styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='stylesheet' href='/vendors/feather/feather.css' />
        <link rel='stylesheet' href='/vendors/ti-icons/css/themify-icons.css' />      
        <link rel='stylesheet' href='/css/vertical-layout-light/style.css' />        
        <link rel='shortcut icon' href='/images/favicon.png' />        
      </Head>
      <Component {...pageProps} />      
      <Script src='https://code.jquery.com/jquery-3.7.1.min.js' />
    </>
  );
}
