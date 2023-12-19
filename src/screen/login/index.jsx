import { Button } from "@mui/material";
import Input from "../../library/components/input";
import  './login.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();


  const  [loginData , setLoginData] = useState({
    email: '', 
    password: '',
    "appType" : "music"
 })


 const handleChange = (e)=> {
  const updatedData = {...loginData};
  updatedData[e.target.name] = e.target.value;
  setLoginData(updatedData)
}

  const handleContinue= async()=> {
    const options = {
        method: 'POST',
        headers: new Headers({projectID:'9fc41adjs85k' , 'Content-Type': 'application/json'} ),
        body: JSON.stringify(loginData)
    }
    const res = await fetch('https://academics.newtonschool.co/api/v1/user/login' ,options);
    const resJson = await res.json();
    localStorage.setItem('token' , resJson.token)
    navigate('/')

}
  return (
    <div className="flex login">
        <h3 style= {{color:'white'}}>Login</h3>
      <Input onChange= {handleChange} name= 'email' placeholder = 'Enter Email' type= 'email' classes = 'login-input'/>
      <Input  onChange= {handleChange} name = 'password' placeholder ='Enter Password' type= 'password' classes = 'login-input'/>
      <Button onClick= {handleContinue} variant="contained">Login</Button>
      <span style= {{color:'white'}}>Don't Have Account ?</span>
      <Link to ='/signup'>
      <Button   variant="contained">Sign Up here</Button>
      </Link>
    </div>
  );
};

export default Login;



// export default vs named export 

