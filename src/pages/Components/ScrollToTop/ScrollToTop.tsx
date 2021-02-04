import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import SvgArrowUpIcon from "./SvgArrowUpIcon";
import { scrollTo } from "../../../utils/helpers";

const divVariant = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {delay: 2}
  },
};

const scrollToTopClassNames =
  "w-12 h-12 rounded-full bottom-0 right-0 fixed mr-5 mb-10";

const ScrollToTop = () => {
  const [isTopOfPage, setIsTopOfPage] = React.useState(true);

  React.useEffect(() => {
    function handleScrollPos() {
      if (window.scrollY < 1) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener("scroll", handleScrollPos);
    return () => window.removeEventListener("scroll", handleScrollPos);
  }, [isTopOfPage]);

  return !isTopOfPage ? (
    <AnimatePresence exitBeforeEnter >
      <motion.div
        key="scrollTop"
        variants={divVariant}
        initial="hidden"
        animate="animate"
        exit={{ opacity: 0}}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={scrollToTopClassNames}
      >
        <SvgArrowUpIcon />
      </motion.div>
    </AnimatePresence>
  ) : null;
};

export default ScrollToTop;
