import React, { useState, useEffect } from "react";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const NavLinks = ({aboutDivRef, projectsDivRef, contanctDivRef}) => {
  const [contentToScroll, setContentToScroll] = useState('about');
  const [contentInView, setContentInView] = useState('about')
  useEffect(() => {
    console.log('useEffect runs', contentToScroll)
  
    const ref = contentToScroll === 'about' ? aboutDivRef : (contentToScroll === 'projects' ? projectsDivRef : contanctDivRef)
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    })
  }, [contentToScroll]);


  useScrollPosition(({ prevPos, currPos }) => {

    if(Math.abs(currPos.y)  <= aboutDivRef.current.offsetTop && Math.abs(currPos.y)  < projectsDivRef.current.offsetTop) {
     if(contentInView !== 'about') {
      setContentInView('about')
     
     }
    } 

    if(Math.abs(currPos.y) >= projectsDivRef.current.offsetTop && Math.abs(currPos.y) < contanctDivRef.current.offsetTop) {
      if (contentInView !== 'projects') {
        setContentInView('projects')
      }
    }
    if(Math.abs(currPos.y) >= contanctDivRef.current.offsetTop ) {
      if (contentInView !== 'contact') {
        setContentInView('contact')
      }
    }
  })


  const onNavLinkClick = (e, value) => {
    e.preventDefault();
    setContentToScroll(value);
    setContentInView(value)
  };

  return (
    <div className="navlinks">
      <a
        onClick={(e) => onNavLinkClick(e, "about")}
        className={`font-medium ${contentInView === 'about' ? 'text-primary' : 'text-secondary'} hover:text-red-300 m-2   cursor-pointer`}
      >
        About
      </a>
      <a
        onClick={(e) => onNavLinkClick(e, "projects")}
        className={`font-medium ${contentInView === 'projects' ? 'text-primary' : 'text-secondary'} m-2 hover:text-red-300 cursor-pointer`}
      >
        Projects
      </a>
      <a
        onClick={(e) => onNavLinkClick(e, "contact")}
        className={`font-medium ${contentInView === 'contact' ? 'text-primary' : 'text-secondary'} m-2 hover:text-red-300 cursor-pointer`}
      >
        Contact
      </a>
    </div>
  );
};

export default NavLinks;
