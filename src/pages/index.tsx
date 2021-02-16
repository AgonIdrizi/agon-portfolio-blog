import { useRef} from "react";

import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import BlogPost from "../components/BlogPost";


export default function Home() {
  
  const homeDivRef = useRef(null);
  const projectsDivRef = useRef(null);
  const aboutDivRef = useRef(null);

  return (
    <Container refs={{ homeDivRef, projectsDivRef, aboutDivRef}}>
      <div className="flex flex-col items-start max-w-2xl mx-auto mb-16  justify-center">
        <section ref={homeDivRef} className="about-section flex flex-col mx-5  justify-center place-items-start">
          <h2 className="text-primary dark:text-gray-200 font-bold text-3xl md:text-5xl my-2 justify-start">Hi, I'm Agon!</h2>
          <div className="text-primary  sm:max-w-2xl">
            <h2 className="text-gray-600 leading-6 text-sm md:text-base lg:text-lg  dark:text-gray-200 ">
            I'm a full-stack web developer with a focus on React and Typescript. Sometimes I write blogs and capture the beauty of the world with my fuji camera!
            </h2>
          </div>
        </section>
        <section ref={projectsDivRef} className="projects-section flex flex-col w-500 mx-5 my-16 pt-4 sm:pt-8  justify-center place-items-start">
          <h2 className="text-primary dark:text-gray-200 text-2xl md:text-4xl mb-6 font-bold justify-center">Projects</h2>
          <div className="projects-content ">
            <ProjectCard 
              title="St Logic" 
              description="Tutoring management system that prepares students for standardized tests and national exams" 
              slug="st-logic" 
              icon="" />
            <ProjectCard title="My Dinner" description="My dinner is a web application for order/delivery of food" slug="my-dinner" icon="" />
            <ProjectCard title="Agon.dev" description="My personal portfolio built with Next.js" slug="agon-portfolio" icon="" />
          </div>
        </section>
        <section className="projects-section flex flex-col w-500 mx-5  pt-4 sm:pt-8  justify-center place-items-start">
          <h2 className="text-primary dark:text-gray-200 text-2xl md:text-4xl mb-6 font-bold justify-center">Blogs</h2>
          <BlogPost 
            title="The most important thing about Context Api"
            summary="In this blog post, I'm describing how default re-rendering of context-API works, and how we can optimize re-renders of child components!" 
            slug="context-api-rerendering"
          />
        </section >
        <section ref={aboutDivRef} className="projects-section flex flex-col w-500  mx-5 mt-16 pt-4 sm:pt-8  justify-center place-items-start">
          <h2 className="text-primary dark:text-gray-200 text-2xl font-bold justify-center">About</h2>
          <div className="contacts-content text-sm md:text-base lg:text-base text-primary dark:text-gray-200">
            Reach me through my email: agon@agon.com
          </div>
        </section>
      </div>
    </Container>
  );
}
