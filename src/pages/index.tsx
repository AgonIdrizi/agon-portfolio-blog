import Head from "next/head";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Toggle from "./Components/UI/Toggle/Toggle";
import NavLinks from './Components/NavLinks/NavLinks'
import { withRouter } from "next/dist/client/router";


export default function Home() {
  const [theme, setTheme] = useState("light");
  
  const headerRef = useRef(null)
  const aboutDivRef = useRef(null);
  const projectsDivRef = useRef(null);
  const contanctDivRef = useRef(null);


  return (
    <div className={`${theme} bg-primary  home-container`}>
      <div ref={headerRef} className="navbar top-0 fixed w-full flex justify-around">
        <NavLinks headerRef={headerRef} aboutDivRef={aboutDivRef} projectsDivRef={projectsDivRef} contanctDivRef={contanctDivRef} />
        <Toggle setTheme={setTheme} />
      </div>
      <div className="content flex-col pt-5  justify-center">
        <section ref={aboutDivRef} className="about-section flex flex-col mx-5 my-20 pt-4 sm:pt-8 justify-center place-items-start">
          <h2 className="text-primary font-bold text-2xl my-2 justify-start">Ktu Logoja</h2>
          <div className="text-primary sm:max-w-2xl">
            <p className=" break-all">
              aasdas  dasdasdaasds dfsdfsdf  sdfsdfsdfsdfsdfsdfs dfsdfs dfsdfsdfsdfdsf
            </p>
            <p className="break-all">
              aasdasdasd asdaasd sdfsdf  sdfsdfsdfsdfsdf sdfsdfsdfsd fsdfsdfsdfsdfds fsdfsdxvdsf gwess
            </p>
            <p className="break-all">
              aasdasdasd asdaasdsdfsdfsd fsdfsdfs dfsdfsd fsdfsdfsdfsdfsd fsdfsd fdsfs dfsdxvdsfgwess
            </p>
            <p className="break-all">
              aasdasda sdasdaas dsd fsdfsdfsdf sdfsdfsdfsdfsd fsdfsdfsdfsd sdfsdfdsfs dfsdxvdsfg wess
            </p>
          </div>
        </section>
        <section ref={projectsDivRef} className="projects-section flex flex-col w-500 mx-5 my-16 pt-4 sm:pt-8  justify-center place-items-start">
          <h2 className="text-primary text-2xl font-bold justify-center">Projects</h2>
          <div className="projects-content ">
            <div className={`project-card h-32 w-64 my-10 ${theme === 'dark' ? 'bg-gray-100': ''} rounded-md  border-gray-200 shadow-md`}>
              sdfdf
            </div>
            <div className={`project-card h-32 w-64 my-10 ${theme === 'dark' ? 'bg-gray-100': ''} rounded-md  border-gray-200 shadow-md`}>
              sdfdf
            </div>
            <div className={`project-card h-32 w-64 my-10 ${theme === 'dark' ? 'bg-gray-100': ''} rounded-md  border-gray-200 shadow-md`}>
              sdfdf
            </div>
            <div className={`project-card h-32 w-64 my-10 ${theme === 'dark' ? 'bg-gray-100': ''} rounded-md  border-gray-200 shadow-md`}>
              sdfdf
            </div>
          </div>
        </section>
        <section ref={contanctDivRef} className="projects-section flex flex-col w-500  mx-5 mt-16 pt-4 sm:pt-8  justify-center place-items-start">
          <h2 className="text-primary text-2xl font-bold justify-center">Contact</h2>
          <div className="contacts-content text-primary">
            Reach me through my email: agon@agon.com
          </div>
        </section>
      </div>
    </div>
  );
}
