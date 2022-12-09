import {AiOutlineShopping} from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className='flex p-4 justify-between sticky top-0 shadow-sm text-my-gray z-50 bg-white'>
        <h1 className="uppercase">mobShop</h1>
        <div className='cursor-pointer relative'>
            <AiOutlineShopping className='text-2xl'/>
            <span className='absolute text-white bg-my-red rounded-[50%] w-6 h-6 text-center -top-3 left-3 text-xs leading-[initial] flex items-center justify-center'>0</span>
        </div>
    </nav>
  )
}

export default Navbar