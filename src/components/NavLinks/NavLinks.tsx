import React, { useState, useCallback } from "react";
import BreakLine from "../UI/BreakLine/BreakLine";
import NavLink from "./NavLink";
import { getDimensions, scrollTo } from "../../utils/helpers";
import { useScrollToVisible } from "../../hooks/scrollToVisibleHook";

const NavLinks = ({
  headerRef,
  homeDivRef,
  projectsDivRef,
  aboutDivRef,
}) => {
  const sectionRefs = [
    { section: "Home", ref: homeDivRef },
    { section: "Projects", ref: projectsDivRef },
    { section: "About", ref: aboutDivRef },
  ];
  const [visibleSection] = useScrollToVisible(headerRef, sectionRefs);
  
  return (
    <div className="navlinks flex">
      {sectionRefs.map(({ section, ref }) => (
        <div key={section}>
          <NavLink
            title={section}
            onNavLinkClick={() => scrollTo(ref.current)}
            contentInView={visibleSection}
          />
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
