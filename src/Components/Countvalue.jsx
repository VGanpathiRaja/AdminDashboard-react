import React from 'react'

export default function Countvalue({Icon, Counttitle,Countvalue,Countrengeicon,Countrange}) {
  return (
    <div>
        <div className='count-box '>
            <div className='count-icon d-flex justify-content-center align-items-center'>{Icon}</div>
            <h4>{Counttitle}</h4>
            <div className='count-value  d-flex justify-content-between align-items-center'>
                <h1>{Countvalue}</h1>
                <h5>{Countrengeicon}{Countrange}</h5>
            </div>
        </div>
    </div>
  )
}
