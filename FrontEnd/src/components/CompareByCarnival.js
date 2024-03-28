import React from 'react';
import '../components/style.css';
import carens from '../assets/images/KIACarensCarBlue.jpg';
import carnival from '../assets/images/KIACarnival.jpg';

const CompareByCarnival = (props) => {
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

                <h1>Kia Carnival</h1>
                <img src={carnival} alt='Kia Carnival' title='Kia Carnival' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
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

export default CompareByCarnival;
