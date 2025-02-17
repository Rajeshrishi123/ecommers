import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditStudent = () => {
     const[id , setId] = useState("");
        const[name , setName] = useState("");
        const[sal , setSal] = useState("");
        const[companyName , setCompanyName] = useState("");
        const navigate=useNavigate()
        

    const {studentId}=useParams();

   

     const viewStudentDetails = async()=>{
            try {
                const data = await fetch ('http://localhost:8091/get/'+studentId)
               const finalData = await data.json();
               setId(finalData.id)
               setName(finalData.name)
               setSal(finalData.sal)
               setCompanyName(finalData.companyName)
    
            } catch (error) {
                console.log(error.message)
                
            }
        }
    
        useEffect(()=>{
            viewStudentDetails();
    
        },[])

    
    const submitHandle = async(e)=>{
        e.preventDefault()
    const values = {id,name,sal,companyName}
    console.log(values)
       try {
        await fetch ('http://localhost:8091/update',{
            method:'PUT',
            headers:{
              "content-type": "application/json"
            },

            body:JSON.stringify(values)
      
              })
        alert("student data updated successfully.")
        navigate("/table")
        
       } catch (error) {
        console.log(error.message)
        
       }
    }

  return (
   
    <div>
         <h2>Edit Student Details</h2>

         
            <form onSubmit={submitHandle}>

                <div>
                <label htmlFor="id">Id:</label>
                <input type="number"
                id="id" 
                name='id'
                value={id}
                onChange={(e)=>setId(e.target.value)}
                 
                />
                
                </div>

                <div>
                <label htmlFor="name">Name:</label>
                <input 
                type="text"
                id="name" 
                name='name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                
                />
              
                </div>

              <div>
              <label htmlFor="salary">Salary:</label>
                <input type="number"
                id="salary" 
                name='salary'
                value={sal}
               onChange={(e)=>setSal(e.target.value)}
                 
                />
                
              </div>

               <div>
               <label htmlFor="companyName">CompanyName:</label>
                <input type="text"
                id="companyName" 
                name='companyName'
                value={companyName}
                onChange={(e)=>setCompanyName(e.target.value)}
                 
                />
                
               </div>

               <button type='submit'>Update</button>
               <Link to='/table'>Back</Link>
                
            </form>

           
           
         </div>
         
        
    
  )
}

export default EditStudent