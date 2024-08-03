import React from 'react';
import './Mainstyle.css';
import './Order.css';
import data from './Orderdata';
import Button from 'react-bootstrap/Button';

export default function Orderinfo() {
  return (
    <div className='order-table table-responsive'>
        <h1>Recent Orders</h1>
      <table className='table table-dark  table-hover m-2 text-center'>
        <thead>
            <th>Costomer</th>
            <th>Order Number</th>
            <th>Amount</th>
            <th>Status</th>
        </thead>
        <tbody>
          {data.orderData.map((item, index) => (
            <tr key={index}>
              <td className='cust-img '><img src={item.orderImg} alt={item.orderTitle} /><h5>{item.customerName}</h5></td>
              <td>{item.orderNumber}</td>
              <td>{item.orderAmount}</td>
              <td><Button variant="success">{item.orderStatus}</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
