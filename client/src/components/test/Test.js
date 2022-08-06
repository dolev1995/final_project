import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import {ShowTestById} from '../../actions'
import {CheckGrade} from "../../actions/index"
import CountDown from "./CountDown"
import "../page/viewGrade"
import "./test.css";

export default function Test() {
  const { register, handleSubmit } = useForm();
  const queryParams = new URLSearchParams(window.location.search)
  const testId = queryParams.get("testId")

  const onSubmit = async (rowData) => {
    const data = {}
    console.log('onSubmit testId ',testId);
    console.log('onSubmit window.userProfile && window.userProfile.email ',window.userProfile && window.userProfile.email);
    console.log('onSubmit rowData ',rowData);
    console.log('window.userProfile.grades',window.userProfile && window.userProfile.grades);


    data.testId = testId;
    data.testAnser = rowData
    data.email =  window.userProfile && window.userProfile.email
    console.log('onSubmit data ',data);
    let test = await CheckGrade(data)
    console.log('CheckGrade(data) ',test);
   

    // console.log(rowData);
    // console.log(Object.entries(rowData));
    // console.log(Object.entries(rowData));

    // Object.entries(rowData).map(([k, v]) => data.testAnser.push(v))
    // console.log(data);

  } 

 
  const [testsByClassId, setTestsByClassId] = useState(null);

  const getTestById = async () =>{
      const res = await ShowTestById(testId);
      const data = res && res.data && res.data.data;
      console.log('data: ', data);
      setTestsByClassId(data);
  }


  useEffect(() => {
    getTestById();
  },[])

  console.log('testsByClassId',testsByClassId)
  return (
      <div className="pageQuestions">
        <form  onSubmit={handleSubmit(onSubmit)}>
          <span className="meesage">תחשוב טוב, יהיה טוב!</span>
            {testsByClassId &&  testsByClassId.questions &&  testsByClassId.questions.map((item, i) => {
              console.log('item, i', item, i)
                return (<div  key={i}>
                    <span className="testSpan"> {item.questionText} </span>
                    {item && item.ansers && item.ansers.map((anser, j) => {
                      return (<div className="qAa" key={j}>  
                                  <input  type={i===2 ? "checkbox" : "radio"} value={'lol' ||anser.AnswerText} {...register(`${item.questionText}`)} />  
                                  {anser.AnswerText} 
                            </div>
                        // return (<option key={j} value={`${anser.AnswerText}`}>{anser.AnswerText}</option>
                    )})}
                </div>
                
            )})}
            {/* {<div className="divOfCountDown"> <CountDown count = {60}/>
            </div>} */}
        <input type="submit" />
        </form>
        </div>
    );
}