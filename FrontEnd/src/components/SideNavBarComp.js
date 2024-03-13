import React from 'react';
import style from './style.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {SideBarData} from './SideBarData';
import Search from './Search';
import { useState } from 'react';
import '../App.css';
// import {IconContext} from 'react-icons';

const SideNavBarComp = () => {
    return (  
      
        
        <div className='parent'><br></br><h3>Car Brands</h3> 
        <div className='Searching'></div>
        
        <Link to="/TATA" className='btn btn-outline-success btn-sm' style={{width : "100px"}}>Tata</Link><br></br>
        <Link to="/SUZUKI" className='btn btn-outline-success btn-sm' style={{width : "100px", marginTop: "8px"}}>SUZUKI</Link><br></br>
        <Link to="/Mahindra" className='btn btn-outline-success btn-sm' style={{width : "100px", marginTop: "8px"}}>Mahindra</Link> <br></br>    
        {/* <Link to="/Honda" className='btn btn-outline-success btn-sm' style={{width : "100px", marginTop: "8px"}}>Honda</Link> <br></br>   */}
        <Link to="/Hyundai" className='btn btn-outline-success btn-sm' style={{width : "100px", marginTop: "8px"}}>Hyundai</Link><br></br>     
        <Link to="/Skoda" className='btn btn-outline-success btn-sm' style={{width : "100px", marginTop: "8px"}}>Skoda</Link><br></br>
        {/* <Link to="/Toyota" className='btn btn-outline-success btn-sm' style={{width : "100px", marginTop: "8px"}}>Toyota</Link> <br></br>     */}
        <Link to="/KIA" className='btn btn-outline-success btn-sm' style={{width : "100px", marginTop: "8px"}}>KIA</Link><br></br>
        {/* <Link to="/Volkswagen" className='btn btn-outline-success btn-sm' style={{width : "100px", marginTop: "8px"}}>Volkswagen</Link>  */}
        </div>
     
    )
}

export default SideNavBarComp;
