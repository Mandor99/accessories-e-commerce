import Link from 'next/link'
import { useEffect } from 'react'
import {BsFillBagCheckFill} from 'react-icons/bs'
import { useCart } from '../context/cartContext'
import { clearCart } from '../context/cartReducer'
import fireWorks from '../lib/canvas'


function success() {
    const {dispatch} = useCart()
    useEffect(() => {
        // dispatch({type: clearCart})
        fireWorks()
    }, [])
    
  return (
    <section className="h-full w-full">
        <div className="container">
            <div className="content flex flex-col justify-center items-center bg-my-light-100 rounded-lg p-8 text-center max-w-[35rem] gap-4 mt-36 ml-auto mr-auto w-full lg:w-[35rem]">
                <BsFillBagCheckFill className='text-4xl fill-my-green-100' />
                <h2 className='text-my-gray-200 font-black capitalize text-4xl'>thank you for your order!</h2>
                <span className=''>check your email for the receipt!</span>
                <Link href={'/'} className='btn-red self-center w-60 lg:w-80'>continue shopping</Link>
            </div>
        </div>
    </section>
  )
}

export default success