import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const StudentTable = () => {

    const [studentData , setStudentData] = useState('')
    const navigate=useNavigate();


    const EditStudent = (id) => {
        navigate('/editStudent/'+id);
    }


    const ViewStudent = (id)=>{
       
        navigate('/viewStudent/'+id);
    }
   

    const deleteStudent = (id)=>{

        try {
            if(window.confirm("Are you sure you want to delete"))
            fetch('http://localhost:8091/del/'+id ,{
                method : "DELETE",
            })
            // window.confirm('Are you sure you want to delete')
            alert("Deleted successfully !!!")
            window.location.reload();
            
        } catch (error) {
            console.log(error.message)
            
        }

    }


    const dataGetting = async ()=>{

    try {

         const data = await fetch ('http://localhost:8091/getAll')
        const finalData= await data.json()
        setStudentData(finalData)
    }
        
     catch (error) {
        console.log(error.message)
    }

}

     useEffect (()=>{
        dataGetting();
        
    },[])
  return (
    <div>
        <h2>Student Table</h2>

    <div className='container'>
   <Link to='/createStudent'>Add New Student</Link>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>CompanyName</th>
                    <th>Action</th>
                </tr>
            </thead>
                <tbody>
                { 
                studentData && studentData.map((item , index) => (
                <tr key={item.id}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.sal}</td>
                <td>{item.companyName}</td>

                <button onClick={()=>{
                    ViewStudent(item.id);
                }}>View</button>

                <button onClick={()=>{
                    EditStudent(item.id);
                }}>Edit</button>

                <button onClick={()=>{
                    deleteStudent(item.id)
                    }}>Delete</button>

                </tr>
                ))
            }
            </tbody>  
        </table>
    </div>
    </div>
  )
}

export default StudentTable