import React, { useRef } from 'react';
import '../components/style.css';
import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const RegisterComp = ()=> {

    const userRef = useRef();
    const errRef = useRef();
    // const [errMsg, setErrMsg] = useRef();
    // const [success, setSuccess] = useRef();

    const [user, setUser] = useState({
        Username: "", Email: "", Password: "", ConfirmPassword : ""  
        });

    const [errMsg, setErrMsg] = useState('');

    const [success, setSuccess] = useState(false);

    
        // useEffect(() =>{
        //     userRef.current.focus();
        // },'');

        useEffect(() =>{
            setErrMsg('');
        }, [user]
        );

        useEffect(() => {
            console.log("Username = " +user.Username + " Email = " + user.Email +" Password = " + user.Password + " Confirm Password = " + user.ConfirmPassword);
        })

        let uname,value;
        const handleEvents = (event) => {
            console.log(event);
            uname = event.target.name;
            value = event.target.value;
            
            setUser(users => ({...users , [uname]:value}));
       
};

    const handleSubmit =  async (e) =>{
        e.preventDefault();
        // axios.post('http://localhost:8081/cars', {user})
        // .then(res => console.log("User Registered Successfully"))
        // .catch(err => console.log(err));
        console.log("User Registered Sucessfully");
        setUser('');
        setSuccess(true);
     };

        function captcha() {
        
            const length=5;
            let captcha="";
            for(let i=0;i<=length;i++){
                captcha+=Math.floor(Math.random()*10);
                document.getElementById("CAPTCHA").innerHTML=captcha;
            }
        }

       

        // setInterval(() => {
            setTimeout(() => {
                captcha();
            }, Window.onClick);
        // }, 1000);
       

        return (
            <>
            {success ? (
                <section>
                    <h1>You are Logged in </h1>
                    <br/>
                    <p>
                        <a href='#'>Go to Home</a>
                    </p>
                </section>
            ) : (
            <div className="mainDiv" style={{display :"inline-flex"}}>
            <div className="container" style={{width: "550px"  , margin: "4em 0 0 0"}}>
                {/* {success ? (
<section>
    <h2>You are Logged in</h2>
    <br/>
    <p>
        <a href='#'>Go to Home Page</a></p>
</section>
                ) :
                
<section>
    <h2>Login Failed</h2>
    <br/>
    <p>
        <a href='#'>Go to Home Page</a></p>
</section>
} */}
                <h1>Register Page</h1>
                <p ref={errRef} className={errMsg ? "errMsg" :  "offscreen"} aria-live='assertive'>{errMsg}</p>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="label">
                            <label htmlFor="Username">Username:</label>
                        </div>
                        <div className="input">
                            <input type="text" id="Username" name="Username" placeholder="Enter your username" required
                             value={user.Username}
                             onChange={handleEvents}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="label">
                            <label htmlFor="Email">Email:</label>
                        </div>
                        <div className="input">
                            <input type="email" id="Email" name="Email" placeholder="Enter your email" required
                             value={user.Email}
                             onChange={handleEvents}
                             />
                        </div>
                    </div>

                    <div className="row">
                        <div className="label">
                            <label htmlFor="Password">Password:</label>
                        </div>
                        <div className="input">
                            <input type="password" id="Password" name="Password" placeholder="Enter your password" required
                            value={user.Password}
                            onChange={handleEvents}
                             />
                        </div>
                    </div>

                    <div className="row">
                        <div className="label">
                            <label htmlFor="ConfirmPassword">Confirm Password:</label>
                        </div>
                        <div className="input">
                            <input type="password" id="ConfirmPassword" name="ConfirmPassword" placeholder="Repeat your password" required
                            value={user.ConfirmPassword}
                            onChange={handleEvents}
                            />
                        </div>
                    </div>

                     <div className="row">
                        <div className="label">
                        <h4>Enter Captcha :</h4>&nbsp;&nbsp;&nbsp;   
                        </div>
                        <div className="input">
                            &nbsp;&nbsp;&nbsp;
                        <input id="getCaptcha" type="number" style={{marginLeft: "20px"}}></input><br></br><br></br>
                        <label style={{display :"inline-flex" }}>
                        <b id ="CAPTCHA" className='Captcha' style={{marginLeft: "40px",width:"70px" , height :"30px" ,marginTop :"8px"}}>289356</b><img src='https://cdn-icons-png.flaticon.com/128/2310/2310787.png' style={{height: "50px", width: "50px"}} id='CAPTCHA' onClick={captcha}></img>    
                          </label>   
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="input">
                            <Link to ="/Login" className="btn btn-success border-w 100">Register</Link>
                            {/* <input type="submit" value="Register"/> */}
                        </div>
                    </div>
                </form>
                <p>Already are a user? <a href='Login'>Login here</a></p>
            </div>
            </div>
            )}
            </>
        );
}

export default RegisterComp;