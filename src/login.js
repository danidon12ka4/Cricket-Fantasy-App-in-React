import React, { useCallback, useState } from 'react'
import {Button,Form, Alert } from "react-bootstrap";
import Loginheader from './loginheader';
import {useNavigate} from "react-router-dom";
import Game from './game';
const Login = () => {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);
  
  const [home, setHome] = useState(true);


  function handleLogin(e) {
    e.preventDefault();
    console.log(emaillog);
    console.log(passwordlog);

    let passlocal = localStorage.getItem('hardikSubmissionPassword').replace(/"/g, "");
    let maillocal = localStorage.getItem('hardikSubmissionEmail').replace(/"/g, "");
    console.log(passlocal);
    console.log(maillocal);
   
    let pass = '123';
    let mail = 'abc@xyz.com';
    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    }
    else if ((passwordlog === pass) && (emaillog === mail)) {
      setHome(!home);
      setFlag(false);
      localStorage.setItem("islogin", JSON.stringify("true"));
      
    } 
 
    else if ((passwordlog === passlocal) && (emaillog === maillocal)) {
      setHome(!home);
      setFlag(false);
      localStorage.setItem("islogin", JSON.stringify("true"));
     
    }
    else {
      localStorage.setItem("islogin", JSON.stringify("false"));
      setHome(home);
      setFlag(true);
    }
  }



    const navigate = useNavigate();
    console.log({navigate})
    const ClickonHome = useCallback(()=>navigate('/game',{replace:true}),[navigate]);
  return (
    <div >
      
      
        {home ?(<><Loginheader /> <div className="login"><Form onSubmit={handleLogin}>
          <h1>Sign In</h1>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmaillog(event.target.value)} />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPasswordlog(event.target.value)} />
          </div>
            <div className='loginbutton'>
          <Button type="submit"  className="btn btn-dark btn-lg btn-block loginbutton">Sign In</Button>

          </div>
          <div className='invalidalert'>
          {flag && <Alert color='primary' variant="warning" >
          Invalid Email or password
          </Alert>}
          </div>
        </Form> </div></>)
          : (ClickonHome())
        }

      </div>

  
  )
};

export default Login;