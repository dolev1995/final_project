
// import React,{useState, useEffect} from "react";
// import { handleInputChange } from "react-select/dist/declarations/src/utils";
// import {ShowProfile} from '../../actions/index'
// function Profile (){
//     const [firstName, setFirstName] = useState(null);
//     const [lastName, setlastName] = useState(null);
//     const [email, setEmail] = useState(null);
//     const [password, setPassword] = useState(null);

//    const handleInputChange = (e)  => {
//         e.preventDefault();
//         console.log('e',e)
//    }
  
//     const handleSubmit= (e)=>  {
// 		e.preventDefault();
//         console.log('e',e)
//         console.log("register");

//         const existUser = {
//         	name: {
// 				first: firstName,
// 				last: lastName
// 			},
//             password,
// 			email

//         };

//         ShowProfile(existUser).then(res => {
//             console.log('res',res) ;   
//             if(res){
               
//                     window.userProfile = res && res.data && res.data.data;
           
//             }
//         }).catch(err =>  console.log('err',err));

// 	}

//    return (
//     <form onSubmit={handleSubmit}>

//        <div className="Profile">
//         <h1>Profile</h1>

//         <h2>שם פרטי</h2>
//         <h3>שם משפחה</h3>
//         <h4>מייל</h4>
//        </div>
//        </form>
//    )
// }
// export default Profile


import React,{useState, useEffect, useCallback} from "react";
import ReactDOM from "react-dom";
import { set, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {findUser} from '../../actions/index'
import "./Profile.css";

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
      <label>First Name</label>
      <input
        defaultValue={userInfo?.name?.first}
        {...register("firstName", {
          required: "You must specify a firstName",
          minLength: {
            value: 20,
            message: "firstName must have max 20 characters"
          },
          pattern: { value: "/^[A-Za-z]+$/i", message: "Alphabetical characters only" }
        })}
      />

      <ErrorMessage
        errors={errors}
        name="firstName"
        render={({ messages }) => {
          console.log("messages1", messages);
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
            : null;
        }}
      />

      <label>Last Name</label>

      <input 
        defaultValue={userInfo?.name?.last}
        {...register("lastName",  {
          required: "You must specify a lastName",
          minLength: {
            value: 20,
            message: "lastName must have max 20 characters"
          },
          pattern: { value: "/^[A-Za-z]+$/i", message: "Alphabetical characters only" }
        })}
      />

      <ErrorMessage
        errors={errors}
        name="lastName"
        render={({ messages }) => {
          console.log("messages2", messages);
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
            : null;
        }}
      />

      <label>email</label>
      <input 
          defaultValue={userInfo?.email}
          {...register("email",  {
          required: "You must specify a email",
          minLength: {
            value: 20,
            message: "email must have max 20 characters"
          },
          pattern: { value: "/^[A-Za-z]+$/i", message: "Alphabetical characters only" }
        })}
      />
      <ErrorMessage
        errors={errors}
        name="email"
        render={({ messages }) => {
          console.log("messages2", messages);
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
            : null;
        }}
      />

      <label>Password</label>

      <input
        name="password"
        type="password"
        defaultValue={''}
        {...register("password", {
          required: "You must specify a password",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
          }
        })}
      />

      <ErrorMessage
        errors={errors}
        name="password"
        render={({ messages }) => {
          console.log("messages3", messages);
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
            : null;
        }}
      />
      <input type="submit" />
    </form>
  );
}
export default Profile