import React, { useState } from "react";
import Axios from 'axios';


/*adding stuff from my spike project*/
import '../../assets/css/login.css';
import logo_white from '../../assets/img/logo_white.png';



const Login = () =>{

    //use history for rerouting after succesful login
    const [emailReg, setEmailReg] = useState("");
    const [passReg, setPassReg] = useState("");
    const [passConfirmReg, setPassConfirmReg] = useState("");
    const [nameReg, setNameReg] = useState("");

    const register = () =>{
    console.log("got to register");

        Axios.post("http://localhost:3001/register", {
            email: emailReg,
            pass: passReg,
        }).then((response)=>{
            console.log(response.data);
        })
    };

    //react states for logging in
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const login = () =>{
    Axios.post('/api/v1/', {
        email: email,
        pass: pass,
        }).then((response) => {
        //if we get a message back from the server it means we didn't log in successfully
        if(response.data.message){
            console.log(response);
            alert(response.data.message);
        }
        //if we didn't get a message we are logged in correctly 
        else{
            console.log(response);
        }
        })
    };


    return (
        <>
        <div className="container-fluid px-3 h-100 py-5 login-image">
        {/*REGISTER FORM STARTS HERE */}
            <form className="form-signin bg-dark">
                <img className="mb-4" src={logo_white} width="300" height="170" alt="Logo"/> 
                <h1 className="h3 mb-3 fw-normal text-white text-center">Register for an Account</h1>


                <div className="form-floating">
                    <input type="email" className="form-control text-dark" id="floatingEmailReg" placeholder="name@example.com"
                        onChange={(e)=>{
                        setEmailReg(e.target.value)
                        }} 
                    />
                    <label className="text-muted" htmlFor="floatingEmailReg">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control text-dark" id="floatingNameReg" placeholder="Joe Mama"
                        onChange={(e)=>{
                        setNameReg(e.target.value)
                        }} 
                    />
                    <label className="text-muted" htmlFor="floatingNameReg">Name</label>
                </div>


                
                <div className="form-floating">
                    <input type="password" className="form-control text-dark" id="floatingPasswordReg" placeholder="Password"
                        onChange={(e)=>{
                        setPassReg(e.target.value)
                        }} 
                    />
                    <label className="text-muted" htmlFor="floatingPasswordReg">Password</label>
                </div>

                <div className="form-floating">
                    <input type="password" className="form-control text-dark" id="floatingPasswordConfirmReg" placeholder="Password ... Again"
                        onChange={(e)=>{
                        setPassReg(e.target.value)
                        }} 
                    />
                    <label className="text-muted" htmlFor="floatingPasswordConfirmReg">Password ... Again</label>
                </div>



                <button className="w-100 btn btn-lg btn-danger" type="button" id="registerButton" onClick={register}>Register</button>
                {/*REGISTER FORM ENDS HERE */}



                {/*LOGIN FORM STARTS HERE */}
                <h1 className="h3 mb-3 fw-normal text-white text-center mt-3">Please sign in</h1>

                <div className="form-floating">
                    <input type="email" className="form-control text-dark" id="floatingLoginEmail" placeholder="name@example.com"
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }} 
                    />
                    <label className="text-muted" htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingLoginPassword" placeholder="Password"
                    onChange={(e)=>{
                        setPass(e.target.value)
                    }} 
                    />
                    <label className="text-muted" htmlFor="floatingPassword">Password</label>
                </div>
            
                <button className="w-100 btn btn-lg btn-danger" type="button" id="loginButton" onClick={login}>Sign in</button>
                {/*LOGIN FORM ENDS HERE */}
        </form>
        </div>
    </>

    );
}

export default Login;
