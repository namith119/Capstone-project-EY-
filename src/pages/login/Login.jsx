import { useContext, useState } from "react";
import "./login.scss";
import {Link} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"

const Login = () => {
  const [errorPass, setPassError] = useState(false);
  const [errorPass1, setPassError1] = useState(false);
  const [errorEmail, setEmailError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        dispatch({type:"LOGIN", payload:user});
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        let errorCode = error.code;
        switch(errorCode){
          case 'auth/wrong-password' :
            setPassError(true);
            setEmailError(false);
            setPassError1(false);
            break;
          case 'auth/invalid-email' :
            setEmailError(true);
            setPassError(false);
            setPassError1(false);
            break;
          case 'auth/internal-error':
            setPassError1(true);
            setPassError(false);
            setEmailError(false);
            break;
          default:
            
        }
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin} className = "loginform">
        <div className ="btn">
          <button className = "signUpBtn">Login</button>
        </div>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className = "linput"
        />
        {errorEmail && <span className = "loginerr">Email ID cannot be empty!</span>}
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className = "linput"
        />
        {errorPass && <span className = "loginerr">Invalid password!</span>}
        {errorPass1 && <span className = "loginerr">Password cannot be empty!</span>}<br/><br/>
        <button type="submit" className = "lgin">Login</button>
        <br/><br/>
        <span className = "register">Don't have an account? <Link to = "/signup" style = {{textDecoration: "underline", color:"white"}}>  Register here!</Link> </span> 
        
      </form>
    </div>
  );
};

export default Login;
