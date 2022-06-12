import './Login.css';

import { useNavigate } from 'react-router-dom';
import React,{useState} from 'react';

import {alphaNumeric,emailCheck} from '../../Helper/Validation';


export default function Login() {
  const[getLabel,setLabel]=useState("email address details");
  const[getForm,setForm]=useState({
    email:'',
    password:''
  });
  const [getValidation,setValidation]=useState({
    email:'',
    password:''
  });
  const navigate = useNavigate();

  const onchangeHandler=(event)=>{
    setForm({...getForm,[event.target.name]:event.target.value})

  }

  const onSubmitHandler=(event)=>{
         event.preventDefault();

         if(emailCheck(getForm.email)===true && alphaNumeric(getForm.password)===true){
          if(sessionStorage.getItem('email') === getForm.email && sessionStorage.getItem('password') === getForm.password){
            navigate('/Addbook');
           }
           else{
            setValidation({
              ...getValidation,
              email:"no match found",
              password:"no match found"
            }) 
           }
        }
        else{
          setValidation({
            ...getValidation,
            email:emailCheck(getForm.email),
            password:alphaNumeric(getForm.password)
          })
        }
        
        
  } 


setTimeout(()=>{
  console.log(getLabel);
  setLabel("email");
  console.log(getLabel);
},3000)

return (<div>
     <div className="container">
          <div className="row">
            <div className="col-4">

            </div>
            <div className="col-4">
              <form>        
                  <div className="form-group">
                    <label>{getLabel}</label>
                    <input type="email" value={getForm.email} onChange={onchangeHandler} name="email" className="form-control" id="email" placeholder="Enter email"/>
                    <div className="text-danger">{getValidation.email}</div>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password"  value={getForm.password} onChange={onchangeHandler} name="password" className="form-control" id="password" placeholder="Password"/>
                    <div className="text-danger">{getValidation.password}</div>
                  </div>
              
                  <button onClick={onSubmitHandler} type="submit" className="btn btn-warning">Submit</button>
                </form>
          </div>
            <div className="col-4">
                
          </div>
          </div>
 
      </div>
</div>)
}