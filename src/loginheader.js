import React, { useCallback } from 'react'
import { Button } from "reactstrap";

import {Link ,Navigate,useNavigate} from "react-router-dom";

const Loginheader = () => {
const navigate = useNavigate();
const ClickonHome = useCallback(()=>navigate('/',{replace:true}),[navigate]);
  return (
    <div className="header">
        <img className="logo"onClick={()=>ClickonHome()} src="https://www.pngmart.com/files/6/Cricket-PNG-Clipart.png" alt=""></img>
        <h4 className='icon'onClick={()=>ClickonHome()}>Cricket Fantasy App</h4>
        <Link className='logbutton3' to="/signup">Sign Up</Link>
      
        
    </div>
  )
};

export default Loginheader;