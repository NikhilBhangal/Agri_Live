import React from 'react';
import{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import mystore from "./store";

function Login(){
    const[wrongpwd,setWrongPwd]=useState('')
    const[wrongEmail,setWrongEmail]=useState('')
    let navigate = useNavigate();
    const[state,setState]=useState({
        emailid:"",
        password:"",
        
    });

    
    const [user,setUser] = useState({});
    const [role,setRole] = useState({});
    const[nmsg,setnmsg]= useState('');
   const submitForm =(e) => {
        e.preventDefault();        
        console.log(state);
   
        const reqData = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
           
        }

        fetch("http://localhost:8080/login?email="+state.emailid+"&pass="+state.password,reqData)
        .then(resp => resp.json())//.then(resp => console.log(resp.json()))
        .then(obj =>{
            //setUser(obj);
            //console.log(user)

           // localStorage.setItem("loginfarmer",JSON.stringify(user));
           //ALWAYS STRINGIFY ATLEAST TO SEE IN THE ALERT BOX
           
           if(obj.role === 'DEALER')
           {
               localStorage.setItem("logindealer",JSON.stringify(obj));
               mystore.dispatch({type:'LOGGEDIN'})
               navigate('/dealerhome');
           }
           else if( obj.role === 'ADMIN')
           {
            console.log(obj.role);
               localStorage.setItem("loginadmin",JSON.stringify(obj));
               mystore.dispatch({type:'LOGGEDIN'})
               navigate('/adminhome');
           }
           else if(obj.role==='FARMER'){
               localStorage.setItem("loginfarmer",JSON.stringify(obj));
               mystore.dispatch({type:'LOGGEDIN'})
               navigate('/farmerhome');
           }
           else if(obj.role == null)
           {
               alert("Hiii")
            
               //mystore.dispatch({type:'LOGGEDIN'})
               setnmsg("No Record Found");
               //navigate('/login');
           }
        } )
       } 
            
       
        //alert(user.role)
        const CheckEmail = (c) => 
        {     
            const emailregex = /^[A-Za-z0-9.-]{3,}@[A-Za-z0-9.-]{4,}\.[a-z]{2,5}$/;
            const data=c.target.value;
          if(!emailregex.test(data))
          {
                setWrongEmail("Wrong Email");
                return false;
          }
          else{
              setWrongEmail('');
              return true;
          }  
        }
     
        const CheckPassword = (c) => 
        {     
            const pwdregex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
            const data=c.target.value;
          if(!pwdregex.test(data))
          {
                setWrongPwd("Wrong Password");
                
                return false;
          }
          else{
              setWrongPwd('')
              return true;
          }
    
        }
    
   const handleInput=(e)=>
	{
        //CheckEmail();
        //CheckPassword();
        setState((state)=>({
            ...state,
           
            [e.target.name]:e.target.value
        }))
       // const emailregex = /^[A-Za-z0-9.-]{3,}@[A-Za-z0-9.-]{4,}\.[a-z]{2,5}$/;
        const pwdregex = /^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{7,15}$/;
        const emailregex = /^[A-Za-z0-9.-]{3,}@[A-Za-z0-9.-]{4,}\.[a-z]{2,5}$/;
    }
        return(
            
            <div className='container'>
                
            <form onSubmit={(c) => {submitForm(c)}}>
                <h3>LOGIN</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" onKeyUp={(c) => {CheckEmail(c)}} className="form-control" name="emailid" placeholder='Enter Email' onChange={handleInput} />
                    <span style={{color:"red"}}>{wrongEmail}</span>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onKeyUp={(c) => {CheckPassword(c)}} className="form-control" name="password" placeholder='Enter Password' onChange={handleInput}/>
                    <span style={{color:"red"}}>{wrongpwd}</span>

                </div>
               <br/>
                <button type="submit"  className="btn btn-primary btn-block">Login</button>
                <br></br>  <a href='/register'>Not Registerd Yet?Register Here...</a>
               <br></br><a href='/forgotpassword'>Forgot Password</a>

             <br></br> <span style={{color:"red",float:'left'}}>{nmsg}</span>

            </form>
            </div>
            
        );
    
}
export default Login;