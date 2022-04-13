import mystore from "./store";
import { useNavigate } from 'react-router-dom';
//import pic from '.component/image.1.png'
import { Link} from 'react-router-dom';
function ShowCommodity()
{
    const data=JSON.parse(localStorage.getItem("searchdata"))
   // const val="./image"+data.comid
    let navigate = useNavigate();
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
              <br></br><br></br>
              <h3 style={{textAlign:"center"}}>Dealer List</h3>
               <table border="0" class="table table-bordered table striped table-active" >
                   <tr style={{backgroundColor:"coral",height:"50px"}}>
                       <th>Name</th>
                       <th>Email</th>
                       <th>Mobile</th>
                       <th>Area</th>
                       <th>PinCode</th>
                       <th>Commodity</th>
                       <th>Price</th>
                   </tr>
                            
                   {                                        
                      data.map((s) => {
                         return(<tr> <td>{s[0]} {s[1]}</td>
                         <td>{s[2]}</td>
                         <td>{s[3]}</td>
                         <td>{s[5]}</td>
                         <td>{s[6]}</td>
                         <td>{s[7]}</td>
                         <td>{s[4]}</td>      </tr>
                         )
                      })
                 }       
               </table>
        </div>
        
    )
}
export default ShowCommodity;