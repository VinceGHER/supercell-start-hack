import { useEffect,useRef } from 'react';
import video from '..//assets/video/home.mp4';
import '../index.css'
import './home.css'
import thumb_down from '../assets/images/thumb_down.png'
import { useNavigate, useLocation } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const location  = useLocation();
    let from = location.state?.from || "";
 
    return <div>
       <video autoPlay className="video" loop muted id='video'>
    <source src={video} type='video/mp4' />
    </video>
    <div className="goChat" onClick={()=>navigate("/chat")}></div>
    <img className={(from == "/battleend" ? "test": "hide" )+" "+"img_home"} src={thumb_down} />
    <div className="goBattle" onClick={()=>navigate("/battleacc")}></div>
    <div className="goProfile" onClick={()=>navigate("/profile")}></div>

    </div>
  };
  
export default Home;