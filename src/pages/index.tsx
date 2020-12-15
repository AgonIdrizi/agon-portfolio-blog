import Head from "next/head";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Toggle from "./Components/UI/Toggle/Toggle";
import NavLinks from './Components/NavLinks/NavLinks'
import { withRouter } from "next/dist/client/router";


export default function Home() {
  const [theme, setTheme] = useState("light");
 
  const aboutDivRef = useRef(null);
  const projectsDivRef = useRef(null);
  const contanctDivRef = useRef(null);

 

  // useScrollPosition(({ prevPos, currPos }, contentValue) => {
  //   if(Math.abs(currPos.y)  <= aboutDivRef.current.offsetTop && Math.abs(currPos.y)  < projectsDivRef.current.offsetTop) {
  //    if(contentValue !== 'about') {
  //     setContentValue('about')
     
  //    }
  //    console.log('about')
  //     console.log('projectsDivRef.current.offsetTop', projectsDivRef.current.offsetTop)
  //     console.log(' contanctDivRef.current.offsetTop', contanctDivRef.current.offsetTop)
  //     console.log('currPos.y >= projectsDivRef.current.offsetTop', currPos.y >= projectsDivRef.current.offsetTop)
  //   }
    
  //   if(Math.abs(currPos.y) >= projectsDivRef.current.offsetTop && Math.abs(currPos.y) < contanctDivRef.current.offsetTop) {
  //     //if (contentValue !== 'projects') {
  //       setContentValue('projects')
       
  //     //}
  //     console.log('projects')
  //   }
  //   console.log(currPos.x)
  //   console.log(currPos.y)
  // })

 

  return (
    <div className={`${theme} bg-primary  home-container`}>
      <div className="navbar flex justify-around">
        <NavLinks aboutDivRef={aboutDivRef} projectsDivRef={projectsDivRef} contanctDivRef={contanctDivRef} />
        <Toggle setTheme={setTheme} />
      </div>
      <div className="content flex-col justify-center">
        <section ref={aboutDivRef} className="about-section flex flex-col my-20 justify-center items-center">
          <h2 className="text-primary font-bold text-2xl my-2 justify-center">Ktu Logoja</h2>
          <div className="text-primary">
            <p className=" break-all">
              aasdasdasdasdaasdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfdsf
            </p>
            <p className="break-all">
              aasdasdasdasdaasdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfdsfsdfsdxvdsfgwess
            </p>
            <p className="break-all">
              aasdasdasdasdaasdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfdsfsdfsdxvdsfgwess
            </p>
            <p className="break-all">
              aasdasdasdasdaasdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfdsfsdfsdxvdsfgwess
            </p>
          </div>
        </section>
        <section ref={projectsDivRef} className="projects-section flex flex-col w-500 m-16 justify-center items-center">
          <h2 className="text-primary text-2xl font-bold justify-center">Projects</h2>
          <div className="projects-content">
            <div className="project-card h-32 w-64 my-10 border-gray-200 shadow-md">
              sdfdf
            </div>
            <div className="project-card h-32 w-64 border-gray-200 shadow-md">
              sdfdf
            </div>
            <div className="project-card h-32 w-64 border-gray-200 shadow-md">
              sdfdf
            </div>
            <div className="project-card h-32 w-64 border-gray-200 shadow-md">
              sdfdf
            </div>
          </div>
        </section>
        <section ref={contanctDivRef} className="projects-section flex flex-col w-500 m-16 justify-center items-center">
          <h2 className="text-primary text-2xl font-bold justify-center">Contact</h2>
          <div className="contacts-content">
            Reach me through my email: agon@agon.com
          </div>
        </section>
      </div>
    </div>
  );
}
