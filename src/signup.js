import React, { useCallback, useState } from 'react';
import {Button,Form, Alert } from "react-bootstrap";
import Signupheader from './signupheader';
import {useNavigate} from "react-router-dom";
// import Game from './game';
const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
        e.preventDefault();

        if (!email || !password) {
            setFlag(true);

        } else {
            setFlag(false);
            localStorage.setItem("hardikSubmissionEmail", JSON.stringify(email));
            localStorage.setItem("hardikSubmissionPassword", JSON.stringify(password));
            console.log("Saved in Local Storage");

            setLogin(!login);

        }

    }

    const navigate = useNavigate();
    const ClickonHome = useCallback(()=>navigate('/login',{replace:true}),[navigate]);
  return (
    <div >
      <Signupheader />
      <div className="login">
        {login ? <Form onSubmit={handleFormSubmit}>
          <h1>Sign up</h1>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
          </div>
            <div className='loginbutton'>
          <Button type="submit"  className="btn btn-dark btn-lg btn-block, loginbutton">Submit</Button>
          {/* <Button type="submit" className="loginbutton">Login</Button> */}

          </div>
          <div className='invalidalert'>
          {flag && <Alert color='primary' variant="warning" >
          Invalid Email or password
          </Alert>}
          </div>
        </Form>
          : ClickonHome()
        }

      </div>

    </div>
  )
};

export default Signup;