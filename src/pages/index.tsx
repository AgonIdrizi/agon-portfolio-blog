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


  return (
    <div className={`${theme} bg-primary  home-container`}>
      <div className="navbar top-0 absolute w-full flex justify-around">
        <NavLinks aboutDivRef={aboutDivRef} projectsDivRef={projectsDivRef} contanctDivRef={contanctDivRef} />
        <Toggle setTheme={setTheme} />
      </div>
      <div className="content flex-col justify-center">
        <section ref={aboutDivRef} className="about-section flex flex-col mx-5 my-20 justify-center place-items-start">
          <h2 className="text-primary font-bold text-2xl my-2 justify-start">Ktu Logoja</h2>
          <div className="text-primary sm:max-w-2xl">
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
        <section ref={projectsDivRef} className="projects-section flex flex-col w-500 mx-5 my-16 justify-center place-items-start">
          <h2 className="text-primary text-2xl font-bold justify-center">Projects</h2>
          <div className="projects-content">
            <div className="project-card h-32 w-64 my-10 border-gray-200 shadow-md">
              sdfdf
            </div>
            <div className="project-card h-32 w-64 my-10 border-gray-200 shadow-md">
              sdfdf
            </div>
            <div className="project-card h-32 w-64 my-10 border-gray-200 shadow-md">
              sdfdf
            </div>
            <div className="project-card h-32 w-64 my-10 border-gray-200 shadow-md">
              sdfdf
            </div>
          </div>
        </section>
        <section ref={contanctDivRef} className="projects-section flex flex-col w-500  mx-5 my-16 justify-center place-items-start">
          <h2 className="text-primary text-2xl font-bold justify-center">Contact</h2>
          <div className="contacts-content">
            Reach me through my email: agon@agon.com
          </div>
        </section>
      </div>
    </div>
  );
}
