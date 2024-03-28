import React from 'react';
import '../components/style.css';
import Thar from '../assets/images/MahindraTharImage2.jpg';
import TUV300 from '../assets/images/MahindraTUV300Car.jpg';
import THAR from '../assets/images/MahindraThar.jpg';
import MTUV300 from '../assets/images/MahindraTUV300_image.jpg';
import TUV300img from '../assets/images/MahindraTUV300image.png';
import TUV from '../assets/images/MahindraTUV300.jpg';

const CompareByTUV300 = (props) => {

    function img(){
        let img;
        if(props.attr=='speed is' ||  props.attr=='Torque is'){
        img=Thar;
        }
        else 
        img=THAR;
    return img;
    }


    function Img() {
        let img;
        if(props.attr=='speed is'){
            img=TUV300;
        }   
        else if(props.attr=='Cost is'){
            img=TUV300img;
        }  
        else if(props.attr=='BootSpace is'){
        img=TUV;
        }
        else
        img=MTUV300;
    return img;
    }


    return (
        <div>
            <div className="C1" style={{width: "100%"}}>    
                <h1 id="Heading">Mahindra Thar</h1>
                <img src={img()} id='ImageHeading' alt="Mahindra Thar car image" title='Mahindra Thar' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
                <table border="4" align='center'>
                    <thead>
                        <tr style={{border: "3.2px solid green"}}>
                            <th>Specification</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Car {props.attr}</td>
                            <td>{props.val}</td>
                        </tr>
                        </tbody>
                </table>

                <h1>Mahindra TUV300</h1>
                <img src={Img()} alt='Mahindra TUV300' title='Mahindra TUV300' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
                <table border="4" align='center'>
                    <thead>
                        <tr style={{border: "3.2px solid green"}}>
                            <th>Specification</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Car {props.attr}</td>
                            <td>{props.val}</td>
                        </tr>
                        </tbody>
                </table>
                <p>
                The Tata Nexon is a subcompact crossover SUV produced by the Indian automaker Tata Motors since 2017. It is the first crossover SUV from the brand and occupies the sub-4 meter crossover SUV segment in India1</p> <p>The Nexon made its debut as a prototype exhibited at the Auto Expo 2014. The final model was presented in February 2016. The Nexon is based on the revised Tata X1 platform that debuted in 1998 with the Indica model and was adopted by other Indian brand cars. It uses an independent MacPherson dual-path strut with coil spring front suspensions and rear twist-beam with coil spring and shock absorber. The wheelbase is measured at 2,498 mm (98.3 in). It is characterized by two-tone paint (optional), dual halogen headlamps with projector low beams, and large chrome bands along the side2</p> <p>The engines are developed by Tata Motors and Austrian engineering company AVL: the petrol engine is the 1.2 L Revotron three-cylinder turbo 12-valve that delivers 81 kW (109 hp; 110 PS) and 170 N⋅m (125 lbf⋅ft) of maximum torque combined with a 6-speed manual or 6-speed automated manual transmission (AMT); the diesel engine is a 1.5 L Revotorq four-cylinder common rail 16-valve that delivers 81 kW (109 hp; 110 PS) and 260 N⋅m (192 lbf⋅ft) of maximum torque, also paired with a 6-speed manual or 6-speed Automated manual transmission (AMT). Tata Nexon is available in eight variants for manual transmission – XE, XM, XMS, XM+S, XZ+, XZ+ LUX, and XZ+LUXS (XZ & XZ (O) are now discontinued). The Nexon has three special editions named Dark, Red Dark & Kaziranga. The Nexon in AMT has the same variants except XE and has a 'A' added to the variant (XZA+, XMA). The vehicle has three driving modes City, Eco & Sports. In 2018, Tata added a sunroof option2
                </p>
                <p>The Tata Nexon price for the base model starts at Rs. 8.15 Lakh and the top model price goes upto Rs. 15.60 Lakh (Avg. ex-showroom)3</p>
                {/* <button type="button" name="Nexon">Nexon</button> */}
            </div>
        </div>
    )
}

export default CompareByTUV300;