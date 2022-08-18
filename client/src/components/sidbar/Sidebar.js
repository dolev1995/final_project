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
        <h4>שלום אוהד</h4>
        <h1>מסך תפריט:</h1>
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