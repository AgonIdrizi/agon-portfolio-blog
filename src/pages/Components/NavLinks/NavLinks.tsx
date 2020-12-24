import React, { useState, useCallback } from "react";
import BreakLine from "../UI/BreakLine/BreakLine";
import NavLink from "./NavLink";
import { getDimensions, scrollTo } from "../../../utils/helpers";
import { useScrollToVisible } from "../../../hooks/scrollToVisibleHook";

const NavLinks = ({
  headerRef,
  aboutDivRef,
  projectsDivRef,
  contanctDivRef,
}) => {
  const sectionRefs = [
    { section: "About", ref: aboutDivRef },
    { section: "Projects", ref: projectsDivRef },
    { section: "Contact", ref: contanctDivRef },
  ];
  const [visibleSection] = useScrollToVisible(headerRef, sectionRefs);

  return (
    <div className="navlinks flex">
      {sectionRefs.map(({ section, ref }) => (
        <div>
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
