import '../index.css'
import React, { useRef } from 'react';
import useTimeout from './Timeout';
import { useNavigate } from "react-router-dom";
const Intro = () => {
  const navigate = useNavigate();

  useTimeout(() => {
    console.log("dd")
    navigate("/home");
  }, 6000);
    return <video autoPlay className="video" loop muted id='video'>
      <source src="https://github.com/VinceGHER/supercell-start-hack/raw/main/src/intro.mp4" type='video/mp4' />
    </video>
  };
  
export default Intro;