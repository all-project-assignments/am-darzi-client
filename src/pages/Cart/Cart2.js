import React, { useEffect, useRef, useState } from 'react';
import CartItemCard from '../components/cartitemcard';
import Accordin from '../components/PlusAccordin';
import CustomizeButton from '../components/Buttons/CustomizeButton';
import { useIntersection } from '@mantine/hooks';

const ProductCart = () => {
  const [showFloating, setShowFoating] = useState(false)

  const sizingRef = useRef(null);
  const {entry, ref} = useIntersection({
    root: sizingRef.current,
    threshold: 1,
    rootMargin: '-70px'
  })

  useEffect(() => {
    if(entry && !entry.isIntersecting){
      if(!showFloating){
        setShowFoating(prev  => true)
      }
    } else {
      console.log("got int the else")
      setShowFoating(false)
    }
  },[entry])


  return (
    <div className="mx-auto w-5/6 py-8 flex relative">
      <div className="w-4/6">
        <div>CUSTOM-MADE FOR YOU  you are building sustainable.</div>
        {/* <div> */}
        {/*// TODO: map all the cards here from redux store*/}
        {/* //FIXME: handle empty shopping card add a button to send user to products */}
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        <CartItemCard />
        {/* </div> */}
      </div>
      <div className="w-2/6 ml-4 mt-8 flex flex-col gap-4">
        <button className=" cursor-default px-2 py-1 bg-slate-600 rounded-sm text-gray-100 tracking-tight text-lg max-w-fit">
          NEXT STEPS
        </button>
        {/* // TODO: add intersection observer (mantine hooks intersection observer for showing proceed to sizing button on scroll at the bottom) */}
        <div ref={ref}><CustomizeButton path={'/ai/sizing'} text={'Procees to Sizing'} /></div>
        <p>Let ai build your unique size (Time: 2 min)</p>
        {/* // ! Accordin (like muted)  */}
        <div>
          <Accordin />
          <Accordin />
        </div>
      </div>
      <div className={`fixed  right-0 top-[37em] w-[100%] px-16 py-4 bg-zinc-800 transition-[opacity] ease-in delay-75 duration-1000  ${showFloating ? 'block opacity-100' : 'hidden opacity-0'} `}>
      <CustomizeButton path={'/ai/sizing'} text={'Procees to Sizing'} />
      </div>
    </div>
  );
};

export default ProductCart;
