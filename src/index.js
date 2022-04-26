import React from "react";
import ReactDOM from 'react-dom';
import {Route, Link, Routes, BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import Login from "./login";
import Logout from "./logout";
import Signup from "./signup";
import Game from "./game";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const routing = (
    <Router>
        {/* <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Log In</Link></li>
            </ul>
        </div> */}
        <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/game" element={<Game/>} />
        

        </Routes>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'))
