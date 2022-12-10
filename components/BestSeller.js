import Image from 'next/legacy/image'


function BestSeller() {
  return (
    <section className='mt-16'>
        <div className="container">
            <div className=''>
                <h3 className='text-center text-my-gray-200 font-bold text-4xl md:text-5xl capitalize mb-3'>best seller products</h3>
                <p className='text-center text-my-gray capitalize text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <section className='flex justify-center gap-4 mt-8 flex-col items-center md:items-start md:flex-row flex-wrap'>
                {
                    ['speaker1', 'headphone1', 'headphones_a_1', 'earphones_a_1', 'watch_3', 'earphones_b_1', 'headphones_b_1', 'earphones_c_1'].map((product, i) => (
                       <div key={i}>
                         <div className='relative rounded-md bg-my-light-200 flex items-center justify-center cursor-pointer'>
                            <figure className="relative w-[55vw] shadow-md lg:w-[15vw] h-[200px]">
                                <Image src={`/images/${product}.webp`} className="top-0 left-0 absolute object-contain" alt='product image' layout='fill'/>
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
        </div>
    </section>
  )
}

export default BestSeller