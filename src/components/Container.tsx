import React, {useState} from "react";
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Head from "next/head";
import NavLinks from './NavLinks/NavLinks';
import Toggle from './UI/Toggle/Toggle'

const Container = (props) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { children, refs, ...customMeta } = props;
  const meta = {
    title: "Agon Idrizi - Developer, writer",
    description: `Front-end developer, Javascript enthusiast, blog writer.`,
    image: "",
    type: "website",
    ...customMeta,
  };

  return (
    <div className={` bg-primary dark:bg-secondary  home-container`}>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://leerob.io${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Lee Robinson" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@leeerob" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div ref={refs.headerRef} className={`navbar navbar-effect top-0  max-w-4xl p-8 my-0 md:my-8 mx-auto bg-opacity-60 w-full flex items-center justify-between`}>
        <NavLinks headerRef={refs.headerRef} aboutDivRef={refs.aboutDivRef} projectsDivRef={refs.projectsDivRef} contanctDivRef={refs.contanctDivRef} />
        <Toggle setTheme={setTheme} />
      </div>
      <main className="flex flex-col justify-center px-8"> 
      {children}
      </main>
     
    </div>
  );
};

export default Container;
