import React , {useState}from 'react'


const StateManagemant = () => {
    const[state , setState] = useState(5000)
    const[userName , setUserName] = useState("Rishi")
    const[pilet , setPilet] = useState("")
    // console.log("This is UseState",state)
    console.log("This is UseState",userName)
    // setUserName("Raj")
    const stateHandler = () => {
        setState(3000);
        setUserName("Dini")
        setPilet("Boom")
    }

  return (
    <div>
        <h1>{state}</h1>
        <h1>{userName}</h1>

        <button onClick={stateHandler}>changeName</button>
        <h1>{pilet}</h1>

        {/* <button onClick={statehandler}>ChangeState</button> */}
    </div>
  )
}

export default StateManagemant

//Increment
//Decrement