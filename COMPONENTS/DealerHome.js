import mystore from "./store";
import { useNavigate } from 'react-router-dom';
import { Link} from 'react-router-dom';

function DealerHome()
{
    let navigate = useNavigate();
    const logout = (c) => {
        mystore.dispatch({type:'LOGGEDOUT'})
        localStorage.removeItem("logindealer")
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
                      <Link  className="nav-link" to="/searchcommodity" > Search Dealer </Link>
                    </li>
                    <li className="nav-item" style={{float:"right"}}>
                    <Link to="/"  className="nav-link" onClick={(c) => {logout(c)}}>LOGOUT</Link>
                    </li>
              </ul>   
             <br></br>
            <h1>Welcome {JSON.parse(localStorage.getItem("logindealer")).fname}</h1>
              
             
        </div>
    )
}
export default DealerHome;

