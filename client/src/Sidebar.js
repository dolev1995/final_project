import React from 'react'
import {SidebarData} from './SidebarData'
import { useNavigate } from "react-router-dom";
import './Sidebar.css';
import {getUsersByEmail} from './actions'
import {useLocation} from 'react-router-dom';


function Sidebar(props) {
  const location = useLocation();

  console.log('Sidebar')
  console.log('S')
//console.log('this.props.emailOfStudent: ' + props.email)

const {email} = this.props

  console.log('props: ' +email.email )
  
  let navigate = useNavigate();

  const handleSubmit = async(event,url) => {
    event.preventDefault();
    navigate(url);
  }
  const handle = () =>
  {
    getUsersByEmail(this.props.emailOfStudent).then(res => {
          console.log('res',res) ;   
      if(res){

          console.log("have res valid");
          console.log("props: " + props);
          // for(let i=0;i<res.data.data.length)
          // return(res.data.data[6].email)
          //alert(res.data.data.length)
      }
  }).catch(err =>  console.log('have a err!!!!',err));
  }
  

  return (
      <div className='Sidebar'>


        <button className="btnAdmin" type="button" onClick={()=>handle()}>פרטים אישיים</button>


          <ul className='SidebarList'></ul>
          <ul>
          {SidebarData.map((item, index) => {
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