import Image from 'next/legacy/image'
import Link from 'next/link'
import { urlFor } from '../lib/client'



const Banner = ({bannerData: {smallText, largeText1, largeText2, buttonText, midText, desc, image, product}}) => {
  return (
    <header className="mt-10">
        <div className='relative w-[90%] max-w-5xl m-auto rounded-lg h-[60vh] max-h-[24rem] bg-my-light-100 flex justify-between px-4 flex-col items-start md:flex-row md:items-center  py-6 md:px-6 lg:px-12 '>
            <article className="flex flex-col">
                <h4 className="capitalize text-base font-semibold">{smallText}</h4>
                <h3 className="capitalize font-bold text-4xl md:text-5xl">{largeText1}</h3>
                <h2 className="uppercase text-white font-bold text-[2.5rem] md:text-[4rem] lg:text-[5rem]">{largeText2}</h2>
                <Link href={`/product/${product}`}><button className="btn-red">{buttonText}</button></Link>
            </article>
            <figure className="absolute w-[200px] h-[200px] left-[50%] top-[-6%] lg:top-[6%] lg:left-[30%] lg:w-[400px] lg:h-[300px] md:top-[4%] md:left-[34%] md:w-[270px] md:h-[270px]">
                <Image src={urlFor(image).url()} className="object-contain" alt='product image' layout='fill'/>
            </figure>
            <article className="self-start text-start md:self-end md:text-end md:pr-16">
                <h5 className="font-bold text-xl capitalize">{midText}</h5>
                <p className="text-my-gray max-w-[20rem]">{desc}</p>
            </article>
        </div>
    </header>
  )
}

export default Banner