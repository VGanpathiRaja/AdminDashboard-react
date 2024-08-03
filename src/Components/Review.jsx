import React from 'react';
import './Mainstyle.css';
import './Review.css';
import data from './Reviewdata';

export default function Review() {
  return (
    <div className='reviewpart'>
        <h1>Customer FeedBack's</h1>
        <div className='review-item'>
            {data.reviwData.map((item,index)=>(
                <div key={index}>
                    <div className='review-img text-start text-white p-2'>
                        <img src={item.customerImg} alt='user img'/>
                        <h5>{item.customerName}</h5>
                    </div>
                    <div className='rating'>{item.customerRating}</div>
                    <p className='text-white p-1'>{item.cutomerComments}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
