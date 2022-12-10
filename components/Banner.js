import Image from 'next/legacy/image'


const Banner = () => {
  return (
    <header className="mt-10">
        <div className='relative w-[90%] m-auto rounded-lg h-[60vh] bg-my-light-100 flex justify-between px-4 flex-col items-start lg:flex-row lg:items-center  py-6 md:px-12 '>
            <article className="flex flex-col">
                <h4 className="capitalize text-base font-semibold">beats solo</h4>
                <h3 className="capitalize font-bold text-4xl md:text-5xl">wireless</h3>
                <h2 className="uppercase text-white font-bold text-[3.5rem] md:text-[4rem] lg:text-[5rem]">headphone</h2>
                <button className="btn-red">shop wireless headphone</button>
            </article>
            <figure className="absolute w-[290px] h-[290px] left-[43%] top-[-6%] lg:top-[6%] lg:left-[30%] lg:w-[400px] lg:h-[300px]">
                <Image src={'/images/headphones_a_1.webp'} className="object-contain" alt='product image' layout='fill'/>
            </figure>
            <article className="self-start text-start lg:self-end lg:text-end">
                <h5 className="font-bold text-xl capitalize">description</h5>
                <p className="text-my-gray max-w-[20rem]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam doloremque, aliquam placeat</p>
            </article>
        </div>
    </header>
  )
}

export default Banner