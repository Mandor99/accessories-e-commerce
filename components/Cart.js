import Image from 'next/legacy/image'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineCancel } from 'react-icons/md'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useCart } from '../context/cartContext'

function Cart() {

    const pros = ['watch_3', 'headphones_b_1', 'watch_3', 'headphones_b_1', 'watch_3', 'headphones_b_1']
    const { toggleCart, setToggleCart } = useCart()


    return (
        <section className={`fixed top-0 right-0 min-h-[100vh] h-auto bg-my-light-black w-[100vw] backdrop-blur-sm`}>
            <div className={`fixed top-0 right-0 h-full w-[100vw] lg:w-[50vw] max-w-2xl bg-white pl-1 md:pl-8 p-8 overflow-auto scrollbar-hide`}>
                <div className='h-full space-y-8'>
                    <h4 className="capitalize text-black flex items-center gap-2 font-semibold">
                        <span className='cursor-pointer' onClick={() => setToggleCart(false)}>
                            <IoIosArrowBack className='text-xl' /></span> <span className='capitalize'> your cart</span> <span className='text-my-red-100'>(12 items)</span>
                    </h4>
                    <section className='flex flex-col gap-6 pl-5 md:pl-6 min-h-[65vh] h-auto'>
                        {
                            pros.map((pro, i) => (
                                <div className='flex gap-5 md:gap-8' key={i}>
                                    <figure className='relative w-[30vw] max-w-[30vw] md:w-[20vw] md:max-w-[20vw] lg:w-[13vw] lg:max-w-[13vw] h-[130px] rounded-xl md:rounded-3xl bg-my-light-200 flex items-center justify-center cursor-pointer'>
                                        <Image src={`/images/${pro}.webp`} className="top-0 left-0 absolute object-contain" alt='product image' layout='fill' />
                                    </figure>
                                    <div className='flex flex-1 justify-between text-my-gray-200 pb-4'>
                                        <div className='flex justify-between font-bold flex-col'>
                                            <h3 className='capitalize text-xl md:text-2xl'>watch Blaza</h3>
                                            <div className='flex border border-my-gray self-start font-medium text-xl'>
                                                <button type='button' className=' w-8 h-8 flex justify-center items-center'><AiOutlineMinus /></button>
                                                <span className='border-x border-x-my-gray flex justify-center items-center h-8 w-8'>1</span>
                                                <button type='button' className='h-8 w-8 flex justify-center items-center text-my-green-100'><AiOutlinePlus /></button>
                                            </div>
                                        </div>
                                        <div className='flex justify-between flex-col'>
                                            <h5 className='text-xl font-bold'>$76</h5>
                                            <span className='text-xl font-semibold text-my-red-100 self-center'><MdOutlineCancel /></span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </section>
                    <div className='pl-6 gap-6 flex flex-col items-center'>
                        <div className="flex justify-between items-center self-stretch capitalize text-my-gray-200 font-bold text-xl">
                            <h3>subtotal</h3>
                            <h3>$99</h3>
                        </div>
                        <button className='btn-red self-center w-full md:w-4/5 mb-8 uppercase'>pay with stripe</button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Cart