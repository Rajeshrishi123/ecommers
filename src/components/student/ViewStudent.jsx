import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewStudent = () => {

    const [view , setView] = useState('');

    const {studentId}=useParams();
    // console.log(studentId)
    

    const viewStudentDetails = async()=>{
        try {
            const data = await fetch ('http://localhost:8091/get/'+studentId)
           const finalData = await data.json();
           setView(finalData);

        } catch (error) {
            console.log(error.message)
            
        }
    }

    useEffect(()=>{
        viewStudentDetails();

    },[])
  return (
    <div>
        <h2>View Student Details</h2>

        {
          view && <div>
            <p><strong>Id:</strong>{view.id}</p>
            <p><strong>Name:</strong>{view.name}</p>
            <p><strong>Salary:</strong>{view.sal}</p>
            <p><strong>Company-name:</strong>{view.companyName}</p>
           <Link to='/table'>Back</Link>
          </div> 
          
        }

    </div>
  )
}

export default ViewStudent