import React, {Component} from 'react'
import './App.css';



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
        alert('שכוייח ' + this.state.value+' ' +'אנחנו מאמינים בך');
        event.preventDefault();
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
					<input placeholder="סיסמה*" type="password" ref="password" className='inputRegister' required/>
					<input type='submit' className="btn main-btn" value='הרשמה'/>

				</form>

</div>

        );
    }




}
export default Register;