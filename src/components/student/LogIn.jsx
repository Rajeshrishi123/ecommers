import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [passWord, setPassword] = useState('');

  const logInSubmit = async (e) => {
    const logInValues = { email, passWord };
    e.preventDefault();
    console.log(logInValues);

    try {
      const response = await fetch('http://localhost:8091/logIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logInValues),
      });
  
      if (response.status === 200) {
        const data = await response.json(); // Get the response body
  
        //console.log(data); // For debugging
  
        // If the response body contains success, navigate to the 'table' page
        if (data.message === 'Login successful') { // Adjusted to check the 'message' key
          navigate('/table');
        } else {
          // Handle failure case
          alert("Email or Password is Incorrect")
          console.log('Login failed');
        }
      } else {
        console.log('Login failed with status: ', response.status);
      }
    } catch (error) {
      console.log('Error:', error.message);
    }
  }

  
  

  return (
    <div className='mainSection'>
     

      <form onSubmit={logInSubmit} className='formSection'>

                  <h2>LogIn</h2>

        <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
        <br />

        <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={passWord}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </div>
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LogIn;
