import Image from 'next/legacy/image'
import Link from 'next/link'
import { urlFor } from '../lib/client'


function BestSeller({products}) {
  return (
    <section className='mt-16'>
        <div className="container">
            <div className=''>
                <h3 className='text-center text-my-gray-200 font-bold text-[2rem] md:text-5xl capitalize mb-3'>best seller products</h3>
                <p className='text-center text-my-gray capitalize text-sm md:text-base'>there are many variation passages</p>
            </div>
            <section className='flex justify-center gap-4 mt-8 flex-col items-center md:items-start md:flex-row flex-wrap'>
                {
                    products.map(({_id, image, smallDetails, price, slug}, i) => (
                       <Link href={`/product/${slug.current}`} key={_id}>
                         <div className='relative rounded-md bg-my-light-200 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform'>
                            <figure className="relative w-[55vw] shadow-md md:w-[29vw] md:max-w-[35vw] lg:w-[15vw] lg:max-w-[15vw] h-[200px]">
                                <Image src={urlFor(image[0]).url()} className="top-0 left-0 absolute object-contain scale-110" alt='product image' layout='fill'/>
                            </figure>
                        </div>
                        <div className='mt-2 text-center md:text-start'>
                            <p className='text-my-gray-100'>{smallDetails}</p>
                            <h5 className='font-[900]'>{price}</h5>
                        </div>
                       </Link>
                    ))
                }
            </section>
        </div>
    </section>
  )
}

export default BestSeller