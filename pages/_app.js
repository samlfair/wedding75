import App from 'next/app'

import '../src/styles/reset.css'
import '../src/styles/index.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
  return await App.getInitialProps(appContext)
}

export default MyApp

