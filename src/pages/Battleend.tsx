import '../index.css'
import './battleend.css'
import { useLocation, useNavigate } from "react-router-dom";
import {useState} from 'react';
const Battleend = () => {
    const navigate = useNavigate();
    const [isActiveLeft, setIsActiveLeft] = useState(false);
    const [isActiveRight, setIsActiveRight] = useState(false);
    const { pathname } = useLocation();
    return <div>
       <video autoPlay className="video" muted id='video'>
    <source src="https://github.com/VinceGHER/supercell-start-hack/raw/main/src/battleend.mp4" type='video/mp4' />
    </video>
    <div className="goHome2" onClick={()=>navigate("/home",{state:{ from: pathname}})}></div>
    <div className="question_layout">
      <div className="question">Did you have a good time?</div>
      <div className="thumb">
        <img onClick={()=>setIsActiveLeft(true)} className={(isActiveRight ? 'hide' : '' )+" "+(isActiveLeft ? 'animated' : '')+ " img img_up"} src='https://github.com/VinceGHER/supercell-start-hack/raw/main/src/thumb_down.png' />
        <img onClick={()=>setIsActiveRight(true)} className={(isActiveLeft ? 'hide' : '' )+" "+(isActiveRight ? 'animated' : '')+ " img img_down"} src='https://github.com/VinceGHER/supercell-start-hack/raw/main/src/thumb_up.png' />
      </div>
      
    </div>
    
    </div>
   
  };
  
export default Battleend;