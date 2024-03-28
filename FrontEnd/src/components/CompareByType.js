import React from 'react';
import '../components/style.css';
import Nexon from '../assets/images/TATANexon.jpg';
import Tiago from '../assets/images/TATATiagoCar.jpg';
import Tigor from '../assets/images/TataTigorCarBack.jpg';
import Punch from '../assets/images/TATAPunch1.jpg';
import Altroz from '../assets/images/TATAAltrozCarGold.webp';
const CompareByType = (props) => {

    function CarName(){
        var val=props.name;
        //  val=val.toString();
            console.log(val);
        //document.getElementById("Heading")=val
            //;
            return val;
    }
        function Carimg(val){
            let img;
            if(val=='Tata Tiago'){
                img=Tiago;
            }
            else if(val=='Tata Tigor'){
                img=Tigor;
            }
            else if(val=='Tata Punch'){
                img=Punch;
            }
            else if(val=='Tata Altroz'){
                img=Altroz;
            }

            return img;
    }

    return (
        <div>
            <div className="C1" style={{width: "100%"}}>    
                <h1 id="Heading">Tata Nexon</h1>
                <img src={Nexon} id='ImageHeading' alt="Nexon car image" title="Nexon car image" style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
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
                            <td>18.85</td>
                        </tr>
                        </tbody>
                </table>

                <h1>{CarName()}</h1>
                <img src={Carimg(CarName())} alt={CarName()} title={CarName()} style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
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
            </div>
        </div>
    )
}

export default CompareByType;
