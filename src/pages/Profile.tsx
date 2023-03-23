
import '../index.css'
import './profile.css'
import { useNavigate } from "react-router-dom";
const Profile = () => {
    const navigate = useNavigate();
    return <div>
       <img src="https://github.com/VinceGHER/supercell-start-hack/raw/main/src/profile.jpg" className="img_profile" />
       <img src="https://github.com/VinceGHER/supercell-start-hack/raw/main/src/score.jpg" className="score" />
       <img src="https://github.com/VinceGHER/supercell-start-hack/raw/main/src/quiz.jpg" onClick={()=>navigate("/quiz")} className="quiz" />
    <div className="goHome3" onClick={()=>navigate("/home")}></div>
    </div>
  };
  
export default Profile;