import React, { useState } from 'react'
import './FormHandling.css'

function FormHandling() {
    const [userName , setUserName]=useState('')
    const [email , setEmail]=useState('')
    const [password , setPassword]=useState('')

    const formHandler = (e)=>{
       e.preventDefault();
       const final={userName,email,password}
        console.log(final);

    }
  return (
    <div >
       <div className='main'>
     <div className='oye layout'>
     <form onSubmit={formHandler} className='formSection'>
            
            <div className='name'><h4>UserName :</h4></div>
            <input type="text" placeholder='Enter Your Name' onChange={(event)=>setUserName(event.target.value)}/>
            <div className='email'> <h4>Email :</h4></div>
            <input type="email" placeholder='Enter Your email' onChange={(event)=>setEmail(event.target.value)} />
            <div className='pass'><h4>Password :</h4></div>
            <input type="password" placeholder='Enter Your Password' onChange={(event)=>setPassword(event.target.value)}/>
            <br />
            <br />
            <button type='submit'>Submit</button>
           
        </form>
     </div>
       </div>
    </div>
  )
}

export default FormHandling