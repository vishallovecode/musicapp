import { Button } from "@mui/material";
import Input from "../../library/components/input";
import  './login.css'

const Login = () => {
  return (
    <div className="flex login">
        <h3 style= {{color:'white'}}>Login</h3>
      <Input placeholder = 'Enter Email' type= 'email' classes = 'login-input'/>
      <Input placeholder ='Enter Password' type= 'password' classes = 'login-input'/>
      <Button variant="contained">Login</Button>
      <span style= {{color:'white'}}>Don't Have Account ?</span>
      <Button variant="contained">Sign Up here</Button>
    </div>
  );
};

export default Login;



// export default vs named export 

