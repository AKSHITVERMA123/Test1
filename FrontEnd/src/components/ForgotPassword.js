
import React from 'react';

import '../components/style.css';
const ForgotPassword = () => {

    function update() {
        let newpwd=document.getElementById("Newpassword").value;
        document.getElementById("Oldpassword").innerHTML=newpwd;
    }
    return (
            <div className='container'>
                <h1>Forgot Password Page</h1>
                <form >
                <div className="row">
                    <div className="label">
                    <label htmlFor='Oldpassword'>Enter Old Password</label>
                    </div>
                <div className='input'>
                <input type="text" id="Oldpassword" name="Oldpassword" placeholder="Enter your Old Password" />
                </div>
                </div>
                <div className="row">
                    <div className="label">
                    <label htmlFor='Newpassword'>Enter New Password</label>
                    </div>
                <div className='input'>
                <input type="text" id="Newpassword" name="Newpassword" placeholder="Enter your New Password" />
                </div>
                </div>
                <div className="row">
                        <div className="input">
                            <input type="submit" value="Update" />
                        </div>
                    </div>
                </form>
            </div>
    )
}

export default ForgotPassword;
