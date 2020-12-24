import App from 'next/app'

import './styles/reset.css'
import './styles/index.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
  return await App.getInitialProps(appContext)
}

export default MyApp
