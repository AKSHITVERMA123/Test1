import React from 'react';
import '../components/style.css';
import carens from '../assets/images/KIACarensCarBlue.jpg';
import seltos from '../assets/images/KIaSeltosCar.webp';
import Carnival from '../assets/images/KIACarnival.jpg';
import EV6 from '../assets/images/KIAEV6carimage.jpg';

const CompareBySeltos = (props) => {

    function img(name) {
        let img;
        if(props.name=='Kia Seltos'){
            img=seltos;
        }
        else if(props.name=='Kia Carnival'){
            img=Carnival;
        }
        else if(props.name=='Kia EV6'){
            img=EV6;
        }
        return img;
    }
    return (
        <div>
            <div className="C1" style={{width: "100%"}}>    
                <h1 id="Heading">Kia Carens</h1>
                <img src={carens} id='ImageHeading' alt="Kia Carens car image" title='Kia Carens' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
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

                <h1>{props.name}</h1>
                <img src={img(props.name)} alt={props.name} title={props.name} style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
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

export default CompareBySeltos;
