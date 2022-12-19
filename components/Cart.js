import Image from 'next/legacy/image'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineCancel } from 'react-icons/md'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useCart } from '../context/cartContext'
import Link from 'next/link'
import { urlFor } from '../lib/client'
import { getTotalQuantities, getTotalPrice, removeFromCartAction, incQtyInCart, decQtyInCart } from '../context/cartReducer'


function Cart() {

    const pros = ['watch_3', 'headphones_b_1', 'watch_3', 'headphones_b_1', 'watch_3', 'headphones_b_1']
    const { setToggleCart, stateCart, dispatch } = useCart()


    return (
        <section className={`fixed top-0 right-0 min-h-[100vh] h-auto bg-my-light-black w-[100vw] backdrop-blur-sm`}>
            <div className={`fixed top-0 right-0 h-full w-[100vw] lg:w-[50vw] max-w-2xl bg-white pl-1 md:pl-8 p-8 overflow-auto scrollbar-hide`}>
                <div className='h-full space-y-8'>
                    <h4 className="capitalize text-black flex items-center gap-2 font-semibold">
                        <span className='cursor-pointer' onClick={() => setToggleCart(false)}>
                            <IoIosArrowBack className='text-xl' /></span> <span className='capitalize'> your cart</span> <span className='text-my-red-100'>{`(${getTotalQuantities(stateCart.cart)} ${getTotalQuantities(stateCart.cart) <= 1 ?'item': 'items'})`}</span>
                    </h4>
                    <section className='flex flex-col gap-6 pl-5 md:pl-6 min-h-[65vh] h-auto'>
                        {
                            stateCart.cart.map((pro, i) => (
                                <div className='flex gap-5 md:gap-8' key={pro?._id}>
                                    <figure className='relative w-[30vw] max-w-[30vw] md:w-[20vw] md:max-w-[20vw] lg:w-[13vw] lg:max-w-[13vw] h-[130px] rounded-xl md:rounded-3xl bg-my-light-200 flex items-center justify-center cursor-pointer'>
                                        <Image src={urlFor(pro?.image[0]).url()} className="top-0 left-0 absolute object-contain" alt='product image' layout='fill' />
                                    </figure>
                                    <div className='flex flex-1 justify-between text-my-gray-200 pb-4'>
                                        <div className='flex justify-between font-bold flex-col'>
                                            <h3 className='capitalize text-xl md:text-2xl'>{pro?.smallDetails}</h3>
                                            <div className='flex border border-my-gray self-start font-medium text-xl'>
                                                <button onClick={() => dispatch({type: decQtyInCart, payload: {id:pro?._id}})} type='button' className=' w-8 h-8 flex justify-center items-center'><AiOutlineMinus /></button>
                                                <span className='border-x border-x-my-gray flex justify-center items-center h-8 w-8'>{pro.quantity}</span>
                                                <button onClick={() => dispatch({type: incQtyInCart, payload: {id: pro?._id}})} type='button' className='h-8 w-8 flex justify-center items-center text-my-green-100'><AiOutlinePlus /></button>
                                            </div>
                                        </div>
                                        <div className='flex justify-between flex-col'>
                                            <h5 className='text-xl font-bold'>{pro?.price * pro?.quantity}$</h5>
                                            <button onClick={() => dispatch({type: removeFromCartAction, payload: {id:pro._id}})} className='text-xl font-semibold text-my-red-100 self-center'><MdOutlineCancel /></button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </section>

                    <div className='pl-6 gap-6 flex flex-col items-center'>
                        <div className="flex justify-between items-center self-stretch capitalize text-my-gray-200 font-bold text-xl">
                            <h3>subtotal</h3>
                            <h3>{getTotalPrice(stateCart.cart)}$</h3>
                        </div>
                        <Link href={'/'} className='btn bg-my-red-100 text-my-light-400 self-center w-full md:w-4/5 mb-8 uppercase transition-transform duration-300 hover:scale-110'>
                            pay with stripe
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Cart