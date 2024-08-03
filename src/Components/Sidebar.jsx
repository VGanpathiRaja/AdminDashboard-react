// import React from 'react';
// import './Mainstyle.css';
// import { FaHome } from "react-icons/fa";
// import { SiHomebridge } from "react-icons/si";
// import { IoStatsChart } from "react-icons/io5";
// import { LuClipboardList } from "react-icons/lu";
// import { VscFileSubmodule } from "react-icons/vsc";
// import { BsDatabaseFillLock } from "react-icons/bs";
// import { AiOutlineLogout } from "react-icons/ai";


// export default function Sidebar() {
//   return (
//     <div className='sidebar'>
//         <div className='menubar'>
//             <div className='logo'><SiHomebridge /></div>
//             <div className='menu-top'>
//                 <div className='nav-links'><FaHome /><h4>Home</h4></div>
//                 <div className='nav-links'><IoStatsChart /><h4>Charts</h4></div>
//                 <div className='nav-links'><LuClipboardList /><h4>Lists</h4></div>
//                 <div className='nav-links'><VscFileSubmodule /><h4>Files</h4></div>
//                 <div className='nav-links'><BsDatabaseFillLock /><h4>Keys</h4></div>
//             </div>
//             <div className='menubottom'>
//                 <div className='nav-links'><AiOutlineLogout /><h4>logout</h4></div>
//             </div>
//         </div>
//     </div>
//   )
// }
// src/SideNav.js
import React, { useState } from 'react';
import { Offcanvas, Nav } from 'react-bootstrap';
import './Mainstyle.css';
import './Navbar.css';
import { FaHome } from "react-icons/fa";
import { SiHomebridge } from "react-icons/si";
import { IoStatsChart } from "react-icons/io5";
import { LuClipboardList } from "react-icons/lu";
import { VscFileSubmodule } from "react-icons/vsc";
import { BsDatabaseFillLock } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";

const SideNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='responsive-navbar'>
      <button className="btn btn-primary toggle" onClick={handleShow}>
        ☰
      </button>
      <div className='sidebar'>
         <div className='menubar'>
             <div className='logo'><SiHomebridge /></div>
             <div className='menu-top'>
                 <div className='nav-links'><FaHome /><h4>Home</h4></div>
                 <div className='nav-links'><IoStatsChart /><h4>Charts</h4></div>               
                  <div className='nav-links'><LuClipboardList /><h4>Lists</h4></div>                
                  <div className='nav-links'><VscFileSubmodule /><h4>Files</h4></div>
                 <div className='nav-links'><BsDatabaseFillLock /><h4>Keys</h4></div>
             </div>
             <div className='menubottom'>
                 <div className='nav-links'><AiOutlineLogout /><h4>logout</h4></div>
             </div>
         </div>    
        </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#Charts">Charts</Nav.Link>
            <Nav.Link href="#Lists">Lists</Nav.Link>
            <Nav.Link href="#Files">Files</Nav.Link>
            <Nav.Link href="#Keys">Keys</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SideNav;
