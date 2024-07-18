import React from "react";
import { useState } from "react";

function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if (!username || !password) {
        alert("Please enter a valid username/password.");
        return;
    }
    try {
        const response = await fetch(" https://fsa-jwt-practice.herokuapp.com/signup", {
            method:"POST",
            body:JSON.stringify({username, password}),
            headers: {
                "Content-type":"application/json",
            },
        });
        const result = await response.json();
        if (result.success) {
            setError(null);
            setUsername("");
            setPassword("");
            // Re-sets inputs to blank on successful exchange
            setToken(result.token);
        }
        console.log(result);

    } catch (error) {
       console.log(error);
       setError(true); 
    }
    
  }

  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>Something's amiss... please try again.</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username: 
          <input 
            type="text" 
            value={username} 
            onChange={(e)=>{
              setUsername(e.target.value);
          }}/>
        </label>
        <br />
        <label>
          Password: 
            <input 
              type="password" 
              value={password} 
              onChange={(e)=>{
                setPassword(e.target.value);
          }}/>
        </label>
        <br />
        <button >Submit</button>
        {/* ALTERNATE: <input type="submit" value="" /> */}
      </form>
    </>
  );
}

export default SignUpForm;
