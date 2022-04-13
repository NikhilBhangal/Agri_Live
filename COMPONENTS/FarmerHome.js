import mystore from "./store";
import { useNavigate } from 'react-router-dom';
//import React, { useCallback } from 'react';
import{useState} from 'react'
import React, { useRef } from 'react';
import { Link} from 'react-router-dom';
import emailjs from 'emailjs-com';

function FarmerHome1()
{
    const[ANSWER,setAnswer]=useState({
        ans : 0
    })
    let fuel = React.createRef();   // React use ref to get input value
    let labour = React.createRef();
    let msp = React.createRef();
    let total = React.createRef();
    
    const getAnswer = () =>
    {
        
        var x = fuel.current.value;
        var y = labour.current.value;
        var z = msp.current.value;
        
        let a =parseInt(x)
        alert(a);
        console.log((a))
        let b =parseInt(y)
        let c =parseInt(z)
        let t = 0;
        if(isNaN(a)){
            if(isNaN(b)){
                alert("hi")
                a=0;
                b=0;
                t=c;
            }
            else if(isNaN(c)){
                a=0;
                c=0;
                t=b;
            }
            a=0;
            alert(a);
            t=b+c;
        }
        else if(isNaN(b)){
            if(isNaN(a)){
                alert("hi")
                a=0;
                b=0;
                t=c;
            }
            else if(isNaN(c)){
                a=0;
                c=0;
                t=b;
            }
            a=0;
            alert(a);
            t=b+c;
        }
        else if(isNaN(c)){
           c=0;
           t=b+a;
        }     
     /*   else if((isNaN(a) && isNaN(b))){
            alert("hi")
            a=0;
            b=0;
            t=parseInt(a+b+c);
        }
        else if(isNaN(a)&& isNaN(c)){
            a=0;
            c=0;
            t=b;

        }
        else if(isNaN(b)&&isNaN(c)){
            b=0;
            c=0;
            t=a;
        }*/
       /* else if(isNaN(a)&&isNaN(b)&&isNaN(c)){
            a=b=c=0;
            t=0;

        }*/
        t = a+b+c; 
        console.log(t)
        setAnswer({ans : t })
    }

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert(JSON.parse(localStorage.getItem("loginfarmer")).email);

    emailjs.sendForm('service_4eo9vqt', 'template_rahgf36', form.current, 'sUqga_S-0hB3VKnhd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
        const fname1=JSON.parse(localStorage.getItem("loginfarmer")).fname;
        const email1=JSON.parse(localStorage.getItem("loginfarmer")).email;
    
    let navigate = useNavigate();
    const logout = (c) => {
        mystore.dispatch({type:'LOGGEDOUT'})
        localStorage.removeItem("loginfarmer")
        navigate("/");
    }
    return (
        <div>

<ul className="nav nav-tabs bg-dark container">
                    <li className="nav-item" >
                      <Link  className="nav-link" to="/login" > Home </Link>

                    </li>
                    <li className="nav-item">
                      <Link  className="nav-link" to="/" > Contact Us </Link>
                    </li>
                    <li className="nav-item">
                      <Link  className="nav-link" to="/" > About Us </Link>
                    </li>
                    <li className="nav-item">
                      <Link  className="nav-link" to="/searchcommodity" > Search Commodity </Link>
                    </li>
                    <li className="nav-item" style={{float:"right"}}>
                    <Link to="/"  className="nav-link" onClick={(c) => {logout(c)}}>LOGOUT</Link>
                    </li>
              </ul>  
              <br></br><hr></hr>
           <h1>Welcome {JSON.parse(localStorage.getItem("loginfarmer")).fname}</h1>   
                <div><h5 style={{backgroundColor:'ButtonHighlight'}}>CALCULATOR FOR COST ESTIMATION</h5></div>
                  <div className='d-inline-flex'>
                      
                      <form className="App" ref={form} onSubmit={sendEmail} >
                        <table className="border" style={{backgroundColor:'orange'}}>
                            <tr>
                        <td><label>ENTER FUEL COST : </label></td>
                        <td><input type='number' ref={fuel} name="fuel"  placeholder="ENTER FUEL COST" ></input></td><br></br>
                        </tr>
                        <tr>
                        <td><label>ENTER LABOUR COST : </label></td>
                        <td><input type='number' ref={labour} name="labour"  required placeholder="ENTER LABOUR COST" ></input></td><br></br>
                        </tr>
                        <tr>
                        <td><label>ENTER MSP COST : </label></td>
                        <td><input type='number' ref={msp} name="msp"  required placeholder="ENTER MSP COST" ></input></td><br></br>
                        {/* Total is : {fuel.current.value + labour.current.value + msp.current.value} */}
                        </tr>
                        <tr>
                            
                        <td colSpan='2'><div className='d-grid'><input type='button' className="btn btn-primary" value='CLICK FOR ESTIMATED COST' onClick={getAnswer}></input></div></td>
                        </tr>
                        <tr>
                        <td colSpan='2'>
                            <div  style={{textAlign:"center"}}>THE ESTIMATED COST IS : <input defaultValue={0} readOnly name="cost" value={ANSWER.ans} ></input></div>
                        </td>
                        </tr>
                      <input type="text" hidden  name="username" value={fname1} />
                       <input type="email" hidden  name="useremail" value={email1} />
                        <tr>
                            <td><input type="submit" value="Click Here To get Email"></input></td>
                        </tr>
                       
                        </table>
                       
                        </form>    
                        
                </div>

        </div>
    )
}
export default FarmerHome1;