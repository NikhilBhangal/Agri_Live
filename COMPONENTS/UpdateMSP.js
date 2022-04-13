import mystore from "./store";
import { useNavigate } from 'react-router-dom';
import{useState} from 'react'
import{ReactDOM} from 'react-dom';
import React, { useCallback } from 'react';
import FarmerHome from "./FarmerHome";
import { Link} from 'react-router-dom';

function UpdateMSP()
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
    }
    const d1=CATEGORY.category;
    const UploadData =(e) => {
        alert(CATEGORY.category)
        alert(COMMODITY.commodity)
        alert(price)

        e.preventDefault();        
        const reqData = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
           body: JSON.stringify({     
               catid : CATEGORY.category,
               commid : COMMODITY.commodity,
               msp:price,
           }
              
           )
        }

        fetch("http://localhost:8080/updatemsp",reqData)
        .then(function(response){
             if(response.ok){
                 alert("MSP Updated Successfully")
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
                      <Link  className="nav-link" to="/insertcom" > Insert Commodity  </Link>
                    </li>
                    <li className="nav-item">
                      <Link  className="nav-link" to="/adminhome" > BACK </Link>
                    </li>
                    <li className="nav-item" style={{float:"right"}}>
                    <Link to="/"  className="nav-link" onClick={(c) => {logout(c)}}>LOGOUT</Link>
                    </li>
              </ul> 
              <br></br><hr></hr>
                Select Category : <select name="category" required onChange={(c) => {PopulateCommodity(c)}}>
                <option value="">(Select Category)</option>
                { 
                                        
                                        category.allcategory.map((s) => {
                                            
                                            return(<option ref={Category} value={s.catid}> {s.catname} </option>)
                                        })
                                    }
                </select><br></br>
                Select Commodity :  <select name="commodity" required onChange={(c) => {PopulateMSP(c)}}>
                <option value="">(Select Commodity)</option>
                {                                        
                                        commodity.allCommodity.map((s) => {
                                            return(<option ref={Commodity} value={s.comid}> {s.comname} </option>)
                                        })
                 }
                </select><br></br>
               Current  MSP : <input type="number" required name="price" value={msp.SingleMSP.msp}  ></input>
            <br></br>   Update MSP : <input type="number" required name="price1" onChange={e=>setPrice(e.target.value)} ></input>
            <br></br>    <input type="submit" value="Update Value" onClick={(c) => {UploadData(c)}} className="btn btn-primary" ></input>

        </div>
    )
}
export default UpdateMSP;

