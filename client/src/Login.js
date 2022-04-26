import React, { Component } from 'react'
import { useNavigate } from "react-router-dom";
import { withParams } from "./HOC";

import './App.css';

// import { useNavigate } from "react-router-dom";


class Login extends Component {
    // constructor() {
    //     ///this.navigate = useNavigate();
    // }

    handleSend= async(event,url) => {
        event.preventDefault();
        // this.props.history.push('/Sidebar');
        //this.navigate(url);
    }

    handleSubmit= (e)=>  {
		e.preventDefault();
		//alert("welcome to mySite")
        console.log(this.props)

        // if connection success
        // handleSend(e,'/Sidebar')
        //this.props.history.push('/Sidebar');
        this.props.navigate('/Sidebar')

	}

    render() {
        console.log(this.props)

        return (
            <div className="login">
                <h3>כניסה</h3>

                <form onSubmit={this.handleSubmit}>

                    <input className='inputRegister' placeholder="דואר אלקטרוני" type="email" ref="email" required />
                    <input className='inputRegister' placeholder="סיסמה" type="password" ref="password" required />
					<input type='submit' className="btn main-btn" value='התחברות'/>


                    </form>
            </div>

        );

    }
}
export default withParams(Login);
// export default (props) => (
//     <Login history={useNavigate()} />
// );
