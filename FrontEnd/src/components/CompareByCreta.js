import React from 'react';
import '../components/style.css';
import i20 from '../assets/images/HyundaiI20.jpg';
import Creta from '../assets/images/HyundaiCretaImage.jpg';

const CompareByCreta = (props) => {
    return (
        <div>
            <div className="C1" style={{width: "100%"}}>    
                <h1 id="Heading">Hyundai i20</h1>
                <img src={i20} id='ImageHeading' alt="Hyundai i20 car image" title='Hyundai i20' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
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

                <h1>Hyundai Creta</h1>
                <img src={Creta} alt='Hyundai Creta' title='Hyundai Creta' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
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

export default CompareByCreta;
