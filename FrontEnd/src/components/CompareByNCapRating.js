import React from 'react';
import '../components/style.css';
import Nexon from '../assets/images/TataNexonCar.jpg';
import Tiago from '../assets/images/TATATiagoCar.jpg';
import Tigor from '../assets/images/TATATigorCarEV.webp';
import Punch from '../assets/images/TATAPunchCar.jpg';
import Celerio from '../assets/images/MarutiCelerioCar.webp';
import Altroz from '../assets/images/TATAAltrozCarFront.webp';
import Dzire from '../assets/images/SuzukiDzireSedanCarSide.webp';
import EECO from '../assets/images/MarutiEecoCarBlack.png';
import Ertiga from '../assets/images/MarutiErtiga.jpg';
import Thar from '../assets/images/MahindraTharImage2.jpg';
import Bolero from '../assets/images/MahindraBoleroNeoCar.jpg';
import XUV700 from '../assets/images/MahindraXUV700.webp';
import TUV300 from '../assets/images/MahindraTUV300_image.jpg';
import i20 from '../assets/images/HyundaiI20Car1.jpg';
import Creta from '../assets/images/HyundaiCreta1.jpg';  
import Venue from '../assets/images/HyundaiVenue1.jpg';
import Verna from '../assets/images/Hyundai_VernaImage1.jpg';
import Octivia from '../assets/images/SkodaNewOctavia.jpg';
import Kodiaq from '../assets/images/SkodaKodiaqCar.webp';
import Slavia from '../assets/images/SkodaSlaviaCarimage.webp';
import Kushaq from '../assets/images/SkodaKushaqCarImage.jpg';
import Carens from '../assets/images/KIACarensCar2.png';
import Seltos from '../assets/images/KIaSeltosCar.webp';
import Carnival from '../assets/images/KIACarnivalCarImage.jpg';
import EV6 from '../assets/images/KIAEV6carimage.jpg';

const CompareByNcapRating = (props) => {

    
    function Img() {
        let img;
            if(props.name=='Tata Nexon'){
                img=Nexon;
            }
            else if(props.name=='Suzuki Celerio'){
                img=Celerio;
            }
            else if(props.name=='Mahindra Thar'){
                img=Thar;
            }
            else if(props.name=='Hyundai i20'){
                img=i20;
            }
            else if(props.name=='Skoda Octivia'){
                img=Octivia;
            }
            else if(props.name=='Kia Carens'){
                img=Carens;
            }
        return img;
        }

    function img() {
        let img;
        if(props.secname=='Tata Nexon'){
            img=Nexon;
        }
        else if(props.secname=='Tata Tiago'){
            img=Tiago;
        }
        else if(props.secname=='Tata Tigor'){
            img=Tigor;
        }
        else if(props.secname=='Tata Punch'){
            img=Punch;
        }
        else if(props.secname=='Tata Altroz'){
            img=Altroz;
        }
        else if(props.secname=='Suzuki Celerio'){
            img=Celerio;
        }
        else if(props.secname=='Suzuki Ertiga'){
            img=Ertiga;
        }
        else if(props.secname=='Suzuki Dzire'){
            img=Dzire;
        }
        else if(props.secname=='Suzuki EECO'){
            img=EECO;
        }
        else if(props.secname=='Mahindra Thar'){
            img=Thar;
        }
        else if(props.secname=='Mahindra Bolero'){
            img=Bolero;
        }
        else if(props.secname=='Mahindra XUV700'){
            img=XUV700;
        }
        else if(props.secname=='Mahindra TUV300'){
            img=TUV300;
        }
        else if(props.secname=='Hyundai i20'){
            img=i20;
        }
        else if(props.secname=='Hyundai Creta'){
            img=Creta;
        }
        else if(props.secname=='Hyundai Venue'){
            img=Venue;
        }
        else if(props.secname=='Hyundai Verna'){
            img=Verna;
        }
        else if(props.secname=='Skoda Octivia'){
            img=Octivia;
        }
        else if(props.secname=='Skoda Kodiaq'){
            img=Kodiaq;
        }
        else if(props.secname=='Skoda Slavia'){
            img=Slavia;
        }
        else if(props.secname=='Skoda Kushaq'){
            img=Kushaq;
        }
        else if(props.secname=='Kia Carens'){
            img=Carens;
        }
        else if(props.secname=='Kia Seltos'){
            img=Seltos;
        }
        else if(props.secname=='Kia Carnival'){
            img=Carnival;
        }
        else if(props.secname=='Kia EV6'){
            img=EV6;
        }
    return img;
    }

    return (
        <div>
            <div className="C1" style={{width: "100%"}}>    
                <h1>{props.name}</h1>
                <img src={Img()} alt={props.name + "car image"} title={props.name} style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
                <table border="4" align='center'>
                    <thead>
                        <tr style={{border: "3.2px solid green"}}>
                            <th>Specification</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Car By NCapRating</td>
                            <td>{props.val1}</td>
                        </tr>
                        </tbody>
                </table>

                <h1>{props.secname}</h1>
                <img src={img()} alt={props.secname + "car image"} title={props.secname} style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
                <table border="4" align='center'>
                    <thead>
                        <tr style={{border: "3.2px solid green"}}>
                            <th>Specification</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Car NCapRating</td>
                            <td>{props.val2}</td>
                        </tr>
                        </tbody>
                </table>
            </div>
        </div>
    )
}

export default CompareByNcapRating;