import { Button } from "@mui/material";
import Input from "../../library/components/input";

import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {

    const  [signUpData , setSignUpData] = useState({
       name: '' ,
       email: '', 
       password: '',
 
    })


    const handleChange = (e)=> {
           const updatedData = {...signUpData};
           updatedData[e.target.name] = e.target.value;
           setSignUpData(updatedData)
    }
    const handleContinue= async()=> {
        const options = {
            method: 'POST',
            headers: new Headers({projectID:'pawxm68lskm5'}),
            body: JSON.stringify(signUpData)
        }
        const res = await fetch('https://academics.newtonschool.co/api/v1/user/signup' ,options);
        const resJson = await res.json();
        console.log(resJson , 'signup')
    }
  return (
    <div className="flex login">
        <h3 style= {{color:'white'}}>Sign Up</h3>
      <Input  onChange = {handleChange} name = 'name' placeholder = 'Enter UserName' type= 'text' classes = 'login-input'/>
      <Input  onChange = {handleChange} name = 'email' placeholder ='Enter Email' type= 'email' classes = 'login-input'/>
      <Input onChange = {handleChange}  name = 'password'  placeholder ='Enter Password' type= 'password' classes = 'login-input'/>
      <Button  onClick = {handleContinue} variant="contained">Continue</Button>
      <span style= {{color:'white'}}>Already Have A Account ?</span>
      <Link to = '/login'>
      <Button  variant="contained">Login Here</Button>
      </Link>
    </div>
  );
};

export default SignUp;



// export default vs named export 



// async and await