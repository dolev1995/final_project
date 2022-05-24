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
      </div>
  );
}

export default Sidebar