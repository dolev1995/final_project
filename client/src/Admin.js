import React, {Component} from 'react'
import './App.css';
import Arrow from './images/arrow.png'
import {getUsers} from './actions'
import Select from 'react-select'
import {createTest} from './actions'

import {Link} from 'react-router-dom'
//const { uuid } = require('uuidv4');
var count = 232321;
    const looped = getUsers().then(res => {
        res.data.data.map((d, i) => (
        <div key={i}>
          <h1>{d.email}</h1> <h1>{d.name.first}</h1>
        </div>
      ));
        });


class Admin extends Component{
    constructor() {
		super();
        this.state ={
           show :false,
           val: 1,
           isClicked: false
        }
        this.onClick2 = this.onClick2.bind(this)
	}

    handleClick = () => {
        this.setState(prevState => {
          console.log(prevState);
          return { isClicked: !prevState.isClicked };
        });
      };
  



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


//     nameOfStudents()
//     {
//         getUsers().then(res => {
//             console.log('res',res) ;   
//         if(res){
// <ul>
//     {   res.data.data.map(function(v){
//             <li>{console.log(v.email)} </li>
//     })

//         }
//     </ul>
//     //  for(let i=0;i<res.data.data.length;i++)
//     // {
//     //             console.log(res.data.data[i].name.first)
//     // }
// }
// }).catch(err =>  console.log('have a err!!!!',err));
// }

    nameOfStudents()
    {
        getUsers().then(res => {
            console.log('res',res) ;   
        if(res){
       
        var myWindow = window.open("", "MsgWindow", "width=1000,height=200");
        
        res.data.data.map(function(v){
          
        myWindow.document.write(v.email+'*');
       
        <br/>
        }

 
   
).catch(err =>  console.log('have a err!!!!',err));
    }})}

   
            // var select = document.createElement('select');
            // select.innerHTML = res.data.data.map(function(v){
            //     const listItems = res.data.data.map(function(v){
            // //     return '<option value="' + v.email + '">' + v.name.first + '</option>';
            // // }).join('');
            // <li>{v.email}</li>
            // });
            // <ul>{listItems}</ul>  
    


          // for(let i=0;i<res.data.data.length;i++)
            // {
            //     //console.log(res.data.data[i].name.first)
            //     // <option> res.data.data[i].name.first </option>
            //     var optn = res.data.data[i];
            //     var el = document.createElement("option");
            //     el.textContent = optn;
            //     el.value = optn;
            //     select.appendChild(el);

            // }
            //alert(res.data.data[0].email)
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


    createTest()
    {
        count++;
        // var question = window.prompt("Enter your question");
        // alert(typeof question)
        var testId = window.prompt("Enter your testId");
        var testName = window.prompt("Enter your testName");
        var classId = window.prompt("Enter your classId");
        var ClasseName = window.prompt("Enter your ClasseName");
        var questionId = window.prompt("Enter your questionId");
        var questionText = window.prompt("Enter your questionText");
        var AnswerId = window.prompt("Enter your AnswerId");
        var AnswereTxt = window.prompt("Enter your AnswereTxt");

        const data = {
            _id:(count.toString()),
            testId:Number(testId),
            testName:testName,
            classId:Number(classId),
            ClasseName:ClasseName,
            questions: [{
                questionId:Number(questionId),
                questionText:questionText,
                ansers: [{
                    AnswerId:Number(AnswerId),
                    AnswereTxt:AnswereTxt
                }]

     } ]
    
        }

          createTest({data}).then(() => {
            console.log('ok') ;        
        }).catch(err =>  console.log('erorr',err));

    }

    searchStudent()
    {
        var student = window.prompt("Enter name of student");

        getUsers().then(res => {
        if(res){
            res.data.data.map(function(v){
                if(v.name.first === student)
                    alert("פרטי תלמיד:"
                    +"                   "+
                    "מייל התלמיד: "+ v.email +"***" +
                    "שם משפחה: "+v.name.last);
            })
        }
    }).catch(err =>  console.log('have a err!!!!',err));
    }

render(){
 
    return(
     


		<div className="admin">
					<div id="mainWelcomeAdmin">
						<h2>ברוך הבא דף מורה</h2>

{/* <ul id="buttonAdmin">
<li> <button className="btnAdmin" type="button" onClick={this.handle}>  מספר התלמידים שנרשמו לאתר </button></li>

<li> <button className="btnAdmin" type="button" onClick={this.mailFirstStudents}>  המייל של התלמיד הראשון </button></li>

<input type="text" className="btnAdminInput" placeholder='הקלד מספר סידורי של התלמיד' onChange={(e) =>{this.setState({val: e.target.value})}}/>
        {"("+this.state.val+")"} 

<li> <button className="btnAdmin" type="button" onClick={()=>{this.mailStudents(this.state.val)}}>  המייל של תלמיד מסויים </button></li>

<li> <button className="btnAdmin" type="button" onClick={this.nameOfStudents}>  שמות התלמידים </button></li> 



</ul> */}
{/* <div>
 <button className="btnAdmin" type="button" onClick={this.nameOfStudents}>  שמות התלמידים </button>

 {this.state.isClicked && looped}
 </div> */}

<div className='btnAdminRight'>
{/* <button className='Admin_btn_1'> התלמידים שלי</button> */}
<button className='Admin_btn_1' onClick={this.nameOfStudents}> מיילים תלמידים</button>
<button className='Admin_btn_1' onClick={this.createTest}> צור מבחן</button>

{/* <button className='Admin_btn_1'> הוסף מבחן </button> */}
{/* <button className='Admin_btn_1'> הוסף תלמיד </button> */}
</div>
<div className='btnAdminLeft'><button className='Admin_btn_1' onClick={this.searchStudent}> חיפוש תלמיד </button>
{/* <button className='Admin_btn_1'> חיפוש מבחן </button> */}
{/* <button className='Admin_btn_1'>דוחות</button> */}


{/* <button className="btnAdmin" type="button" onClick={this.mailFirstStudents}>  המייל של התלמיד הראשון </button> */}

</div>

                
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