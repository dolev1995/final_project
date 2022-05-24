import React, { Component } from 'react'
import { useNavigate } from "react-router-dom";
import { withParams } from "./HOC";
import {userLogin} from './actions'

import './App.css';

// import { useNavigate } from "react-router-dom";


class Login extends Component {

    constructor() {
        super();
        this.state = 
        {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event, fieldName) {
        this.setState({[fieldName]: event.target.value});
      }
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
        // userLogin.
        // this.props.navigate('/Sidebar')

        console.log("register");
        const existUser = {
        	name: {
				first: this.state.firstName,
				last: this.state.lastName
			},
            password: this.state.password,
			email: this.state.email

        };
        userLogin(existUser).then(res => {
                console.log('res',res) ;   
            if(res){
                if((existUser.email).includes("admin")){
                    window.userProfile = res && res.data && res.data.data;
                    this.props.navigate('/Admin')
                }
                else{
                    window.userProfile = res && res.data && res.data.data;
                    this.props.navigate('/Sidebar' )
                    }
            }
        }).catch(
            //err =>  console.log('err',err)
            alert("שגיאה בהתחברות, וודא שהנתונים נכונים")
            
            );

	}

    render() {
        console.log(this.props)

        return (
            <div className="login">
                <h3>כניסה</h3>

                <form onSubmit={this.handleSubmit}>

                    <input className='inputRegister' placeholder="דואר אלקטרוני" type="email" value={this.state.fieldName} ref="email" onChange={(event) => this.handleChange(event,"email" )} required />
                    <input className='inputRegister' placeholder="סיסמה" type="password"  value={this.state.fieldName} ref="password" onChange={(event) => this.handleChange(event,"password" )} required />
					<input type='submit' className="btn main-btn" value='התחברות'/>


                    </form>
            </div>

        );

    }
}
export default withParams(Login);