
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
    <source src="https://github.com/VinceGHER/supercell-start-hack/raw/main/src/battleacc.mp4" type='video/mp4' />
    </video>
   
    </div>
   
  };
  
export default Battleacc;