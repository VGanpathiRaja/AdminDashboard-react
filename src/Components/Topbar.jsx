import React from 'react';
import "./Mainstyle.css";
import './Navbar.css';
import { IoIosSearch } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdNotificationAdd } from "react-icons/md";
import User from '../Assets/user-1.jpg'

export default function Topbar() {
  return (
      <div className='overall-top'>
        <div className='topbar'>
            <div className='search  d-flex justify-content-end align-items-center'>
                <input type='text' name='search' id='searchitem' className='search'/>
                <IoIosSearch />
            </div>
            <div className='icon-grp d-flex justify-content-between align-items-center'>
                <div className='icons '><IoMailOutline /></div>
                <div className='icons'><IoSettingsOutline /></div>
                <div className='icons'><MdNotificationAdd /></div>
                <div className='icons'><img src={User} alt='user'/></div>
            </div>
        </div>
      </div>
  )
}
