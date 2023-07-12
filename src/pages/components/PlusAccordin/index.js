import React, { useState } from "react";

const Accordin = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="flex justify-between font-semibold pb-4">
        <div>icon</div>
        <p>Accordin Header Tesxt</p>
        <button onClick={() => setIsOpen(prev => !prev)}>+</button>
      </div>
      {isOpen ? (
        <div className={`pl-8 transition-all  ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni
          aspernatur at eum illum dolore, officia accusantium doloribus quod
          dolorum minima, error possimus tenetur expedita quidem sint officiis
          rerum dolorem.
        </div>
      )
    : null
    }
    </div>
  );
};

export default Accordin;
