import video from '../assets/videos/battleacc.mp4';
import '../index.css'
import useTimeout from './Timeout';
import './battleacc.css'
import { useNavigate } from "react-router-dom";
const Battleacc = () => {
  
    const navigate = useNavigate();

    useTimeout(() => {
    
      navigate("/battleend");
    }, 3000);
    return <div>
       <video autoPlay className="video" muted id='video'>
    <source src={video} type='video/mp4' />
    </video>
   
    </div>
   
  };
  
export default Battleacc;