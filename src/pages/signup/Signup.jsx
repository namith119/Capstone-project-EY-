import { useContext, useState } from "react";
import "./signup.scss";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"


const Signup = () => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPassError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const navigate = useNavigate();
  // const clearInputs = ()=>{
  //   setEmail("");
  //   setPassword("");
  // }
  const handleSignup = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/login")
        // ...
      })
      .catch((error) => {
        console.log(error);
        let errorCode = error.code;
        // let errorMessage = error.message;
        if(errorCode === 'auth/email-already-in-use'){
          setHasAccount(true);
          setPassError(false);
          setEmailError(false);
        }else if(errorCode === 'auth/invalid-email'){
          setEmailError(true);
          setPassError(true);
          setHasAccount(false);
        }else if(errorCode === 'auth/missing-email'){
          setEmailError(true);
          setPassError(false);
          setHasAccount(false);
        }else if(errorCode === 'auth/internal-error'){
          setPassError(true);
          setHasAccount(false);
          setEmailError(false);
        }
      });

  };

  return (
    <div className="signup">
      
      <form onSubmit={handleSignup} class="signupform">
        <div class ="btn">
          <button class = "signUpBtn">Sign Up</button>
        </div>
        <input
          type="text"
          placeholder="Username"
          class = "sinput"
          // onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          class = "sinput"
        />{emailError && <span class = "signuperr">Email field cannot be empty.</span>}
        <input
          type= "number"
          placeholder="Mobile Number"
          // onChange={(e) => setEmail(e.target.value)}
          class = "sinput"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          class = "sinput"
        />{passwordError && <span class = "signuperr">Password field cannot be empty.</span>}
        {hasAccount && <span class = "signuperr">User Email ID already exists.</span>}
        <div class = "checkBox">
          <input
            type = "checkbox" name = "checkbox" id = "checkbox"/>
            <span class = "text">I agree with the <u>terms & conditions</u>.</span>
        </div>
        <button type="submit" class = "sgnup">Sign Up</button><br/>
        
      </form>
    </div>
  );
};

export default Signup;
