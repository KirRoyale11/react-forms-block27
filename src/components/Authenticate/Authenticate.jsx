import React, {useState} from 'react';
// import SignUpForm from '../SignUpForm/SignUpForm';

function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    const handleClick = async () => {
        try {
           console.log("Clicked!");
           const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method:"GET",
                headers:{
                    "Content-type":"application/json",
                    Authorization: `Bearer ${token}`,
                },

           }); 
           const result = await response.json();
           console.log(result);
           if (result.success) {
            setSuccessMessage(result.message);
           }
        } catch (error) {
            console.error(error);
        }
    }

    

  return (
    <>

    <h2>Authenticate</h2>
    {error && <p>Could Not Authenticate</p>}
    {successMessage & <p>{successMessage}</p>}
    <button onClick={handleClick}>Authenticate</button>
    </>
  );
}

export default Authenticate