import React, { useState } from 'react'
import './login.css';
import img from './log.svg'
import img1 from './register.svg'
import { MdLock } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
//import './login.js'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Login() {

  let [input,setInput] = useState(null);
  let [input1,setInput1] = useState(null);
//     var confirm_password = document.getElementById("confirm_password").value;
// var password = document.getElementById("password").value;
// console.log(confirm_password != password)
// const  validatePassword = ()=> {
  // if (password.value != confirm_password.value) {
//     confirm_password.setCustomValidity("Passwords Don't Match");
//   } else {
//     confirm_password.setCustomValidity('');
//   }
// }

// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");



const showSignUp= () => {
    // console.log("Sign up");
    const container =document.querySelector(".container")
    container.classList.add("sign-up-mode");
    // console.log(container);

  

   const alertFunc = () =>
   {
    document.getElementById("sign-in-id").setAttribute("class","d-none")
  document.getElementById("sign-up-id").setAttribute("class","d-flex");
   }
    
  
    
let timeout;
    function myFunction() {
      timeout = setTimeout(alertFunc, 1000);
    }
    myFunction();
    
    
   
    
};



const removeSignUp= () => {
    // console.log("sign in");
    const container =document.querySelector(".container")
//  console.log(container);
  container.classList.remove("sign-up-mode");


  
 const alertFunc = () =>
  {
    document.getElementById("sign-up-id").setAttribute("class","d-none")
    document.getElementById("sign-in-id").setAttribute("class","d-flex")
  }

  let timeout;
    function myFunction() {
      timeout = setTimeout(alertFunc, 1000);
    }
    myFunction();

  // let flag = true;

  // if(flag == true)
  // {
  // document.getElementById("sign-up-id").setAttribute("class","d-none")
 
  // }

};

  const Pass = ()=>
  {
    let str = document.getElementById("password").value;
    
    setInput(str);
    // console.log(str);
  }

  const Pass1 = ()=>
  {
    let str1 = document.getElementById("confirm_password").value;
    
   setInput1(str1);
  }

  const match = (e)=>
  {
   
  //  e.preventDefault(true);
   
  if(input != input1)
    {
      document.getElementById("password_not_match").innerHTML = "password does not match";
      e.preventDefault();
    }
    else{
      document.getElementById("password_not_match").innerHTML = " ";
    }
  }


  
  


  return (
   
    <div>
    <div className="container">
    <div className="forms-container">
      <div className="signin-signup">
    
      <form method="post" id='sign-in-id' className="sign-in-form " >
      <h2 className="title ">Sign in</h2>
      <div className="input-field">
            {/* <i className="fas fa-user"></i> */}
            <MdEmail className='fs-3 ms-3 mt-2' />
            <input type="email" name="txemail" placeholder="Email" required pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" />
          </div>
          <div className="input-field">
            {/* <i className="fas fa-lock"></i> */}
            <MdLock className='fs-3 ms-3 mt-2' />
            <input type="password" name="txpass" placeholder="Password" required />
          </div>
          <input type="submit" name="but" value="Login" className="btn solid " />
          <a href="forget_password.php" className="title-1">Forgot Password </a>
       </form>



       <form  method="post" className="sign-up-form  d-none" id='sign-up-id' onSubmit={match}>
          <h2 className="title text-center">Sign up</h2>
          <div className="input-field">
            {/* <i className="fas fa-user"></i> */}
            <FaUser className='fs-3 ms-3 mt-2' />
            <input type="text" placeholder="Name" name="txname" required />
          </div>

          <div className="input-field">
            {/* <i className="fas fa-envelope"></i> */}
            <MdEmail className='fs-3 ms-3 mt-2' />
            <input type="email" placeholder="Email" name="txemail" required pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"   />
          </div>
          <div className="input-field">
            {/* <i className="fas fa-phone"></i> */}
            <FaPhoneFlip className='fs-3 ms-3 mt-2' />
            <input type="text" placeholder="Phone" name="txcontact" required pattern="([0-9]{10})$" />
          </div>

          <div className="input-field">
            {/* <i className="fas fa-lock"></i> */}
            <MdLock className='fs-3 ms-3 mt-2' />
            <input type="password" placeholder="Password" name="txpass" id="password" required pattern="^[A-Z a-z 0-9]{7,14}$"  onChange={Pass} />
          </div>
          <div className="input-field">
            {/* <i className="fas fa-lock"></i> */}
            <MdLock className='fs-3 ms-3 mt-2' />
            <input type="password" placeholder="Confirm Password" id="confirm_password" name="txcpass" required pattern="^[A-Z a-z 0-9]{7,14}$" onChange={Pass1} />
           
          </div>
          <p id='password_not_match' className='text-danger'></p>
         <button type="submit" name="but" id='register'   className="btn " value="Sign up" >Sign up </button>

        </form>
    </div>
    </div>
    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>New here ?</h3>
          <p>
            if you area new user, signup first.
          </p>
          <button className="btn transparent" id="sign-up-btn" onClick={showSignUp}>
            Sign up
          </button>
        </div>
        <img src={img} className="image" alt="Log in img" />
      </div>
      <div className="panel right-panel">
        <div className="content">
          <h3>Already an user ?</h3>
          <p>
            login here and get started.
          </p>
          <button className="btn transparent"  id="sign-in-btn" onClick={removeSignUp}>
            Sign in
          </button>
        </div>
        <img src={img1} className="image" alt="Register img" />
      </div>
    </div>

    </div>

    <div className="alert hide">
      <span className="far fa-check-circle"></span>
      <span className="msg"></span>
      <div className="close-btn">
        <span className="fas fa-times"></span>
      </div>
   </div>

  
      <div className="alert hide">
        <span className="far fa-check-circle"></span>
        <span className="msg"></span>
        <div className="close-btn">
          <span className="fas fa-times"></span>
        </div>
    </div>
    </div>
    


  );

}
export default Login
