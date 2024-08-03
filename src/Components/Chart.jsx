import React from 'react'
import './Mainstyle.css';
import './Chart.css';
import Button from 'react-bootstrap/Button';
import Chartimg from '../Assets/chart.png';
import { FaCaretDown } from "react-icons/fa";


export default function Chart() {
//     var ctx = document.getElementById("barChart").getContext('2d');
// var barChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sst", "Sun"],
//     datasets: [{
//       label: 'data-1',
//       data: [12, 19, 3, 17, 28, 24, 7],
//       backgroundColor: "rgba(255,0,0,1)"
//     }, {
//       label: 'data-2',
//       data: [30, 29, 5, 5, 20, 3, 10],
//       backgroundColor: "rgba(0,0,255,1)"
//     }]
//   }
// });
  return (
    <div>
       {/* <main class="containers">
  <h2>Chart.js — Bar Chart</h2>
  <div>
    <canvas id={barChart}></canvas>
  </div>
</main> */}
     <div className='Chart-part'>
        <div className='chart-heading-part p-3 text-white d-flex justify-content-between align-items-center'>
            <h1>Activity</h1>
            <Button variant="outline-light">Weekly<FaCaretDown /></Button>
        </div>
        <div className='chart-box'>
            <img src={Chartimg} alt='chart value'/>
        </div>
     </div> 
    </div>
  )
}
