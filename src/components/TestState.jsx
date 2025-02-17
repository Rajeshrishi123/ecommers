import React, { useState } from 'react'
import Home from '../Routes/Home'
import About from '../Routes/About'
import ContachUs from '../Routes/ContachUs'
import Services from '../Routes/Services'

const TestState = () => {

    const [home , setHome] = useState(true);
    const [about , setAbout] = useState(false);
    const [contactUs , setContactUs] = useState(false);
    const [services , setServices] = useState(false);

    const showHome = () =>{
        setHome(true)
        setAbout(false)
        setContactUs(false)
        setServices(false)

    }

    const showAbout = () =>{
        setHome(false)
        setAbout(true)
        setContactUs(false)
        setServices(false)

    }

    const showContactUs = () =>{
        setHome(false)
        setAbout(false)
        setContactUs(true)
        setServices(false)

    }

    const showServices = () =>{
        setHome(false)
        setAbout(false)
        setContactUs(false)
        setServices(true)

    }

  return (
    <div>
        <div style={{display:"flex" , gap:"20px"}}>
        <button onClick={showHome}>Home</button>
        <button onClick={showAbout}>About</button>
        <button onClick={showContactUs}>ContactUs</button>
        <button onClick={showServices}>Services</button>
      </div>
        {home && <Home/>}
        {about && <About/>}
        {contactUs && <ContachUs/>}
        {services && <Services/>}

        {/* <About/>
        <ContachUs/>
        <Services/> */}
    </div>
  )
}

export default TestState