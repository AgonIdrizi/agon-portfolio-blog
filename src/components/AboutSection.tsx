import React from 'react';

const AboutSection = () => {
  return (
    <>
      <h2 className="text-primary dark:text-gray-200 text-2xl mb-4 font-bold justify-center">About</h2>
      <div className="contacts-content text-sm md:text-base lg:text-base text-primary dark:text-gray-200">
        <p className="text-sm md:text-base lg:text-base text-gray-600 dark:text-gray-400">Hey, I'm Agon. I'm a developer. I create modern full-stack web applications with expertise in React/Typescript.</p>
        <p className="text-sm md:text-base mt-2 lg:text-base text-gray-600 dark:text-gray-400">I have an innate desire to create - websites, programs, pictures, music - you name it. My passion lies in the intersection of creation and communication. I want to create tools to help humans solve problems faster!</p>
        <p className="text-sm md:text-base mt-2 lg:text-base text-gray-600 dark:text-gray-400">For contact reach me through: agonidrizi88@gmail.com</p>
      </div>
    </>
  );
}

export default AboutSection;
