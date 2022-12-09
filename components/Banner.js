import Image from 'next/legacy/image'


const Banner = () => {
  return (
    <header className="mt-6">
        <div className='w-[90%] m-auto rounded-lg h-[60vh] bg-my-light-100 flex items-center justify-between py-6 pr-12 pl-10 relative'>
            <article className="flex flex-col">
                <h4 className="capitalize text-base font-semibold">beats solo</h4>
                <h3 className="capitalize font-bold text-5xl">wireless</h3>
                <h2 className="uppercase text-white font-bold text-[5rem]">headphone</h2>
                <button className="bg-my-red-100 text-white capitalize rounded-lg px-2 py-2 self-start text-center">shop wireless headphone</button>
            </article>
            <figure className="absolute top-[6%] left-[30%] w-[400px] h-[300px]">
                <Image src={'/images/headphones_a_1.webp'} className="object-contain" alt='product image' layout='fill'/>
            </figure>
            <article className="self-end text-end">
                <h5 className="font-bold text-xl capitalize">description</h5>
                <p className="text-my-gray max-w-[20rem]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam doloremque, aliquam placeat</p>
            </article>
        </div>
    </header>
  )
}

export default Banner