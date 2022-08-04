import React, {Component} from 'react'
import { createLogger } from 'redux-logger';

const myTime = 13;

export default class Countdown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: props.count,
			circle: (props.count + 1) + 's',
			countdown: 'בהצלחה',
			showTime: true,
			clockFlicker: false
		};
		this.hideCountDown.bind(this);
		this.interval = this.startCountdown()
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	hideCountDown(state) {
		const showTime = !state.showTime;
		let {minutes, seconds} = this.getTimeFormat(this.state.time);
		this.setState({
			showTime: showTime,
			countdown: showTime ? this.state.time < 0 ? '0:00' : minutes + ':' + seconds : "בהצלחה",
		});
		
	}

	getTimeFormat(time) {
		var minutes = Math.floor(time / 60);
		var seconds = time - minutes * 60;
		if (seconds < 10)
			seconds = "0" + seconds;
		if (minutes < 10)
			minutes = "0" + minutes;
		return {minutes, seconds};
	}

	startCountdown() {
		return window.setInterval(() => {
			let {minutes, seconds} = this.getTimeFormat(this.state.time);

			this.setState({
				time: --this.state.time,
				countdown: this.state.showTime ? this.state.time < 0 ? '0:00' : minutes + ':' + seconds : "בהצלחה",
			});
			if (this.state.time < 0) {
				clearInterval(this.interval);
				//this.props.timeIsDone()
                alert("time is done")
            }
			if((minutes === "00") && (seconds <= 30))
			{
			
				this.setState({
					clockFlicker: true,
				});
			
		   }
		}, 1000);
	}

	clockAction() {
		return !this.state.showTime ? "הצג שעון" : "הסתר שעון";
	}

	render() {
		return (
			// <div className={this.state.showTime  ? 'countdown' : 'countdown countdown-no-animation'}>
			// 	<div className="countdown-number">{this.state.countdown}</div>
			// 	 {this.state.time >= 0 ? <svg>
			// 		<circle style={{animationDuration: this.state.circle}} r="27" cx="30" cy="30"></circle>
			// 	</svg> : ''}
	<div className={this.state.showTime &&  this.state.clockFlicker ? 'countdown' : 'countdown countdown-no-animation'}>
				<div className="countdown-number">{this.state.countdown}</div>
				 {this.state.time >= 0 ? <svg>
					<circle style={{animationDuration: this.state.circle}} r="27" cx="30" cy="30"></circle>
				</svg> : ''}
			
				
				<a onClick={() => (this.hideCountDown(this.state))}>{this.clockAction()}</a>
			


				{/* <div className={this.state.clockFlicker ? 'countdown' : ''}>
				<div className="countdown-number">{this.state.countdown}</div>
				 {this.state.time >= 0 ? <svg>
					<circle style={{animationDuration: this.state.circle}} fill="gold" r="27" cx="30" cy="30"></circle>
				</svg> : ''}
				</div> */}
				</div>
		);
	}
}