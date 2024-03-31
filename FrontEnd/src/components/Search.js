import React, { useState } from "react";
import style from '../assets/css/style.css';
import HyundaiComp from "./HyundaiComp";
import SUZUKIComp from "./SUZUKIComp";
import MahindraComp from "./MahindraComp";
import KIAComp from "./KIAComp";
import SkodaComp from "./SkodaComp";
import TATAcomp from "./TATAcomp";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    switch (searchQuery.toLowerCase()) {
      case "tata":
        setSearchResult(<TATAcomp />);
        break;
      case "suzuki":
        setSearchResult(<SUZUKIComp />);
        break;
      case "mahindra":
        setSearchResult(<MahindraComp />);
        break;
      case "hyundai":
        setSearchResult(<HyundaiComp />);
        break;
      case "skoda":
        setSearchResult(<SkodaComp />);
        break;
      case "kia":
        setSearchResult(<KIAComp />);
        break;
      default:
        setSearchResult(null);
    }
    setSearchQuery("");
  };

  function ListofCars(){
    document.write("You need to sign in before you compare the cars");
    document.write("<form action='/Register' method='get' target='_blank'><br><button type='submit' style='background: rgb(100,140,200)'>Sign up </button></form> or <form action='/Login' method='get' target='_blank'><br><button type='submit' style='background: rgb(100,180,120)'>Log in</button></form>");
  }
  function newCars() {
     document.write("<h3>Maruti Suzuki Wagon R</h3>");
     document.write("<img src='https://images.carandbike.com/cms/articles/3200676/Wagon_R_old_2022_07_22_T14_27_38_679_Z_51bdb0a0b0.jpg' title='Maruti Suzuki Wagon R' alt=Maruti Suzuki Wagon R' style=height:150px; width:150px;></img>");
     document.write("<h3>Tata Harrier EV</h3>");
     document.write("<img src='https://spn-sta.spinny.com/blog/20230111202458/Harrier-EV-jpg.webp?compress=true&quality=80&w=940&dpr=2.6.webp' title=' Tata Harrier EV' alt=' Tata Harrier EV' style=height:150px; width:150px;></img>");
     document.write("<h3>Mahindra Scorpio</h3>");
     document.write("<img src='https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Fmahindra%2Fscorpio-classic%2Fmahindra-scorpio-classic.jpg%3Fv%3D7&w=3840&q=75.jpeg' title='Mahindra Scorpio' alt='Mahindra Scorpio' style=height:150px; width:150px;></img>");
     document.write("<h3>Mahindra Marazzo</h3>");
     document.write("<img src='https://imgd-ct.aeplcdn.com/1280x720/n/cw/ec/26944/marazzo-2018-2020-exterior-right-front-three-quarter-2.jpeg?q=80.webp' title='Mahindra Marazzo' alt='Mahindra Marazzo' style=height:150px; width:150px;></img>");
     document.write("<h3>Kia EV5</h3>");
     document.write("<img src='https://images.drive.com.au/driveau/image/upload/t_wp-default/v1/cms/uploads/vuybw58avrla10uxe5yd.jpg' title='Kia EV5' alt='Kia EV5' style=height:150px; width:150px;></img>");
     document.write("<h3>Hyundai Kona Electric</h3>");
     document.write("<img src='https://media.zigcdn.com/media/model/2022/Jul/hyundai-kona-ev_600x400.jpg' title='Hyundai Kona Electric' alt='Hyundai Kona Electric' style=height:150px; width:150px;></img>");
    }
  return (
    <div style={{display : "inline"}}>
      <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="search your car name here" style={{width : "40%", height:"45px",marginLeft : "240px"}}
      />&nbsp;  
        <button id='Search' type='submit' onClick={handleSearch} className="o-bXKmQE o-cWRslo o-eZTujG o-bkmzIL o-dqrENu o-duzCJV o-bWgajq"><svg className="o-dlrcWp o-eoatGj o-cqgkZn o-euTeMg o-bfWOPh o-bJvRsk o-fznJFh o-cpnuEd o-cpNAVm" viewBox="-2 -2 18 20" fill="currentcolor" tabindex="-1" focusable="false" aria-hidden="true" role="img"><path d="M6.55 13.05a6.5 6.5 0 116.5-6.5 6.42 6.42 0 01-6.5 6.5zm0-12a5.5 5.5 0 000 11 5.43 5.43 0 005.5-5.5 5.51 5.51 0 00-5.5-5.5zm9.13 14.64a.54.54 0 000-.78l-4.14-4.14s-.19.22-.41.43-.37.35-.37.35l4.14 4.14a.56.56 0 00.78 0z"></path></svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
        </div><br></br>
        <div style={{display : "inline", marginLeft : "8em"}}>
        {/* <button type='submit' class='btn btn-primary' >Sign up </button> or <button type='submit' class='btn btn-success'>Log in</button> */}
        <button id="cars" className='newCars' title="New Cars" onClick={newCars} style={{float : "left",width: "180px", height: "60px",marginLeft:"240px"}}>New Cars</button>
        <br></br><br></br><br></br><button id="123cars" className='newCars' title="Compare Cars" onClick={ListofCars} style={{width: "180px", height: "60px" ,marginLeft:"220px"}}>Compare Cars</button>
                   
        </div>
      <div>
        {searchResult && searchResult}
      </div>
      
    </div>  
  )
};

export default React.memo(Search);
