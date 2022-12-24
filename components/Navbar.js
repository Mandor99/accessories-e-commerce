import { useState } from 'react'
import {AiOutlineShopping} from 'react-icons/ai'
import Cart from './Cart'
import {useCart} from '../context/cartContext'
import Link from 'next/link'

const Navbar = () => {
  const {toggleCart, setToggleCart, stateCart} = useCart()

  return (
    <nav className='flex py-4 px-8 justify-between sticky top-0 shadow-sm text-my-gray z-50 bg-white'>
        <Link href={'/'} className="uppercase cursor-pointer">mobShop</Link>
        <div className='cursor-pointer relative' onClick={() => setToggleCart(true)}>
            <AiOutlineShopping className='text-2xl'/>
            <span className='absolute text-white bg-my-red rounded-[50%] w-6 h-6 text-center -top-3 left-3 text-xs leading-[initial] flex items-center justify-center'>{stateCart.cart.length}</span>
        </div>
        {toggleCart && <Cart />}
    </nav>
  )
}

export default Navbar