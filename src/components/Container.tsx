import React, {useState, useRef} from "react";
import { useRouter } from 'next/router';

import Head from "next/head";
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

import Header from "./Header";
import Footer from "./Footer";

const Container = (props) => {
  const router = useRouter();
  
  const { children, refs, ...customMeta } = props;
  const meta = {
    title: "Agon Idrizi | Personal Portfolio",
    description: `Front-end developer, Javascript enthusiast, blog writer.`,
    image: "",
    type: "website",
    ...customMeta,
  };

  return (
    <div className={` bg-white dark:bg-secondary  home-container`}>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://agon.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Lee Robinson" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Header refs={refs}  />
      <main className="flex flex-col justify-center px-8"> 
      {children}
      <Footer />
      </main>
      
      <ScrollToTop />
    </div>
  );
};

export default Container;
