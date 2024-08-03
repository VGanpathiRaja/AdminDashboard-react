import React from 'react';
import './Mainstyle.css';
import './Topcontent.css'
import { BiTargetLock } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
export default function Topcontens() {
  return (
    <div className='content-part p-3'>
        <h4>Top Content</h4>
        <div className='content-line text-white p-3 d-flex justify-content-between align-items-center'>
            <div className='iconleft-side d-flex justify-content-start align-items-center'>
            <div className='righticon d-flex justify-content-between align-items-center'><BiTargetLock /></div>
            <h4>Goals</h4>
            </div>
            <div className='iconright d-flex justify-content-between align-items-center'> <FaAngleRight /></div>
        </div>
        <div className='content-line text-white p-3 d-flex justify-content-between align-items-center'>
            <div className='iconleft-side d-flex justify-content-start align-items-center'>
            <div className='righticon bg2 d-flex justify-content-between align-items-center'><GiHamburger /></div>
            <h4>Popukar Dushes</h4>
            </div>
            <div className='iconright d-flex justify-content-between align-items-center'> <FaAngleLeft /></div>
        </div>
        <div className='content-line text-white p-3 d-flex justify-content-between align-items-center'>
            <div className='iconleft-side d-flex justify-content-start align-items-center'>
            <div className='righticon bg3 d-flex justify-content-between align-items-center'><GiCookingPot /></div>
            <h4>Menus</h4>
            </div>
            <div className='iconright d-flex justify-content-between align-items-center'> <FaAngleRight /></div>
        </div>
    </div>
  )
}
