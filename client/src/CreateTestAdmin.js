


import React,{useState, Fragment, } from "react";
import { set, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {createTest} from './actions/index'
import './CreateTestAdmin.css';


export const CreateTestAdmin = ({setShow}) => {
  const {
    register,
    handleSubmit,
    watch,
    
    formState: { errors }
  } = useForm({
    criteriaMode: "all"
  });
//   const [isVaild, setIsVaild] = useState(new Array(3).fill(false));
  const defaultQuestion = 2;
  const defaultAnswerNumber = 3;

  const [questionNumber, setQuestionNumber] = useState(defaultQuestion);
  const [answerNumber, setAnswerNumber] = useState([2,3]);

  


  const onSubmit = async(data) => {
    console.log(data);

    console.log(JSON.stringify(data));


    createTest({data}).then((res) => {
        console.log('ok') ;   
        console.log('res',res) ;   

        setShow(false);     
    }).catch(err =>  console.log('erorr',err));
    
  }; // your form submit function which will invoke after successful validation
  console.log(watch("example")); // you can watch individual input by pass the name of the input
  console.log('errors',errors); 
  console.log(' render answerNumber',answerNumber)
  console.log(' render questionNumber',questionNumber)

   return (
    <div className="pic">
        {/* <img src={"https://www.reba.org.il/images/Pages/1444579700.jpg"} className="imgTest" alt=" ):תמונה בעייתית"/> */}

    <img src={"https://www.reba.org.il/images/Pages/1444579700.jpg"} className="imgTest" alt=" ):תמונה בעייתית"/>
    <div className="question-form">   <form id="form" onSubmit={handleSubmit(onSubmit)}>

        {/* <label>Test Name</label> */}
        <label className="subjecTest">שם המבחן:</label>
        <input
            placeholder="הקלד שם מבחן"
            {...register("testName", {
            required: "You must specify a Test Name",
            })}
        />

        <ErrorMessage
            errors={errors}
            name="testName"
            render={({ messages }) => {
            console.log("messages1", messages);
            return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                ))
                : null;
            }}
        />

        {/* <label>Test Id</label>

        <input 
            {...register("testId",  {
            required: "You must specify a testId",
            })}
        /> */}

        <ErrorMessage
            errors={errors}
            name="testId"
            render={({ messages }) => {
            console.log("messages2", messages);
            return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                ))
                : null;
            }}
        />

        {/* <label>classId</label>
        <input 
            {...register("classId",  {
            required: "You must specify a classId",
            })}
        /> */}
        <ErrorMessage
            errors={errors}
            name="classId"
            render={({ messages }) => {
            console.log("messages2", messages);
            return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                ))
                : null;
            }}
        />

        {/* <label>ClasseName</label> */}
        <label className="subjecTestReally">נושא המבחן:</label>

        <input
            placeholder="הקלד נושא מבחן"     
            name="classeName"
            {...register("classeName", {
            required: "You must specify a classeName"
            })}
        />

        <ErrorMessage
            errors={errors}
            name="classeName"
            render={({ messages }) => {
            console.log("messages3", messages);
            return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                ))
                : null;
            }}
        />



        <button
            type="button"
            onClick={() => {
                console.log('  Add Question questionNumber',questionNumber)

                if(questionNumber < 6) {
                    setQuestionNumber(questionNumber + 1)
                    const questionNumberCopy = [...answerNumber, defaultAnswerNumber];
                    setAnswerNumber([...questionNumberCopy])
                }
            }}
        >
            הוסף שאלה
        </button>

        <button
            type="button"
            onClick={() => {
                console.log('  remove Question questionNumber',questionNumber)

                if(questionNumber > 2) {
                    setQuestionNumber(questionNumber - 1)
                    const questionNumberCopy = [...answerNumber];
                    questionNumberCopy.pop();
                    setAnswerNumber([...questionNumberCopy])
                }

            }}
        >
            מחיקת שאלה
        </button>


        {[...Array(questionNumber)].map((x, i) =>{
              const fieldName = `questions[${i}]`;
              const questionId = `${fieldName}.questionId`;
              const questionText = `${fieldName}.questionText`;
            return(
                
                <fieldset name={fieldName} key={fieldName}>
                        {/* <label>questionId</label>

                        <input
                            name={questionId} 
                            {...register(questionId, {
                                required: "You must specify a questionId"
                            })}
                        /> */}

                        <ErrorMessage
                            errors={errors}
                            name={questionId}
                            render={({ messages }) => {
                                console.log("questionId messages", messages);
                                return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                    ))
                                : null;
                            }}
                        />


                        <label className="subjecTest">השאלה:</label>

                        <input
                            placeholder="הקלד שאלה"
                            name={questionText}
                            {...register(questionText, {
                                required: "You must specify a questionText"
                            })}
                        />

                        <ErrorMessage
                            errors={errors}
                            name={questionText}
                            render={({ messages }) => {
                                console.log("questionText messages", messages);
                                return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                    ))
                                : null;
                            }}
                        />

                        <button
                            type="button"
                            onClick={() => {
                                console.log(' Add Answer answerNumber',answerNumber)
                                console.log(' Add Answer i',i)
                                console.log(' Add Answer i',answerNumber[i])

                                if(answerNumber[i] < 5) {
                                    const questionNumberCopy = [...answerNumber];
                                    questionNumberCopy[i] = questionNumberCopy[i] + 1;
                                    setAnswerNumber([...questionNumberCopy])
                                }
                            }}
                        >
                             הוסף תשובה
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                console.log(' Remove Answer answerNumber',answerNumber)
                                console.log(' Remove Answer i',i)
                                console.log(' Remove Answer i',answerNumber[i])
                                if(answerNumber[i] > 2) {
                                    const questionNumberCopy = [...answerNumber];
                                    questionNumberCopy[i] = questionNumberCopy[i] - 1;
                                    setAnswerNumber([...questionNumberCopy])
                                }

                            }}
                        >
                            מחיקת שאלה
                        </button>

                        {[...Array(answerNumber[i])].map((x, j) =>{
                        const answerFieldName = `${fieldName}.ansers[${j}]`;
                        const answerId = `${answerFieldName}.answerId`;
                        const answerText = `${answerFieldName}.answerText`;
                        const isTrue = `${answerFieldName}.isTrue`;
                        return(
                            <fieldset name={answerFieldName} key={answerFieldName}>
                                {/* <label>AnswerId</label>

                                <input
                                    name={answerId}
                                    {...register(answerId, {
                                        required: "You must specify a answerId"
                                    })}
                                /> */}

                                <ErrorMessage
                                    errors={errors}
                                    name={answerId}
                                    render={({ messages }) => {
                                        console.log("answerId messages", messages);
                                        return messages
                                        ? Object.entries(messages).map(([type, message]) => (
                                            <p key={type}>{message}</p>
                                            ))
                                        : null;
                                    }}
                                />


                                <label className="subjecTest">התשובה:</label>

                                <input
                                    name={answerText}
                                    {...register(answerText, {
                                        required: "You must specify a answerText"
                                    })}
                                />

                                <ErrorMessage
                                    errors={errors}
                                    name={answerText}
                                    render={({ messages }) => {
                                        console.log("answerText messages", messages);
                                        return messages
                                        ? Object.entries(messages).map(([type, message]) => (
                                            <p key={type}>{message}</p>
                                            ))
                                        : null;
                                    }}
                                />


                                <label className="isTrue">סמן את התשובה הנכונה</label>

                                <input
                                    name={isTrue}
                                    type="checkbox"

                                    {...register(isTrue, {
                                    })}

                                    // onChange={e => {
                                    //     setIsVaild(!isVaild);
                                    // }}
                                    // checked={isVaild}
                                />

                            </fieldset>

                    )})}

            </fieldset>

        )})}
      <input type="submit" />

    </form>
    </div>
    <img src={"https://www.reba.org.il/images/Pages/1444579700.jpg"} className="imgTest2" alt=" ):תמונה בעייתית"/>

 
    </div>
  );
}
