import Head from "next/head";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Toggle from "./Components/UI/Toggle/Toggle";
import NavLinks from './Components/NavLinks/NavLinks'
import { withRouter } from "next/dist/client/router";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Container from "./Components/Container";


export default function Home() {
  
  
  const headerRef = useRef(null)
  const aboutDivRef = useRef(null);
  const projectsDivRef = useRef(null);
  const contanctDivRef = useRef(null);


  return (
    <Container refs={{headerRef, aboutDivRef, projectsDivRef, contanctDivRef}}>
      
      <div className="flex flex-col items-start max-w-2xl mx-auto mb-16  justify-center">
        <section ref={aboutDivRef} className="about-section flex flex-col mx-5  justify-center place-items-start">
          <h2 className="text-primary font-bold text-3xl md:text-5xl my-2 justify-start">Hi, I'm Agon Idrizi</h2>
          <div className="text-primary sm:max-w-2xl">
            <h2 className="text-gray-600 dark:text-gray-200  break-all">
              I'm a developer, tech entusiast, writer. My passion is building web applications from ground to mature products. There is more info in about section!
            </h2>
          </div>
        </section>
        <section ref={projectsDivRef} className="projects-section flex flex-col w-500 mx-5 my-16 pt-4 sm:pt-8  justify-center place-items-start">
          <h2 className="text-primary text-2xl md:text-4xl font-bold justify-center">Projects</h2>
          <div className="projects-content ">
            <div className={`project-card text-primary h-32 w-64 my-10 dark:text-gray-200 rounded-md  border-gray-200 shadow-md`}>
              sdfdf
            </div>
            <div className={`project-card text-primary h-32 w-64 my-10 dark:text-gray-200 rounded-md  rounded-md  border-gray-200 shadow-md`}>
              sdfdf
            </div>
            <div className={`project-card text-primary h-32 w-64 my-10 dark:text-gray-200 rounded-md rounded-md  border-gray-200 shadow-md`}>
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
        <ScrollToTop />
    </Container>
  );
}
