


import React,{useState, useEffect, useCallback} from "react";
import ReactDOM from "react-dom";
import { set, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {createTest} from './actions/index'

function Profile() {
  const {
    register,
    handleSubmit,
    watch,
    
    formState: { errors }
  } = useForm({
    criteriaMode: "all"
  });
  const [userInfo, setUserInfo] = useState(null);
  const [val, setVal] = useState(false);


  useEffect(async () => { 
    const findUserByEmail = async() => {
      const email = window?.userProfile?.email;
      const {data} = await findUser({email})
      console.log('findUserByEmail data',data)
      console.log('findUserByEmail result',data?.result)
      setUserInfo(data?.result)
    }

    findUserByEmail();
  } ,[])

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation
  console.log(watch("example")); // you can watch individual input by pass the name of the input
  console.log('errors',errors); 
  console.log('userInfo',userInfo); 

   return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Test Name</label>
      <input
        defaultValue={userInfo?.name?.first}
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

      <label>Test Id</label>

      <input 
        defaultValue={userInfo?.name?.last}
        {...register("testId",  {
          required: "You must specify a testId",
        })}
      />

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

      <label>classId</label>
      <input 
          defaultValue={userInfo?.email}
          {...register("classId",  {
          required: "You must specify a classId",
        })}
      />
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

      <label>ClasseName</label>

      <input
        name="classeName"
        type="classeName"
        defaultValue={''}
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



        <label>questionNumber</label>

        <input
            name="questionNumber"
            type="questionNumber"
            defaultValue={4}
            {...register("classeName", {
                required: "You must specify a classeName"
            })}
        />

        <ErrorMessage
            errors={errors}
            name="questionNumber"
            render={({ messages }) => {
                console.log("questionNumber messages", messages);
                return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                    ))
                : null;
            }}
        />

        {[...Array(parseInt(getValues("questionNumber")))].map((x, i) =>
                <Fragment key={i}>
                        <label>questionId</label>

                        <input
                            name="questionId"
                            defaultValue={4}
                            {...register("questionId", {
                                required: "You must specify a questionId"
                            })}
                        />

                        <ErrorMessage
                            errors={errors}
                            name="questionId"
                            render={({ messages }) => {
                                console.log("questionId messages", messages);
                                return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                    ))
                                : null;
                            }}
                        />


                        <label>questionText</label>

                        <input
                            name="questionText"
                            defaultValue={4}
                            {...register("questionText", {
                                required: "You must specify a questionText"
                            })}
                        />

                        <ErrorMessage
                            errors={errors}
                            name="questionText"
                            render={({ messages }) => {
                                console.log("questionText messages", messages);
                                return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                    ))
                                : null;
                            }}
                        />

                        <label>answerNumber</label>

                        <input
                            name="answerNumber"
                            defaultValue={4}
                            {...register("answerNumber", {
                                required: "You must specify a answerNumber"
                            })}
                        />

                        <ErrorMessage
                            errors={errors}
                            name="answerNumber"
                            render={({ messages }) => {
                                console.log("answerNumber messages", messages);
                                return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                    ))
                                : null;
                            }}
                        />


                        {[...Array(parseInt(getValues("answerNumber")))].map((x, i) =>
                            <Fragment key={i}>
                                <label>AnswerId</label>

                                <input
                                    name="answerId"
                                    defaultValue={4}
                                    {...register("answerId", {
                                        required: "You must specify a answerId"
                                    })}
                                />

                                <ErrorMessage
                                    errors={errors}
                                    name="answerId"
                                    render={({ messages }) => {
                                        console.log("answerId messages", messages);
                                        return messages
                                        ? Object.entries(messages).map(([type, message]) => (
                                            <p key={type}>{message}</p>
                                            ))
                                        : null;
                                    }}
                                />


                                <label>AnswerText</label>

                                <input
                                    name="answerText"
                                    defaultValue={4}
                                    {...register("answerText", {
                                        required: "You must specify a answerText"
                                    })}
                                />

                                <ErrorMessage
                                    errors={errors}
                                    name="answerText"
                                    render={({ messages }) => {
                                        console.log("answerText messages", messages);
                                        return messages
                                        ? Object.entries(messages).map(([type, message]) => (
                                            <p key={type}>{message}</p>
                                            ))
                                        : null;
                                    }}
                                />

                                <label>IsTrue</label>

                                <input
                                    name="isTrue"
                                    type="checkbox"

                                    {...register("isTrue", {
                                        required: "You must specify a answerNumber"
                                    })}

                                    onChange={e => {
                                        setVal(!val);
                                      }}
                                      checked={val}
                                />

                                <ErrorMessage
                                    errors={errors}
                                    name="answerNumber"
                                    render={({ messages }) => {
                                        console.log("answerNumber messages", messages);
                                        return messages
                                        ? Object.entries(messages).map(([type, message]) => (
                                            <p key={type}>{message}</p>
                                            ))
                                        : null;
                                    }}
                                />
                            </Fragment>
                        )}

                </Fragment>
        )}
      <input type="submit" />
    </form>
  );
}
export default Profile