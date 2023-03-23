import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Chat from "./pages/Chat";
import Battleend from "./pages/Battleend";
import Battleacc from "./pages/Battleacc";
import Profile from "./pages/Profile";
import Quiz from './pages/Quiz'
import AnimationLayout from "./animationLayout";
import "./App.css"
export default function App() {
  return (
    <div className="center">
      <div className="applayout">
        <BrowserRouter>
          <Routes>
            <Route  element={<AnimationLayout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/battleacc" element={<Battleacc />} />
              <Route path="/battleend" element={<Battleend />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/" element={<Intro />}>
            </Route>
            
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
    </div>
  );
}

