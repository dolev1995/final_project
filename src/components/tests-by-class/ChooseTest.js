import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import {ShowTestsByClassId} from '../../actions'
// import ".././test/Test.css";
   function ChooseTest () {
    let navigate = useNavigate();
    const queryParams = new URLSearchParams(window.location.search)
    const testId = queryParams.get("testId")
    // const location = queryParams.get("location")

    const [testsByClassId, setTestsByClassId] = useState(null);
    console.log('testsByClassId',testsByClassId)

    const getTestsByClassId = async () =>{
        const res = await ShowTestsByClassId(testId);
        setTestsByClassId(res && res.data && res.data.data)
    }

    useEffect(() => {
        getTestsByClassId();
    },[])

    useEffect(() => {
        console.log('useEffect testsByClassId',testsByClassId)
    },[testsByClassId])

    const handleSubmit = async(event,url) => {
        event.preventDefault();
        navigate(url);
    }

   return (
       <div className="Test">
                      <h1>בחר את המקצוע עליו תרצה להיבחן:</h1>

             <ul className='TestList'></ul>
          <ul>
          {testsByClassId && testsByClassId.length && testsByClassId.map((item, index) => {
              console.log('item, index',{item, index})
        return (<li key={index} className="row">
          <div id="button"  onClick={(event)=>handleSubmit(event,`/warsixDay?testId=${item.testId}`)}>{item.testName} 
              </div>
        </li>);
     })}
     </ul>
        {/* <h1 className="warsixDay">מלחמת ששת הימים</h1>
        <button onClick={(event)=>handleSubmit(event,'/warsixDay')}>מבחן על מלחמת ששת הימים</button>
    
        
        <h2 className="english">אנגלית</h2>
        <button>כיתה א</button>
    
        <h3 className="history">היסטוריה</h3>
        <button>כיתה א</button>
   */}
       </div>
   )
}

export default ChooseTest