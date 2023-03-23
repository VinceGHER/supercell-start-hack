import video from '../assets/videos/intro.mp4';
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
      <source src={video} type='video/mp4' />
    </video>
  };
  
export default Intro;