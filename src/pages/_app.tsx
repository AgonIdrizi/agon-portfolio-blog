import '../styles/global.css'

import { AppProps } from 'next/app'
import {MDXProvider} from '@mdx-js/react'
import { ThemeProvider } from 'next-themes';
import MDXComponents from '../components/MDXComponents';
import { usePanelbear} from '../lib/analytics';






function MyApp({ Component, pageProps }: AppProps) {
  usePanelbear(process.env.NEXT_PUBLIC_FATHOM_SITE_ID)
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp