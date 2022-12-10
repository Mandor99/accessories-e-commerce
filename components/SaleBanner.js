import Image from 'next/legacy/image'

function SaleBanner() {
  return (
    <section className="mt-16 lg:mt-32">
        <div className='w-[90%] m-auto rounded-lg  h-[95vh] gap-8 flex-col lg:flex-row px-11 py-8 items-start lg:h-[55vh] bg-my-red flex lg:items-center justify-between lg:py-6 pr-12 pl-10 relative'>
            <article className="flex flex-col gap-2 text-white">
                <h4 className="uppercase text-base">s0% off</h4>
                <h3 className="uppercase font-bold text-[5rem] max-w-sm leading-none">fine smile</h3>
                <h2 className="uppercase text-base">15 nov to 7 dec</h2>
            </article>
            <figure className="absolute w-[350px] h-[350px] top-[5%] left-[35%] lg:top-[-25%] lg:left-[18%] lg:w-[500px] lg:h-[500px]">
                <Image src={'/images/headphone1.webp'} className="object-contain" alt='product image' layout='fill'/>
            </figure>
            <article className="flex flex-col gap-2 lg:gap-6 text-white text-start max-w-md">
                <h3 className="capitalize text-base font-medium"> beats solo air</h3>
                <h3 className="capitalize font-bold text-[3.5rem] md:text-6xl">summer sale</h3>
                <p className="text-my-light-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.</p>
                <button className="btn-light self-stretch lg:self-start">shop now</button>
            </article>
        </div>
    </section>
  )
}

export default SaleBanner