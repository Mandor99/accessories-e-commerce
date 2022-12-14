import Image from 'next/legacy/image'
import { useEffect, useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { RiStarSLine,RiStarSFill } from 'react-icons/ri'



function Product() {

    const imgs = ['speaker1', 'speaker2', 'speaker3', 'speaker4']
    const [src, setSrc] = useState(`${imgs[0]}`)
    const [animate, setAnimate] = useState(true)

    return (
        <>
            <section className='mt-7 md:mt-10'>
                <div className="container">
                    <div className="content flex gap-8 flex-col md:flex-row">
                        <div className="product-img">
                            <figure className='relative w-full lg:w-[25vw] h-[250px] shadow-md md:w-[40vw] md:h-[325px] md:shadow-none lg:h-[300px] rounded-3xl bg-my-light-100 flex items-center justify-center cursor-pointer'>
                                <Image src={`/images/${src}.webp`} className="top-0 left-0 absolute object-contain" alt='product image' layout='fill' />
                            </figure>
                            <section className='flex items-center gap-2 flex-wrap justify-center mt-4'>
                                {
                                    imgs?.map((img, i) => {
                                        return (
                                            <figure key={i} className='relative w-1/5 h-[70px] rounded-md bg-my-light-200 flex items-center justify-center cursor-pointer hover:bg-my-red transition shadow-sm md:shadow-none' id={img} onMouseEnter={() => setSrc(img)}>
                                                <Image src={`/images/${img}.webp`} className="top-0 left-0 absolute object-contain" alt='product image' layout='fill' />
                                            </figure>
                                        )
                                    }
                                    )
                                }
                            </section>
                        </div>
                        <article className="product-details">
                            <div className='flex flex-col gap-2 md:gap:1 lg:gap-2'>
                                <h2 className='capitalize text-my-gray-200 text-2xl md:text-2xl lg:text-3xl font-bold'>boat party pai 520</h2>
                                <div className="rate flex gap-1">
                                    {
                                        Array(5).fill('').map((_, i) => (
                                        <span key={i}>
                                            {i+1<4 ? (<RiStarSFill fill='gold' />) : (<RiStarSLine />)}
                                        </span>)
                                        )
                                    }
                                </div>
                                <p className='text-my-gray-100 text-base md:text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sed minima aspernatur illo commodi mollitia debitis illum ratione eligendi accusantium veritatis optio rem iste, deleniti expedita animi quos sapiente quam omnis quisquam totam corporis! Cum sint modi voluptate recusandae veniam.</p>
                            </div>
                            <h3 className="text-my-red-100 my-5 md:my-3 lg:my-5 font-bold text-2xl md:text-xl lg:text-2xl">$56</h3>
                            <div className="flex items-center self-start gap-4 text-my-gray-200">
                                <h4 className='capitalize font-bold text-xl md:text-xl lg:text-2xl'>quantity:</h4>
                                <div className='flex border border-my-gray font-medium text-xl'>
                                    <button type='button' className=' w-8 h-8 flex justify-center items-center'><AiOutlineMinus /></button>
                                    <span className='border-x border-x-my-gray flex justify-center items-center h-8 w-8'>1</span>
                                    <button type='button' className='h-8 w-8 flex justify-center items-center text-my-green-100'><AiOutlinePlus /></button>
                                </div>
                            </div>
                            <div className='flex gap-4 md:gap-8 my-8 md:my-6 lg:my-8 flex-col md:flex-row'>
                                <button className=' border border-my-light-black btn rounded-none w-full lg:w-1/4 md:w-1/2 bg-transparent text-my-red-100'>add to cart</button>
                                <button className='btn rounded-none w-full lg:w-1/4 md:w-1/2 bg-my-red text-white'>buy now</button>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <section className="mt-10 md:mt-16">
                <h2 className='text-center capitalize text-my-gray-200 font-bold text-3xl'>you may also like</h2>
                <section className='flex gap-4 mt-8 items-start flex-row overflow-scroll scrollbar-hide' onMouseOver={() => setAnimate(false)} onMouseLeave={() => setAnimate(true)}>
                {
                    ['speaker1', 'headphone1', 'headphones_a_1', 'earphones_a_1', 'watch_3', 'earphones_b_1', 'headphones_b_1', 'earphones_c_1'].map((product, i) => (
                       <div key={i} className={`animate-marquee ${animate ? 'running': 'pause'}`}>
                         <div className='relative rounded-md bg-my-light-200 flex items-center cursor-pointer'>
                            <figure className="relative shadow-sm w-[45vw] h-[150px]  md:w-[22vw] lg:w-[15vw] md:h-[200px] flex-1">
                                <Image src={`/images/${product}.webp`} className="top-0 left-0 absolute object-contain" alt='product image' layout='fill' draggable={false}/>
                            </figure>
                        </div>
                        <div className='mt-2 text-center md:text-start'>
                            <p className='text-my-gray-100'>Lorem ipsum dolor.</p>
                            <h5 className='font-[900]'>$50</h5>
                        </div>
                       </div>
                    ))
                }
            </section>
            </section>
        </>
    )
}

export default Product