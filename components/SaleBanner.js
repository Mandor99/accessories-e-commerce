import Image from 'next/legacy/image'

function SaleBanner() {
  return (
    <section className="mt-16 lg:mt-32">
        <div className='w-[90%] max-h-[35rem] max-w-5xl m-auto rounded-lg  h-[95vh] md:max-h-[24rem] gap-8 flex-col md:flex-row px-11 py-8 items-start md:h-[55vh] bg-my-red flex md:items-center justify-between lg:py-6 pr-12 pl-10 relative'>
            <article className="flex flex-col gap-2 text-white">
                <h4 className="uppercase text-base">s0% off</h4>
                <h3 className="uppercase font-bold text-[4rem] md:text-[5rem] max-w-sm leading-none">fine smile</h3>
                <h2 className="uppercase text-base">15 nov to 7 dec</h2>
            </article>
            <figure className="absolute w-[270px] h-[270px] top-[10%] left-[39%] md:w-[270px] md:h-[270px] md:top-[-13%] lg:top-[-20%] md:left-[25%] lg:w-[350px] lg:h-[350px]">
                <Image src={'/images/headphone1.webp'} className="object-contain" alt='product image' layout='fill'/>
            </figure>
            <article className="flex flex-col gap-2 md:gap-6 text-white text-start max-w-xs md:max-w-[15rem] lg:max-w-xs">
                <h3 className="capitalize text-base font-medium"> beats solo air</h3>
                <h3 className="capitalize font-bold text-[3rem] leading-none md:text-5xl">summer sale</h3>
                <p className="text-my-light-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.</p>
                <button className="btn-light self-stretch md:self-start">shop now</button>
            </article>
        </div>
    </section>
  )
}

export default SaleBanner