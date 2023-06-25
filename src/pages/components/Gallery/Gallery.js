import React from 'react'

const Gallery = () => {
    const style1 = 'h-[640] w-[536]';
    const style2 = 'h-[495] w-[536]';
  return (
    <div className='relative h-max grid grid-cols-3 mt-4 mb-36 px-1 gap-2 max-w-full sm:mx-auto  lg:max-w-5xl'>
        <img className={'h-[640] w-[536] row-start-1 row-end-3'} src="/product1.jpeg" alt="feature1" />
        <img className={'h-[495] w-[536] row-start-1 row-end-2 '} src="/product2.jpeg" alt="feature2" />
        <img className={'h-[640] w-[536] row-start-1 row-end-3 '} src="/product3.jpeg" alt="feature3" />
        <img className={'h-[495] w-[536] row-start-3 row-end-4'} src="/product4.jpeg" alt="feature4" />
        <img className={'h-[640] w-[536] row-start-2 row-end-4'} src="/product5.jpeg" alt="feature5" />
        <img className={'h-[495] w-[536] row-start-3 row-end-4'} src="/product6.jpeg" alt="feature6" />
    </div>
  )
}

export default Gallery