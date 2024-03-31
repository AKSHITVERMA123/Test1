import logo from './logo.svg';
import './App.css';
import './components/style.css';
import Search from './components/Search';
import SideNavBarComp from './components/SideNavBarComp';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import SUZUKIComp from './components/SUZUKIComp';
import MahindraComp from './components/MahindraComp';
import KIAComp from './components/KIAComp';
import HyundaiComp from './components/HyundaiComp';
import SkodaComp from './components/SkodaComp';
import SignUpComp from './components/SignUpComp';
import NewCarsComp from './components/NewCarsComp';
import Logo from './assets/images/LogoForASVCars3.jpeg';
import LoginSmallPopup from './components/LoginSmallPopup';
import RegisterComp from './components/RegisterComp';
import ForgotPassword from './components/ForgotPassword';
import CarDescriptionComp from './components/CarDescriptionComp';
import TATAcomp from './components/TATAcomp';
import FooterComp from './components/FooterComp';
import CompareCarComp from './components/CompareCarComp';
import CompareByType from './components/CompareByType';
import CompareByEECO from './components/CompareByEECO';
import CompareByBolero from './components/CompareByBolero';
import CompareByXUV700 from './components/CompareByXUV700';
import CompareByTUV300 from './components/CompareByTUV300';
import CompareByCreta from './components/CompareByCreta';
import CompareByVenue from './components/CompareByVenue';
import CompareByVerna from './components/CompareByVerna';
import CompareBySlavia from './components/CompareBySlavia';
import CompareByKodiaq from './components/CompareByKodiaq';
import CompareByKushaq from './components/CompareByKushaq';
import CompareBySeltos from './components/CompareBySeltos';
import CompareByCarnival from './components/CompareByCarnival';
import CompareByEV6 from './components/CompareByEV6';
import CompareByNcapRating from './components/CompareByNCapRating';
import CompareByLength from './components/CompareByLength';
import CompareByMileage from './components/CompareByMileage';
import CompareByTorque from './components/CompareByTorque';
import CompareByTopSpeed from './components/CompareByTopSpeed';
import TataPunchDescriptionComp from './components/TATAPunchDescriptionComp';
import MahindraBoleroNeoDescComp from './components/MahindraBoleroNeoDescComp';
import TATAtiagoDescriptionComp from './components/TATAtiagoDescriptionComp';
import HyundaiI20DescriptionComp from './components/HyundaiI20DescriptionComp';
import HyundaiVenueDescriptionComp from './components/HyundaiVenueDescriptionComp';
import HyundaiVernaDescriptionComp from './components/HyundaiVernaDescriptionComp';
import HyundaiCretaDescriptionComp from './components/HyundaiCretaDescriptionComp';
import KIASeltosDescriptionComp from './components/KIASeltosDescriptionComp';
import KIACarensDescriptionComp from './components/KIACarensDescriptionComp';
import KIACarnivalDescriptionComp from './components/KIACarnivalDescriptionComp';
import KIAEV6DescriptionComp from './components/KIAEV6DescriptionComp';
import Mahindratharcomp from './components/Mahindratharcomp';
import TATATigorDescriptionComp from './components/TATATigorDescriptionComp';
import MahindraXUV700DescriptionComp from './components/MahindraXUV700DescriptionComp';
import MahindraTUV300DescriptionComp from './components/MahindraTUV300DescriptionComp';
import SuzukiDzireDescComp from './components/SuzukiDzireDescComp';
import SuzukiEECODescComp from './components/SuzukiEECODescComp';
import SuzukiErtigaDescComp from './components/SuzukiErtigaDescComp';
import SuzukiCelerioDescComp from './components/SuzukiCelerioDescComp';
import SkodaOctiviaDescriptionComp from './components/SkodaOctiviaDescriptionComp';
import SkodaKodiaqDescriptionComp from './components/SkodaKodiaqDescriptionComp';
import SkodaSlaviaDescriptionComp from './components/SkodaSlaviaDescriptionComp';
import SkodaKushaqDescriptionComp from './components/SkodaKushaqDescriptionComp';

