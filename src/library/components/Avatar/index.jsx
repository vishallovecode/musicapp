import { useState } from "react";

import Avatar from '@mui/material/Avatar';


const CustomAvatar = (props) => {
        const {image , text} = props; // the type of pr<ops is always object
        return  <Avatar alt="Remy Sharp" src= {image} >{text}</Avatar>
}

export default CustomAvatar;


// the function in react which start with the upper case  , react will treat that as a component
// you can call or use hooks only inside the function component or custom hooks