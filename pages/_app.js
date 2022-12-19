import { Layout } from '../components/Layout'
import { CartProvider } from '../context/cartContext'
import '../styles/globals.css'
import { Toaster } from 'react-hot-toast';


function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
      </Layout>
    </CartProvider>
  )
}

export default MyApp
