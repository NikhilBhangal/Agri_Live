import mystore from "./store";
import { useNavigate } from 'react-router-dom';
import{useState} from 'react'
import{ReactDOM} from 'react-dom';
import React, { useCallback } from 'react';
import FarmerHome from "./FarmerHome";
import { Link} from 'react-router-dom';

function SearchCommodity()
{
    let navigate = useNavigate();
        const[disp,setDisp]=useState({
              display:""
        })

        const[STATE,setstateid]=useState({
            state:''
        });
        const[CITY,setcityid]=useState({
            city:''
        });
        const[CATEGORY,setCategotyid]=useState({
            category:''
        });

        const[COMMODITY,setCommodityid]=useState({
            commodity:''
        });

    const[category,setCategory]=useState({
        allcategory : []
        
     });
     const [user,setUser] = useState({
        
    });

     const[states,setState]=useState({
        allstates : []
        
     });
     const[search,setSearch]=useState({
         allsearch: []
     });
     const[cities,setCities] = useState({
         allcities : []
     })
     const[norecordmsg,setNorecordmsg] = useState("")
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
        
        fetch("http://localhost:8080/States")
        .then(resp => resp.json())
        //.then(data => alert(JSON.stringify(data)))
        .then(data => setState({allstates : data}))
      }, []);

      const PopulateCt = (c) => 
      {     
          setstateid({state:c.target.value})
          fetch("http://localhost:8080/allcities?stateid="+c.target.value)
          .then(resp => resp.json())
          .then(data => setCities({allcities : data}))
          //.then(data => console.log(data))
  
      }
     
      const TakeCityValue = (c) => 
      {     
          setcityid({city:c.target.value})
      }




      
      let Category = React.createRef();
      let Commodity=React.createRef();
      let dealerid=React.createRef();
      let city = React.createRef();
      let state = React.createRef();

      const PopulateCommodity = (c) => 
    {     
       // alert(c.target.value)
       setCategotyid({category:c.target.value})

        fetch("http://localhost:8080/allcommodity?catid="+c.target.value)
        .then(resp => resp.json())
        .then(data => setCommodity({allCommodity : data}))
        //.then(data => console.log(data))

    }

    const PopulateMSP = (c,com) => 
    {     
        setCommodityid({commodity:c.target.value})
        ////
       
        for(var i=0;i<commodity.allCommodity.length;i++){
            if(commodity.allCommodity[i].comid==c.target.value){
               let  com=commodity.allCommodity[i];
               localStorage.setItem("selectedcommoditty",JSON.stringify(com))
                break;
            }
        }
        
        
        
        fetch("http://localhost:8080/getMSP?comid="+c.target.value)
        .then(resp => resp.json())
        .then(data => setMSP({SingleMSP : data}))
    }
//const uid=JSON.parse(localStorage.getItem("loginfarmer")).userid;
    const SearchCommoditydata =(e) => {
        //e.preventDefault();        
        const reqData = {
            method: 'POST',
            headers: {'Content-Type':'application/json'}
        }
         //alert(Category.current.value)
     /*    alert(STATE.state)
         alert(CITY.city)
         alert(CATEGORY.category)
         alert(COMMODITY.commodity)*/

        fetch("http://localhost:8080/search?catid="+CATEGORY.category+"&comid="+COMMODITY.commodity+"&cityid="+CITY.city+"&stateid="+STATE.state,reqData)    
        
        .then(resp => resp.json())
        .then(arr=>{
               
              
            if(arr.length>0)
          {  localStorage.setItem("searchdata",JSON.stringify(arr))
            navigate("/showdata");}
          else
          setNorecordmsg("NO Record Found")  

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
                      <Link  className="nav-link" to="/uploaddata" > Upload Commodity </Link>
                    </li>
                    <li className="nav-item">
                      <Link  className="nav-link" to="/dealerhome" >BACK </Link>
                    </li>
                    <li className="nav-item" style={{float:"right"}}>
                    <Link to="/"  className="nav-link" onClick={(c) => {logout(c)}}>LOGOUT</Link>
                    </li>
              </ul>   
              <br></br><hr></hr>
                <table>
                    <tr>

               <td><b> Select State : </b> </td>
               <td><select  name="state"  onChange={(c) => {PopulateCt(c)}}>
               <option value="">(Select State)</option>
                                    { 
                                        
                                        states.allstates.map((s) => {
                                            return(<option ref={state}  value={s.stateid}> {s.statename} </option>)
                                        })
                                    }
                                </select> </td>
                                
                    </tr>
                    <tr>
              <td> <b> Select City : </b></td> <td> <select  name="city" onChange={(c) => {TakeCityValue(c)}}  >
              <option value="">(Select City)</option>
                            {                                        
                                        cities.allcities.map((s) => {
                                            return(<option ref={city} value={s.cityid}> {s.cityname} </option>)
                                        })
                            }
                            <option value="other">other</option>
                            </select></td>
                       </tr>

                       <tr>
              <td><b>  Select Category : </b></td> <td> <select name="category" onChange={(c) => {PopulateCommodity(c)}}>
                <option value="">(Select Category)</option>
                { 
                                        
                                        category.allcategory.map((s) => {
                                            
                                            return(<option ref={Category} value={s.catid}> {s.catname} </option>)
                                        })
                                    }
                </select> </td> </tr>
            <tr>  <td><b>  Select Commodity : </b> </td>  <td> <select name="commodity" onChange={(c,s) => {PopulateMSP(c,s)}}>
                <option value="">(Select Commodity)</option>
                {                                        
                                        commodity.allCommodity.map((s) => {
                                            return(<option key={s.comid} value={s.comid}> {s.comname} </option>)
                                        })
                 }
                </select> </td></tr>
                
                 {/* <input type="text" ref={dealerid} hidden value={uid} name="userid"></input> 
                <input type="number" onChange={e=>setdealer(e.target.value)} ></input>*/}
                 <br></br>

              <tr> <td>  <input type="button" value="Search" onClick={SearchCommoditydata} className="btn btn-primary" ></input> </td> </tr>
                </table>
                <span>{norecordmsg}</span>
        </div>
    )
}
export default SearchCommodity;

