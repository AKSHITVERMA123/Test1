
import React from 'react';
import style from '../assets/css/style.css';
import Facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.png';
import youtube from '../assets/images/youtube.png';
import { FaInstagram } from 'react-icons/fa';
function FooterComp() {
    return (
   <div className="Footer" style={{background : "rgb(31, 29, 29)", borderRadius : "1px", height : "730px", color: "#809898"}}>
   <br></br>
   <h3 style={{color: 'darkviolet'}}>Why from Us ? </h3>
   <p className='FooterData'>
    You must have chose our website to find and compare the cars for buying the best available cars.
    Bacause many service provider comapare on only some features but we are helping you to choose the best cars
    based on<span style={{float: "left", fontSize :"15px"}}>each and every parameter such as based on Brand,
    based on FuelType, based on Type, based on Cost and many more.. We provide you to choose the best car , by 
    giving some extra features like  Brand , Miledge , Speed etc.</span></p>
        <br></br>   <br></br>  
        <h3 style={{color: 'darkviolet'}}>Frequently Asked Questions (FAQ)</h3>
        <strong className='FAQ'>Q.1 - What types of cars are there in my Application ?  </strong><br></br>
        Ans 1 - There are many types of cars are here such as :
        TATA, SUZUKI, Mahindra, Hyundai, Skoda, Kia etc.
        <br></br><br></br>
        <strong className='FAQ'>Q.2 - What is comparison?</strong><br></br>
        Ans 2 - It is a process by which we take a look at (two or more things) closely in order to see
         what is similar or different about them or in order to decide which one is better.
         <br></br><br></br>
        <strong className='FAQ'>Q.3 - Why do people do a comparison between two things? </strong><br></br>
        Ans 3 - People do a comparison between two things so they can see there pro and cons. Which help and ease 
        their decision making power.
        <br></br><br></br>
        <strong className='FAQ'>Q.4 - When do people do a comparison?</strong><br></br>
        Ans 4 - People do a comparison when they have multiple options for something that servers there needs.
        <br></br><br></br>

        <strong className='FAQ'>Q.5 - What is the 5-Star Safety Ratings program?</strong><br></br>
        Ans 5 - The National Highway Traffic Safety Administration’s New Car Assessment Program (NCAP) created
        the 5-Star Safety Ratings (NcapRating) program to provide consumers with information about the crash 
        protection and rollover safety of new vehicles beyond what is required by federal law. One star is
        the lowest rating; five stars is the highest. More stars equal safer cars.
        <br></br><strong>Address :</strong><span style={{color: "#fff" , display:"inline-flex", marginLeft : "400px"}}>For More Information , Click on these links :</span><br></br><ul class="social-list" style={{marginLeft: "550px"}}>

<li>
  <a href="http://www.facebook.com" class="social-link">
    <img className='SocialMediaLink' src={Facebook} alt="facebook"></img>
  </a>

  <a href="http://www.instagram.com" class="social-link">
    <img className='SocialMediaLink' src={instagram} alt="instagram"></img>
  </a>

  <a href="http://www.twitter.com" class="social-link">
    <img className='SocialMediaLink' src={twitter} alt="twitter"></img>
  </a>
  <a href="http://www.youtube.com" class="social-link">
    <img className='SocialMediaLink' src={youtube} alt="youtube"></img>
  </a>
</li></ul><label>Near Anand Nagar Metro Station ,<br></br> Kothrud , Pune (Maharastra) India
       <br></br> Call : 08097967543  </label><br></br>
       <span>ASVCars.com is optimized for car searching and comparison website. Examples might be simplified to improve search and compare. Comparisons, and understanding of cars are constantly reviewed to avoid errors, and avoid to choose the wrong car at any rate , but we cannot warrant full correctness of all content. While using ASVCars.com, you agree to have read and accepted our <a href='terms&conditions'>terms of use and conditions</a>, <a href='cookie&privacy'>cookie and privacy policy.</a></span>
  <label style={{color: "#fff", marginLeft  : "30px"}}>&#169;Copyright ASVCars.com 2024. All Rights Reserved. </label>
<br></br>  
</div>
    )
}

export default FooterComp;