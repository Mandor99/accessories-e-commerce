import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'

export const Layout = ({children}) => {
  return (
    <div>
        <Head>
        <title>accessories shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className='min-h-[88vh] overflow-hidden'>
        {children}
      </main>
      <Footer />
    </div>
  )
}
