import mystore from "./store";
import { useNavigate } from 'react-router-dom';
import { Link} from 'react-router-dom';
import image from './image/1.jpg';
function Home()
{
    let navigate = useNavigate();
    const logout = (c) => {
        mystore.dispatch({type:'LOGGEDOUT'})
        localStorage.removeItem("loginadmin");
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
                      <Link  className="nav-link" to="/mspupdate" > Update MSP </Link>
                    </li>
                    <li className="nav-item">
                      <Link  className="nav-link" to="/insertcom" > Insert Commodity  </Link>
                    </li>
                    <li className="nav-item" style={{float:"right"}}>
                    <Link to="/"  className="nav-link" onClick={(c) => {logout(c)}}>LOGOUT</Link>
                    </li>
              </ul>  
            <h1>Welcome {JSON.parse(localStorage.getItem("loginadmin")).fname}</h1> 
            <iframe style={{float:"right"}} src={image} height="300" width="400"></iframe>      
        </div>
        //commodity/category/msp//showing imgae through rest api
    )
}
export default Home;

