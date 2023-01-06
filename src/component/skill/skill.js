import React, { useEffect } from "react";
import './skill.css';
import Aos from "aos";
import 'aos/dist/aos.css'

const Skill = () => {
      useEffect(()=>{
            Aos.init({duration:3000,anchorPlacement:"top-bottom"});
        },[])
  
    return(
      <>
      < div className="warp">
            <div className="contentContainer"  data-aos="fade-up">
                  <h1>My Skills</h1>
            </div>
       <div className="skill__container"  data-aos="fade-up">
          <div id="skillone" className="box">

                <img alt="html" src="https://i.ibb.co/42PfDGD/5847f5bdcef1014c0b5e489c.png"></img>
          </div>
          <div id="skillTwo" className="box">

                <img alt="css"src="https://i.ibb.co/pJLbjnT/62b221ef038aad4d3ed7ca2e.png"></img>
          </div>
          <div id="skillThree" className="box">

                <img alt="bootstrap" src="https://i.ibb.co/WvpV0x4/62a76468bd73a4af5c5d4fb7.png"></img>
          </div>
          <div id="skillFour" className="box">

                <img alt="javascript" src="https://i.ibb.co/2nW00LR/613b64fe30e8530004ba3a03.png"></img>
          </div>
          <div id="skillFive" className="box">

                <img alt="react" src="https://i.ibb.co/GnkhpZj/62a74dd1223343fbc2207d00.png"></img>
          </div>
          <div id="skillSix" className="box">

                <img alt="node"src="https://i.ibb.co/L8pgGmT/pngwing-com.png"></img>
          </div>
          <div id="skillSeven" className="box">

                <img alt="tailwind"src="https://i.ibb.co/306XsMc/tailwind-css-icon.png"></img>
          </div>
        </div> 
        </div>
      </>
    )
}
export default Skill;