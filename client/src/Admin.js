import React, {Component} from 'react'
import './App.css';
import {getUsers} from './actions'
import {createTest} from './actions'
import {CreateTestAdmin} from './CreateTestAdmin'
import {Link} from 'react-router-dom'


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
                    // myWindow.document.write("שם התלמיד: "+item.name.first+" "+"מייל התלמיד: " +item.email+"<br><br>");
                    myWindow.document.write("Name of student: "+item.name.first+" , "+"Mail of student: " +item.email+"<br><br>");
                    // document.write("<br>");
                    <br/>
                })
            }
        })
    }
    countofgradeOfStudents(){
        
        var counter = 0;
        var nameStudent ="ooooo";
        var max = -1;
        getUsers().then(res => {
            if(res){
                res.data.data.map(item =>  {
                   // if(item.name.first === student && counter === 0){
                        
                        // item.grades.map(g => {
                        //     counter++;
                        //     if(g.testName !== undefined)
                        //     {
                        //    // var myWindow = window.open("", "MsgWindow", "width=1000,height=200");
                        //    // myWindow.document.write("Name of test: "+g.testName+" , "+"Grade of test: " +g.grade+"<br><br>");
                        //     }
                        //     console.log(g.length)    
                        // })
                        console.log(item.grades.length)
                        if(max < item.grades.length)
                        {
                            max = item.grades.length;
                            nameStudent = item.name.first +' ' + item.name.last
                        }
                        
                      
                   // }
                })
                alert("התלמיד המטיין הוא: " + nameStudent)
               
            }
        }).catch(err =>  console.log('have a err!!!!',err));
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
        var counter = 0;
        getUsers().then(res => {
            if(res){
                res.data.data.map(item =>  {
                    if(item.name.first === student && counter === 0){
                        counter++;
                        alert("פרטי תלמיד:"
                        +"                   "+
                        "מייל התלמיד: "+ item.email +"***" +
                        "שם משפחה: "+item.name.last);
                    }
                })
                if(counter === 0)
                    alert("המשתמש לא קיים במערכת :(")
            }
        }).catch(err =>  console.log('have a err!!!!',err));
    }
    grade() {
        const student = window.prompt("Enter name of student");
        var counter = 0;
        getUsers().then(res => {
            if(res){
                res.data.data.map(item =>  {
                    if(item.name.first === student && counter === 0){
                        
                        item.grades.map(g => {
                            counter++;
                            if(g.testName !== undefined)
                            {
                            var myWindow = window.open("", "MsgWindow", "width=1000,height=200");
                            myWindow.document.write("Name of test: "+g.testName+" , "+"Grade of test: " +g.grade+"<br><br>");
                            }    
                        })
                      
                    }
                })
                if(counter === 0)
                    alert("אין ציונים:(")
            }
        }).catch(err =>  console.log('have a err!!!!',err));
    }
   

    mainPageRender = () => {
        return(
            <div className="admin">
                <div id="mainWelcomeAdmin">
                    <h2 className="pageTeacher">דף מורה</h2>
                    <h5 className="welcomeTeacher">ברוך הבא,דולב</h5>
                    <div className='btnAdminRight'>
                        <button className='Admin_btn_1' onClick={this.nameOfStudents}> פרטי תלמידים</button>
                        <button className='Admin_btn_1' onClick={this.countofgradeOfStudents}> התלמיד המצטיין</button>
                        <button className='Admin_btn_1' onClick={this.createTest}> צור מבחן</button>
                    </div>
                    <div className='btnAdminLeft'>
                        <button className='Admin_btn_1' onClick={this.searchStudent}> חיפוש תלמיד </button>
                        <button className='Admin_btn_1' onClick={this.grade}> ציוני תלמיד </button>
                        {/* <Link to="/GrdStd">
                        <button type="button" className='btn_logorregLogin'> ציוני תלמיד</button></Link>     */}
                         <Link to="/Class">
                        <button type="button" className='serchTest'> צפיה במבחנים הקיימים</button></Link>     
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
