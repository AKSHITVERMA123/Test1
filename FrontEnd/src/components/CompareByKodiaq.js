import React from 'react';
import '../components/style.css';
import kodiaq from '../assets/images/SkodaKodiaqCar.webp';
import octivia from '../assets/images/SkodaOctivia.jpg';
import slavia from '../assets/images/SkodaSlavia.png';
import kushaq from '../assets/images/SkodaKushaq.jpg';

const CompareByKodiaq = (props) => {

        function img(name){
            let img;
            if(name=='Skoda Kodiaq'){
                img=kodiaq;
            }
            else if(name=='Skoda Slavia'){
                img=slavia;
            }
            else if(name=='Skoda Kushaq'){
                img=kushaq;
            }
        return img;
        }   

    return (
        <div>
            <div className="C1" style={{width: "100%"}}>    
                <h1 id="Heading">Skoda Octivia</h1>
                <img src={octivia} id='ImageHeading' alt="Skoda Octivia car image" title='Skoda Octivia' style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
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
                <img src={img(props.name)} alt= {props.name} title={props.name} style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
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

export default CompareByKodiaq;
