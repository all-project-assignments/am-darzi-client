import React from 'react'
import { AiFillMinusCircle, AiFillMinusSquare, AiFillPlusCircle } from 'react-icons/ai'
import {CiDeliveryTruck} from 'react-icons/ci'

const Accordion = ({title,content,isActive,setActive,index,accordionIcon},props) => {
  return (
    <div className="accordion"  onClick={() => setActive(index)}>
    <div className={`accordion-item  ${isActive?'active':''}`}>
      <div
        className="accordion-title"
       
      >
        <div><span className="accordion-img">{accordionIcon}</span> {title} </div>
        <div>{isActive ? <AiFillMinusCircle/> :<AiFillPlusCircle/> }</div>
      </div>
      <div className="accordion-content">{content}</div>
    </div>
  </div>

  )
}

export default Accordion