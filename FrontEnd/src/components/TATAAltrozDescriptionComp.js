import React from 'react';
import TataAltroz from '..assets/images/TataAltroz';

const TATAAltrozDescriptionComp = () => {

    return (
        <div>
          <h1>Tata Altroz</h1>                           
          <img src={TataAltroz} alt="Tata Altroz" />  
          <h2>Specifications</h2>
          <ul>
          <li>Engine: 1.2L Revotron Petrol / 1.5L Turbocharged Revotorq Diesel</li>
          <li>Transmission: 5-speed Manual / 5-speed AMT</li>
          <li>Dimensions: Length - XXXXmm, Width - XXXXmm, Height - XXXXmm</li>
          </ul>
          <h2>Features</h2>
          <p>Some features of the Tata Altroz include...</p>
          <h2>Overview</h2>
          <p>
            The Tata Altroz is a premium hatchback manufactured by Tata Motors. It was first introduced in XXXX and is known for its futuristic design, spacious interiors, and advanced features.
          </p>   
          <h2>Design</h2> 
          <p>
            The Tata Altroz features a contemporary design with sharp lines and a dynamic silhouette. Its standout elements include the sleek grille, projector headlamps, and LED tail lamps, giving it a premium and sophisticated look.
          </p>          
        </div>
       );
}

export default TATAAltrozDescriptionComp;