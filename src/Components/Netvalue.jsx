import React from 'react'
import './Mainstyle.css';
import './Netvalue.css';
export default function Netvalue({netTitle,netValue,netImg,Countrengeicon,Countrange}) {
  return (
    <div>
        <div className='count-box'>
            <div className='netvalue d-flex justify-content-between align-items-center'>
                <div>
                <h4>{netTitle}</h4>
                <h1>{netValue}</h1>
                <h5>{Countrengeicon}{Countrange}</h5>
                </div>
                <div>
                    <img src={netImg} alt='netimg'/>
                </div>
            </div>
        </div>
    </div>
  )
}
