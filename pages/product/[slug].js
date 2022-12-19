import Image from 'next/legacy/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { RiStarSLine,RiStarSFill } from 'react-icons/ri'
import BestSeller from '../../components/BestSeller'
import { client, urlFor } from '../../lib/client'
import { useCart } from '../../context/cartContext'
import { addToCartAction } from '../../context/cartReducer'
import { toast } from 'react-hot-toast'



function Product({product, products}) {
    const {image, details, smallDetails, rate, numRates, price, slug} = product
    const [src, setSrc] = useState(0)
    const [animate, setAnimate] = useState(true)
    const [qty, setQty] = useState(1)
    const {dispatch} = useCart()

    useEffect(() => {
      setSrc(0)
      setQty(1)
    }, [slug])
    
    const incQty = () => {setQty(prev => prev+1)}
    const decQty = () => {setQty(prev => prev-1 < 1 ? 1 : prev-1)}
    const addProductToCart = () => {
        dispatch({type: addToCartAction, payload: {product, qty}})
        setQty(1)
        toast.success(`${qty} ${product.smallDetails} added to the cart.`);
    }

    return (
        <>
            <section className='mt-7 md:mt-10'>
                <div className="container">
                    <div className="content flex gap-8 flex-col md:flex-row">
                        <div className="product-img">
                            <figure className='relative w-full lg:w-[25vw] h-[250px] shadow-md md:w-[40vw] md:h-[325px] md:shadow-none lg:h-[300px] rounded-3xl bg-my-light-100 flex items-center justify-center cursor-pointer hover:bg-my-red transition-colors duration-500'>
                                <Image src={urlFor(image[src]).url()} className="top-0 left-0 absolute object-contain scale-110" alt='product image' layout='fill' />
                            </figure>
                            <section className='flex items-center gap-2 flex-wrap justify-center mt-4'>
                                {
                                    image?.map((img, i) => {
                                        return (
                                            <figure key={i} className='relative w-1/5 h-[70px] rounded-md bg-my-light-200 flex items-center justify-center cursor-pointer hover:bg-my-red transition shadow-sm md:shadow-none' onMouseEnter={() => setSrc(i)}>
                                                <Image src={urlFor(img).url()} className="top-0 left-0 absolute object-contain scale-110" alt='product image' layout='fill' />
                                            </figure>
                                        )
                                    }
                                    )
                                }
                            </section>
                        </div>
                        <article className="product-details">
                            <div className='flex flex-col gap-2 md:gap:1 lg:gap-2'>
                                <h2 className='capitalize text-my-gray-200 text-2xl md:text-2xl lg:text-3xl font-bold'>{smallDetails}</h2>
                                <div className="rate flex gap-1 items-center">
                                    {
                                        Array(5).fill('').map((_, i) => (
                                        <span key={i}>
                                            {i+1<=rate ? (<RiStarSFill fill='gold' />) : (<RiStarSLine />)}
                                        </span>)
                                        )
                                    }
                                    <span className='text-my-red-100'>({numRates})</span>
                                </div>
                                <p className='text-my-gray-100 text-base md:text-sm lg:text-base'>{details}</p>
                            </div>
                            <h3 className="text-my-red-100 my-5 md:my-3 lg:my-5 font-bold text-2xl md:text-xl lg:text-2xl">{price}$ / item</h3>
                            <div className="flex items-center self-start gap-4 text-my-gray-200">
                                <h4 className='capitalize font-bold text-xl md:text-xl lg:text-2xl'>quantity:</h4>
                                <div className='flex border border-my-gray font-medium text-xl'>
                                    <button onClick={decQty} type='button' className=' w-8 h-8 flex justify-center items-center'><AiOutlineMinus /></button>
                                    <span className='border-x border-x-my-gray flex justify-center items-center h-8 w-8'>{qty}</span>
                                    <button onClick={incQty} type='button' className='h-8 w-8 flex justify-center items-center text-my-green-100'><AiOutlinePlus /></button>
                                </div>
                            </div>
                            <div className='flex gap-4 md:gap-8 my-8 md:my-6 lg:my-8 flex-col md:flex-row'>
                                <button onClick={addProductToCart} className='btn-flat-transparent w-full lg:w-1/4 md:w-1/2'>add to cart</button>
                                <button className='btn-flat-red w-full lg:w-1/4 md:w-1/2'>buy now</button>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="mt-10 md:mt-16">
                <h2 className='text-center capitalize text-my-gray-200 font-bold text-3xl'>you may also like</h2>
                <section className='flex gap-4 mt-8 items-start flex-row overflow-scroll scrollbar-hide' onMouseOver={() => setAnimate(false)} onMouseLeave={() => setAnimate(true)}>
                {
                    products?.map(({_id, image, smallDetails, price, slug}, i) => (
                       <Link href={`/product/${slug.current}`} key={_id} className={`animate-marquee ${animate ? 'running': 'pause'}`}>
                         <div className='relative rounded-md bg-my-light-200 flex items-center cursor-pointer hover:scale-110 transition-transform'>
                            <figure className="relative shadow-sm w-[45vw] h-[150px] md:w-[22vw] lg:w-[15vw] md:h-[200px] flex-1">
                                <Image src={urlFor(image[0]).url()} className="top-0 left-0 absolute object-contain scale-110" alt='product image' layout='fill' draggable={false}/>
                            </figure>
                        </div>
                        <div className='mt-2 text-center md:text-start'>
                            <p className='text-my-gray-100'>{smallDetails}</p>
                            <h5 className='font-[900]'>{price}$</h5>
                        </div>
                       </Link>
                    ))
                }
            </section>
            </section>
        </>
    )
}

export default Product

export async function getStaticPaths() {
    const productsSlugs = await client.fetch(`*[_type=="product"] {
        slug {
            current
        }
    }`)
    const paths = productsSlugs.map(({slug}) => ({
        params: {slug: slug.current}
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {slug}}) {
    const product = await client.fetch(`*[_type=="product" && slug.current=='${slug}'][0]`)
    const products = await client.fetch(`*[_type=="product"]`)
    
    return {
    props: {product, products}
    }
}