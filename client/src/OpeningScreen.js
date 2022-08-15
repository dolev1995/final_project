import React, {Component} from 'react'
import './App.css';
import Arrow from './images/arrow.png'
//import LogOrReg from './LogOrReg'

import {Link} from 'react-router-dom'

class OpeningScreen extends Component{
    constructor() {
		super();
        this.state ={
           show :false
        }
        console.log('test')
        this.onClick2 = this.onClick2.bind(this)
	}
    onClick2(){
        this.setState({
            show :true,
        });
    }

    meaning()
    {
        var myWindow = window.open("", "MsgWindow", "width=1000,height=200");
        myWindow.document.write('אתר אחד המגניבים תנו לנו 100 ותשחררו אותנו');
        // alert("afug")
}


render(){

    return(
        // <div> {this.state.show &&
        //     <LogOrReg/>
        // }



		<div className="welcome">
					<div id="mainWelcome">
						<h1>ברוכים הבאים</h1>
						<h2>אתר המבחנים</h2>

                        <Link to="/LogOrReg">
                        <button className="next" type="button" onClick={this.onClick2 }>
                            <span>התחל</span>
                            <img src={Arrow} className="img1" alt=" ):תמונה בעייתית"/> </button> </Link>


                        <button className='The meaning of the site' type="button" onClick={this.meaning }> משמעות האתר</button>
					</div>

                    </div>
    )
}
}

export default OpeningScreen;