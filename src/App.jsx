import React,{useReducer} from 'react'
import UseEffectTopic from './UseEffectTopic'
import FormHandling from './components/FormHandling'
import {Routes,Route} from 'react-router-dom'
import ContachUs from './Routes/ContachUs'
import Home from './Routes/Home'
import About from './Routes/About'
import NavBar from './Routes/NavBar'
import './App.css'
import Services from './Routes/Services'
import StudentTable from './components/student/StudentTable'
import CreateStudent from './components/student/CreateStudent'
import ViewStudent from './components/student/ViewStudent'
import EditStudent from './components/student/EditStudent'
import LogIn from './components/student/LogIn'

// const initialState = {currentComponent:"Home"}

// const reducer = (state , action) =>{
//        switch(action.type){
//         case "show_Home" :
//           return {currentComponent:"Home"}

//           case "show_About" :
//             return {currentComponent:"About"}

//             case "show_ContactUs" :
//               return {currentComponent : "ContactUs"}

//               case "show_Services" :
//               return {currentComponent : "Services"}

//               default :
//               return state
//        }
// }

const App = () => {
  // const [state , dispatch] = useReducer(reducer , initialState)
  
  return (
   
    <div>

<Routes>
  <Route path='/' element={<LogIn/>}/>
  <Route path='/table' element={<StudentTable/>}/>
  <Route path='/createStudent' element={<CreateStudent/>}/>
  <Route path='/viewStudent/:studentId' element={<ViewStudent/>}/>
  <Route path='/editStudent/:studentId' element={<EditStudent/>}/> 
  
</Routes>































{/* <FormHandling/> */}

      {/* <NavBar dispatch = {dispatch}/> */}
     {/* <Routes>
      <Route path='/cricket' element={<ContachUs/>}/>
      <Route path='/vollyBall' element={<Home/>}/>
      <Route path='/hocky' element={<About/>}/>
      <Route path='/pubgi' element={<Services/>}/>
     </Routes> */}
      {/* <div>
        {state.currentComponent === "Home" && <Home/>}
        {state.currentComponent === "About" && <About/>}
        {state.currentComponent === "ContactUs" && <ContachUs/>}
        {state.currentComponent === "Services" && <Services/>}
      </div> */}
      
    </div>
  )
}

export default App