function App() {

  return (
    <div className="App" style={{background: "lightgreen", height:'fit-content',fontSize: "205x"}}>
    <p style={{height: "10%", width: "100%", background:"skyblue" ,border: "2px solid blue"}}>
    <img src={Logo} style={{height:"80px", width:"80px", margin : "6px 0 0 8px", cursor :"pointer", borderRadius :"50%"}} title='ASVCars.com'></img>
    <h2 style={{fontSize :"30px",  alignItems : "center"}}><strong>ASV Cars For Searching and Compare the best Cars</strong></h2>
    <ul className='navbar'>
         <li><a href="#home" class="active">Home</a></li>
         <li><a href="#cars">NewCars</a></li>
         <li><a href="#123cars">Compare Cars</a></li>
         </ul>
    </p>

    <BrowserRouter>
    <Routes>
      <Route path="/SignUp" element={<SignUpComp/>}>
      </Route>
      <Route path='/CompareByType' element={<CompareByType name='Tata Tiago' attr='Type'/>}></Route>
      <Route path='/CompareByNCapRatingtiago' element={<CompareByNcapRating name='Tata Nexon' secname='Tata Tiago' val1='19.80' val2='17.85'/>}></Route>
      <Route path='/CompareByNCapRatingtigor' element={<CompareByNcapRating name='Tata Nexon' secname='Tata Tigor' val1='19.80' val2='17.85'/>}></Route>
      <Route path='/CompareByNCapRatingpunch' element={<CompareByNcapRating name='Tata Nexon' secname='Tata Punch' val1='19.80' val2='17.85'/>}></Route>
      <Route path='/CompareByNCapRatingAltroz' element={<CompareByNcapRating name='Tata Nexon' secname='Tata Altroz' val1='19.80' val2='17.85'/>}></Route>
      <Route path='/CompareByNCapRatingertiga' element={<CompareByNcapRating name='Suzuki Celerio' secname='Suzuki Ertiga' val1='19.80' val2='17.85'/>}></Route>
      <Route path='/CompareByNCapRatingdzire' element={<CompareByNcapRating name='Suzuki Celerio' secname='Suzuki Dzire' val1='19.80' val2='17.85'/>}></Route>
      <Route path='/CompareByNCapRatingEECO' element={<CompareByNcapRating name='Suzuki Celerio' secname='Suzuki EECO' val1='19.80' val2='17.85'/>}></Route>
      <Route path='/CompareByNCapRatingbolero' element={<CompareByNcapRating name='Mahindra Thar' secname='Mahindra Bolero' val1='19.80' val2='17.85'/>}></Route>
      <Route path='/CompareByNCapRatingxuv700' element={<CompareByNcapRating name='Mahindra Thar' secname='Mahindra XUV700' val1='19.80' val2='17.85'/>}></Route>
      <Route path='/CompareByNCapRatingtuv300' element={<CompareByNcapRating name='Mahindra Thar' secname='Mahindra TUV300' val1='19.80' val2='17.85'/>}></Route>
      <Route path='/CompareByNCapRatingcreta' element={<CompareByNcapRating name='Hyundai i20' secname='Hyundai Creta' val1='19.80' val2='17.85'/>}></Route>
      <Route path='/CompareByNCapRatingvenue' element={<CompareByNcapRating name='Hyundai i20' secname='Hyundai Venue' val1='19.80' val2='17.85'/>}></Route>
      <Route path='/CompareByNCapRatingverna' element={<CompareByNcapRating name='Hyundai i20' secname='Hyundai Verna' val1='19.80' val2='17.85'/>}></Route>
      <Route path='/CompareByNCapRatingkodiaq' element={<CompareByNcapRating name='Skoda Octivia' secname='Skoda Kodiaq' val1='19.80' val2='17.85'/>}></Route>
      <Route path='/CompareByNCapRatingslavia' element={<CompareByNcapRating name='Skoda Octivia' secname='Skoda Slavia' val1='19.80' val2='17.85'/>}></Route>
      <Route path='/CompareByNCapRatingkushaq' element={<CompareByNcapRating name='Skoda Octivia' secname='Skoda Kushaq' val1='19.80' val2='17.85'/>}></Route>
      <Route path='/CompareByNCapRatingseltos' element={<CompareByNcapRating name='Kia Carens' secname='Kia Seltos' val1='19.80' val2='17.85'/>}></Route>
      <Route path='/CompareByNCapRatingcarnival' element={<CompareByNcapRating name='Kia Carens' secname='Kia Carnival' val1='19.80' val2='17.85'/>}></Route>
      <Route path='/CompareByNCapRatingev6' element={<CompareByNcapRating name='Kia Carens' secname='Kia EV6' val1='19.80' val2='17.85'/>}></Route>
      <Route path='/CompareByLength' element={<CompareByLength/>}></Route>
      <Route path='/CompareByEECO' element={<CompareByMileage name='Suzuki EECO'/>}></Route>
      <Route path='/CompareByMileage' element={<CompareByType name='Tata Tiago' attr='Mileage' val='17.70'/>}></Route>
      <Route path='/CompareByMileageTigor' element={<CompareByType name='Tata Tigor' attr='Mileage' val='16.85'/>}></Route>
      <Route path='/CompareByTypeAltroz' element={<CompareByType name='Tata Altroz' attr='Type' val='20.00'/>}></Route>
      <Route path='/CompareByAltroz' element={<CompareByType name='Tata Altroz' attr='Mileage' val='20.00'/>}></Route>
      <Route path='/CompareByTopSpeedAltroz' element={<CompareByTopSpeed name='Tata Altroz' attr='speed is' val='190'/>}></Route>
      <Route path='/CompareByCostAltroz' element={<CompareByTopSpeed name='Tata Altroz' attr='Cost is' val='190'/>}></Route>
      <Route path='/CompareByTorqueAltroz' element={<CompareByTopSpeed name='Tata Altroz' attr='Torque is' val='190'/>}></Route>
      <Route path='/CompareByBootSpaceAltroz' element={<CompareByTopSpeed name='Tata Altroz' attr='BootSpace is' val='190'/>}></Route>
      <Route path='/CompareByCost' element={<CompareByTopSpeed name='Tata Tiago' attr='Cost is' val='170'/>}></Route>
      <Route path='/CompareByTopSpeed' element={<CompareByTopSpeed name='Tata Tiago' attr='speed is' val='170'/>}></Route>
      <Route path='/CompareByTorque' element={<CompareByTopSpeed name='Tata Tiago' attr='Torque is' val='170'/>}></Route>
      <Route path='/CompareByBootSpace' element={<CompareByTopSpeed name='Tata Tiago' attr='BootSpace is' val='170'/>}></Route>
      <Route path='/CompareByTopSpeedTigor' element={<CompareByTopSpeed name='Tata Tigor' attr='speed is' val='170'/>}></Route>
      <Route path='/CompareByCostTigor' element={<CompareByTopSpeed name='Tata Tigor' attr='Cost is' val='170'/>}></Route>
      <Route path='/CompareByTorqueTigor' element={<CompareByTopSpeed name='Tata Tigor' attr='Torque is' val='170'/>}></Route>
      <Route path='/CompareByBootSpaceTigor' element={<CompareByTopSpeed name='Tata Tigor' attr='BootSpace is' val='170'/>}></Route>
      <Route path='/CompareByTopSpeedPunch' element={<CompareByTopSpeed name='Tata Punch' attr='speed is' val='170'/>}></Route>
      <Route path='/CompareByCostPunch' element={<CompareByTopSpeed name='Tata Punch' attr='Cost is' val='170'/>}></Route>
      <Route path='/CompareByTorquePunch' element={<CompareByTopSpeed name='Tata Punch' attr='Torque is' val='170'/>}></Route>
      <Route path='/CompareByBootSpacePunch' element={<CompareByTopSpeed name='Tata Punch' attr='BootSpace is' val='170'/>}></Route>
      <Route path='/CompareByTopSpeedErtiga' element={<CompareByMileage name='Suzuki Ertiga' attr='speed is' val='240'/>}></Route>
      <Route path='/CompareByCostErtiga' element={<CompareByMileage name='Suzuki Ertiga' attr='Cost is' val='170'/>}></Route>
      <Route path='/CompareByTorqueErtiga' element={<CompareByMileage name='Suzuki Ertiga' attr='Torque is' val='170'/>}></Route>
      <Route path='/CompareByBootSpaceErtiga' element={<CompareByMileage name='Suzuki Ertiga' attr='BootSpace is' val='170'/>}></Route>
      <Route path='/CompareByTopSpeedDzire' element={<CompareByMileage name='Suzuki Dzire' attr='speed is' val='170'/>}></Route>
      <Route path='/CompareByCostDzire' element={<CompareByMileage name='Suzuki Dzire' attr='Cost is' val='170'/>}></Route>
      <Route path='/CompareByTorqueDzire' element={<CompareByMileage name='Suzuki Dzire' attr='Torque is' val='170'/>}></Route>
      <Route path='/CompareByBootSpaceDzire' element={<CompareByMileage name='Suzuki Dzire' attr='BootSpace is' val='170'/>}></Route>
      <Route path='/CompareByTopSpeedEECO' element={<CompareByMileage name='Suzuki EECO' attr='speed is' val='170'/>}></Route>
      <Route path='/CompareByCostEECO' element={<CompareByMileage name='Maruti Suzuki EECO' attr='Cost is' val='170'/>}></Route>
      <Route path='/CompareByTorqueEECO' element={<CompareByMileage name='Suzuki EECO' attr='Torque is' val='170'/>}></Route>
      <Route path='/CompareByBootSpaceEECO' element={<CompareByMileage name='Maruti Suzuki EECO' attr='BootSpace is' val='170'/>}></Route>
      <Route path='/CompareByTopSpeedBolero' element={<CompareByBolero attr='speed is' val='170'/>}></Route>
      <Route path='/CompareByCostBolero' element={<CompareByBolero attr='Cost is' val='170'/>}></Route>
      <Route path='/CompareByTorqueBolero' element={<CompareByBolero attr='Torque is' val='170'/>}></Route>
      <Route path='/CompareByBootSpaceBolero' element={<CompareByBolero attr='BootSpace is' val='170'/>}></Route>
      <Route path='/CompareByTopSpeedXUV700' element={<CompareByXUV700 attr='speed is' val='170'/>}></Route>
      <Route path='/CompareByCostXUV700' element={<CompareByXUV700 attr='Cost is' val='170'/>}></Route>
      <Route path='/CompareByTorqueXUV700' element={<CompareByXUV700 attr='Torque is' val='170'/>}></Route>
      <Route path='/CompareByBootSpaceXUV700' element={<CompareByXUV700 attr='BootSpace is' val='170'/>}></Route>
      <Route path='/CompareByTopSpeedTUV300' element={<CompareByTUV300 attr='speed is' val='170'/>}></Route>
      <Route path='/CompareByCostTUV300' element={<CompareByTUV300  attr='Cost is' val='170'/>}></Route>
      <Route path='/CompareByTorqueTUV300' element={<CompareByTUV300 attr='Torque is' val='170'/>}></Route>
      <Route path='/CompareByBootSpaceTUV300' element={<CompareByTUV300 attr='BootSpace is' val='170'/>}></Route>
      <Route path='/CompareByTopSpeedCreta' element={<CompareByCreta attr='speed is' val='170'/>}></Route>
      <Route path='/CompareByCostCreta' element={<CompareByCreta attr='Cost is' val='170'/>}></Route>
      <Route path='/CompareByTorqueCreta' element={<CompareByTorque name='Hyundai Creta' attr='Torque is' val='170'/>}></Route>
      <Route path='/CompareByBootSpaceCreta' element={<CompareByCreta attr='BootSpace is' val='170'/>}></Route>
      <Route path='/CompareByTopSpeedVenue' element={<CompareByTorque name='Hyundai Venue' attr='Speed is' val='170'/>}></Route>
      <Route path='/CompareByCostVenue' element={<CompareByTorque name='Hyundai Venue' attr='Cost is' val='170'/>}></Route>
      <Route path='/CompareByTorqueVenue' element={<CompareByTorque name='Hyundai Venue' attr='Torque is' val='190'/>}></Route>
      <Route path='/CompareByBootSpaceVenue' element={<CompareByTorque name='Hyundai Venue' attr='BootSpace is' val='190'/>}></Route>
      <Route path='/CompareByTopSpeedVerna' element={<CompareByVerna attr='speed is' val='170'/>}></Route>
      <Route path='/CompareByCostVerna' element={<CompareByVerna attr='Cost is' val='170'/>}></Route>
      <Route path='/CompareByTorqueVerna' element={<CompareByTorque name='Hyundai Verna' attr='Torque is' val='170'/>}></Route>
      <Route path='/CompareByBootSpaceVerna' element={<CompareByVerna attr='BootSpace is' val='170'/>}></Route>
      <Route path='/CompareByTopSpeedKodiaq' element={<CompareByKodiaq name='Skoda Kodiaq' attr='speed is' val='170'/>}></Route>
      <Route path='/CompareByCostKodiaq' element={<CompareByKodiaq name='Skoda Kodiaq' attr='Cost is' val='170'/>}></Route>
      <Route path='/CompareByTorqueKodiaq' element={<CompareByKodiaq name='Skoda Kodiaq' attr='Torque is' val='170'/>}></Route>
      <Route path='/CompareByBootSpaceKodiaq' element={<CompareByKodiaq name='Skoda Kodiaq' attr='BootSpace is' val='170'/>}></Route>
      <Route path='/CompareByTopSpeedSlavia' element={<CompareByKodiaq name='Skoda Slavia' attr='speed is' val='170'/>}></Route>
      <Route path='/CompareByCostSlavia' element={<CompareByKodiaq name='Skoda Slavia' attr='Cost is' val='170'/>}></Route>
      <Route path='/CompareByTorqueSlavia' element={<CompareByKodiaq name='Skoda Slavia' attr='Torque is' val='170'/>}></Route>
      <Route path='/CompareByBootSpaceSlavia' element={<CompareByKodiaq name='Skoda Slavia' attr='BootSpace is' val='170'/>}></Route>
      <Route path='/CompareByTopSpeedKushaq' element={<CompareByKodiaq name='Skoda Kushaq' attr='speed is' val='170'/>}></Route>
      <Route path='/CompareByCostKushaq' element={<CompareByKodiaq name='Skoda Kushaq' attr='Cost is' val='170'/>}></Route>
      <Route path='/CompareByTorqueKushaq' element={<CompareByKodiaq name='Skoda Kushaq' attr='Torque is' val='170'/>}></Route>
      <Route path='/CompareByBootSpaceKushaq' element={<CompareByKodiaq name='Skoda Kushaq' attr='BootSpace is' val='170'/>}></Route>
      <Route path='/CompareByTopSpeedSeltos' element={<CompareBySeltos name='Kia Seltos' attr='speed is' val='170'/>}></Route>
      <Route path='/CompareByCostSeltos' element={<CompareBySeltos name='Kia Seltos' attr='Cost is' val='170'/>}></Route>
      <Route path='/CompareByTorqueSeltos' element={<CompareBySeltos name='Kia Seltos' attr='Torque is' val='170'/>}></Route>
      <Route path='/CompareByBootSpaceSeltos' element={<CompareBySeltos name='Kia Seltos' attr='BootSpace is' val='170'/>}></Route>
      <Route path='/CompareByTopSpeedCarnival' element={<CompareBySeltos name='Kia Carnival' attr='speed is' val='170'/>}></Route>
      <Route path='/CompareByCostCarnival' element={<CompareBySeltos name='Kia Carnival' attr='Cost is' val='170'/>}></Route>
      <Route path='/CompareByTorqueCarnival' element={<CompareBySeltos name='Kia Carnival' attr='Torque is' val='170'/>}></Route>
      <Route path='/CompareByBootSpaceCarnival' element={<CompareBySeltos name='Kia Carnival' attr='BootSpace is' val='170'/>}></Route>
      <Route path='/CompareByTopSpeedEV6' element={<CompareBySeltos name='Kia EV6' attr='speed is' val='170'/>}></Route>
      <Route path='/CompareByCostEV6' element={<CompareBySeltos name='Kia EV6' attr='Cost is' val='170'/>}></Route>
      <Route path='/CompareByTorqueEV6' element={<CompareBySeltos name='Kia EV6' attr='Torque is' val='170'/>}></Route>
      <Route path='/CompareByBootSpaceEV6' element={<CompareBySeltos name='Kia EV6' attr='BootSpace is' val='170'/>}></Route>
      <Route path='/CompareByTigor' element={<CompareByType name='Tata Tigor' attr='Type'/>}></Route>
      <Route path='/CompareByPunch' element={<CompareByType name='Tata Punch' attr='Mileage'/>}></Route>
      <Route path='/CompareByErtiga' element={<CompareByMileage name='Suzuki Ertiga' attr='Mileage'/>}></Route>
      <Route path='/CompareByTypeErtiga' element={<CompareByMileage name='Suzuki Ertiga' attr='Type'/>}></Route>
      <Route path='/CompareByLengthErtiga' element={<CompareByMileage name='Suzuki Ertiga' attr='Length'/>}></Route>
      <Route path='/CompareDzire' element={<CompareByMileage name = 'Suzuki Dzire' attr='Type'/>}></Route>
      <Route path='/CompareDzireM' element={<CompareByMileage name = 'Suzuki Dzire' attr= 'Mileage'/>}></Route>
      <Route path='/CompareEECO' element={<CompareByMileage name = 'Suzuki EECO' attr = 'Mileage'/>}></Route>
      <Route path='/CompareByEECO' element={<CompareByEECO/>}></Route>
      <Route path='/CompareByLengthEECO' element={<CompareByMileage name = 'Suzuki EECO' attr = 'Length'/>}></Route>
      <Route path='/CompareByBolero' element={<CompareByBolero attr='Type'/>}></Route>
      <Route path='/CompareByBoleroMileage' element={<CompareByBolero attr='Mileage'/>}></Route>
      <Route path='/CompareByLengthBolero' element={<CompareByBolero attr='Length'/>}></Route>
      <Route path='/CompareByXUV700' element={<CompareByXUV700 attr='Type'/>}></Route>
      <Route path='/CompareByXUV700M' element={<CompareByXUV700 attr='Mileage'/>}></Route>
      <Route path='/CompareByLengthXUV700' element={<CompareByXUV700 attr='Length'/>}></Route>
      <Route path='/CompareByTUV300' element={<CompareByTUV300 attr='Type'/>}></Route>
      <Route path='/CompareByTUV300M' element={<CompareByTUV300 attr='Mileage'/>}></Route>
      <Route path='/CompareByLengthTUV300' element={<CompareByTUV300 attr='Length'/>}></Route>
      <Route path='/CompareByCreta' element={<CompareByCreta attr='Type'/>}></Route>
      <Route path='/CompareCreta' element={<CompareByCreta attr='Mileage'/>}></Route>
      <Route path='/CompareByLengthCreta' element={<CompareByCreta attr='Length'/>}></Route>
      <Route path='/CompareByVenue' element={<CompareByVenue attr='Type'/>}></Route>
      <Route path='/CompareVenue' element={<CompareByVenue attr='Mileage'/>}></Route>
      <Route path='/CompareByLengthVenue' element={<CompareByVenue attr='Length'/>}></Route>
      <Route path='/CompareByVerna' element={<CompareByVerna attr='Type'/>}></Route>
      <Route path='/CompareVerna' element={<CompareByVerna attr='Mileage'/>}></Route>
      <Route path='/CompareByLengthVerna' element={<CompareByVerna attr='Length'/>}></Route>
      <Route path='/CompareByKodiaq' element={<CompareByKodiaq attr='Type'/>}></Route>
      <Route path='/CompareKodiaq' element={<CompareByKodiaq attr='Mileage'/>}></Route>
      <Route path='/CompareByLengthKodiaq' element={<CompareByKodiaq attr='Length'/>}></Route>
      <Route path='/CompareBySlavia' element={<CompareBySlavia attr='Type'/>}></Route>
      <Route path='/CompareSlavia' element={<CompareBySlavia attr='Mileage'/>}></Route>
      <Route path='/CompareByLengthSlavia' element={<CompareBySlavia attr='Length'/>}></Route>
      <Route path='/CompareByKushaq' element={<CompareByKushaq attr='Type'/>}></Route>
      <Route path='/CompareKushaq' element={<CompareByKushaq attr='Mileage'/>}></Route>
      <Route path='/CompareByLengthKushaq' element={<CompareByKushaq attr='Length'/>}></Route>
      <Route path='/CompareBySeltos' element={<CompareBySeltos attr='Type'/>}></Route>
      <Route path='/CompareSeltos' element={<CompareBySeltos attr='Mileage'/>}></Route>
      <Route path='/CompareByLengthSeltos' element={<CompareBySeltos attr='Length'/>}></Route>
      <Route path='/CompareByCarnival' element={<CompareByCarnival attr='Type'/>}></Route>
      <Route path='/CompareCarnival' element={<CompareByCarnival attr='Mileage'/>}></Route>
      <Route path='/CompareByLengthCarnival' element={<CompareByCarnival attr='Length'/>}></Route>
      <Route path='/CompareByLengthPunch' element={<CompareByType name='Tata Punch' attr='Length' val=''/>}></Route>
      <Route path='/CompareByLengthAltroz' element={<CompareByType name='Tata Altroz' attr='Length' val=''/>}></Route>
      <Route path='/CompareByLengthTigor' element={<CompareByType name='Tata Tigor' attr='Length' val=''/>}></Route>
      <Route path='/CompareByLengthDzire' element={<CompareByMileage name='Suzuki Dzire' attr='Length'/>}></Route>
      <Route path='/CompareByLengthEV6' element={<CompareByEV6 name='Kia Carens' attr='Length'/>}></Route>
      <Route path='/CompareByEV6' element={<CompareByEV6 name='Kia Carens' attr='Type'/>}></Route>
      <Route path='/CompareEV6' element={<CompareByEV6 name='Kia Carens' attr='Mileage'/>}></Route>
      <Route path="/CarDescription" element={<CarDescriptionComp/>}></Route>
      <Route path="/CarImage" element={<NewCarsComp/>}></Route>
      <Route path="/Login" element={<LoginSmallPopup/>}></Route> 
        <Route path="/Register" element={<RegisterComp/>}></Route>
        <Route path="/cars" element={<LoginSmallPopup/>}></Route>
        <Route path='/Compare' element={<CompareCarComp/>}></Route>
        <Route path="/ForgotPassword" element={<ForgotPassword/>}></Route>
    </Routes>
    </BrowserRouter>
    <BrowserRouter>
    <Routes>
      <Route path="/CarDesc1" element={<TataPunchDescriptionComp/>}></Route>
      <Route path="/CarDescriptionPunch" element={<TataPunchDescriptionComp/>}></Route>
      <Route path="/CarDescriptionTiago" element={<TATAtiagoDescriptionComp/>}></Route>
      <Route path="/CarDescriptionTigor" element={<TATATigorDescriptionComp/>}></Route>
      <Route path="/CarDescriptionertiga" element={<SuzukiErtigaDescComp/>}></Route>
      <Route path="/CarDescriptiondzire" element={<SuzukiDzireDescComp/>}></Route>
      <Route path="/CarDescriptioncelerio" element={<SuzukiCelerioDescComp/>}></Route>
      <Route path="/CarDescriptioneeco" element={<SuzukiEECODescComp/>}></Route>
      <Route path="/CarDescriptionthar" element={<Mahindratharcomp/>}></Route>
      <Route path="/CarDescriptionbolero" element={<MahindraBoleroNeoDescComp/>}></Route>
      <Route path="/CarDescriptionxuv" element={<MahindraXUV700DescriptionComp/>}></Route>
      <Route path="/CarDescriptiontuv" element={<MahindraTUV300DescriptionComp/>}></Route>
      <Route path="/CarDescriptioncreta" element={<HyundaiCretaDescriptionComp/>}></Route>
      <Route path="/CarDescriptioni20" element={<HyundaiI20DescriptionComp/>}></Route>
      <Route path="/CarDescriptionvenue" element={<HyundaiVenueDescriptionComp/>}></Route>
      <Route path="/CarDescriptionverna" element={<HyundaiVernaDescriptionComp/>}></Route>
      <Route path="/CarDescriptionoctivia" element={<SkodaOctiviaDescriptionComp/>}></Route>
      <Route path="/CarDescriptionSlavia" element={<SkodaSlaviaDescriptionComp/>}></Route>
      <Route path="/CarDescriptionKodiaq" element={<SkodaKodiaqDescriptionComp/>}></Route>
      <Route path="/CarDescriptionkushaq" element={<SkodaKushaqDescriptionComp/>}></Route>
      <Route path="/CarDescriptioncarens" element={<KIACarensDescriptionComp/>}></Route>
      <Route path="/CarDescriptionseltos" element={<KIASeltosDescriptionComp/>}></Route>
      <Route path="/CarDescriptioncarnival" element={<KIACarnivalDescriptionComp/>}></Route>
      <Route path="/CarDescriptionev6" element={<KIAEV6DescriptionComp/>}></Route>  
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