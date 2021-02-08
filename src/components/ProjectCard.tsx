import Link from 'next/link';
import React from 'react';

const ProjectCard = ({title, description, slug, icon}) => {
  return (
    <Link href={`/projects/${slug}`} >
      <a className="w-full">
        <div className="flex items-center border border-gray-200 dark:border-red-100 rounded mb-4 p-4">
          <div>{icon}</div>
          <div>
            <h4 className="text-lg font-bold tracking-tight text-primary hover:text-red-200 dark:text-gray-100">{title}</h4>
            <p className="leading-5 text-sm md:text-base lg:text-base text-gray-700 dark:text-gray-300">{description}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ProjectCard;
