import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import {ShowTestById} from '../../actions'
import {CheckGrade} from "../../actions/index"

import "./test.css";

export default function Test() {
  const { register, handleSubmit } = useForm();
  const queryParams = new URLSearchParams(window.location.search)
  const testId = queryParams.get("testId")

  const onSubmit = (rowData) => {
    const data = {}
    data.testId = testId;
    data.testAnser = rowData
    data.email =  window.userProfile && window.userProfile.email
    console.log(data);
    CheckGrade(data)
    // console.log(rowData);
    // console.log(Object.entries(rowData));
    // console.log(Object.entries(rowData));

    // Object.entries(rowData).map(([k, v]) => data.testAnser.push(v))
    // console.log(data);

  } 

 
  const [testsByClassId, setTestsByClassId] = useState(null);

  const getTestById = async () =>{
      const res = await ShowTestById(testId);
      setTestsByClassId(res && res.data && res.data.data)
  }


  useEffect(() => {
    getTestById();
  },[])

  console.log('testsByClassId',testsByClassId)
  return (
        <form className="pageQuestions" onSubmit={handleSubmit(onSubmit)}>
            {testsByClassId &&  testsByClassId.questions &&  testsByClassId.questions.map((item, i) => {
                return (<div key={i}>
                    <span class="testSpan"> {item.questionText} </span>
                    {item && item.ansers && item.ansers.map((anser, j) => {
                                 return (<div   key={j}>  
                                              <input  type="radio" value={anser.AnswerText} {...register(`${item.questionText}`)} />  
                                              {anser.AnswerText} 
                                        </div>
                        // return (<option key={j} value={`${anser.AnswerText}`}>{anser.AnswerText}</option>
                    )})}
                </div>
                
            )})}

        <input type="submit" />
        </form>
    );
}