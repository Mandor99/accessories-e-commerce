import Head from 'next/head'
import {AiFillApple} from 'react-icons/ai'

export default function Home() {
  return (
    <div>
      <Head>
        <title>accessories shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className='uppercase text-2xl font-bold text-center'>test <AiFillApple /></h1>
      
    </div>
  )
}