import React, {useEffect, useState} from "react";
import {GradeCalculation} from './actions'

export default function GradeC() {

    const testId = queryParams.get("testId")
    const AnswerId = queryParams.get("AnswerId")

    const [testsByClassId, setTestsByClassId] = useState(null);
    console.log('testsByClassId',testsByClassId)
    const getGrade = async () =>{
        const res = await GradeCalculation(AnswerId);
        setTestsByClassId(res && res.data && res.data.data)
    }

    function increaseHandler() {
        setCount(count + 20);
            if (props.save) {
            props.save('GradeCalculation', count + 20);
        }
    }
  
  
    useEffect(() => {
        getGrade();
    },[])
}