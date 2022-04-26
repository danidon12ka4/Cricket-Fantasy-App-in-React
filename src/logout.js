import React from "react";
import Header from "./header";
import Login from "./login";
const Logout = () =>{
    localStorage.setItem("islogin", JSON.stringify("false"));
    return(<div>
        {/* <Header></Header> */}
        <Login></Login>
        {/* <h1>Logout Page</h1> */}
    </div>)
}
export default Logout;