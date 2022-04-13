import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from './COMPONENTS/Login';
import Home from './COMPONENTS/Home';
import Register from './COMPONENTS/Register';
import image from './COMPONENTS/image/1.jpg';
import image1 from './COMPONENTS/image/2.jpeg';
import image2 from './COMPONENTS/image/3.jpeg';
import { ReactDOM } from "react-dom";
import mystore from "./COMPONENTS/store";
import{useState} from 'react'
import UploadCommodity from './COMPONENTS/UploadCommodity';
import FarmerHome from './COMPONENTS/FarmerHome';
import SearchCommodity from './COMPONENTS/SearchCommodity';
import ShowCommodity from './COMPONENTS/ShowData';
import DealerHome from './COMPONENTS/DealerHome';
import ForgotPassword from './COMPONENTS/ForgotPassword';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Calculater from './COMPONENTS/Calculater';
import { ContactUs } from './COMPONENTS/email';
import UpdateMSP from './COMPONENTS/UpdateMSP';
import InsertCommodity from './COMPONENTS/InsertCommodity';


function App() {

  const[fstate,setFlag]=useState({
       
    flag : false
    
    });
    mystore.subscribe(() => { setFlag( { flag : mystore.getState().loggedin } ) });
    console.log(fstate.flag)
  return ( 
    <div className="App">
      <BrowserRouter>
      <div style={{display:fstate.flag?'none':'block'}}>    
      <ul className="nav nav-tabs bg-dark container" >
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
                      <Link  className="nav-link" to="/login" >LOG IN </Link>
                    </li>
       </ul>      
                    </div>
    <div   style={{ display:fstate.flag?'none':'block', width: 1350,padding: 30 }}>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img  height="280" class="mx-auto d-block"
            className="d-block w-100"
src={image}
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img height="280" class="mx-auto d-block"
            className="d-block w-100"
src={image1}
            alt="Image Two"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img  height="280" class="mx-auto d-block"
            className="d-block w-100"
src={image2}
            alt="Image Two"
          />
        </Carousel.Item>
      </Carousel>
    </div>
           
                    <div>
                    <Routes>
                      <Route path="/cal" element={<Calculater/>}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/uploaddata" element={<UploadCommodity />}></Route>
                    <Route path="/farmerhome" element={<FarmerHome />}></Route>
                    <Route path="/register" element={<Register />}></Route> 
                    <Route path="/adminhome" element={<Home />}></Route>
                    <Route path="/uploadsuccess" element={<FarmerHome />}></Route>  
                    <Route path="/searchcommodity" element={<SearchCommodity />}></Route>
                    <Route path="/showdata" element={<ShowCommodity />}></Route>  
                    <Route path="/dealerhome" element={<DealerHome />}></Route>
                    <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
                    <Route path="/email" element={<ContactUs />}></Route>
                    <Route path="/mspupdate" element={<UpdateMSP />}></Route>
                    <Route path="/insertcom" element={<InsertCommodity />}></Route>
                    </Routes>
                </div>
      
        
      </BrowserRouter>
    </div>
  );
}

export default App;
