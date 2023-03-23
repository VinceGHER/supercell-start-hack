import { useState } from 'react';
import q1 from '../assets/images/q1.jpg';
import q2 from '../assets/images/q2.jpg';
import q3 from '../assets/images/q3.jpg';
import '../index.css'
import './quiz.css'
import { useNavigate } from "react-router-dom";
const Profile = () => {
    const navigate = useNavigate();
    const [number_state, setNumber] = useState(0);
    return <div>
        {
            {
            0: <div>
                <img src={q1} className="full_image" />
                <div className="answer_layout">
                    <div className="answer" onClick={()=>setNumber(1)}>A. Reply "no" to let zero to know he/she is annoying</div> 
                    <div className="answer" onClick={()=>setNumber(1)}>B. Reply "shuuuuuut **the hell** uuuuppp"</div> 
                    <div className="answer" onClick={()=>setNumber(1)}>C. Hide messages from him for 8 hours</div>
                    <div className="answer" onClick={()=>setNumber(1)}>D. Report to the clan leader</div>  
                </div>
                </div>,
            1: <div>
                <img src={q2} className="full_image" />
                <div className="answer_layout">
                    <div className="answer" onClick={()=>setNumber(2)}>A. Report this behavior to the clan leader {'\n'}</div> 
                    <div className="answer" onClick={()=>setNumber(2)}>B. Reply "guys stop it's not nice"{'\n'}</div> 
                    <div className="answer" onClick={()=>setNumber(2)}>C. Hide their messages for 8 hours{'\n'}</div>
                    <div className="answer" onClick={()=>setNumber(2)}>D. Reply "GO FUCK YOURSELF" to the user{'\n'}</div>  
                </div>
                </div>,
            2: <div>
                <img src={q3} className="full_image" />
                <div className="answer_layout">
                    <div className="answer" onClick={()=>navigate("/home")}>A. Report the player to system</div> 
                    <div className="answer" onClick={()=>navigate("/home")}>B. Ignore them for a few hours"</div> 
                    <div className="answer" onClick={()=>navigate("/home")}>C. send lots of emojis to flush them away</div>
                    <div className="answer" onClick={()=>navigate("/home")}>D. Reply "Stop this your fucking racist"</div>  
                </div>
                </div>,
            }[number_state]
        } 

       

    </div>
  };
  
export default Profile;