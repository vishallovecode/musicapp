import logo from './logo.svg';
import './App.css';

import CustomAvatar from './library/components/Avatar';
import Input from './library/components/input';
import Header from './library/components/header';
import Login from './screen/login';
import { Route, Routes } from 'react-router-dom';
import Home from './screen/home';
import SignUp from './screen/signup';

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path= '/' element ={<Home/>} />
        <Route path= '/login' element ={<Login/>} />
        <Route path= '/signup' element ={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;


// display 
// container 
