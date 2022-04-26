import React, { useCallback } from 'react'
import {Link ,Navigate,useNavigate} from "react-router-dom";
const Gameheader=()=>
    {   const navigate = useNavigate();
        const ClickonHome = useCallback(()=>navigate('/',{replace:true}),[navigate]);
        return(
    <div className="header">
        {/* <Layout/> */}
        {/* ====== */}
        <img className="logo"onClick={()=>ClickonHome()} src="https://www.pngmart.com/files/6/Cricket-PNG-Clipart.png" alt=""></img>
        <h4 className='icon'onClick={()=>ClickonHome()}>Cricket Fantasy App</h4>
        {/* <img class="headerimg" src="https://asset.cricvids.co/cricwick-assets/ads/fantasy_0403.png" alt=""></img> */}
        
        {/* <Link className='logbutton1' to="/login">Sign In</Link> */}
        <Link className='logbutton1' to="/logout">Log Out</Link>
        {/* <Button className='logbutton1' onClick={()=><Link to="/login">Log In</Link>}>Log In</Button> */}
        {/* <Button className='logbutton2'>Log Out</Button> */}
        
    </div>
 );
}
export default Gameheader;

