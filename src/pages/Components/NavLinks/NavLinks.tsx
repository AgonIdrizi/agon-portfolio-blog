import React, { useState, useEffect } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import BreakLine from "../UI/BreakLine/BreakLine";
import NavLink from "./NavLink";
import { getDimensions, scrollTo } from '../../../utils/helpers';


const NavLinks = ({ headerRef, aboutDivRef, projectsDivRef, contanctDivRef }) => {
  const [visibleSection, setVisibleSection] = useState();
  const [contentInView, setContentInView] = useState("about");
  const sectionRefs = [
    { section: "About", ref: aboutDivRef },
    { section: "Projects", ref: projectsDivRef },
    { section: "Contact", ref: contanctDivRef }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected: any = sectionRefs.find(({section, ref}) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined)
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [visibleSection])


  return (
    <div className="navlinks flex">
      <div>
        <NavLink
          title="About"
          onNavLinkClick={() => scrollTo(aboutDivRef.current)}
          contentInView={visibleSection}
        />
        {visibleSection === "About" && <BreakLine />}
      </div>
      <div>
        <NavLink
          title="Projects"
          onNavLinkClick={() => scrollTo(projectsDivRef.current)}
          contentInView={visibleSection}
        />
        {visibleSection === "Projects" && <BreakLine />}
      </div>
      <div>
        <NavLink
          title="Contact"
          onNavLinkClick={() => scrollTo(contanctDivRef.current)}
          contentInView={visibleSection}
        />
        {visibleSection === "Contact" && <BreakLine />}
      </div>
    </div>
  );
};

export default NavLinks;
