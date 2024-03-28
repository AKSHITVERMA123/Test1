
import React from 'react';
import '../components/style.css';
import octvia from '../assets/images/SkodaOctivia.jpg';
import Kushaq from '../assets/images/SkodaKushaqCar.jpg';

const CompareByKushaq = (props) => {
    return (
        <div>
            <div className="C1" style={{width: "100%"}}>    
                <h1 id="Heading">Skoda Octvia</h1>
                <img src={octvia} id='ImageHeading' alt="Skoda Octivia car image" title='Skoda Octivia' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
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

                <h1>Skoda Kushaq</h1>
                <img src={Kushaq} alt='Skoda Kushaq' title='Skoda Kushaq' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
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

export default CompareByKushaq;
