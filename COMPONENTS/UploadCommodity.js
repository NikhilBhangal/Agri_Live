import mystore from "./store";
import { useNavigate } from 'react-router-dom';
import{useState} from 'react'
import{ReactDOM} from 'react-dom';
import React, { useCallback } from 'react';
import FarmerHome from "./FarmerHome";
import { Link} from 'react-router-dom';

function UploadCommodity()
{
    const[CATEGORY,setCategotyid]=useState({
        category:''
    });

    const[COMMODITY,setCommodityid]=useState({
        commodity:''
    });

    let navigate = useNavigate();
        const[disp,setDisp]=useState({
              display:""
        })

    const[category,setCategory]=useState({
        allcategory : []
        
     });
     const[price,setPrice]=useState('');
     const[dealer,setdealer]=useState('');

     
     const[commodity,setCommodity] = useState({
        allCommodity : []
    })

    const[msp,setMSP] = useState({
        SingleMSP : ""
    })

    

     React.useEffect(() => {
        fetch("http://localhost:8080/category")  
        .then(resp => resp.json())
        .then(data => setCategory({allcategory : data})) 
      }, []);
      let Category = React.createRef();
      let Commodity=React.createRef();
      let dealerid=React.createRef();

      //alert(Category)
      const PopulateCommodity = (c) => 
    {     
        setCategotyid({category:c.target.value})
        fetch("http://localhost:8080/allcommodity?catid="+c.target.value)
        .then(resp => resp.json())
        .then(data => setCommodity({allCommodity : data}))
        //.then(data => console.log(data))

    }

    const PopulateMSP = (c) => 
    {  
        setCommodityid({commodity:c.target.value})

        fetch("http://localhost:8080/getMSP?comid="+c.target.value)
        .then(resp => resp.json())
        .then(data => setMSP({SingleMSP : data}))
      //  .then(data => console.log(data))

    }
    const d1=CATEGORY.category;
//const uid=JSON.parse(localStorage.getItem("loginfarmer")).userid;
    const UploadData =(e) => {
        e.preventDefault();        
       // console.log(state);
      if(price<msp.SingleMSP.msp){
          setDisp({[disp.display]:"Price Should Be Greater Than MSP Price"})
          alert("PRICE SHOULD BE GREATER THAN MSP WHICH IS "+msp.SingleMSP.msp)
          return false;
      }
      
        const reqData = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
           body: JSON.stringify({
              // userid:dealerid.current.value,
             
               category : CATEGORY.category,
               commodity : COMMODITY.commodity,
               price:price,
               userid:JSON.parse(localStorage.getItem("logindealer")).userid
           }
              
           )
        }

        fetch("http://localhost:8080/saveCommodity",reqData)
        .then(function(response){
             if(response.ok)
             navigate("/uploadsuccess");
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
                      <Link  className="nav-link" to="/searchcommodity" > Search Dealer </Link>
                    </li>
                    <li className="nav-item">
                      <Link  className="nav-link" to="/dealerhome" >  Back </Link>
                    </li>
                    <li className="nav-item" style={{float:"right"}}>
                    <Link to="/"  className="nav-link" onClick={(c) => {logout(c)}}>LOGOUT</Link>
                    </li>
              </ul>   
              <br></br><hr></hr>
              <table>
                  <tr>
              <td>  Select Category : </td> 
              <td><select name="category" required onChange={(c) => {PopulateCommodity(c)}}>
                <option value="">(Select Category)</option>
                { 
                                        
                                        category.allcategory.map((s) => {
                                            
                                            return(<option ref={Category} value={s.catid}> {s.catname} </option>)
                                        })
                                    }
                </select></td>  
                </tr>
                <tr>
             <td>   Select Commodity : </td>
             <td>  <select name="commodity" required onChange={(c) => {PopulateMSP(c)}}>
                <option value="">(Select Commodity)</option>
                {                                        
                                        commodity.allCommodity.map((s) => {
                                            return(<option ref={Commodity} value={s.comid}> {s.comname} </option>)
                                        })
                 }
                </select></td>
                </tr>
                <tr>
                <td> Price : </td><td><input type="number" required name="price" onChange={e=>setPrice(e.target.value)} ></input></td>
                 </tr>

                <input type="submit" value="Upload Data" onClick={(c) => {UploadData(c)}} className="btn btn-primary" ></input>
                </table>
        </div>
    )
}
export default UploadCommodity;

