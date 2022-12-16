import Banner from '../components/Banner'
import BestSeller from '../components/BestSeller'
import SaleBanner from '../components/SaleBanner'
import { client } from '../lib/client'

export default function Home({products, bannerData}) {

  return (
    <>
      <Banner bannerData={bannerData[1]} />
      <BestSeller products={products} />
      <SaleBanner  bannerData={bannerData[0]} />
    </>
  )
}

export async function getServerSideProps() {
  const bannerData = await client.fetch(`*[_type=="banner"]`)
  const products = await client.fetch(`*[_type=="product"]`)
  return {
    props: {bannerData, products}
  }
}