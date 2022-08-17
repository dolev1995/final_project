import React, {Component} from 'react'
import './App.css';
import {getUsers} from './actions'
import {createTest} from './actions'
import {CreateTestAdmin} from './CreateTestAdmin'


class Admin extends Component{
    constructor() {
		super();
        this.state = {
           show :false,
           val: 1,
           isClicked: false
        }
        this.setShow = this.setShow.bind(this)
        // this.onClick2 = this.onClick2.bind(this)
	}



    // onClick2(){
    //     this.setState({
    //         show :true,
    //     });
    // }

    mailFirstStudents(){
        getUsers().then(res => {
            console.log('res',res) ;   
        if(res){
            console.log("have res valid");
            alert(res.data.data[0].email)
        }
        }).catch(err =>  console.log('have a err!!!!',err));
    }


    nameOfStudents(){
        getUsers().then(res => {
            console.log('res',res) ;   
            if(res){
                var myWindow = window.open("", "MsgWindow", "width=1000,height=200");
                res.data.data.map(item => {
                    myWindow.document.write(item.email+'*');
                    <br/>
                })
            }
        })
    }

    mailStudents(e){
        getUsers().then(res => {
            console.log('res',res) ;  
            if(res){
                alert(res.data.data[e].email)
            }
        }).catch(err =>  console.log('have a err!!!!',err));
    }

    setShow (show ){
        this.setState({
            show
        });
    }

    createTest = () =>{

        this.setState({
            show: true
        });
        console.log('show', this.state.show)
        return;
        // console.log('oooook') 
        // // var question = window.prompt("Enter your question");
        // // alert(typeof question)
        // var testId = 7 //window.prompt("Enter your testId");
        // var testName = 'lol' //window.prompt("Enter your testName");
        // var classId = 2//window.prompt("Enter your classId");
        // var ClasseName ='מתמטיקה'// window.prompt("Enter your ClasseName");
        // var questionId = 1 // window.prompt("Enter your questionId");
        // var questionText = 'למה'//window.prompt("Enter your questionText");
        // var AnswerId = 1//window.prompt("Enter your AnswerId");
        // var AnswereTxt = 'כובע' //window.prompt("Enter your AnswereTxt");

        // const data = {
        //     testId:Number(testId),
        //     testName:testName,
        //     classId:Number(classId),
        //     ClasseName:ClasseName,
        //     questions: [{
        //         questionId:Number(questionId),
        //         questionText:questionText,
        //         ansers: [{
        //             AnswerId:Number(AnswerId),
        //             AnswereTxt:AnswereTxt,
        //             isTrue:Boolean
        //         }]
        //     }]
        // }

        // createTest({data}).then(() => {
        //     console.log('ok') ;        
        // }).catch(err =>  console.log('erorr',err));

    }

    searchStudent() {
        const student = window.prompt("Enter name of student");
        getUsers().then(res => {
            if(res){
                res.data.data.map(item =>  {
                    if(item.name.first === student){
                        alert("פרטי תלמיד:"
                        +"                   "+
                        "מייל התלמיד: "+ item.email +"***" +
                        "שם משפחה: "+item.name.last);
                    }
                    return null;
                })
            }
        }).catch(err =>  console.log('have a err!!!!',err));
    }

    mainPageRender = () => {
        return(
            <div className="admin">
                <div id="mainWelcomeAdmin">
                    <h2>ברוך הבא דף מורה</h2>
                    <div className='btnAdminRight'>
                        <button className='Admin_btn_1' onClick={this.nameOfStudents}> מיילים תלמידים</button>
                        <button className='Admin_btn_1' onClick={this.createTest}> צור מבחן</button>
                    </div>
                    <div className='btnAdminLeft'>
                        <button className='Admin_btn_1' onClick={this.searchStudent}> חיפוש תלמיד </button>
                    </div>
                </div>
            </div>
        )
    }

    render(){
        console.log('render show1', this.state.show)

         return this.state.show ? <CreateTestAdmin setShow={this.setShow} /> : this.mainPageRender();
    }
}

export default Admin;
