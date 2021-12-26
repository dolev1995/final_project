import React, { Component } from 'react'
import './App.css';


class Login extends Component {


    handleSubmit(e) {
		e.preventDefault();
		alert("welcome to mySite")
	}
    render() {


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
export default Login;