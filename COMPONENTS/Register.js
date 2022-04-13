//import React from 'react';
import{useState} from 'react'
import{ReactDOM} from 'react-dom';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function Register()
{
    const[STATE,setstateid]=useState({
        state:''
    });
    const[wrongpwd,setWrongPwd]=useState('')
    const[wrongEmail,setWrongEmail]=useState('')
    const[CITY,setcityid]=useState({
        city:''
    });
    const[QUESTION,setquestionid]=useState({
        question:''
    });
    let navigate = useNavigate();
    const[states,setState]=useState({
       allstates : []
       
    });
    const[cities,setCities] = useState({
        allcities : []
    })
    const[questions,setquestions] = useState({
        allquestions : []
    })
    const[users,setUsers] = useState({
        
    })

    let fname = React.createRef();  // React use ref to get input value
    let lname = React.createRef();
    let email = React.createRef();
    let password = React.createRef();
    let role = React.createRef();
    let mobile = React.createRef();
    let area = React.createRef();
    let pincode = React.createRef();
    let city = React.createRef();
    let state = React.createRef();
    let house = React.createRef();
    let question = React.createRef();
    let answer = React.createRef();

    React.useEffect(() => {
        fetch("http://localhost:8080/States")
        .then(resp => resp.json())
        //.then(data => alert(JSON.stringify(data)))
        .then(data => setState({allstates : data}))
        //alert(JSON.stringify(states.allstates))

        fetch("http://localhost:8080/allquestions")
        .then(resp => resp.json())//.then(data => alert(JSON.stringify(data)))
        .then(data => setquestions({allquestions : data}))
        //.then(d => console.log(d));

      }, []);

    const PopulateCt = (c) => 
    {     
        setstateid({state:c.target.value})
        fetch("http://localhost:8080/allcities?stateid="+c.target.value)
        .then(resp => resp.json())
        .then(data => setCities({allcities : data}))
        //.then(data => console.log(data))

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
      }

    }

    const CheckEmail = (c) => 
    {     
      //  setstateid({state:c.target.value})
        const emailregex = /^[A-Za-z0-9.-]{3,}@[A-Za-z0-9.-]{4,}\.[a-z]{2,5}$/;
        //const pwdregex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        const data=c.target.value;
      if(!emailregex.test(data))
      {
            setWrongEmail("Wrong Email");
            return false;
      }
      else{
          setWrongEmail('')
      }

    }
   

    const TakeCityValue = (c) => 
    {     
        setcityid({city:c.target.value})
    }
    const TakeQuestionValue = (c) => 
    {     
        setquestionid({question:c.target.value})
    }
    
    
    const SubmitData = (s) => 
    {
        s.preventDefault(); 
        alert(QUESTION.question)
        const reqData = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body : JSON.stringify({
                fname : fname.current.value,
                lname : lname.current.value,
                role : role.current.value,
                email : email.current.value,
                password : password.current.value,
                area : area.current.value,
                cityid :CITY.city ,
                pincode : pincode.current.value,
                state :STATE.state,
                house : house.current.value,
                mobile : mobile.current.value,
                qid :QUESTION.question,
                answer : answer.current.value

            })
        }
        fetch("http://localhost:8080/savedata",reqData)
        .then(function(response){
            if(response.ok){
                alert("Registerd Sucessfully")
                navigate("/login");
            }         
            else{
                navigate("/register");
            }
           
       })
        //.then(resp => resp.json())
        //.then(data => console.log(data.userid))
        
    }
    return (
        <div className='container'>

                <h1>REGISTER PAGE</h1>
                <div className='d-inline-flex'>
                <form className="App">
                    <table >
                   
                        <tr>
                            <td>FIRST NAME : </td>
                            <td><input ref={fname} style={{display: "flex",justifyContent: "center",alignItems: "center"}} type="Text" name="fname" placeholder="ENTER FIRST NAME" /></td>
                        </tr>
                        
                        <tr>
                            <td>LAST NAME : </td>
                            <td><input ref={lname} type="Text" style={{display: "flex",justifyContent: "center",alignItems: "center"}} name="lname" placeholder="ENTER LAST NAME" /></td>
                            
                        </tr>
                        <tr>
                            <td>EMAIL : </td>
                            <td><input ref={email} style={{display: "flex",justifyContent: "center",alignItems: "center"}} onKeyUp={(c) => {CheckEmail(c)}} type="email" name="email" placeholder="ENTER EMAIL" /></td>
                            <span style={{color:"red"}}>{wrongEmail}</span>
                        </tr>
                        <tr>
                            <td>PASSWORD : </td>
                            <td><input required style={{display: "flex",justifyContent: "center",alignItems: "center"}} ref={password} onKeyUp={(c) => {CheckPassword(c)}} type="password" name="password" placeholder="ENTER PASSWORD" /></td>
                            <span style={{color:"red"}}>{wrongpwd}</span>
                        </tr>
                        <tr>
                            <td>MOBILE NUMBER : </td>
                            <td><input ref={mobile} style={{display: "flex",justifyContent: "center",alignItems: "center"}} type="Text" name="mobile" placeholder="ENTER MOBILE NUMBER" /></td>
                        </tr>
                        <tr>
                            <td>AREA : </td>
                            <td><input ref={area} style={{display: "flex",justifyContent: "center",alignItems: "center"}} type="Text" name="area" /></td>
                        </tr>
                        <tr>
                            <td>PINCODE : </td>
                            <td><input ref={pincode} style={{display: "flex",justifyContent: "center",alignItems: "center"}} type="number" name="pincode" /></td>
                        </tr>
                        <tr>
                            <td>HOUSE NUMBER : </td>
                            <td><input ref={house} style={{display: "flex",justifyContent: "center",alignItems: "center"}} type="number" name="house" /></td>
                        </tr>
                        <tr>
                            <td>SELECT STATE : </td>
                            <td>
                                 <select style={{display: "flex",justifyContent: "center",alignItems: "center"}}  name="state" onChange={(c) => {PopulateCt(c)}}>
                                   <option value="">(Select State)</option>
                                    { 
                                        
                                        states.allstates.map((s) => {
                                            return(<option ref={state} value={s.stateid}> {s.statename} </option>)
                                        })
                                    }
                                </select> 
                            </td>
                        </tr>
                        <tr>
                        <td>SELECT CITY : </td>
                        <td>
                            <select style={{display: "flex",justifyContent: "center",alignItems: "center"}}  name="city" onChange={(c) => {TakeCityValue(c)}} >
                            <option value="">(Select City)</option>
                            {                                        
                                        cities.allcities.map((s) => {
                                            return(<option ref={city} value={s.cityid}> {s.cityname} </option>)
                                        })
                            }
                            </select>
                        </td>
                        </tr>
                        <tr>
                        <td>SELECT QUESTION : </td>
                        <td>
                            <select style={{display: "flex",justifyContent: "center",alignItems: "center"}}   name="question" onChange={(c) => {TakeQuestionValue(c)}}>
                            <option value="">(Select Question)</option>
                            {                                        
                                        questions.allquestions.map((s) => {
                                            //alert(JSON.stringify(s.Statename))
                                            return(<option ref={question} value={s.qid}> {s.question} </option>)
                                        })
                            }
                            </select>
                        </td> 
                        </tr>
                        <tr>
                            <td>ENTER YOUR ANSWER :  </td>
                            <td><input ref={answer} style={{display: "flex",justifyContent: "center",alignItems: "center"}} type="Text" name="answer"></input></td>
                        </tr>
                                <input ref={role} type="text" name="role" value="FARMER" hidden></input>
                       <br></br>
                        <tr>
                            
                            <td colSpan='2'>
                                <div className='d-grid'>
                                <input  type="submit" className="btn btn-primary" value="REGISTER" onClick={(c) => {SubmitData(c)}} ></input> 
                                </div>
                            </td>
                        </tr>
                    </table>
                </form>
                </div>
        </div>
    )
}
export default Register;