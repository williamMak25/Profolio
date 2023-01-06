
import React, { useEffect } from "react";
import './aboutme.css';
import Aos from "aos";
import 'aos/dist/aos.css'


 const AboutMe = () => {
   /* const divRef = useRef(null);
   import gsap from "gsap";
   import ScrollTrigger from "gsap/ScrollTrigger";
   gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{
        const el = divRef.current;
        gsap.fromTo(el, {rotation:0
        }, {rotation:360,duration:2 ,scrollTrigger:{trigger:el}})
    },[]) ==>insid div ->ref={divRef}<-*/
    useEffect(()=>{
        Aos.init({duration:3000,anchorPlacement:"top-bottom "});
    },[])
    return(
        <div className="wap">
        <div className="aboutme__container" >
        <div className="aboutMe" data-aos="fade-up">
            <h1>About Me</h1>
            <p><span id="spn1">Hey....</span> ,I'm <span id="spn2">React Developer</span> who like the challenges and to make new things.
               I'm not only the Developer but also the <span id="spn3">active</span>,<span id="spn4">flexible</span>,<span id="spn5">good communicator</span> in team and <span id="spn6">Professionalism</span>.
            </p>
        </div>
            <div className="devePhoto" data-aos="fade-up">
                <img alt="developer" src="https://i.ibb.co/MsTyL8G/Pngtree-children-s-software-programming-5401259.png" width="400px" height="420px"></img>
            </div>
        </div>
      </div>
    )
}
export default AboutMe;