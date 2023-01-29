import React, { useEffect } from "react";
import './home.css'
import Aos from "aos";
import 'aos/dist/aos.css'
import AboutMe from "../aboutme/aboutme";
import Skill from "../skill/skill";
const HomePage = () => {
    useEffect(()=>{
        Aos.init({duration:3000,anchorPlacement:"top-bottom"})
    },[])
    return(
        <>
        <div className="homePage" data-aos="fade-up">
            <div className="personal__content">
                <p>Hello,My name is <span>Wai Yan Win Lwin</span></p>
                <h1>I'm Reactjs Developer</h1>
                <p>"Let's Try Something New Together"</p>
            </div>
        </div>
        <AboutMe/>
        <Skill/>
        </>
    )
}

export default HomePage;