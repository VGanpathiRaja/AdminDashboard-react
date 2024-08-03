import React from 'react'
import './Mainstyle.css';
import './Count.css';
// import styled from 'styled-components';
import Countvalue from './Countvalue';
import Netvalue from './Netvalue';
import Chart from './Chart';
import Topcontens from './Topcontens';
import Orderinfo from './Orderinfo';
import Review from './Review';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaBasketShopping } from "react-icons/fa6";
import { AiFillCaretDown } from "react-icons/ai";
import { FaCaretUp } from "react-icons/fa";
import { TbShoppingBagCheck } from "react-icons/tb";
import { TbShoppingBagX } from "react-icons/tb";
import { MdShoppingCartCheckout } from "react-icons/md";
import Img1 from '../Assets/pie-chart.png'


export default function Daskboard() {
  return (
    <div className='dashboard-content'>
        <Container>
        <Row >
            <Col md={12}>
                <div className='heading'>
                    <h1>Dash Board</h1>
                </div>
            </Col>
        </Row>
        <Row className='count'>
            <Col xs={12} md={2} >
                <Countvalue  
                    Icon={<FaBasketShopping />} 
                    Counttitle={"Total Orders"} 
                    Countvalue={"9"} 
                    Countrengeicon={<FaCaretUp /> } 
                    Countrange={"5%"}>
                </Countvalue>
            </Col>
            <Col xs={12} md={2} >
                <Countvalue  
                    Icon={<TbShoppingBagCheck />} 
                    Counttitle={"Total Deliverd"} 
                    Countvalue={"70"} 
                    Countrengeicon={<AiFillCaretDown/> } 
                    Countrange={"3%"}>
                </Countvalue>
            </Col>
            <Col xs={12} md={2} >
                <Countvalue  
                    Icon={<TbShoppingBagX />} 
                    Counttitle={"Total Cancelled"} 
                    Countvalue={"05"} 
                    Countrengeicon={<FaCaretUp /> } 
                    Countrange={"3%"}>
                </Countvalue>
            </Col>
            <Col xs={12} md={2} >
                <Countvalue  
                    Icon={<MdShoppingCartCheckout />} 
                    Counttitle={"Total Revenue"} 
                    Countvalue={"$12k"} 
                    Countrengeicon={<AiFillCaretDown/> } 
                    Countrange={"3%"}>
                </Countvalue>
            </Col>
            <Col xs={12} md={4} >
                <Netvalue
                    netTitle={"Net Profit"} 
                    netValue={"$5632.52k"} 
                    Countrengeicon={<AiFillCaretDown/> } 
                    Countrange={"3%"}
                    netImg={Img1}>
                </Netvalue>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={8}>
                <Chart/>
            </Col>
            <Col xs={12} md={4}>
                <Topcontens/>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={8}>
                <Orderinfo/>
            </Col>
            <Col xs={12} md={4}>
                <Review/>
            </Col>
        </Row>
    </Container>
    </div>
  )
}
