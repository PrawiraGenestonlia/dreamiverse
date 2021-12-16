import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { MoralisProvider } from 'react-moralis'
import { useMoralis } from "react-moralis"
import LoginScreen from './login'
import { useRouter } from 'next/router'

function MoralisApp({ Component, pageProps }) {
  const { isAuthenticated } = useMoralis()
  const router = useRouter()

  if (!isAuthenticated) return <LoginScreen />
  if (Component.displayName === 'LoginScreen') router.push('/')
  return (
    <Component {...pageProps} />
  )
}

function CustomApp({ Component, pageProps }: AppProps) {
  const appID = process.env.NEXT_PUBLIC_MORALIS_APP_ID;
  const serverUrl = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL;
  return (
    <>
      <Head>
        <title>Welcome to dreamiverse-ui!</title>
      </Head>
      <main className="app">
        <MoralisProvider appId={appID} serverUrl={serverUrl}>
          <MoralisApp pageProps={pageProps} Component={Component} />
        </MoralisProvider>
      </main>
    </>
  );
}

export default CustomApp;
