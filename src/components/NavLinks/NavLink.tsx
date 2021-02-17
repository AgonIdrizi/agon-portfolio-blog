import React from "react";
import Link from 'next/link';

export const NextLink = ({title, href}) => (
  <Link href={href}>
    <a className={`font-medium text-secondary dark:text-gray-200 m-2 hover:text-red-400 cursor-pointer`}>
      {title}
    </a>
  </Link>
)


const NavLink = ({ contentInView, title, onNavLinkClick }) => {
  const navLinkClickHandler = (e) => {
    e.preventDefault()
    onNavLinkClick()
  }
  return (
    <a
      onClick={(e) => navLinkClickHandler(e)}
      className={`font-medium ${
        contentInView === title ? "text-red-300" : "text-secondary dark:text-gray-200"
      } m-2 md:hover:text-red-400 lg:hover:text-red-400 disable-select cursor-pointer`}
    >
      {title}
    </a>
  );
};

export default NavLink;
