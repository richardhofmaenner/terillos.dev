import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head  from "next/head";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const canonical = useRouter().asPath

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="canonical" content={canonical} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
