import React from "react";
import "../styles/signup.css";
import { useRef } from "react";
import { Redirect, useHistory } from "react-router-dom";
// import { useEffect } from "react/cjs/react.development";
const axios = require("axios");

export default function Register() {
  const username = useRef();
  const password = useRef();
  const fname = useRef();
  const country = useRef();
  const email = useRef();
  const history = useHistory(); 
  const url = "http://localhost:3001/signup";



  const signup = async (event) => {
    localStorage.removeItem("jwt"); 
    localStorage.removeItem("appContextdata")
    // const handleSubmit = event => {
    //   if (value) {
    //     setList(list.concat(value));
    //   }
   
    //   setValue('');
   
      event.preventDefault();
    // };


    if (
      username.current.value === null ||
      password.current.value === null ||
      email.current.value === null ||
      fname.current.value === null
    ) return;

    try {
    await axios
      .post(url, {
        username: username.current.value,
        password: password.current.value,
        email: email.current.value,
        country: country.current.value,
        normalName: fname.current.value,
      },)
      .then(()=> {
          history.push('/signin');
      })
    }
    catch(e) {
      console.log("this is getting called ");
      console.log(e);
    };
  };
  return (
    <div>
      <div className="signup-container">
        <div className="sidenav">
          <div className="content">
            <h1>Welcome!</h1>
            <br />
            <p className="line"></p> <br />
       
            <br />
          </div>
        </div>

        <div className="signupform">
          <h1>Sign Up</h1>
          <div>
            <form method="post">
              <input
                type="text"
                placeholder="Name"
                id="fname"
                ref={fname}
                name="fname"
              />
              <br />
              <input
                type="text"
                placeholder="Email"
                id="email"
                ref={email}
                name="email"
              />
              <br />

              <input
                type="text"
                placeholder="Country"
                id="country"
                ref={country}
                name="country"
              />
              <br />
              <hr />
              <input
                type="text"
                placeholder="Username"
                id="uname"
                ref={username}
                name="uname"
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                id="pwd"
                name="pwd"
                ref={password}
                minLength="5"
              />
              <br />
              <button id="signup" onClick={(e)=>signup(e)}>
                <span className="signup">Sign up</span>
              </button>
              <div id="btnmodal" className="modal">
                <div className="modal-content">
                  <span className="close">&times;</span>
                  <p>Thanks for signing up!</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
