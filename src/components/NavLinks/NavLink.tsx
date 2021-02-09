import React from "react";
import Link from 'next/link';

export const NextLink = ({title, href}) => (
  <Link href={href}>
    <a className={`font-medium text-secondary m-2 hover:text-red-400 cursor-pointer`}>
      {title}
    </a>
  </Link>
)

const NavLink = ({ contentInView, title, onNavLinkClick }) => {
  return (
    <a
      onClick={() => onNavLinkClick()}
      className={`font-medium ${
        contentInView === title ? "text-red-300" : "text-secondary"
      } m-2 hover:text-red-400 cursor-pointer`}
    >
      {title}
    </a>
  );
};

export default NavLink;
