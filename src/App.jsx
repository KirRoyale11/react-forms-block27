import {useState} from "react";
import Authenticate from "./components/Authenticate/Authenticate";
import SignUpForm from "./components/SignUpForm/SignUpForm";





function App() {
  const [token, setToken] = useState(null);

  return (
    <>
     <SignUpForm setToken={setToken}/>
     
     <Authenticate token={token}/>
    </>
  )
}

export default App
