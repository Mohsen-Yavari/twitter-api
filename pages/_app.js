import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return [
    <div dir="rtl">
    <Component {...pageProps} />
    </div> 
  ]

  
}

export default MyApp
