import mystore from "./store";
import { useNavigate } from 'react-router-dom';
import{useState} from 'react'
import{ReactDOM} from 'react-dom';
import React, { useCallback } from 'react';
import FarmerHome from "./FarmerHome";
import { Link} from 'react-router-dom';

function InsertCommodity()
{
    const[CATEGORY,setCategotyid]=useState({
        category:''
    });


    let navigate = useNavigate();
        const[disp,setDisp]=useState({
              display:""
        })

    const[category,setCategory]=useState({
        allcategory : []
        
     });
     const[commodity,setCommodity]=useState('');
     React.useEffect(() => {
        fetch("http://localhost:8080/category")  
        .then(resp => resp.json())
        .then(data => setCategory({allcategory : data})) 
      }, []);
      let Category = React.createRef();
      const setCategoryID = (c) => 
    {     
        setCategotyid({category:c.target.value})

    }
   
    const InsertCommodity1 =(e) => {
       
        e.preventDefault();        
        const reqData = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
           body: JSON.stringify({     
               catid : CATEGORY.category,
               comname:commodity
           }
              
           )
        }

        fetch("http://localhost:8080/insertCommodity",reqData)
        .then(function(response){
             if(response.ok){
                 alert("Commodity Inserted Successfully")
                navigate("/home");
             }
            
             else
             navigate("/category");
        })
       
       
    }
    const logout = (c) => {
        mystore.dispatch({type:'LOGGEDOUT'})
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
                      <Link  className="nav-link" to="/mspupdate" > Update MSP  </Link>
                    </li>
                    <li className="nav-item">
                      <Link  className="nav-link" to="/adminhome" > BACK </Link>
                    </li>
                    <li className="nav-item" style={{float:"right"}}>
                    <Link to="/"  className="nav-link" onClick={(c) => {logout(c)}}>LOGOUT</Link>
                    </li>
              </ul> 
              <br></br><hr></hr>
                Select Category : <select name="category" required onChange={(c) => {setCategoryID(c)}}>
                <option value="">(Select Category)</option>
                { 
                                        
                                        category.allcategory.map((s) => {
                                            
                                            return(<option ref={Category} value={s.catid}> {s.catname} </option>)
                                        })
                                    }
                </select><br></br>
                Select Commodity : <input type="text" name="Commodity" onChange={e=>setCommodity(e.target.value)}></input>
                
               
            <br></br>    <input type="submit" value="insert Commodity" onClick={(c) => {InsertCommodity1(c)}} className="btn btn-primary" ></input>

        </div>
    )
}
export default InsertCommodity;

