import React, { useState, useEffect } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import BreakLine from '../UI/BreakLine/BreakLine';
import NavLink from './NavLink';

const NavLinks = ({ aboutDivRef, projectsDivRef, contanctDivRef }) => {
  const [contentToScroll, setContentToScroll] = useState("about");
  const [contentInView, setContentInView] = useState("about");
  useEffect(() => {
    console.log("useEffect runs", contentToScroll);

    const ref =
      contentToScroll === "about"
        ? aboutDivRef
        : contentToScroll === "projects"
        ? projectsDivRef
        : contanctDivRef;
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  }, [contentToScroll]);

  useScrollPosition(({ prevPos, currPos }) => {
    if (
      Math.abs(currPos.y) <= aboutDivRef.current.offsetTop &&
      Math.abs(currPos.y) < projectsDivRef.current.offsetTop
    ) {
      if (contentInView !== "about") {
        setContentInView("about");
      }
    }

    if (
      Math.abs(currPos.y) >= projectsDivRef.current.offsetTop &&
      Math.abs(currPos.y) < contanctDivRef.current.offsetTop
    ) {
      if (contentInView !== "projects") {
        setContentInView("projects");
      }
    }
    if (Math.abs(currPos.y) >= contanctDivRef.current.offsetTop) {
      if (contentInView !== "contact") {
        setContentInView("contact");
      }
    }
  });

  const onNavLinkClick = (e, value) => {
    e.preventDefault();
    setContentToScroll(value);
    setContentInView(value);
  };

  return (
    <div className="navlinks flex">
      <div>
      <NavLink title="About" onNavLinkClick={onNavLinkClick} contentInView={contentInView} />
        {contentInView === 'about' && <BreakLine /> }
        
      </div>
      <div>
        <NavLink title="Projects" onNavLinkClick={onNavLinkClick} contentInView={contentInView} />
        {contentInView === 'projects' && <BreakLine /> }
        
      </div>
      <div>
      <NavLink title="Contact" onNavLinkClick={onNavLinkClick} contentInView={contentInView} />
        {contentInView === 'contact' && <BreakLine />  }
        
      </div>
    </div>
  );
};

export default NavLinks;
