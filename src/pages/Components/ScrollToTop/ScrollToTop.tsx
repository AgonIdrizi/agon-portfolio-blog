import React from 'react';
import SvgArrowUpIcon from './SvgArrowUpIcon';
import { scrollTo } from '../../../utils/helpers';

const scrollToTopClassNames = 'w-12 h-12 rounded-full bottom-0 right-0 fixed mr-5 mb-10'

const ScrollToTop = () => {
  const [isTopOfPage, setIsTopOfPage] = React.useState(true);

  React.useEffect(() => {
    function handleScrollPos() {
      if (window.scrollY < 1) {
        setIsTopOfPage(true)
      } else {
        setIsTopOfPage(false)
      }
    }
    window.addEventListener('scroll', handleScrollPos)
    return () => window.removeEventListener('scroll', handleScrollPos)
  },[isTopOfPage])

  return !isTopOfPage 
    ? (<div onClick={() => window.scrollTo({top:0, behavior: 'smooth'})} className={scrollToTopClassNames}>
      <SvgArrowUpIcon />
    </div>) 
    : null
  
    
}

export default ScrollToTop;
