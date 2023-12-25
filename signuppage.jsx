import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Email } from '@mui/icons-material';
import { Router } from 'react-router-dom';
import Nav from './nav';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [cus,setCus]=useState('')
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [emailerror, setemailerror] = useState('');
  const [passworderror, setpassworderror] = useState('');
  const [cuseroor, setcuseroor] = useState('');
  const [error, setError] = useState(null);
  const[status,setstatus]=useState(false)
  const[em,setem]=useState()
  const[pm,setpm]=useState()
  const[nav,setnav]=useState()

  function isValidEmail(email) {
    if(/\S+@\S+\.\S+/.test(email)){
      setem(true)
      return true
    }else{
      return false
    }
    // return /\S+@\S+\.\S+/.test(email);
  }
  function isValidPassword(password) {
    if(/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/.test(password)){
      setpm(true);
      return true
    }else{
      return false
    }
    // return /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/.test(password);
  }

  const saveemail=(value)=>{
    isValidEmail(value)
    setEmail(value)
   
  }
  const savepassword=(value)=>{
    isValidPassword(value)
   setPassword(value)
   
  }
  const handleSubmit = event => {

    if (isValidEmail(email)) {
      console.log('The email is valid');
   
    } else {
      setError('Email is invalid');
     
    }
    if (isValidPassword(password)) {
        console.log('The password is valid');
        
      } else {
        setpassworderror('password is invalid');

      }
      check();
     
      
  };
  const check=()=>{
    console.log(em,pm ,"d")
    if(em && pm){
      setnav(true)
      navigate('/nav')
      console.log(nav)
    }else {
      setnav(false)}
  }
console.log(email,password,cus)
  return (

    <Box sx={{width:"500px",height:"500px",border:"1px solid",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"10px"}}>
        <TextField  onChange={(e)=>saveemail(e.target.value)} value={email} id="outlined-basic" label="Email"  variant="outlined"  />
        {error && <Typography  variant='p'component="p" sx={{color:"Red"}}>
          {error}
        </Typography>}
   <TextField  onChange={(e)=>savepassword(e.target.value)} id="outlined-basic" label="password" variant="outlined" />
    {passworderror && <Typography  variant='p'component="p" sx={{color:"Red"}}>
          {passworderror}
        </Typography>}
     {/* <TextField onChange={(e)=>setCus(e.target.value)} id="outlined-basic" label="custromrid" variant="outlined" />
    {passworderror && <Typography  variant='p'component="p" sx={{color:"Red"}}>
          {passworderror }
        </Typography>} */}
   
    <Box>
        <Button onClick={()=>{handleSubmit();  }}   variant="contained">
            Send
        </Button>
    </Box>
    </Box>

   );
};

export default LoginPage;
