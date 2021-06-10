import React, { useState, useEffect } from "react";
import "./home.css"
import Typist from 'react-typist';


import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SocialMediaArrow from "../assets/social-media-arrow.svg"
import ScrollDownArrow from "../assets/scroll-down-arrow.svg"

import portrait from "../assets/portraitWeb.png"

import mobilepng from "../assets/user-interface.png"
import webpng from "../assets/atom.png"
import figma from "../assets/figma-1.svg"
import Footer from "./Footer";





const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    /* background-color: gray; */
    padding: 0.7em 2em;
    border: 2px solid gray;
    border-radius: 8px;
    display: inline-block;
    
    text-decoration: none;
    transition: 0.5s ease-in-out;

    :hover {
        background-color: gray;
        color: black;
    }
  }

  .button-about{
      font-size: 1rem;
    padding: 0.7em 2em;
    border: 2px solid gray;
    border-radius: 8px;
    display: inline-block;
    text-decoration: none;
    transition: 0.5s ease-in-out;

    :hover {
        background-color: gray;
        color: black;
    }
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1rem;
    }
    .button-about{
      font-size: 0.7rem;
    }
  }
`;


export default function Home() {
      const [count, setCount] = useState(1);

      

        useEffect(() => {
            // document.title = `You clicked ${count} times`;
            console.log("Count: " + count);
            setCount(1);
        }, [count]);


// ===========================================================ABOUT Component =================================================================

    const About =()=> {
        return (
            <div className="about">
            <div className="aboutCont">
             
                <div className="information">
                <p>Let me introduce myself<span>About Me</span>
                I am a freelance App and Website designer and developer from Surat, India 
🇮🇳. I create professional websites. I love art and always try to show unique views to the audience through my design.
                </p>
                <div className="left-btn">
                <ButtonStyle className="button-wrapper">
                <Link className="button-about" to="/about">
                    Read More
                </Link>
                </ButtonStyle>
                    <ButtonStyle className="button-wrapper">
                            <a className="button-about" 
                                 target="_blank"
                                 rel="noreferrer"
                            href="https://firebasestorage.googleapis.com/v0/b/portfolio-4ca30.appspot.com/o/Mahesh%20chambhare%20Resume.pdf?alt=media&token=176b462a-f3d8-4807-bc1e-b84958ac4235">
                                Resume
                            </a>
                            </ButtonStyle>
                </div>
                </div>
                <div className="imageCont">
                <img src={portrait} alt="Portrait"/>
                </div>
            </div>
            </div>
        )
    }

// =================================================================================================================================================



// ============================================================Services Component ==================================================================



    const Services =()=> {

      const ServiceComp = (props) => {
        return (
          <div className="container-service">
            <img src={props.image} alt="service"/>
            <h1>{props.headind}</h1>
            <p>{props.info}</p>
          </div>
        )
      }


        return (
          <div className="services-main">
         <p>What i will do for you<span>Services</span></p>
            <div className="services">
              <ServiceComp headind="App Dev" info="I develop mobile application. I create mobile app with eye catching ui." image={mobilepng}/>
              <ServiceComp headind="Web Dev" info="I also develop the websites. I create high performance website with blazing fast speed." image={webpng}/>
              <ServiceComp headind="App and Web Design" info="I do ui/ux design for the website and App that helps to get a unique look." image={figma}/>
            </div>
            </div>
        )
    }

// ===========================================================================================================================================================================



    return (
        <>
        <div id="home" className="home-main">
            <h4>Hi there 👋, this is</h4>
            <h1>Mahesh Chambhare</h1>
        {count ? 
        <Typist
        className="taxtTyping"
        startDelay={400}
        onTypingDone={() => setCount(0)}
        >
        <span> App Developer </span>
        <Typist.Backspace count={20} delay={300} />
        <span> Web Developer </span>
        <Typist.Backspace count={20} delay={300} />
        <span> Frontend Engineer </span>
        </Typist>
        : 
        (
            ""
        )
            }
                <ButtonStyle className="button-wrapper">
                <Link className="button" to="/projects">
                    See my Work
                </Link>
                </ButtonStyle>

{/* ==================================================================================== */}

 <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://github.com/Leo-mahesh"
                    target="_blank"
                    rel="noreferrer"
                  >GH
                  </a>
                </li>
                <li>
                  <a
                  style={{marginLeft:3}}
                    href="https://www.linkedin.com/in/maheshchambhare/"
                    target="_blank"
                    rel="noreferrer"
                  >LI
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
              <About id="about"/>
              <Services />
              <Footer />
              </>
    )
}
