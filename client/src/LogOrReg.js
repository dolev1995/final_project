import React, {Component} from 'react'
import './App.css';
import {Link} from 'react-router-dom'

class LogOrReg extends Component{
   
render(){
return(
<div className="login_register">
    <div className='choose'>
    <h2> בחר:</h2>
    </div>

<Link to="/Register">
<button type="button" className='btn_logorreg'>הירשם </button></Link>
<Link to="/Login">
<button type="button" className='btn_logorreg'>התחבר </button></Link>

</div>
);
}
}

export default LogOrReg;