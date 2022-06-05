import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { ReactElement, ReactNode, useEffect } from 'react'
import GoogleAnalytics from '@/utils/GoogleAnalytics'
import router from 'next/router'
import { pageview } from '@/lib/gtag'

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout = Component.getLayout ?? ((page) => page)
    
    useEffect(() => {
        const handleRouteChange = (path: string) => {
          pageview(path)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
    
        return () => {
          router.events.off('routeChangeComplete', handleRouteChange)
        }
      }, [router.events])

    return getLayout(
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
                />
                <title>SwiftUI Components</title>
            </Head>
            <GoogleAnalytics />
            <Component {...pageProps} className={'bg-gray-50'} />
        </>
    )
}

export default App
