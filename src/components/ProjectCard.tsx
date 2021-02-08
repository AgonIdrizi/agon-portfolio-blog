import Link from 'next/link';
import React from 'react';

const ProjectCard = ({title, description, href, icon}) => {
  return (
    <Link href={href} passHref>
      <a >
    <div className="flex items-center border border-gray-200 dark:border-red-100 rounded mb-4 p-4">
        <div>{icon}</div>
        <div>
          <h4 className="text-lg font-bold tracking-tight text-primary dark:text-gray-100">{title}</h4>
          <p className="leading-5 text-sm md:text-base lg:text-base text-gray-700 dark:text-gray-300">{description}</p>
        </div>
    </div>
    </a>
    </Link>
  );
}

export default ProjectCard;
