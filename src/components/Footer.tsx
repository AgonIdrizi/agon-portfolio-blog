import Link from 'next/link';
import React from 'react';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-sm md:text-base lg:text-base text-gray-500 hover:text-gray-600 dark:text-gray-200 dark:hover:text-white transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200  mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
          <a className="text-sm md:text-base lg:text-base text-gray-500 hover:text-gray-600 dark:text-gray-100 dark:hover:text-white transition">Home</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/AgonIdrizi" >GitHub</ExternalLink>
        </div>
      </div>
      <div className="flex justify-center">
        <span className="text-gray-400 text-sm mx-auto">© Copyright 2021 Agon Idrizi</span>
      </div>
    </footer>
  );
}

export default Footer;
