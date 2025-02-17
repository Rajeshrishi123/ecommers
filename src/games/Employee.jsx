

import React from 'react'
import { employeeData } from '../Data'

const Employee = () => {
    console.log("Data coming from "+employeeData)
  return (
    <div>
        {employeeData.map((item)=>{
             return (
                <div>
                    <h1>{ item.name }</h1>
                    {item.city}
                    <h4>{item.email}</h4>
                    <div>{item.phone}</div>
                    <h2>{item.dept}</h2>
                    <hr />
                
                </div>
             )
        })}
    </div>
  )
}

export default Employee