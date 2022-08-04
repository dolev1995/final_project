import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from "react-redux";
import './App.css';

class Footer extends Component {
	constructor() {
		super();
	}
	render() {
		const meesage = 'פותח ע"י אוהד תעיזי,דולב ברנדר ואביחי ברנהולץ'

		return (
			<footer>
				<p>
					{/* <a href="https://yhb.org.il/"  target="_blank" rel="noopener">אתר ישיבת הר ברכה</a> */}
					{meesage}
					<span> | </span>
					{/* <a href="https://ph.yhb.org.il/"  target="_blank" rel="noopener">פניני הלכה</a>
					<span> | </span>
					<a href="https://shop.yhb.org.il/"  target="_blank" rel="noopener">חנות ספרים</a>
					<span> | </span>
					<a href="https://www.facebook.com/Yeshiva.Har.Bracha"  target="_blank" rel="noopener">
						<b> f </b>
					</a><span> | </span>
					<a href="https://ph.yhb.org.il/vehaarevna/"  target="_blank" rel="noopener"> והערב נא	</a> */}
				</p>
			</footer>
		);
	}
}

//export default connect(state => ({}), {})(withRouter(Footer));
export default (Footer);
// export default connect(mapStateToProps, matchDispatchToProps)(Footer);