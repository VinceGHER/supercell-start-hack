import '../index.css'
import './chat.css'
import { useNavigate } from "react-router-dom";
const Chat = () => {
    const navigate = useNavigate();
    return <div>
       <video autoPlay className="video" loop muted id='video'>
    <source src="https://github.com/VinceGHER/supercell-start-hack/raw/main/src/chat.mp4" type='video/mp4' />
    </video>
    <div className="goHome" onClick={()=>navigate("/home")}></div>
    </div>
  };
  
export default Chat;