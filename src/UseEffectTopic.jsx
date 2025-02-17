// import React, { useState , useEffect } from 'react'
// import {employeeData} from './Data'
// const apiData = "https://jsonplaceholder.typicode.com/posts"

// const UseEffectTopic = () => {
//     // console.log("Checking for Data ",employeeData)
//     const[employee , setEmployee]=useState("")

//     const employeeHandler = async ()=>{
//         const response = await fetch(apiData)
//         const newData = await response.json()
//         setEmployee(newData)
//         console.log("Data coming through fetch",employee);
//     }
//     // employeeHandler()
//     useEffect(()=>{
//         employeeHandler();
//     },[])
//   return (
//     <div>
//         {/* {employeeData.map((item)=>{
//             return(
//                 <div>
//                     <h1>{item.name}</h1>
//                 </div>
//             )
//         })} */}
//     </div>
//   )
// }

// export default UseEffectTopic

import { useState , useEffect } from "react";

const apiData = "https://jsonplaceholder.typicode.com/posts"

const UseEffectTopic = () =>{
    const [extData , setExtData] = useState([])

    const dataHandler = async ()=>{
        const response = await fetch(apiData)
        const newData = await response.json()
        setExtData(newData)
        console.log("Data coming",extData)

    }
    // dataHandler()
    useEffect(()=>{
        dataHandler()
    },[])
    return (
        <div>
            {
              extData.map((item)=>{
                return(
                    <div>
                        <h1>{item.title}</h1>
                    </div>
                )
              })  
            }
        </div>
    )
}

export default UseEffectTopic;