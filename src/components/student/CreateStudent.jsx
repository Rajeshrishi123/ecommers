import { useState } from "react";
import { useNavigate } from "react-router-dom";


const CreateStudent = () => {

    const[id , setId] = useState("");
    const[name , setName] = useState("");
    const[sal , setSal] = useState("");
    const[companyName , setCompanyName] = useState("");
    const navigate=useNavigate();
    const [validation , setValidation] = useState(false)
    


    const submitHandle = async (e)=>{
        e.preventDefault();
        const values={id,name,sal,companyName}
       
        try {

            const data = await fetch('http://localhost:8091/save',{
                method:'POST',
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(values)
            }
            
        )
        alert("Data saved successfully !!!")
            navigate('/table')
            
            
        } catch (error) {
            console.log(error.message)
            
        }
        
        

    }
  return (
    <div className="'mainSection'">
        <form onSubmit={submitHandle} className="formSection">
        

         <div>  
            <label htmlFor="id">Id:</label>
            <input 
            type="number"
            id='id'
            value={id}
            placeholder="enter id"
            onChange={(e)=>setId(e.target.value)}
            onMouseDown={()=>setValidation(true)}
            // required
             />
             <br />
             {id.length === 0 && validation && <span>Please enter id</span>}
             </div>

           <div>
           <label htmlFor="name">Name:</label>
            <input 
            type="text"
            id='name'
            value={name}
            placeholder="enter name"
            onChange={(e)=>setName(e.target.value)}
            onMouseDown={()=>setValidation(true)}
             required
             />
             <br />
             {name.length === 0 && validation &&<span>Please enter name</span>}
           </div>

           <div>
           <label htmlFor="salary">Salary:</label>
            <input 
            type="number"
            id='salary'
            value={sal}
            placeholder="enter salary"
            onChange={(e)=>setSal(e.target.value)}
            onMouseDown={()=>setValidation(true)}
            required

             />
             <br />
             {sal.length === 0 &&  validation && <span>Please enter salary</span>}
           </div>

          <div>
          <label htmlFor="companyName">CompanyName:</label>
            <input 
            type="text"
            id='companyName'
            value={companyName}
            placeholder="enter companyName"
            onChange={(e)=>setCompanyName(e.target.value)}
            onMouseDown={()=>setValidation(true)}
            required
             />
             <br />
             {companyName.length === 0 && validation && <span>Please enter companyName</span>}
             
          </div>
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default CreateStudent