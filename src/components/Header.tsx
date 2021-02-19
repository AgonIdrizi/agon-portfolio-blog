import React, {useRef, useEffect} from 'react';
import { useRouter } from 'next/router';
import NavLinks from './NavLinks/NavLinks';
import Toggle from './UI/Toggle/Toggle'
import NavLink, {NextLink} from "./NavLinks/NavLink";


const Header = ({refs}) => {
  const router = useRouter();
  const headerRef = useRef(null)

  const isHomePage = router.pathname === "/";

  useEffect(() => {
    var windowWidth = window.screen.width < window.outerWidth ?
                  window.screen.width : window.outerWidth;
    var isMobile = windowWidth < 770;

    var prevScrollpos = window.pageYOffset;
    const handleVisibleHeaderScroll = () => {
      
      const currentScrollPos = window.pageYOffset;

      const navbar: HTMLElement = document.querySelector('.navbar')
      
      if(prevScrollpos > currentScrollPos) {
        navbar.style.top = "0"
       
      } else {
        navbar.style.top = "-72px"
       
      }

      prevScrollpos = currentScrollPos

    }
    if(!isHomePage && isMobile) {
      handleVisibleHeaderScroll();
      window.addEventListener('scroll', handleVisibleHeaderScroll)
    }
    
    return () => {
      if(!isHomePage && isMobile) {
        window.removeEventListener('scroll', handleVisibleHeaderScroll)
      }
    }
  },[])

  return (
    <div ref={headerRef} className={`navbar navbar-effect  top-0  max-w-4xl p-4 md:p-8 my-0 md:my-8 mx-auto  w-full flex items-center justify-between`}>
       {refs && isHomePage && <NavLinks headerRef={headerRef} homeDivRef={refs.homeDivRef} projectsDivRef={refs.projectsDivRef} aboutDivRef={refs.aboutDivRef} /> }
       {!isHomePage && <NextLink href="/" title="Home" />}
        <Toggle />
      </div>
  );
}

export default Header;
