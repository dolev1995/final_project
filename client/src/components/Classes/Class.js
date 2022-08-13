import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {ShowAllClasses} from '../../actions/index'
// import '../.././sidebar/./Sidebar.css';
import './Class.css';
//import './Sidebar.css';


function Class (){
    let navigate = useNavigate();
    const [classes, setClasses] = useState(null);

    const getAllClasses = async () =>{
        const res = await ShowAllClasses();
        console.log('res',res.data)
        setClasses(res && res.data && res.data.data)
    }

    useEffect(() => {
        getAllClasses()
    },[])


    const handleSubmit = async(event,url) => {
        event.preventDefault();
        navigate(url);
      }
   return (
       <div className='Test'>
           <h1>בחר את המקצוע עליו תרצה להיבחן:</h1>
             <ul className='TestList'></ul>
          <ul>
          {classes && classes.length && classes.map((item, index) => {
            return (<li key={index} className="row">
                 <div id="button"  onClick={(event)=>handleSubmit(event,`/Test?testId=${item.classId}`)}> 
                        {item.ClasseName || ''} 
                </div>
            </li>);
          })}
     </ul>
        {/* <h1 className="warsixDay">מלחמת ששת הימים</h1>
        <button onClick={(event)=>handleSubmit(event,'/warsixDay')}>מבחן על מלחמת ששת הימים</button>
    
        
        <h2 className="english">אנגלית</h2>
        <button>כיתה א</button>
    
        <h3 className="history">היסטוריה</h3>
        <button>כיתה א</button> */}
  
       </div>
   )
}

export default Class