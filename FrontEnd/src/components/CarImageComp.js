import React from 'react';
import Nexon from '../assets/images/NexonCar2.jpg';
import Tiago from '../assets/images/TATATiago.jpg';
import Tigor from '../assets/images/TATATigorCarEV.webp';
import Punch from '../assets/images/TATAPunch1.jpg';
import Celerio from '../assets/images/MarutiCelerioCar.webp';
import Altroz from '../assets/images/TATAAltrozCarFront.webp';
import Dzire from '../assets/images/SuzukiDzireSedanCarSide.webp';
import EECO from '../assets/images/MarutiEecoCarSide.webp';
import Ertiga from '../assets/images/MarutiErtiga.jpg';
import Thar from '../assets/images/MahindraTharImage2.jpg';
import Bolero from '../assets/images/MahindraBoleroNeoCar.jpg';
import XUV700 from '../assets/images/MahindraXUV700Car.webp';
import TUV300 from '../assets/images/MahindraTUV300image.png';
import i20 from '../assets/images/HyundaiI20Car1.jpg';
import Creta from '../assets/images/HyundaiCreta1.jpg';  
import Venue from '../assets/images/HyundaiVenue1.jpg';
import Verna from '../assets/images/Hyundai_VernaImage1.jpg';
import Octivia from '../assets/images/SkodaOctiviaCar.jpg';
import Kodiaq from '../assets/images/SkodaKodiaqCar.webp';
import Slavia from '../assets/images/SkodaSlaviaCar1.jpg';
import Kushaq from '../assets/images/SkodaKushaqCarImageRed.jpg';
import Carens from '../assets/images/KIACarensCar2.png';
import Seltos from '../assets/images/KIASeltos.jpg';
import Carnival from '../assets/images/KIACarnivalImage.jpg';
import EV6 from '../assets/images/KIAEV6carimage.webp';
import { useNavigate } from  'react-router-dom';

const CarImageComp = (props) => {
    let img;
   
    const navigate = useNavigate();

    function go(){
    if(props.name=='Tata Nexon'){
        img=Nexon;
    }
     if(props.name=='Tata Tiago'){
        img=Tiago;
    }
    else if(props.name=='Tata Tigor'){
        img=Tigor;
    }
    else if(props.name=='Tata Punch'){
        img=Punch;
    }
    else if(props.name=='Tata Altroz'){
        img=Altroz;
    }
    else if(props.name=='Suzuki Celerio'){
        img=Celerio;
    }
    else if(props.name=='Suzuki Ertiga'){
        img=Ertiga;
    }
    else if(props.name=='Suzuki Dzire'){
        img=Dzire;
    }
    else if(props.name=='Suzuki EECO'){
        img=EECO;
    }
    else if(props.name=='Mahindra Thar'){
        img=Thar;
    }
    else if(props.name=='Mahindra Bolero'){
        img=Bolero;
    }
    else if(props.name=='Mahindra XUV700'){
        img=XUV700;
    }
    else if(props.name=='Mahindra TUV300'){
        img=TUV300;
    }
    else if(props.name=='Hyundai i20'){
        img=i20;
    }
    else if(props.name=='Hyundai Creta'){
        img=Creta;
    }
    else if(props.name=='Hyundai Venue'){
        img=Venue;
    }
    else if(props.name=='Hyundai Verna'){
        img=Verna;
    }
    else if(props.name=='Skoda Octivia'){
        img=Octivia;
    }
    else if(props.name=='Skoda Kodiaq'){
        img=Kodiaq;
    }
    else if(props.name=='Skoda Slavia'){
        img=Slavia;
    }
    else if(props.name=='Skoda Kushaq'){
        img=Kushaq;
    }
    else if(props.name=='Kia Carens'){
        img=Carens;
    }
    else if(props.name=='Kia Seltos'){
        img=Seltos;
    }
    else if(props.name=='Kia Carnival'){
        img=Carnival;
    }
    else if(props.name=='Kia EV6'){
        img=EV6;
    }
}

    return (
        <div>
             <title>Car Description</title>
             <div className="C1" style={{width: "100%"}}>
                {go}
               {/* <h1>{props.name}</h1>
                <img src={img} alt={props.name + "image"} title={props.name} style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
                <table border="4" align='center'>
                    <thead>
                        <tr style={{border: "3.2px solid green"}}>
                            <th>Specification</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Engine</td>
                            <td>1199 - 1497 CC</td>
                        </tr>
                        <tr>
                            <td>Mileage</td>
                            <td>17.01 - 24.08 Kmpl</td>
                        </tr>
                        <tr>
                            <td>Transmission</td>
                            <td>Manual / Automatic</td>
                        </tr>
                        <tr>
                            <td>Fuel Type</td>
                            <td>Petrol / Diesel</td>
                        </tr>
                        <tr>
                            <td>Max Power</td>
                            <td>113.31bhp@3750rpm</td>
                        </tr>
                        <tr>
                            <td>Seating Capacity</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Drive Type</td>
                            <td>2WD</td>
                        </tr>
                        <tr>
                            <td>Boot Space</td>
                            <td>382 Litres</td>
                        </tr>
                        <tr>
                            <td>Fuel Tank Capacity</td>
                            <td>44 Litres</td>
                        </tr>
                        <tr>
                            <td>Body Type</td>
                            <td>SUV</td>
                        </tr>
                        <tr>
                            <td>Ground Clearance</td>
                            <td>208 mm</td>
                        </tr>
                    </tbody>
                </table>
                <p>The {props.name} is a subcompact crossover {props.type} produced by the Indian automaker {props.brand} since 2017. It is the first crossover {props.type} from the brand and occupies the sub-4 meter crossover SUV segment in India1</p> <p>The {props.name} made its debut as a prototype exhibited at the Auto Expo 2014. The final model was presented in February 2016. The {props.name} is based on the revised Tata X1 platform that debuted in 1998 with the Indica model and was adopted by other Indian brand cars. It uses an independent MacPherson dual-path strut with coil spring front suspensions and rear twist-beam with coil spring and shock absorber. The wheelbase is measured at 2,498 mm (98.3 in). It is characterized by two-tone paint (optional), dual halogen headlamps with projector low beams, and large chrome bands along the side2</p> <p>The engines are developed by Tata Motors and Austrian engineering company AVL: the petrol engine is the 1.2 L Revotron three-cylinder turbo 12-valve that delivers 81 kW (109 hp; 110 PS) and 170 N⋅m (125 lbf⋅ft) of maximum torque combined with a 6-speed manual or 6-speed automated manual transmission (AMT); the diesel engine is a 1.5 L Revotorq four-cylinder common rail 16-valve that delivers 81 kW (109 hp; 110 PS) and 260 N⋅m (192 lbf⋅ft) of maximum torque, also paired with a 6-speed manual or 6-speed Automated manual transmission (AMT). {props.name} is available in eight variants for manual transmission – XE, XM, XMS, XM+S, XZ+, XZ+ LUX, and XZ+LUXS (XZ & XZ (O) are now discontinued). {props.name} has three special editions named Dark, Red Dark & Kaziranga. {props.name} in AMT has the same variants except XE and has a 'A' added to the variant (XZA+, XMA). The vehicle has three driving modes City, Eco & Sports. In 2018, {props.brand} added a sunroof option2
                </p>
                <p>The {props.name} price for the base model starts at Rs. {props.cost} Lakh and the top model price goes upto Rs. {props.maxcost} Lakh (Avg. ex-showroom)</p> */}
            </div>
        </div>
    );
};

export default CarImageComp;