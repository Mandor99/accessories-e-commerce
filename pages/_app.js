import { Layout } from '../components/Layout'
import { CartProvider } from '../context/cartContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
        <Layout>
          <Component {...pageProps} />
      </Layout>
    </CartProvider>
  )
}

export default MyApp
