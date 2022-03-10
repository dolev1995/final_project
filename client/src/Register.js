import React, {Component} from 'react'
import './App.css';
import {userAdd} from './actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

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
    handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleSubmit(event) {
        event.preventDefault();
        //alert('שכוייח ' + this.state.value+' ' +'אנחנו מאמינים בך');
      }

      handleRegister(e) {
        console.log("name====" + this.firstName.value);
        console.log("email====" + this.email.value);
        console.log("password====" + this.password.value);
        const newUser = {
        	name: {
				first: this.firstName.value,
				last: this.lastName.value
			},
            password: this.password.value,
			email: this.email.value

        };
        this.userAdd(newUser);
      }

	render() {

		return (
			<div className="register">
                <div className='harshama'>
                <h3>הרשמה</h3>
                </div>
				<form onSubmit={this.handleSubmit}>
                <input placeholder="שם פרטי*" type="text" value={this.setState.value} ref="firstName" className='inputRegister' onChange={this.handleChange} required/>
					<input placeholder="שם משפחה*" type="text" ref="lastName" className='inputRegister' required/>
                    <input placeholder="מייל*" type="text" ref="email" className='inputRegister' required/>
					<input placeholder="סיסמה*" type="password" ref="password" className='inputRegister' required/>
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

export default connect(mapStateToProps, matchDispatchToProps)

(
	Register
)
;