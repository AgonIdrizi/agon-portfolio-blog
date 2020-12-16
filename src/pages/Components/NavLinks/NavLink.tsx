import React from "react";

const NavLink = ({ contentInView, title, onNavLinkClick }) => {
  const lowerCaseTitle = title.toLowerCase()
  return (
    <a
      onClick={() => onNavLinkClick()}
      className={`font-medium ${
        contentInView === title ? "text-primary" : "text-secondary"
      } m-2 hover:text-red-300 cursor-pointer`}
    >
      {title}
    </a>
  );
};

export default NavLink;
