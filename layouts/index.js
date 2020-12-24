import Meta from 'components/Meta'
import Footer from 'components/Footer'

import '../src/styles/reset.css'
import '../src/styles/index.css'

const DefaultLayout = ({ children }) => (
  <div>
    <Meta />
    <main>{children}</main>
    <Footer />
  </div>
)

export default DefaultLayout
