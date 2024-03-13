import logo from './logo.svg';
import './App.css';

import './components/style.css';;
import MainComp from './components/MainComp';
import Search from './components/Search';
import SideNavBarComp from './components/SideNavBarComp';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Router } from 'react-router-dom';

import SUZUKIComp from './components/SUZUKIComp';
import MahindraComp from './components/MahindraComp';
import KIAComp from './components/KIAComp';
import HyundaiComp from './components/HyundaiComp';
import SkodaComp from './components/SkodaComp';
import New1carsComp from './components/New1carsComp';
import NewCars1Comp from './components/NewCars1Comp';
import SignUpComp from './components/SignUpComp';
import CarImageComp from './components/CarImageComp';
import ButtonSearch from './components/ButtonSearch';
import NewCarsComp from './components/NewCarsComp';
import Logo from './assets/images/LogoForASVCars3.jpeg';
import LoginSmallPopup from './components/LoginSmallPopup';
import RegisterComp from './components/RegisterComp';
import ForgotPassword from './components/ForgotPassword';
import CarDescriptionComp from './components/CarDescriptionComp';
import TATAcomp from './components/TATAcomp';
import FooterComp from './components/FooterComp';

function App() {
  return (
    <div className="App" style={{background: "lightgreen", height:"60em"}}>
    <p style={{height: "10%", width: "100%", background:"skyblue" ,border: "2px solid blue"}}>
    <img src={Logo} style={{height:"80px", width:"80px", margin : "6px 0 0 8px", cursor :"pointer", borderRadius :"50%"}} title='ASVCars.com'></img>
    <h2 style={{fontSize :"30px",  alignItems : "center"}}><strong>ASV Cars For Searching and Compare the best Cars</strong></h2>
    <ul className='navbar'>
         <li><a href="#home" class="active">Home</a></li>
         <li><a href="#cars">Cars</a></li>
         {/* <li><a href="#about">About</a></li>   */}
         {/* <li><a href="#service">Services</a></li> */}
         <li><a href="#newCars">New Cars</a></li>
         {/* <li><a href="#compareCars">Compare Cars</a></li> */}
         {/* <li><a href="#newCars">newCars</a></li> */}
         </ul>
    </p>
  
    <BrowserRouter>
    <Routes>
      <Route path="/SignUp" element={<SignUpComp/>}>
      </Route>
      <Route path="/CarDescription" element={<CarDescriptionComp/>}></Route>
      <Route path="/CarImage" element={<NewCarsComp/>}></Route>
      <Route path="/Login" element={<LoginSmallPopup/>}></Route> 
        <Route path="/Register" element={<RegisterComp/>}></Route>
        <Route path="/ForgotPassword" element={<ForgotPassword/>}></Route>
      {/* <Route path="/data" element={<HyundaiComp/>}></Route> */}
    </Routes>
    </BrowserRouter>
    <BrowserRouter>
  <div style={{color: "red"}}>
  <New1carsComp/>
  </div>
  
    <Routes>
    <Route path="/NewCars1" element={<NewCars1Comp/>}>
      </Route>
      <Route path="/TATA/CarImage" element={<CarImageComp/>}>
      </Route>
       {/* <Route path="/Hyundai" element={<ButtonSearch/>}>
       </Route> */}
     </Routes>
    <div>
    <SideNavBarComp/>
    <Search/>
    </div>
    <Routes>
      <Route path="/TATA" element={<TATAcomp/>}>
      </Route>
      <Route path="/SUZUKI" element={<SUZUKIComp/>}>
      </Route>
      <Route path="/Mahindra" element={<MahindraComp/>}>
      </Route>
      <Route path="/Hyundai" element={<HyundaiComp/>}>
      </Route>
       <Route path="/Skoda" element={<SkodaComp/>}>
      </Route>
      <Route path="/KIA" element={<KIAComp/>}>
       </Route>
    </Routes>
    </BrowserRouter>
     <FooterComp/>
    </div>
  )
};

export default App;