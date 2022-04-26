import React, { useState, useEffect } from "react";
import './style.css'

import Header from "./header";
import Body from "./body";
import Footer from "./footer";

function App() {

    return (
      <div className="main">
          <Header></Header>
          <Body></Body>
          <Footer></Footer>
      </div>
      
  
    );
  }
  
  export default App;