import React from 'react'
import {SidebarData} from './SidebarData'
import { useNavigate } from "react-router-dom";
import './Sidebar.css';
function Sidebar() {
  console.log('SidebarQ')
  let navigate = useNavigate();

  const handleSubmit = async(event,url) => {
    console.log('handleSubmit')
    event.preventDefault();
    navigate(url);
  }
 
  

  return (
      <div className='Sidebar'>

{/* <label className='divahTeacher'><small style={{marginRight: 10 + 'px'}}><a href="mailto:admin@gmail.com">שליחת מייל למורה</a></small></label> */}


        <h4>שלום אוהד</h4>
        <h1>מסך תפריט:</h1>
      <label className='divahTeacher'><small style={{marginRight: 10 + 'px'}}><a href="mailto:admin@gmail.com"><img className='imgMail' src="http://store-images.s-microsoft.com/image/apps.4725.14294378363439842.5d3bbc47-2b55-4ca4-8cdc-5708b4da8904.71d2f53c-05e2-4406-aac6-30cfb0de432b"/>שליחת מייל למורה</a></small></label> 

          <ul className='SidebarList'></ul>
          <ul>
          {SidebarData && SidebarData.map((item, index) => {
        return (<li key={index} className="row">
          <div id="icon"  onClick={(event)=>handleSubmit(event,item.link)}>{item.icon} 
              </div>
          <div id= "title"> {item.title} </div>
        </li>);
     })}
     </ul>
     <label className='divah'>נתקלת בבעיה טכנית?<small style={{marginRight: 10 + 'px'}}><a href="mailto:2dolev20@gmail.com">**פנה למנהל המערכת על מנת
								 לדווח על בעיה טכנית</a></small></label>
      </div>
  );
}

export default Sidebar