import React, {Component} from 'react'
import './App.css';
import {userAdd} from './actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { withParams } from "./Hoc";

class Register extends Component {
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
      handleSubmit(event) {
        event.preventDefault();
        //alert('שכוייח ' + this.state.value+' ' +'אנחנו מאמינים בך');
        console.log("submit");
       this.handleRegister(event);

      }

      handleRegister(e) {
        // console.log("name====" + this.firstName.value);
        // console.log("email====" + this.email.value);
        // console.log("password====" + this.password.value);
        console.log("register");
        const newUser = {
        	name: {
				first: this.state.firstName,
				last: this.state.lastName
			},
            password: this.state.password,
			email: this.state.email

        };
        console.log('handleRegister newUser', newUser)
        userAdd(newUser).then(() => {
                console.log('ok') ;        
            this.props.navigate('/Sidebar', {email: "2dolev20"} )
        }).catch(err =>  console.log('err',err));
      }

	render() {

		return (
			<div className="register">
                <div className='harshama'>
                <h3>הרשמה</h3>
                </div>
				<form onSubmit={this.handleSubmit}>
                <input placeholder="שם פרטי*" type="text" value={this.state.fieldName} ref="firstName" className='inputRegister' onChange={(event) => this.handleChange(event,"firstName" )} required/>
					<input placeholder="שם משפחה*" type="text" value={this.state.fieldName} ref="lastName" className='inputRegister' onChange={(event) => this.handleChange(event,"lastName" )} required/>
                    <input placeholder="מייל*" type="text" value={this.state.fieldName} ref="email" className='inputRegister'  onChange={(event) => this.handleChange(event,"email" )} required/>
					<input placeholder="סיסמה*" type="password"  value={this.state.fieldName} ref="password" className='inputRegister'  onChange={(event) => this.handleChange(event,"password" )} required/>
					<input type='submit' className="btn main-btn" value='הרשמה'/>
				</form>
            </div>
        );
    }
}


function

mapStateToProps(state) {
	return {
		user: state.user
	};
}

function

matchDispatchToProps(dispatch) {
	return bindActionCreators({
		userAdd
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(withParams(Register));