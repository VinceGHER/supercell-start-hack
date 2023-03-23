import img from '../assets/images/profile.jpg';
import score from '../assets/images/score.jpg';
import quiz from '../assets/images/quiz.jpg';
import '../index.css'
import './profile.css'
import { useNavigate } from "react-router-dom";
const Profile = () => {
    const navigate = useNavigate();
    return <div>
       <img src={img} className="img_profile" />
       <img src={score} className="score" />
       <img src={quiz} onClick={()=>navigate("/quiz")} className="quiz" />
    <div className="goHome3" onClick={()=>navigate("/home")}></div>
    </div>
  };
  
export default Profile;