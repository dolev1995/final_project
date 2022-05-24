import React, {Component} from 'react'
import './App.css';
import Arrow from './images/arrow.png'
import {getUsers} from './actions'

import {Link} from 'react-router-dom'

class Admin extends Component{
    constructor() {
		super();
        this.state ={
           show :false,
           val: 1
        }
        this.onClick2 = this.onClick2.bind(this)
	}
    onClick2(){
        this.setState({
            show :true,
        });
    }

    handle()
    {
        getUsers().then(res => {
            console.log('res',res) ;   
        if(res){

            console.log("have res valid");
            // for(let i=0;i<res.data.data.length)
            // return(res.data.data[6].email)
            alert(res.data.data.length)
        }
    }).catch(err =>  console.log('have a err!!!!',err));
    }


    mailFirstStudents()
    {
        getUsers().then(res => {
            console.log('res',res) ;   
        if(res){

            console.log("have res valid");
            // for(let i=0;i<res.data.data.length;i++)
            // {

            // }
            alert(res.data.data[0].email)
        }
    }).catch(err =>  console.log('have a err!!!!',err));
    }

    mailStudents(e)
    {
        getUsers().then(res => {
            console.log('res',res) ;  
            //alert(typeof (this.state.val)) 
        if(res){

           // for(let i=0;i<res.data.data.length;i++)
            // {

            // }
           // alert(typeof this.state.val)
            alert(res.data.data[e].email)
        }
    }).catch(err =>  console.log('have a err!!!!',err));
    }


render(){

    return(
     


		<div className="welcome">
					<div id="mainWelcome">
						<h1>ברוך הבא</h1>
						<h2>דף מורה</h2>

<ul id="buttonAdmin">
<li> <button className="btnAdmin" type="button" onClick={this.handle}>  מספר התלמידים שנרשמו לאתר </button></li>

<li> <button className="btnAdmin" type="button" onClick={this.mailFirstStudents}>  המייל של התלמיד הראשון </button></li>

<input type="text" className="btnAdminInput" placeholder='הקלד מספר סידורי של התלמיד' onChange={(e) =>{this.setState({val: e.target.value})}}/>
        {"("+this.state.val+")"} 

<li> <button className="btnAdmin" type="button" onClick={()=>{this.mailStudents(this.state.val)}}>  המייל של תלמיד מסויים </button></li>

</ul>


                
					</div>

                    </div>
    )
}
}

export default Admin;
// ((item, index) => {
//     return (<li key={index} className="row">
//       <div id="icon"  onClick={(event)=>handleSubmit(event,item.link)}>{item.icon} 
//           </div>
//       <div id= "title"> {item.title} </div>
//     </li>);
//  })